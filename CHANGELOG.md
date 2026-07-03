# Changelog

### 1.3.0 - 3 July 2026

- Minor style, usability and performance fixes
- Tooltip: delay fix

- Added 24 icons
- Add color variables for slots, `intent` and `intentModifier` props updated for Text, Icon, Badge
- OverlayPositioner: preserve position after drag when repositioning is triggered
- MenuContaniner: added scroll to selected MenuItemOption
- Select: added `ghost`, `fullWidth` prop
- ListItem: added `collapseIconIntent` prop
- Added:
  - MenuItemGroup
  - SectionCollapsible

### 1.2.0 - 10 Jun 2026

- Minor style fixes
- Fixed ListItem getting selected on drag when `selectable=false`
- Fixed keyboard navigation for ListItem, Select
- Fixed ListItem end-dropzone blocking hover on the last item in a branch

- Added 35 icons
- New spacing token: `300`
- useNumericInut: added `trimTrailingZeros` prop
- PopoverContainer, Popover: added `constrainHeight`
- Popover, OverlayPositioner: added `autoReposition` for automatic repositioning when content height changes
- Input: added `focusOnPrefix` prop
- Input, TextArea: added `selectOnFocus` prop
- Custom children for Button, Tab
- ColorSwatch:, ColorPicker: added `alpha` prop,
- ColorSwatch: added `fill` array support
- ListContext: added `onKeyDown` prop
- Button, ButtonIcon, ButtonIconToggle, Checkbox, ColorSwatch, Input, ListItem, MenuItemAction, MenuItemOption, Popover, PopoverContainer, SegmentedControl, Select, Switch, Tab, TextArea: added `tabIndex` prop for custom tab order on the focusable element (defaults unchanged)
- Tooltip: added `trigger` prop
- TooltipContext: added `registerClick`; `registerHoverStart`, `registerHoverEnd`, and `registerPointerDown` accept per-tooltip `showDelay` / `hideDelay` options
- ScrollContext: added `hasScroll` when the registered scroll container overflows vertically

### 1.1.0 - 6 Apr 2026

- Minor style fixes
- Fixed the Scroll thumb inside the popover when trying to drag it with the mouse.
- Fixed Popover closing when interacting with WindowResizer

- Added 14 icons
- ControlGroup: added `disabled` prop
- ColorSwatch: added gradient fill support
- TabList: add `scrollable` prop

### 1.0.0 - 21 Mar 2026

- Various bugs and issues fixed
- Property naming reviewed and standardised
- Refactoring of experimental components

- Added 17 icons
- Added:
  - Calendar
  - Code
  - Fog
  - ControlGroup
  - List
  - Menu
  - MenuContext
  - PopoverContainer
  - PopoverContext
  - PopoverHeader
  - Progress
  - Switch
  - TextArea
  - TimePicker
  - TooltipContext
  - TooltipContainer

---

### 0.4.0 - 12 Nov 2025 (Unstable)

**Added:**

- Added 26 icons
- Added:
  - SegmentedControl
  - ListContainer
  - ListContext
  - ListItem

---

### 0.3.1 - 19 Oct 2025 (Unstable)

- Fixed various bugs

---

### 0.3.0 - 5 Oct 2025 (Unstable)

- Added:
  - ColorSwatch
  - InputGroup
  - MenuContainer
  - MenuDivider
  - MenuItemAction
  - MenuItemOption
  - OverlayPositioner
  - Popover
  - Select
  - Tooltip
  - useStringInput
  - useNumericInput

---

### 0.2.0 - 7 Sep 2025 (Unstable)

- Light and Dark themes support
- Added:
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
  - ScrollContainer
  - ScrollContext
  - Spacing
  - Stack
  - WindowResizer

---

### 0.0.1 - 18 Aug 2024 (Unstable)

Initial release
