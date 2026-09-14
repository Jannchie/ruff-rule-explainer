## v1.6.9

v1.6.0...v1.6.9

### :adhesive_bandage: Fixes

- **rules**: skip removed rules with null code so the extension activates - By [Jianqi Pan](mailto:jannchie@gmail.com) in 187b80e

### :construction_worker: CI

- push release tags explicitly and generate changelog with tgit - By [Jianqi Pan](mailto:jannchie@gmail.com) in b6ce5c7
- type-check before packaging - By [Jianqi Pan](mailto:jannchie@gmail.com) in 15709a1

### :wrench: Chores

- **rules**: update rules dataset for ruff 0.16.7 - By [github-actions[bot]](mailto:41898282+github-actions[bot]@users.noreply.github.com) in 869bdbd
- **rules**: update rules dataset for ruff 0.16.6 - By [github-actions[bot]](mailto:41898282+github-actions[bot]@users.noreply.github.com) in 36cae81
- **rules**: update rules dataset for ruff 0.16.5 - By [github-actions[bot]](mailto:41898282+github-actions[bot]@users.noreply.github.com) in 16b8544
- **rules**: update rules dataset for ruff 0.16.4 - By [github-actions[bot]](mailto:41898282+github-actions[bot]@users.noreply.github.com) in 0cc9133
- **rules**: update rules dataset for ruff 0.16.3 - By [github-actions[bot]](mailto:41898282+github-actions[bot]@users.noreply.github.com) in 7f7097f
- **rules**: update rules dataset for ruff 0.16.2 - By [github-actions[bot]](mailto:41898282+github-actions[bot]@users.noreply.github.com) in 807ecab
- **rules**: update rules dataset for ruff 0.16.1 - By [github-actions[bot]](mailto:41898282+github-actions[bot]@users.noreply.github.com) in ddb528c
- **rules**: update rules dataset for ruff 0.16.0 - By [github-actions[bot]](mailto:41898282+github-actions[bot]@users.noreply.github.com) in 68c3764

## v1.6.0

v1.5.1...v1.6.0

### :sparkles: Features

- explain partial rule selectors such as E4, PL and ALL - By [Jannchie](mailto:jannchie@gmail.com) in 31ad80c

### :adhesive_bandage: Fixes

- anchor inline hint to its rule code in single-line arrays - By [Jannchie](mailto:jannchie@gmail.com) in 692c23b

### :construction_worker: CI

- bump actions to node24 runtimes and skip publish on manual runs - By [Jannchie](mailto:jannchie@gmail.com) in 41eb10a

## v1.5.1

v1.5.0...v1.5.1

### :sparkles: Features

- **rules**: add generator script and update dataset to ruff 0.15.22 - By [Jianqi Pan](mailto:jannchie@gmail.com) in 7090322

### :construction_worker: CI

- publish extension to marketplace on tag push - By [Jannchie](mailto:jannchie@gmail.com) in 8ef988f
- add weekly rules auto-update and release workflow - By [Jianqi Pan](mailto:jannchie@gmail.com) in 7127dd1

### :wrench: Chores

- update repository url to renamed ruff-rule-explainer - By [Jianqi Pan](mailto:jannchie@gmail.com) in 45d5465

## v1.5.0

v1.4.0...v1.5.0

### :sparkles: Features

- **extension**: support ruff extend-ignore and extend-per-file-ignores - By [Jannchie](mailto:jannchie@gmail.com) in afe669b

### :wrench: Chores

- **deps**: downgrade @types/vscode version - By [Jianqi Pan](mailto:jannchie@gmail.com) in ba51bfd

## v1.4.0

v1.3.0...v1.4.0

### :sparkles: Features

- **extension**: support fixable and unfixable rules - By [Jianqi Pan](mailto:jannchie@gmail.com) in bdf6b59

### :wrench: Chores

- **deps**: update dev dependencies and string handling - By [Jianqi Pan](mailto:jannchie@gmail.com) in 53cf6ea

## v1.3.0

v1.2.1...v1.3.0

### :sparkles: Features

- **config**: add showDecorations setting to enable or disable inline rule decorations - By [Jianqi Pan](mailto:jannchie@gmail.com) in be15808

## v1.2.1

