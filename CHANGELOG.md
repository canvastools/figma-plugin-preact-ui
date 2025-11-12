# Changelog

All notable changes to this project will be documented in this file.  
This project follows [Semantic Versioning](https://semver.org/).

### 0.4.0 - 12 Nov 2025

**Added:**

- Icons

  - Added 26 icons.

- Checkbox:

  - Added `intent` and `intentModifiers` properties.

- ColorSwatch:

  - New properties: `hoverable`, `selected`, `title`, `onClick`, `wheel`, `children`

- Section:

  - Added the `variant` property to support different padding configurations.

- Select:

  - Added support for option groups.

- MenuDivider:

  - Added the `variant` property to support different divider width configurations.

- OverlayPositioner:

  - Added the `draggable` property.

- Components:

  - SegmentedControl

**Fixed:**

- MenuContainer, Popover, Tooltip: fixed contrast in dark mode.

---

### 0.3.1 - 19 Oct 2025

**Fixed:**

- OverlayPositioner: fixed an issue where the overlay was hidden after a delay following a mouse leave event.
- Icons: fixed a tree-shaking issue that caused all icons to be included in the build when importing a single one.
- Dropdown: fixed a z-index issue where the dropdown could be overlapped by other elements.
- Checkbox: fixed container width behaviour.
- Select: fixed active state styles.
- ColorSwatch: fixed visible white pixels at the corners.
- ColorPicker: fixed alpha value display when it was fractional.

---

### 0.3.0 - 5 Oct 2025

**Added:**

- Hooks:

  - useStringValidator
  - useNumberValidator

- Input:

  - Added the `type` property with `text` and `number` values.
  - Added the `suffixOnHover` property to control the visibility of the suffix on hover.
  - Added the `grouped` property and `.InputGrouped` CSS class.

- Text:

  - Added the value `fixed` for the `intentModifiers` property to support the Tooltip component.
  - Added the `noWrap` property.

- ListItem (experimental):

  - Added the `reducedPaddingRight` property for pixel-perfect alignment with ghost-style buttons on the right side.

- Components:

  - ColorSwatch
  - MenuContainer
  - MenuDivider
  - MenuItem
  - MenuItemOption
  - OverlayPositioner
  - Popover
  - Select
  - Tooltip

**Fixed:**

- Avatar:

  - Fixed type handling of the `imageSrc` property for better compatibility with Figma’s User type.
  - Fixed visiblity unintended selection styles.

- Icon:

  - Refactored so that it no longer imports all glyphs from the icon package when used in a consumer project.

- ScrollContainer:

  - Fixed layout so it now fully occupies the parent container

- Tab:

  - Fixed colour for the unselected tab.

- Typography:

  - Reduced `body/medium` line-height to 16px to match Figma styles.

- WindowResizer:

  - Fixed flickering of scroll when resizing the window.
  - Fixed colour contrast.

---

### 0.2.0 - 7 Sep 2025

**Added:**

- Light and Dark themes support

- Components:

  - Avatar
  - Badge
  - Bar
  - Button
  - ButtonIcon
  - ButtonIconToggle
  - Checkbox
  - Divider
  - Icon
  - Input
  - Section
  - Spinner
  - Tab
  - TabContext
  - TabList
  - TabPanel
  - Text

- Experemental components (API may change):

  - ListContainer
  - ListContext
  - ListItem

- Layout components:

  - ScrollContainer
  - ScrollContext
  - Spacing
  - Stack
  - WindowResizer

---

### 0.0.1 - 18 Aug 2024

Initial release
