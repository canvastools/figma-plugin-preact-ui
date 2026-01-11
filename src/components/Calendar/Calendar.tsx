import { bem, typedForwardRef } from "../../utils"

import { Calendar as ReactCalendar } from "react-calendar"

import type { CalendarProps } from "./Calendar.types"
import "./Calendar.scss"

import {
  Icon,
  chevronLeft,
  chevronRight,
  chevronDoubleLeft,
  chevronDoubleRight,
} from "../../index"

/* --- */

const CalendarComponent = (
  {
    className,
    locale = "en-US",
    type = "iso8601",
    defaultView = "month",
    view,
    defaultValue = null,
    value = null,
    minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
    maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 5)),
    minDetail = "century",
    maxDetail = "month",
    showNavigation = true,
    navigation = "full",
    onChange,
    onDetailUp,
    onDetailDown,
    onViewChange,
    ...rest
  }: CalendarProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Calendar", undefined, {
    navigation: showNavigation ? navigation : undefined,
  })

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key

    if (key === "Escape" || key === "Esc") {
      event.stopPropagation()
      event.preventDefault()

      const target = event.target as HTMLElement | null
      if (target && typeof target.blur === "function") {
        target.blur()
      }
    }
  }

  const ReactCalendarAny = ReactCalendar as any

  return (
    <div onKeyDown={handleKeyDown}>
      <ReactCalendar
        className={[_className, "no-drag", className].join(" ").trim()}
        inputRef={ref as preact.Ref<HTMLDivElement> | undefined}
        locale={locale}
        calendarType={type}
        defaultView={defaultView}
        view={view}
        defaultValue={defaultValue}
        value={value}
        minDate={minDate}
        maxDate={maxDate}
        minDetail={minDetail}
        maxDetail={maxDetail}
        prevLabel={<Icon glyph={chevronLeft} variant="scaled" />}
        prev2Label={<Icon glyph={chevronDoubleLeft} variant="scaled" />}
        nextLabel={<Icon glyph={chevronRight} variant="scaled" />}
        next2Label={<Icon glyph={chevronDoubleRight} variant="scaled" />}
        onChange={(e) => {
          onChange?.({ value: e })
        }}
        onDrillUp={(e) => onDetailUp?.({ ...e })}
        onDrillDown={(e) => onDetailDown?.({ ...e })}
        onViewChange={(e) => onViewChange?.({ ...e })}
        {...rest}
      />
    </div>
  )
}

export const Calendar = typedForwardRef<CalendarProps, HTMLDivElement>(
  CalendarComponent
)
