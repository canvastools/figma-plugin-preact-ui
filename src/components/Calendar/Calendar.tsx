import { bem, typedForwardRef } from "../../utils"
import { Calendar as ReactCalendar } from "react-calendar"

import type { CalendarProps, CalendarValue } from "./Calendar.types"
import "./Calendar.scss"

import { Icon } from "../../index"
import { chevronLeft } from "../../index"
import { chevronRight } from "../../index"
import { chevronDoubleLeft } from "../../index"
import { chevronDoubleRight } from "../../index"

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
    onChange,
    onDrillUp,
    onDrillDown,
    onViewChange,
    ...rest
  }: CalendarProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Calendar", undefined)

  return (
    <ReactCalendar
      className={[_className, className].join(" ").trim()}
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
  )
}

export const Calendar = typedForwardRef<CalendarProps, HTMLDivElement>(
  CalendarComponent
)
