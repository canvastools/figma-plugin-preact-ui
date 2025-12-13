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
    calendarType = "iso8601",
    defaultView = "month",
    view,
    defaultValue = null,
    value = null,
    minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
    maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 5)),
    minDetail = "century",
    maxDetail = "month",
    navigation = "full",
    onChange,
    onDrillUp,
    onDrillDown,
    onViewChange,
    ...rest
  }: CalendarProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Calendar", undefined, { navigation })

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
        calendarType={calendarType}
        defaultView={defaultView}
        view={view}
        defaultValue={defaultValue}
        value={value}
        minDate={minDate}
        maxDate={maxDate}
        minDetail={minDetail}
        maxDetail={maxDetail}
        prevLabel={<Icon glyph={chevronLeft} variant="scaled" interactive />}
        prev2Label={
          <Icon glyph={chevronDoubleLeft} variant="scaled" interactive />
        }
        nextLabel={<Icon glyph={chevronRight} variant="scaled" interactive />}
        next2Label={
          <Icon glyph={chevronDoubleRight} variant="scaled" interactive />
        }
        onChange={(e) => {
          onChange?.({ value: e })
        }}
        onDrillUp={(e) => {
          onDrillUp?.({ ...e })
        }}
        onDrillDown={(e) => {
          onDrillDown?.({ ...e })
        }}
        onViewChange={(e) => {
          onViewChange?.({ ...e })
        }}
        {...rest}
      />
    </div>
  )
}

export const Calendar = typedForwardRef<CalendarProps, HTMLDivElement>(
  CalendarComponent
)
