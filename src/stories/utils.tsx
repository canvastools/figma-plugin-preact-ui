import { Text } from '../index'
import { Icon } from '../index'
import { ButtonIcon } from '../index'
import { copy as copyGlyph } from '../index'

export function copyToClipboard(text: string): Promise<void> | undefined {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text)
  }
}

/** Themes shown in Variables/Colors docs and filter UI (keys match theme exports). */
export const COLOR_DOC_THEMES = [
  { key: 'figmaLight', label: 'Figma Light' },
  { key: 'figmaDark', label: 'Figma Dark' },
  { key: 'figjamLight', label: 'Figjam Light' },
] as const

type SimpleVariableTableProps = {
  variables: Record<string, string>
  /** e.g. `--pui-spacing` or `--pui-radius` (token key is appended with `-`). */
  cssVarPrefix: string
}

export function SimpleVariableTable({ variables, cssVarPrefix }: SimpleVariableTableProps) {
  return (
    <div className="sb-column sb-gap-16 sb-variables-table-wrap">
      <table className="sb-variables-table">
        <tr className="sb-variables-table__row-border">
          <td className="sb-variables-table__cell">
            <Text strong>Token name</Text>
          </td>
          <td className="sb-variables-table__cell">
            <Text strong>Value</Text>
          </td>
        </tr>
        {Object.entries(variables).map(([token, value]) => {
          const varName = `${cssVarPrefix}-${token}`
          return (
            <tr key={token} className="sb-variables-table__row-border">
              <td className="sb-variables-table__cell">
                <div className="sb-variables-table__flex">
                  <ButtonIcon onClick={() => copyToClipboard(varName)}>
                    <Icon glyph={copyGlyph} />
                  </ButtonIcon>
                  <div className="sb-variables-table__name">
                    <Text strong wrap={false}>
                      {varName}
                    </Text>
                  </div>
                </div>
              </td>
              <td className="sb-variables-table__cell">
                <div className="sb-variables-table__flex">
                  <ButtonIcon onClick={() => copyToClipboard(value)}>
                    <Icon glyph={copyGlyph} />
                  </ButtonIcon>
                  <div className="sb-variables-table__name">
                    <Text strong wrap={false}>
                      {value}
                    </Text>
                  </div>
                </div>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