v1.2.0...v1.2.1

### :art: Refactors

- **logging**: remove debug log from document change handler - By [Jianqi Pan](mailto:jannchie@gmail.com) in a200a1c

### :lipstick: Styles

- **pnpm-lock-file**: use double quotes consistently - By [Jianqi Pan](mailto:jannchie@gmail.com) in 30a198d

### :memo: Documentation

- **changelog**: update for v1.2.0 release with new features - By [Jianqi Pan](mailto:jannchie@gmail.com) in fdb06fd

## v1.2.0

v1.1.1...v1.2.0

### :sparkles: Features

- **decorations**: enhance rule decorations with commas and brackets - By [Jianqi Pan](mailto:jannchie@gmail.com) in 5f15fbf
- **extension**: add ruff.toml support to hover and decoration - By [Jianqi Pan](mailto:jannchie@gmail.com) in c942a66

### :memo: Documentation

- **changelog**: add release notes for v1.1.1 - By [Jianqi Pan](mailto:jannchie@gmail.com) in 9496bac

### :wrench: Chores

- **assets**: update image.png - By [Jianqi Pan](mailto:jannchie@gmail.com) in a229ef8

## v1.1.1

v1.1.0...v1.1.1

### :adhesive_bandage: Fixes

- **decorator-rules**: use set to combine ignore and select rules - By [Jianqi Pan](mailto:jannchie@gmail.com) in 21dc883

### :memo: Documentation

- **changelog**: add v1.1.0 release notes - By [Jianqi Pan](mailto:jannchie@gmail.com) in c1b042f

## v1.1.0

v1.0.0...v1.1.0

### :sparkles: Features

- **ruff-rule-explainer**: support select array in pyproject.toml && update descriptions - By [Jianqi Pan](mailto:jannchie@gmail.com) in eb70d18

## v1.0.0

v0.5.0...v1.0.0

### :art: Refactors

- **extension**: add kebabToTitleCase function && apply to linter and ruleInfo output - By [Jianqi Pan](mailto:jannchie@gmail.com) in 90802ac

## v0.5.0

v0.3.0...v0.5.0

### :sparkles: Features

- **build**: add esbuild for extension bundling && update package settings && remove unused test - By [Jianqi Pan](mailto:jannchie@gmail.com) in ec2cadb

## v0.3.0

v0.2.0...v0.3.0

### :sparkles: Features

- **vscode-extension**: add toml language contributions - By [Jianqi Pan](mailto:jannchie@gmail.com) in a559b43

## v0.2.0

v0.1.0...v0.2.0

### :sparkles: Features

- **package**: add icon.png && update displayName - By [Jianqi Pan](mailto:jannchie@gmail.com) in a0f2adc

### :memo: Documentation

- **changelog**: add changelog for version 0.1.0 with features, fixes, styles, and chores - By [Jianqi Pan](mailto:jannchie@gmail.com) in 4b7d2a4
- **readme**: simplify content and add image preview - By [Jianqi Pan](mailto:jannchie@gmail.com) in b597695

### :wrench: Chores

- **package**: add repository info && add package and publish scripts - By [Jianqi Pan](mailto:jannchie@gmail.com) in c4db261

## v0.1.0

4262fe4229029f0d9d42952480915c7da898b7a6...v0.1.0

### :sparkles: Features

- **hover-provider**: add hover provider for pyproject.toml && fix decoration rule variable name - By [Jianqi Pan](mailto:jannchie@gmail.com) in 8fc403e

### :adhesive_bandage: Fixes

- **decorations**: apply all instances of rules && adjust margin && improve error logging - By [Jianqi Pan](mailto:jannchie@gmail.com) in ce6c75c

### :lipstick: Styles

- **formatting**: standardize json formatting && remove trailing semicolons && update assert module import - By [Jianqi Pan](mailto:jannchie@gmail.com) in 5785fb5

### :wrench: Chores

- **package**: update package name, publisher, and author details - By [Jianqi Pan](mailto:jannchie@gmail.com) in 7bdac68

## v1.6.8

