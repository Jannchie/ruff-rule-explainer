<p align="center">
  <img src="./icon.png" alt="Ruff Rule Explainer" width="96" height="96">
</p>

<h1 align="center">Ruff Rule Explainer</h1>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=jannchie.ruff-ignore-explainer"><img src="https://img.shields.io/visual-studio-marketplace/v/jannchie.ruff-ignore-explainer?label=marketplace" alt="Marketplace version"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=jannchie.ruff-ignore-explainer"><img src="https://img.shields.io/visual-studio-marketplace/i/jannchie.ruff-ignore-explainer" alt="Installs"></a>
  <a href="https://github.com/Jannchie/ruff-rule-explainer/actions/workflows/update-rules.yml"><img src="https://img.shields.io/github/actions/workflow/status/Jannchie/ruff-rule-explainer/update-rules.yml?label=rules%20sync" alt="Rules sync"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/github/license/Jannchie/ruff-rule-explainer" alt="License"></a>
</p>

<p align="center">
  <img src="./assets/image.png" alt="Inline rule names and hover docs in pyproject.toml" width="720">
</p>

Ruff Rule Explainer shows what each code in your Ruff config means, right in `pyproject.toml` / `ruff.toml`. `"BLE001"` gets an inline `(Blind Except)` hint, and hovering it opens Ruff's full rule docs — no more switching to the website to remember what you ignored six months ago.

The rule dataset is generated from `ruff rule --all` and refreshed weekly, so new Ruff rules show up without waiting for a manual release.

## Install

Search for **Ruff Rule Explainer** in the VS Code Extensions view, or run:

```sh
code --install-extension jannchie.ruff-ignore-explainer
```

## Usage

Open a `pyproject.toml` with a `[tool.ruff]` table (or any `ruff.toml`). Nothing to configure:

```toml
[tool.ruff.lint]
select = [
    "E4",    (Pycodestyle)
    "PL",    (Pylint)
    "B008",  (Function Call In Default Argument)
]
ignore = ["D" (Pydocstyle)]
```

The text in parentheses is rendered by the extension, not written in the file.

- **Full codes** (`B008`) show the rule name inline; hover for the What it does / Why is this bad / Example docs.
- **Prefixes** (`E`, `E4`, `PLR09`, `PL`) show the linter name; hover lists the matching rules. `E` matches pycodestyle only, not `ERA` or `EXE`.
- **`ALL`** is recognized too.

Recognized keys, both at the top level and under `lint`: `select`, `ignore`, `extend-select`, `extend-ignore`, `fixable`, `unfixable`, `extend-fixable`, `extend-unfixable`, `per-file-ignores`, `extend-per-file-ignores`.

## Settings

| Setting | Default | Description |
| --- | --- | --- |
| `ruffRulesExplainer.showDecorations` | `true` | Show inline rule names. Set to `false` to keep only hover docs. |

## License

[MIT](./LICENSE) · [Changelog](./CHANGELOG.md)
