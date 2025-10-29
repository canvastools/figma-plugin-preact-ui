import { bem, typedForwardRef } from "../../utils"
import { useRef } from "preact/hooks"

import type { ColorSwatchProps } from "./ColorSwatch.types"
import "./ColorSwatch.scss"

import { OverlayPositioner } from "../../index"
import { Tooltip } from "../../index"
import { Text } from "../../index"

/* --- */

const hasOpacity = (hex: string | undefined) => {
  if (!hex) return false
  const opacity = hex.slice(-2)
  const isOpacity = opacity === "FF" || opacity === "ff"
  return hex.length === 9 && !isOpacity
}

const customBg = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhCSURBVHgBRZcJmts4DoVBkFpsVyWZ5RJzg7n/dfqbSaeqbMmSSPb/IPcWlBZTxMPDyvTf/7Teu5n1ZImbYogny7x682bfef7B7//o1X7Uat96s/e+2a3tdulPm9rDJvvF9aeN7f9W2m9ckfqbDf1/lusvS/ZAVnP273ZIWUhKZuWo/O3ng7GsAWSv3S6AOI5uG+93ftlRfHRHDp671aTNqiU/LAHGOm/7gpIFQ74s9zvXlX2fgHia+cb26LHXf1LIP7cwXxhOED0FDjtaQ7kbWBCUpwz2Zo13CdWdd60d1o/NOleDjZQ2dKCwcU27OVc3Kd5Oq6XApRi1zh6pAfhvTGzU4ioWdFebo9BCaf9zTToCpA/QN3TziftcT2mAsCc6UN5PxU07Zecde+JSKcZP5zUnKx1atLsWCEyoTn+ydN4LuGJimNym4jbyzK0NsDLgllIzDLvlbTZfWPnswajAo/s0CMud9TLZZLmHOWBRIODLjpUe7OtvDUDuNZ6nqdlt7EizC3tch2RTKjYAK3dAtMnKfjV/3s3nm6X1arZA0aI9XYyH/6XYgnpM9QgAAKCka1lEqAcDjpUZH5eS7G2q9n5zexvNbii+DW7XUmyEcgEYOn8rclxg4GZ5uZk/3szGb5bGh9l9iSDHP6fybMGz5x4uKb3Ix9DvWgMEUQqoAeXfbmbf3nKAuM5uM767wP/IN3MeYKETcAcAquWdgHteLc1vCMrnxfL9aW0g/R47bjxCubF3uLiIYblv0k0Lfzv+0KIMoLeL2fs71xv04/DLeCqXzEMGBCylCoUjsmP9xXwn3Rasv99P60dSsrxzT6as/FZqZFAaFBw9ArHUd48fcjrjAz5sgOb5Bwpx5QUgM/RPL+XjKOVEL2wMOLcQWPkYLe1H+N7FwLRYn7B+XC0PX2yAG+4Uo4M1YmGs1rLcgAvqd/nljMpIDWgdb93mS7IrAOa5YbG/QJABBOOABSNScpEhlirfb/h4QQExYAAQA2lgg5Hngfvyab6u1spBjMHCiEuKGPgnmVos0CgqL8rvC8iwPOOegeeM0jK+ruT9MKZgKecccZNwQyL10oKv19n6AxnZYLjAxAwg3AOd7fEFv2RYEQu4XQCOf9dAtENrUiygJBNwmdTLWOko8gABPoGYXsJ9KflMXRXCVQwA5IGMLABpHybuLzChd3QZrHPV9eGIYuSDGPhXDwY6aaW06wNVCss7dCsgRVNUHoDRdRBAzQhXVcKkRTvfrK7UYHMPcXysYEvETGKvpt9WvlsBrABUNRyCAQs0KnU7IBogDpQ15SllLMBpMSCSyu5EqhIfBRBFYIjq9syk25lBKtNSECJfY5CFzyUqoexFqY7Axxfl+GGRhtXPWt1GbZSsIoeLHRoooHBz/NbEguIDGSmLKlx7tlevwIW0rCSeEc9H0N0LNWJQgWvBaFfQSh9ry/GdQuJnzd9dsWBGWbddHRFGNoDEOz7cRrEDOBWvsPbs65EKUkS+mzph36Iz9sxVkuorUADIXEEcRtFP1J3CZEElPAFoVBCISk7uWbMAvQ1lT+5XCs8Tnz0FBPRPpd8BjdjRacHNKTRUvcQ8YBpAnCuzAF/xvAUzattJIIgZgahkUOkAsGiILfr+TnGhh9iK5cQMijvPCGw8spqQYrJH0RKVRZQbg4hT/QpFx77YCwCJZ3/A0jmUWAVEJQKPIxzl2qNSyBQULahpMXxQKoL21U95onCBgQcyCwDXQQ0rOv1hI9YNKMn5EzY+kE+2/4X1gAGEiZEmxcwKlamJgpU1TSlr1IlVkaRcDDTK6UY8rBSYJ/QvyBfrpPTC9UGxCgBJpVsOQ/xFOYo9/c7zT+STqopy/4oRTdNSP1amNpi4qt6cLb8fZIEDoGmma6pMNcasjQUCGPPNS/EFzkdiZVKnZA4sSJaP0wOrobp/EIwMoP477vgZ12533sMIg6tdAIKB1hSBsl55jwtGOtZBOzVFbheADesJumBAvj8ZQAXKD8BUgOw2MmSOUD8CoEkRvk+4IHXR/8E7gOi+fZK+gKh3a1elp0fNaVRXfwpAfsTE2kGmOU5RW5l79wABAPw0R1A2Qm3nntmAHH+SZntaWItyQITPZW1XIP46gdCAGorT8MH+uKHibiapmO+i6qpiQ5sm172euesn8fy/RTbMlLYZ+u/4fSI+ZlhY+G0G9BEhS9RTXzsxYMETlgIm4//ePihGgMjL2f2IeVXHNuB/ZgpmfJoeKGtbbKBqNdKkuECcB4mNM0C4AHeMJuXEAkCe+H5LAgAD6RFpZyEAQXmkn9ggQFv6jCamvFG7TxoBywlEMVwG51TDh4dm9wgqMXCPEdsLriBA5YZrOlN0xf9AoxABAssrIFpYri7z4Lv7i4klSrJ6QN96lOLOuNdcA0yL/qICXGb/oOSCvi7RJMINpE4pmu0B4Ufk+xIF6LAZ5TfWrMiGoh2lNarf/nIHivnF236O+TH/53PYoXBpTNchJ8sVYmAiXZ5YfOhDfcQRq8RxZQs2PI4oKjp70L6icOWLFQsX7jfk4Ah2KCsAbKr7ahHMCkmWCkQ5j1tKgJ3ybZOUF54zDBAomyttCMR8RONQOqp2x0mBOIh5Xi0UwrXlzu8dZmrXKYk+EEWpvs4UPQDr7CjFDoiWX6B09vAYjXkXxzIFISml4qN8fqHvqnQy3DdLf/UJnXZQ6Kfyp1hxwc4o09mxR/oq2LK1v4570Bm+VqFrcRbxOBdonvTORH3js1UpFT57nofT89ga1+pCerLQ7GzBOlBzqIf6rAkPECVU73SJaE5xlDvLez0Nj/IbXT+8oX4+scdsfwDX48vlBdECagAAAABJRU5ErkJggg==`