[v1.6.0...v1.6.8](https://github.com/Jannchie/ruff-rule-explainer/compare/v1.6.0...v1.6.8)

### :adhesive_bandage: Fixes

- **rules**: skip removed rules with null code so the extension activates - By [Jianqi Pan](mailto:jannchie@gmail.com) in [187b80e](https://github.com/Jannchie/ruff-rule-explainer/commit/187b80e)

### :construction_worker: CI

- push release tags explicitly and generate changelog with tgit - By [Jianqi Pan](mailto:jannchie@gmail.com) in [b6ce5c7](https://github.com/Jannchie/ruff-rule-explainer/commit/b6ce5c7)
- type-check before packaging - By [Jianqi Pan](mailto:jannchie@gmail.com) in [15709a1](https://github.com/Jannchie/ruff-rule-explainer/commit/15709a1)

### :wrench: Chores

- **rules**: update rules dataset for ruff 0.16.6 - By [github-actions[bot]](mailto:41898282+github-actions[bot]@users.noreply.github.com) in [36cae81](https://github.com/Jannchie/ruff-rule-explainer/commit/36cae81)
- **rules**: update rules dataset for ruff 0.16.5 - By [github-actions[bot]](mailto:41898282+github-actions[bot]@users.noreply.github.com) in [16b8544](https://github.com/Jannchie/ruff-rule-explainer/commit/16b8544)
- **rules**: update rules dataset for ruff 0.16.4 - By [github-actions[bot]](mailto:41898282+github-actions[bot]@users.noreply.github.com) in [0cc9133](https://github.com/Jannchie/ruff-rule-explainer/commit/0cc9133)
- **rules**: update rules dataset for ruff 0.16.3 - By [github-actions[bot]](mailto:41898282+github-actions[bot]@users.noreply.github.com) in [7f7097f](https://github.com/Jannchie/ruff-rule-explainer/commit/7f7097f)
- **rules**: update rules dataset for ruff 0.16.2 - By [github-actions[bot]](mailto:41898282+github-actions[bot]@users.noreply.github.com) in [807ecab](https://github.com/Jannchie/ruff-rule-explainer/commit/807ecab)
- **rules**: update rules dataset for ruff 0.16.1 - By [github-actions[bot]](mailto:41898282+github-actions[bot]@users.noreply.github.com) in [ddb528c](https://github.com/Jannchie/ruff-rule-explainer/commit/ddb528c)
- **rules**: update rules dataset for ruff 0.16.0 - By [github-actions[bot]](mailto:41898282+github-actions[bot]@users.noreply.github.com) in [68c3764](https://github.com/Jannchie/ruff-rule-explainer/commit/68c3764)

## v1.6.0

[v1.5.1...v1.6.0](https://github.com/Jannchie/ruff-rule-explainer/compare/v1.5.1...v1.6.0)

### :sparkles: Features

- **extension**: explain partial rule selectors such as E4, PL and ALL - By [Jannchie](mailto:jannchie@gmail.com) in [31ad80c](https://github.com/Jannchie/ruff-rule-explainer/commit/31ad80c)

### :adhesive_bandage: Fixes

- **extension**: anchor inline hint to its rule code in single-line arrays - By [Jannchie](mailto:jannchie@gmail.com) in [692c23b](https://github.com/Jannchie/ruff-rule-explainer/commit/692c23b)

## v1.5.1

[v1.5.0...v1.5.1](https://github.com/Jannchie/ruff-rule-explainer/compare/v1.5.0...v1.5.1)

### :wrench: Chores

- **ci**: publish extension to marketplace on tag push - By [Jannchie](mailto:jannchie@gmail.com) in [8ef988f](https://github.com/Jannchie/ruff-rule-explainer/commit/8ef988f)

## v1.5.0

[v1.4.0...v1.5.0](https://github.com/Jannchie/ruff-ignore-explainer/compare/v1.4.0...v1.5.0)

### :sparkles: Features

- **extension**: support ruff extend-ignore and extend-per-file-ignores - By [Jannchie](mailto:jannchie@gmail.com) in [afe669b](https://github.com/Jannchie/ruff-ignore-explainer/commit/afe669b)

### :wrench: Chores

- **deps**: downgrade @types/vscode version - By [Jianqi Pan](mailto:jannchie@gmail.com) in [ba51bfd](https://github.com/Jannchie/ruff-ignore-explainer/commit/ba51bfd)

## v1.4.0

[v1.3.0...v1.4.0](https://github.com/Jannchie/ruff-ignore-explainer/compare/v1.3.0...v1.4.0)

### :sparkles: Features

- **extension**: support fixable and unfixable rules - By [Jianqi Pan](mailto:jannchie@gmail.com) in [bdf6b59](https://github.com/Jannchie/ruff-ignore-explainer/commit/bdf6b59)

### :wrench: Chores

- **deps**: update dev dependencies and string handling - By [Jianqi Pan](mailto:jannchie@gmail.com) in [53cf6ea](https://github.com/Jannchie/ruff-ignore-explainer/commit/53cf6ea)

## v1.3.0

[v1.2.1...v1.3.0](https://github.com/Jannchie/ruff-ignore-explainer/compare/v1.2.1...v1.3.0)

### :sparkles: Features

- **config**: add showDecorations setting to enable or disable inline rule decorations - By [Jianqi Pan](mailto:jannchie@gmail.com) in [be15808](https://github.com/Jannchie/ruff-ignore-explainer/commit/be15808)

## v1.2.1

[v1.2.0...v1.2.1](https://github.com/Jannchie/ruff-ignore-explainer/compare/v1.2.0...v1.2.1)

### :art: Refactors

- **logging**: remove debug log from document change handler - By [Jianqi Pan](mailto:jannchie@gmail.com) in [a200a1c](https://github.com/Jannchie/ruff-ignore-explainer/commit/a200a1c)

### :lipstick: Styles

- **pnpm-lock-file**: use double quotes consistently - By [Jianqi Pan](mailto:jannchie@gmail.com) in [30a198d](https://github.com/Jannchie/ruff-ignore-explainer/commit/30a198d)

### :memo: Documentation

- **changelog**: update for v1.2.0 release with new features - By [Jianqi Pan](mailto:jannchie@gmail.com) in [fdb06fd](https://github.com/Jannchie/ruff-ignore-explainer/commit/fdb06fd)

## v1.2.0

[v1.1.1...v1.2.0](https://github.com/Jannchie/ruff-ignore-explainer/compare/v1.1.1...v1.2.0)

### :sparkles: Features

- **extension**: add ruff.toml support to hover and decoration - By [Jianqi Pan](mailto:jannchie@gmail.com) in [c942a66](https://github.com/Jannchie/ruff-ignore-explainer/commit/c942a66)
- **decorations**: enhance rule decorations with commas and brackets - By [Jianqi Pan](mailto:jannchie@gmail.com) in [5f15fbf](https://github.com/Jannchie/ruff-ignore-explainer/commit/5f15fbf)

## v1.1.1

[v1.1.0...v1.1.1](https://github.com/Jannchie/ruff-ignore-explainer/compare/v1.1.0...v1.1.1)

### :adhesive_bandage: Fixes

- **decorator-rules**: use set to combine ignore and select rules - By [Jianqi Pan](mailto:jannchie@gmail.com) in [21dc883](https://github.com/Jannchie/ruff-ignore-explainer/commit/21dc883)

## v1.1.0

[v1.0.0...v1.1.0](https://github.com/Jannchie/ruff-ignore-explainer/compare/v1.0.0...v1.1.0)

### :sparkles: Features

- **ruff-rule-explainer**: support select array in pyproject.toml && update descriptions - By [Jianqi Pan](mailto:jannchie@gmail.com) in [eb70d18](https://github.com/Jannchie/ruff-ignore-explainer/commit/eb70d18)

## v0.1.0

### :sparkles: Features

- **hover-provider**: add hover provider for pyproject.toml && fix decoration rule variable name - By [Jianqi Pan](mailto:jannchie@gmail.com) in 8fc403e

### :adhesive_bandage: Fixes

- **decorations**: apply all instances of rules && adjust margin && improve error logging - By [Jianqi Pan](mailto:jannchie@gmail.com) in ce6c75c

### :lipstick: Styles

- **formatting**: standardize json formatting && remove trailing semicolons && update assert module import - By [Jianqi Pan](mailto:jannchie@gmail.com) in 5785fb5

### :wrench: Chores

- **package**: update package name, publisher, and author details - By [Jianqi Pan](mailto:jannchie@gmail.com) in 7bdac68
