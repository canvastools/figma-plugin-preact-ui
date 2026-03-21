export declare function copyToClipboard(text: string): Promise<void> | undefined;
/** Themes shown in Variables/Colors docs and filter UI (keys match theme exports). */
export declare const COLOR_DOC_THEMES: readonly [{
    readonly key: "figmaLight";
    readonly label: "Figma Light";
}, {
    readonly key: "figmaDark";
    readonly label: "Figma Dark";
}, {
    readonly key: "figjamLight";
    readonly label: "Figjam Light";
}];
type SimpleVariableTableProps = {
    variables: Record<string, string>;
    /** e.g. `--pui-spacing` or `--pui-radius` (token key is appended with `-`). */
    cssVarPrefix: string;
};
export declare function SimpleVariableTable({ variables, cssVarPrefix }: SimpleVariableTableProps): import("preact").JSX.Element;
export {};
