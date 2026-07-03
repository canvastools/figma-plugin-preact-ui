import { bem, typedForwardRef } from '../../utils'

import { Calendar as ReactCalendar } from 'react-calendar'

import { Icon } from '../Icon/Icon'
import { chevronLeft, chevronRight, chevronDoubleLeft, chevronDoubleRight } from '../Icon/glyphs'

import type { CalendarProps } from './Calendar.types'
import './Calendar.scss'

/* --- */

const CalendarComponent = (
  {
    id,
    className,
    locale = 'en-US',
    type = 'iso8601',
    defaultView = 'month',
    view,
    defaultDate = null,
    // No default here: `undefined` keeps the calendar uncontrolled (selection
    // is stored internally), while an explicit `null` means "controlled,
    // nothing selected". react-calendar treats these differently.
    date,
    minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
    maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 5)),
    minDetail = 'century',
    maxDetail = 'month',
    showNavigation = true,
    navigation = 'full',
    onDateChange,
    onDetailUp,
    onDetailDown,
    onViewChange,
    ...rest
  }: CalendarProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const _className = bem('Calendar', undefined, {
    navigation: showNavigation ? navigation : undefined,
  })

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key

    if (key === 'Escape' || key === 'Esc') {
      event.stopPropagation()
      event.preventDefault()

      const target = event.target as HTMLElement | null
      if (target && typeof target.blur === 'function') {
        target.blur()
      }
    }
  }

  return (
    <div id={id} className={className} ref={ref} onKeyDown={handleKeyDown} data-pui-interactive="true">
      <ReactCalendar
        className={_className}
        locale={locale}
        calendarType={type}
        defaultView={defaultView}
        view={view}
        defaultValue={defaultDate}
        value={date}
        minDate={minDate}
        maxDate={maxDate}
        minDetail={minDetail}
        maxDetail={maxDetail}
        prevLabel={<Icon glyph={chevronLeft} />}
        prev2Label={<Icon glyph={chevronDoubleLeft} />}
        nextLabel={<Icon glyph={chevronRight} />}
        next2Label={<Icon glyph={chevronDoubleRight} />}
        onChange={(e) => {
          onDateChange?.({ date: e })
        }}
        onDrillUp={(e) => {
          const { value: date, ...payload } = e
          onDetailUp?.({ ...payload, date })
        }}
        onDrillDown={(e) => {
          const { value: date, ...payload } = e
          onDetailDown?.({ ...payload, date })
        }}
        onViewChange={(e) => {
          const { value: date, ...payload } = e
          onViewChange?.({ ...payload, date })
        }}
        {...rest}
      />
    </div>
  )
}

export const Calendar = typedForwardRef<CalendarProps, HTMLDivElement>(CalendarComponent)
