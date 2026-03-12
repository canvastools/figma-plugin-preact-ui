export type FlattenedVarMap = Record<string, string>
export type ColorTokenBranch = {
  [key: string]: string | ColorTokenBranch
}
export type ColorTokenTree = {
  class: string
  prefix?: string
  variables: ColorTokenBranch
}

export { figmaLight } from './figmaLight'
export { figmaDark } from './figmaDark'
export { figjamLight } from './figjamLight'
export { spacing } from './spacing'
export { radius } from './radius'
