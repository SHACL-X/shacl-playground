# shacl-playground.zazuko.com

## 1.3.8

### Patch Changes

- b481199: Updated rdf-validate-shacl

## 1.3.7

### Patch Changes

- 26f55a6: Inadequate fix in version 1.3.6 caused `[object Object]` strings in sharing links

## 1.3.6

### Patch Changes

- 0597ba9: chore(deps): bump @tpluscode/rdf-string from 1.3.3 to 1.3.4
- 9db6cd4: Fixes `Cannot destructure property 'shapesGraph' of 'e.getState(...).sharingParams' as it is undefined`

## 1.3.5

### Patch Changes

- d3f4b7f: Sharing link would display `[object Promise]` since previous release
- Updated dependencies [d3f4b7f]
  - @zazuko/shacl-playground@3.0.1

## 1.3.4

### Patch Changes

- ab6e8fd: chore(deps): bump @rdfine/env from 1.1.0 to 1.1.2
- b705f3a: chore(deps): bump @tpluscode/rdf-string from 1.1.3 to 1.3.3
- Updated dependencies [e62b5cb]
- Updated dependencies [b705f3a]
  - @zazuko/shacl-playground@3.0.0

## 1.3.3

### Patch Changes

- eac5ed0: build(deps): updated rdf-validate-shacl

## 1.3.2

### Patch Changes

- 3bcae92: Update `@vaadin` components

## 1.3.1

### Patch Changes

- 6395975: Changelog was missing from build

## 1.3.0

### Minor Changes

- 7f27129: - Fixes empty `<li>` node in validation report if URI of `sh:resultPath` isn't using one of the base URIs.
  - Also applies prefixed names to Focus Nodes in report summary

### Patch Changes

- ddbd368: Update dependencies to use `@rdfjs/environment` stack
- Updated dependencies [ddbd368]
- Updated dependencies [ddbd368]
  - @zazuko/shacl-playground@2.0.0

## 1.2.7

### Patch Changes

- 16e5f20: Update `rdf-validate-shacl`
- 59cdad2: chore(deps): bump express from 4.17.1 to 4.18.2
- d67cbb1: Eat our own dogfood (use `@zazuko/shacl-playground` package)
- Updated dependencies [144a011]
- Updated dependencies [d67cbb1]
  - @zazuko/shacl-playground@1.0.0

## 1.2.6

### Patch Changes

- 74b768d: Improve RDF Lists when swithing formats

## 1.2.5

### Patch Changes

- af6966f: Node targeted with `sh:targetNode` would not run validation (fixes #32)

## 1.2.4

### Patch Changes

- b3bfa6b: chore: upgrade rdf-validate-shacl

## 1.2.3

### Patch Changes

- f76a281: Editor would sometime lose content on page reload

## 1.2.2

### Patch Changes

- 5313fb0: Some contents of RDF editor were hidden under the report panel
- a50bc90: Relative shape ids would break raw validation report
- b954f81: Updates @rdfjs-elements/formats-pretty
- a98f388: `this.report.dataset is not iterable` and `quad.predicate.equals is not a function` were shown in console on page reload

## 1.2.1

### Patch Changes

- 97c4bbb: URL shortener failed with large graph contents

## 1.2.0

### Minor Changes

- e43f703: Change sharing link to use hash URI and not query string. This prevents issues with very long URIs

## 1.1.4

### Patch Changes

- c9918a9: Update graphy (fixes #16)

## 1.1.3

### Patch Changes

- bd4a06f: In some browsers there would be double scrollbars around editors
- 07d180a: Updated JSON-LD libraries

## 1.1.2

### Patch Changes

- 6b84c8d: Editor layout would break on first render, apparently due to a race condition when loading styles
- 6b84c8d: Updated vaadin to v21
- 6b84c8d: Updated to lit@2

## 1.1.1

### Patch Changes

- 55a5e2c: Use more recognizable icon for sharing button

## 1.1.0

### Minor Changes

- da11823: Custom prefixes can be defined for graphs

### Patch Changes

- ea9913d: Better serialization output in turtle
- 299a70d: Add pointer cursor to prefixes to indicate they are clickable
- b11c0a2: Selected tab was not included in sharing link

## 1.0.0

### Major Changes

- 7c908dd: Use split layout on large screens

## 0.2.0

### Minor Changes

- 29778a7: Sharing link, including option to shorten
- 8ecf09e: Button to open Shaperone

### Patch Changes

- 5527a36: Set default shapes graph prefixes
- fc2e512: Prevent growing blank node identfiers

## 0.1.0

### Minor Changes

- daaa985: First version:

  - Multi-format editor for Shapes Graph
  - Multi-format editor for Data Graph
  - Displaying validation errors as tree
  - Displaying validation errors as RDF in various formats
  - Uses `localstorage` to remember the state
