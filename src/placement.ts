export interface HintPlacement {
  /** Column the zero-width decoration anchors to */
  column: number
  /** Whether the hint needs a trailing space to not touch the next token */
  padRight: boolean
}

/**
 * Decide where the inline hint for a rule code goes on its line.
 *
 * With one rule per line the hint reads best after the trailing comma, like an
 * end-of-line comment. In a single-line array that same spot sits between the
 * comma and the next rule code, so the hint appears to describe the wrong rule —
 * there it stays attached to the code it explains, before the comma.
 *
 * @param lineText Full text of the line
 * @param ruleEnd Column just past the rule code's closing quote
 */
export function hintPlacement(lineText: string, ruleEnd: number): HintPlacement {
  const textAfterRule = lineText.slice(ruleEnd)
  const commaMatch = /^\s*,/.exec(textAfterRule)

  if (commaMatch) {
    const restAfterComma = textAfterRule.slice(commaMatch[0].length)
    // Anything other than a closing bracket means more rules follow on this line
    const moreOnLine = /^\s*[^\s\]]/.test(restAfterComma)
    return moreOnLine
      // The comma itself separates the hint from the next rule
      ? { column: ruleEnd, padRight: false }
      : { column: ruleEnd + commaMatch[0].length, padRight: false }
  }

  return { column: ruleEnd, padRight: /^\s*\S/.test(textAfterRule) }
}
