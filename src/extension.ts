import type { RuffRule } from './rules'
import * as toml from '@iarna/toml'
import * as vscode from 'vscode'
import { hintPlacement } from './placement'
import { prefixToLinterMap, rules } from './rules'

// Define decoration type
let ruleDecorator: vscode.TextEditorDecorationType

const outputChannel = vscode.window.createOutputChannel('Ruff Ignore Explainer')

function kebabToTitleCase(str: string): string {
  return str
    .replaceAll('-', ' ')
    .toLowerCase()
    .replaceAll(/\b\w/g, char => char.toUpperCase())
}

// Activate extension
export function activate(context: vscode.ExtensionContext) {
  outputChannel.appendLine('Ruff Ignore Explainer is now active.')

  // Create decorator type
  ruleDecorator = vscode.window.createTextEditorDecorationType({
    after: {
      margin: '0 0 0 3px',
      color: new vscode.ThemeColor('editorInlayHint.foreground'),
      fontStyle: 'italic',
    },
    isWholeLine: false,
  })

  // Register hover provider for pyproject.toml files
  const hoverProvider = vscode.languages.registerHoverProvider([
    { language: 'toml', pattern: '**/pyproject.toml' },
    { language: 'toml', pattern: '**/ruff.toml' },
  ], {
    provideHover(document, position, _token) {
      // Get the word under cursor
      const range = document.getWordRangeAtPosition(position, /["'][A-Z0-9]+["']/)
      if (!range) {
        return null
      }

      // Extract the rule code from the text (removing quotes)
      const text = document.getText(range)
      const ruleCode = text.replaceAll(/["']/g, '')

      // Find the rule information
      const rule = findRule(ruleCode)
      if (rule) {
        // Return hover with markdown explanation
        return new vscode.Hover(new vscode.MarkdownString(rule.explanation), range)
      }

      // If rule not found but recognized as a linter prefix
      const linter = prefixToLinterMap.get(ruleCode)
      if (linter) {
        return new vscode.Hover(`${linter} (No detailed explanation available)`, range)
      }

      return null
    },
  })

  // Add editor change listener
  const activeEditorListener = vscode.window.onDidChangeActiveTextEditor((editor) => {
    if (editor) {
      outputChannel.appendLine(`Active editor changed to ${editor.document.fileName}`)
      updateDecorations(editor)
    }
  })

  // Document content change listener
  const documentChangeListener = vscode.workspace.onDidChangeTextDocument((event) => {
    const editor = vscode.window.activeTextEditor
    if (editor && event.document === editor.document) {
      updateDecorations(editor)
    }
  })

  // Handle currently open editor
  if (vscode.window.activeTextEditor) {
    updateDecorations(vscode.window.activeTextEditor)
  }

  // Add all subscriptions to context
  context.subscriptions.push(
    activeEditorListener,
    documentChangeListener,
    ruleDecorator,
    hoverProvider,
  )
}

// Update decorations
async function updateDecorations(editor: vscode.TextEditor) {
  // Only process pyproject.toml or ruff.toml files
  if (!editor.document.fileName.endsWith('pyproject.toml') && !editor.document.fileName.endsWith('ruff.toml')) {
    return
  }

  // 新增：读取设置项，决定是否显示装饰
  const config = vscode.workspace.getConfiguration('ruffRulesExplainer')
  const showDecorations = config.get<boolean>('showDecorations', true)

  const { document } = editor
  const text = document.getText()
  const isRuffToml = document.fileName.endsWith('ruff.toml')

  try {
    // Parse TOML
    const config = toml.parse(text) as any

    // For pyproject.toml, check if [tool.ruff] config exists
    // For ruff.toml, use config directly
    let ruffConfig: any

    if (isRuffToml) {
      ruffConfig = config
    }
    else {
      // For pyproject.toml
      if (!config.tool || !config.tool.ruff) {
        return
      }
      ruffConfig = config.tool.ruff
    }

    // Get list of ignored and selected rules
    const ignoreRules = ruffConfig.ignore || []
    const selectRules = ruffConfig.select || []
    const fixableRules = ruffConfig.fixable || []
    const unfixableRules = ruffConfig.unfixable || []
    const extendSelectRules = ruffConfig['extend-select'] || []
    const extendIgnoreRules = ruffConfig['extend-ignore'] || []

    // Check lint section
    const lintIgnoreRules = ruffConfig.lint?.ignore || []
    const lintSelectRules = ruffConfig.lint?.select || []
    const lintFixableRules = ruffConfig.lint?.fixable || []
    const lintUnfixableRules = ruffConfig.lint?.unfixable || []
    const lintExtendSelectRules = ruffConfig.lint?.['extend-select'] || []
    const lintExtendIgnoreRules = ruffConfig.lint?.['extend-ignore'] || []
    const lintExtendFixableRules = ruffConfig.lint?.['extend-fixable'] || []
    const lintExtendUnfixableRules = ruffConfig.lint?.['extend-unfixable'] || []

    // Check per-file-ignores section
    const perFileIgnores = ruffConfig['per-file-ignores'] || {}
    const extendPerFileIgnores = ruffConfig['extend-per-file-ignores'] || {}

    // Check lint.per-file-ignores section
    const lintPerFileIgnores = ruffConfig.lint?.['per-file-ignores'] || {}
    const lintExtendPerFileIgnores = ruffConfig.lint?.['extend-per-file-ignores'] || {}

    // Extract all rules from per-file-ignores sections
    let perFileIgnoreRules: string[] = []

    // Process per-file-ignores
    for (const filePattern in perFileIgnores) {
      if (Array.isArray(perFileIgnores[filePattern])) {
        perFileIgnoreRules = [...perFileIgnoreRules, ...perFileIgnores[filePattern]]
      }
    }

    // Process extend-per-file-ignores
    for (const filePattern in extendPerFileIgnores) {
      if (Array.isArray(extendPerFileIgnores[filePattern])) {
        perFileIgnoreRules = [...perFileIgnoreRules, ...extendPerFileIgnores[filePattern]]
      }
    }

    // Process lint.per-file-ignores
    for (const filePattern in lintPerFileIgnores) {
      if (Array.isArray(lintPerFileIgnores[filePattern])) {
        perFileIgnoreRules = [...perFileIgnoreRules, ...lintPerFileIgnores[filePattern]]
      }
    }

    // Process lint.extend-per-file-ignores
    for (const filePattern in lintExtendPerFileIgnores) {
      if (Array.isArray(lintExtendPerFileIgnores[filePattern])) {
        perFileIgnoreRules = [...perFileIgnoreRules, ...lintExtendPerFileIgnores[filePattern]]
      }
    }

    // Combine all rules from all sections
    const allRules = new Set([
      ...ignoreRules,
      ...selectRules,
      ...extendSelectRules,
      ...extendIgnoreRules,
      ...lintIgnoreRules,
      ...lintSelectRules,
      ...lintExtendSelectRules,
      ...lintExtendIgnoreRules,
      ...lintExtendFixableRules,
      ...lintExtendUnfixableRules,
      ...perFileIgnoreRules,
      ...fixableRules,
      ...lintFixableRules,
      ...unfixableRules,
      ...lintUnfixableRules,
    ])

    // Create decoration objects array
    const decorations: vscode.DecorationOptions[] = []

    // For each rule in the combined list, find ALL occurrences in the document
    for (const rule of allRules) {
      // Find all instances of rule in document (with quotes)
      const rulePattern = new RegExp(`["']${rule}["']`, 'g')

      for (let i = 0; i < document.lineCount; i++) {
        const line = document.lineAt(i)
        const lineText = line.text

        // Look for matches of the rule in this line
        const matches = [...lineText.matchAll(rulePattern)]

        for (const match of matches) {
          if (match.index === undefined) {
            continue
          }

          const ruleInfo = findRule(rule)
          const linter = prefixToLinterMap.get(rule)
          const label = ruleInfo
            ? kebabToTitleCase(ruleInfo.name)
            : (linter ? kebabToTitleCase(linter) : '')

          if (!label) {
            continue
          }

          const { column, padRight } = hintPlacement(lineText, match.index + match[0].length)
          const position = new vscode.Position(i, column)

          decorations.push({
            range: new vscode.Range(position, position),
            renderOptions: {
              after: {
                contentText: padRight ? ` ${label} ` : ` ${label}`,
              },
            },
            hoverMessage: ruleInfo ? new vscode.MarkdownString(ruleInfo.explanation) : undefined,
          })
        }
      }
    }

    outputChannel.appendLine(`Applied ${decorations.length} decorations to ignore and select rules`)
    // Apply decorations
    if (showDecorations) {
      editor.setDecorations(ruleDecorator, decorations)
    }
    else {
      editor.setDecorations(ruleDecorator, [])
    }
  }
  catch (error) {
    console.error('Error parsing TOML or applying decorations:', error)
    outputChannel.appendLine(`Error: ${error}`)
  }
}
function findRule(ruleCode: string): RuffRule | undefined {
  return rules.find(r => r.code === ruleCode)
}

// Deactivate extension
export function deactivate() {
  // Clean up decorator
  if (ruleDecorator) {
    ruleDecorator.dispose()
  }
}
