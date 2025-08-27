export type FlattenedVarMap = Record<string, string>
export type ColorTokenTree = {
  class: string
  prefix?: string
  variables: Record<string, any>
}

export { figmaLight } from "./figmaLight"
export { figmaDark } from "./figmaDark"
export { spacing } from "./spacing"
export { radius } from "./radius"
