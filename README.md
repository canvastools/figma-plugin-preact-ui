# Figma Plugin UI Library (Preact)

**An unofficial implementation** of Figma's UI3 design language, adapted for plugin interfaces.

The [original design library](https://www.figma.com/community/file/1486123838948777078/ui3-figmas-ui-kit) was published in Figma Community by Figma.

This project is not affiliated with or endorsed by Figma.

## About

This is **not a pixel-perfect port** of the official UI3 file.

The goal was not to reproduce every detail, but rather to:

- Provide components and states relevant to plugin development.
- Stay close in look & feel to Figma’s current interface.
- Optimise for practical use: easier, cleaner, and more consistent to work with.

Some patterns or unused states were intentionally left out.

[Storybook demo and documentation](https://canvastools.github.io/figma-plugin-preact-ui/)

## Getting started

### Install

Use your preferred package manager. This library has peer dependencies on `preact` and `@preact/compat`.

```bash
npm install figma-plugin-preact-ui preact @preact/compat
# or
pnpm add figma-plugin-preact-ui preact @preact/compat
# or
yarn add figma-plugin-preact-ui preact @preact/compat
```

### Basic usage (consumer project)

Import the component(s) you need and the bundled CSS. Then render with Preact.

```tsx
import { render } from "preact"
import { Button } from "figma-plugin-preact-ui"
import "figma-plugin-preact-ui/dist/style.css"

function App() {
  return (
    <div class="app">
      <Button>Hello world!</Button>
    </div>
  )
}

render(<App />, document.getElementById("root")!)
```

The CSS provides design tokens and component styles. Theming is controlled by the `.figma-light` or `.figma-dark` classes provided by Figma in the plugin window.

### Use tokens (CSS variables)

You can consume the CSS variables from the library directly. See [the variables list here](https://canvastools.github.io/figma-plugin-preact-ui//?path=/docs/overview-variables--docs&globals=viewport:medium).

#### In CSS

```css
.card {
  padding: var(--pui-space-400);
  border-radius: var(--pui-radius-medium);
}

.title {
  color: var(--pui-color-neutral-text-default);
}
```

#### In JS

```ts
import { render } from "preact"
import { Button } from "figma-plugin-preact-ui"
import "figma-plugin-preact-ui/dist/style.css"

const style = {
  padding: "var(--pui-space-400)",
  borderRadius: "var(--pui-radius-medium)",
}

function App() {
  return (
    <div class="app" {...style}>
      <Button>Hello world!</Button>
    </div>
  )
}

render(<App />, document.getElementById("root")!)
```

### Types and tree‑shaking

The package ships ESM and TypeScript types. You can import prop types if needed:

```ts
import type { ButtonProps } from "figma-plugin-preact-ui"
```

Components are individually exported from the entry, enabling tree‑shaking by modern bundlers.

## Changelog

All notable changes to this project are documented in [CHANGELOG.md](https://github.com/canvastools/figma-plugin-preact-ui/blob/main/CHANGELOG.md).

## License

Released under the [MIT License](https://github.com/canvastools/figma-plugin-preact-ui/blob/main/LICENSE.md).