const ColorSwatchComponent = (
  {
    className,
    size = "medium",
    hex,
    imageSrc,
    title,
    wheel = false,
    hoverable = false,
    selected = false,
    onClick,
    ...rest
  }: ColorSwatchProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const anchorRef = useRef<HTMLDivElement | null>(null)

  const _className = bem("ColorSwatch", undefined, {
    wheel,
    hasImage: !!imageSrc,
    hasHex: !!hex,
    size,
    hoverable,
    selected,
  })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={(el) => {
        if (typeof ref === "function") {
          ref(el)
        } else if (ref) {
          ;(ref as preact.RefObject<HTMLDivElement>).current = el
        }
        anchorRef.current = el
      }}
      {...rest}
      onClick={(event) => onClick?.({ event, hex, imageSrc })}
    >
      <div className="ColorSwatch__container">
        {hex && hasOpacity(hex) && (
          <>
            <div
              className="ColorSwatch__fill"
              style={{ backgroundColor: hex?.substring(0, hex.length - 2) }}
            />
            <div
              className="ColorSwatch__fill"
              style={{ backgroundColor: hex }}
            />
          </>
        )}

        {hex && !hasOpacity(hex) && (
          <div className="ColorSwatch__fill" style={{ backgroundColor: hex }} />
        )}

        {imageSrc && (
          <div
            className="ColorSwatch__image"
            style={{
              backgroundImage: `url(${imageSrc})`,
            }}
          />
        )}

        {wheel && !imageSrc && !hex && (
          <div
            className="ColorSwatch__wheel"
            style={{
              backgroundImage: `url(${customBg})`,
            }}
          />
        )}
      </div>

      {title && (
        <OverlayPositioner
          anchorRef={anchorRef as preact.RefObject<HTMLDivElement>}
          placement="bottom"
          trigger="hover"
          paddingY={8}
          visibilityDelay={1000}
          arrow={true}
        >
          <Tooltip>
            <Text intent="neutral-inverted-fixed">{title}</Text>
          </Tooltip>
        </OverlayPositioner>
      )}
    </div>
  )
}

export const ColorSwatch = typedForwardRef<ColorSwatchProps, HTMLDivElement>(
  ColorSwatchComponent
)
