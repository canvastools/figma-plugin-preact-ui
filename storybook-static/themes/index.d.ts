export type FlattenedVarMap = Record<string, string>;
export type TokenBranch = {
    [key: string]: string | TokenBranch;
};
export type ColorTokenTree = {
    class: string;
    prefix?: string;
    variables: TokenBranch;
};
export { figmaLight } from './figmaLight';
export { figmaDark } from './figmaDark';
export { figjamLight } from './figjamLight';
export { spacing } from './spacing';
export { radius } from './radius';
