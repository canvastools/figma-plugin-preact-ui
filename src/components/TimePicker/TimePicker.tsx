import { Fragment } from 'preact'

import { bem, typedForwardRef } from '../../utils'

import { useEffect, useRef, useState } from 'preact/hooks'

import { TimePicker as ReactTimePicker } from 'react-time-picker'

import { Text, Tooltip } from '../../index'

import type { TimePickerDate, TimePickerProps } from './TimePicker.types'
import './TimePicker.scss'

/* --- */

const TimePickerComponent = (
  {
    id,
    className,
    locale = 'en-US',
    variant = 'default',
    label,
    maxWidth,
    defaultDate = undefined,
    date,
    format = 'HH:mm',
    hourPlaceholder = 'HH',
    minutePlaceholder = 'mm',
    maxTime = '23:59:59',
    minTime = '00:00:00',
    disabled = false,
    autoFocus = false,
    tooltip,
    grouped,
    onTimeChange,
    onBlur,
    onFocus,
    onKeyDown,
    tabIndex,
    ...rest
  }: TimePickerProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const isControlled = date !== undefined

  const normalizeTimeValue = (value: TimePickerDate | undefined) => {
    if (value === null || value === undefined || value === '') return null
    if (typeof value === 'number') return new Date(value)
    return value
  }

  const getTimeString = (value: TimePickerDate | undefined) => {
    const normalized = normalizeTimeValue(value)
    if (!normalized) return ''
    if (typeof normalized === 'string') return normalized
    const hours = normalized.getHours().toString().padStart(2, '0')
    const minutes = normalized.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const toUpdatedDate = (baseDate: Date, timeValue: TimePickerDate | undefined) => {
    const timeString = getTimeString(timeValue)
    if (!timeString) return null
    const [hoursRaw, minutesRaw, secondsRaw] = timeString.split(':')
    const hours = Number(hoursRaw ?? 0)
    const minutes = Number(minutesRaw ?? 0)
    const seconds = Number(secondsRaw ?? 0)
    const nextDate = new Date(baseDate)
    nextDate.setHours(hours, minutes, seconds, 0)
    return nextDate
  }

  const [internalDate, setInternalDate] = useState<TimePickerDate>(() => {
    return normalizeTimeValue(defaultDate ?? null)
  })

  const initialValue = isControlled ? date : internalDate

  const hasValue = (value: TimePickerDate | undefined) => {
    return value !== null && value !== undefined && value !== ''
  }

  const [hasContent, setHasContent] = useState<boolean>(() => {
    return hasValue(initialValue)
  })

  const _className = bem('TimePicker', undefined, {
    filled: hasContent,
    disabled: Boolean(disabled),
    variant,
    label: Boolean(label),
    grouped: Boolean(grouped),
    groupedPosition: grouped ?? undefined,
  })

  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const setRef = <T,>(targetRef: preact.Ref<T> | undefined, value: T | null) => {
    if (!targetRef) return
    if (typeof targetRef === 'function') {
      targetRef(value)
      return
    }
    targetRef.current = value
  }

  const setWrapperRef = (node: HTMLDivElement | null) => {
    wrapperRef.current = node
    setRef(ref, node)
  }

  const commitTime = (nextValue: TimePickerDate) => {
    const currentValue = isControlled ? date : internalDate
    const normalizedValue = normalizeTimeValue(nextValue)
    const timeString = getTimeString(normalizedValue)
    const shouldUseDate = normalizeTimeValue(currentValue) instanceof Date && normalizedValue !== null
    const committedValue =
      shouldUseDate && currentValue instanceof Date ? toUpdatedDate(currentValue, normalizedValue) : normalizedValue
    if (!isControlled) {
      setInternalDate(committedValue)
    }
    setHasContent(hasValue(committedValue))
    onTimeChange?.({
      date: committedValue,
      time: timeString,
    })
  }

  useEffect(() => {
    if (!isControlled) return
    setHasContent(hasValue(date))
  }, [isControlled, date])

  useEffect(() => {
    if (!autoFocus || disabled) return
    const timeout = setTimeout(() => {
      const hourInput = wrapperRef.current?.querySelector<HTMLInputElement>('.react-time-picker__inputGroup__hour')
      hourInput?.focus()
    }, 0)
    return () => clearTimeout(timeout)
  }, [autoFocus, disabled])

  const handleInputGroupMouseDown = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null
    const group = target?.closest('.react-time-picker__inputGroup')
    if (!group) return
    if (target?.closest('input, select, textarea, button')) return
    const hourInput = group.querySelector<HTMLInputElement>('.react-time-picker__inputGroup__hour')
    if (!hourInput) return
    event.preventDefault()
    hourInput.focus()
  }

  const handleContainerFocus = (event: FocusEvent) => {
    const container = (event.currentTarget as HTMLElement) ?? undefined
    const related = event.relatedTarget as Node | null
    if (related && container?.contains(related)) return
    onFocus?.({ ...getCurrentValue(), event })
  }

  const handleContainerBlur = (event: FocusEvent) => {
    const container = (event.currentTarget as HTMLElement) ?? undefined
    const related = event.relatedTarget as Node | null
    const focusStaysInside = related && container?.contains(related)

    if (!focusStaysInside) {
      onBlur?.({ ...getCurrentValue(), event })
    }

    const target = event.target as HTMLInputElement | null
    if (!target) return
    const isHour = target.classList.contains('react-time-picker__inputGroup__hour')
    const isMinute = target.classList.contains('react-time-picker__inputGroup__minute')
    if (!isHour && !isMinute) return
    if (isHour) {
      if (target.value !== '') return
      commitTime(null)
      return
    }
    if (target.value !== '') return
    const group = target.closest('.react-time-picker__inputGroup')
    const hourInput = group?.querySelector<HTMLInputElement>('.react-time-picker__inputGroup__hour')
    if (!hourInput || hourInput.value === '') return
    const hourValue = hourInput.value.padStart(2, '0')
    commitTime(`${hourValue}:00`)
  }

  const getCurrentValue = () => {
    const currentDate = isControlled ? date : internalDate
    return {
      date: normalizeTimeValue(currentDate) ?? undefined,
      time: getTimeString(currentDate),
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key

    onKeyDown?.({ ...getCurrentValue(), event })

    if (key === 'Escape' || key === 'Esc' || key === 'Enter') {
      event.stopPropagation()
      event.preventDefault()

      const target = event.target as HTMLElement | null
      if (target && typeof target.blur === 'function') {
        target.blur()
      }
    }
  }

  return (
    <Fragment>
      <div id={id} className={[_className, className].join(' ').trim()} ref={setWrapperRef}>
        {label && (
          <Text
            className="TimePicker__label"
            intentModifier="secondary"
            size={variant === 'list' ? 'medium' : 'small'}
            truncate
          >
            {label}
          </Text>
        )}
        <div
          className="TimePicker__container"
          data-pui-interactive="true"
          tabIndex={tabIndex}
          onKeyDown={handleKeyDown}
          onMouseDown={handleInputGroupMouseDown}
          onFocus={handleContainerFocus}
          onBlur={handleContainerBlur}
          style={{
            maxWidth: variant === 'default' ? undefined : typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
            flexShrink: variant === 'default' ? undefined : maxWidth ? 0 : undefined,
          }}
        >
          <ReactTimePicker
            {...rest}
            locale={locale}
            value={normalizeTimeValue(isControlled ? date : internalDate)}
            format={format}
            hourPlaceholder={hourPlaceholder}
            minutePlaceholder={minutePlaceholder}
            maxTime={maxTime}
            minTime={minTime}
            disabled={disabled}
            onChange={(e) => {
              commitTime(e as TimePickerDate)
            }}
            disableClock={true}
            clearIcon={null}
          />
        </div>
      </div>
      {tooltip && <Tooltip anchorRef={wrapperRef}>{tooltip}</Tooltip>}
    </Fragment>
  )
}

export const TimePicker = typedForwardRef<TimePickerProps, HTMLDivElement>(TimePickerComponent)
