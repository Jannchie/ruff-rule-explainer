import type { RuffRule } from './rules'
import { rules } from './rules'

export interface ResolvedSelector {
  /** Text shown as the inline decoration */
  label: string
  /** Markdown shown on hover */
  detail: string
  /** Set only when the selector is a complete rule code */
  rule?: RuffRule
}

/** A rule code is an alphabetic linter part followed by a numeric part, e.g. PLR0904 */
const CODE_PATTERN = /^([A-Z]+)(\d*)$/

/** How many rules to list in a prefix selector's hover before truncating */
const HOVER_RULE_LIMIT = 25

const rulesByCode = new Map(rules.map(rule => [rule.code, rule]))

export function kebabToTitleCase(str: string): string {
  return str
    .replaceAll('-', ' ')
    .toLowerCase()
    .replaceAll(/\b\w/g, char => char.toUpperCase())
}

function splitCode(code: string): { alpha: string, digits: string } | undefined {
  const match = CODE_PATTERN.exec(code)
  return match ? { alpha: match[1], digits: match[2] } : undefined
}

function ruleListMarkdown(matches: RuffRule[]): string {
  const shown = matches.slice(0, HOVER_RULE_LIMIT)
  const lines = shown.map(rule => `- \`${rule.code}\` ${rule.name}`)
  if (matches.length > shown.length) {
    lines.push(`- …and ${matches.length - shown.length} more`)
  }
  return lines.join('\n')
}

/**
 * Resolve a Ruff rule selector as written in a config array.
 *
 * Ruff accepts complete codes (`E501`), linter prefixes (`E`, `PL`) and partial
 * codes (`E4`, `PLR09`), so a plain `startsWith` is wrong in both directions: it
 * misses `E4`, and it makes `E` swallow unrelated linters like `ERA` and `EXE`.
 * The alphabetic part is therefore compared exactly and only the numeric part is
 * treated as a prefix.
 */
export function resolveSelector(selector: string): ResolvedSelector | undefined {
  const exact = rulesByCode.get(selector)
  if (exact) {
    return { label: kebabToTitleCase(exact.name), detail: exact.explanation, rule: exact }
  }

  if (selector === 'ALL') {
    return { label: 'All Rules', detail: `\`ALL\` — every rule Ruff implements (${rules.length} known here).` }
  }

  const parts = splitCode(selector)
  if (!parts) {
    return undefined
  }

  let matches = rules.filter((rule) => {
    const code = splitCode(rule.code)
    return code !== undefined && code.alpha === parts.alpha && code.digits.startsWith(parts.digits)
  })

  // Linter prefixes that no rule's alphabetic part equals on its own, such as
  // `PL` for Pylint's PLC/PLE/PLR/PLW families.
  if (matches.length === 0 && parts.digits === '') {
    matches = rules.filter((rule) => {
      const code = splitCode(rule.code)
      return code !== undefined && code.alpha.startsWith(parts.alpha)
    })
  }

  if (matches.length === 0) {
    return undefined
  }

  if (matches.length === 1) {
    const [rule] = matches
    return { label: kebabToTitleCase(rule.name), detail: rule.explanation, rule }
  }

  const linters = [...new Set(matches.map(rule => rule.linter))]
  const shownLinters = linters.slice(0, 2).map(linter => kebabToTitleCase(linter)).join(', ')
  const label = linters.length > 2 ? `${shownLinters}, …` : shownLinters

  const detail = [
    `**\`${selector}\`** — ${matches.length} rules from ${linters.join(', ')}`,
    '',
    ruleListMarkdown(matches),
  ].join('\n')

  return { label, detail }
}
