export type CalendarValue = Date | [Date | null, Date | null] | null

export interface CalendarProps {
  className?: string
  locale?: string
  type?: "iso8601" | "islamic" | "hebrew" | "gregory"
  defaultView?: "month" | "year" | "decade" | "century"
  view?: "month" | "year" | "decade" | "century"
  defaultValue?: CalendarValue
  value?: CalendarValue
  minDate?: Date
  maxDate?: Date
  minDetail?: "century" | "decade" | "year" | "month"
  maxDetail?: "century" | "decade" | "year" | "month"
  showNavigation?: boolean
  navigation?: "full" | "simple"
  onChange?: (args: { value: CalendarValue }) => void
  onDetailUp?: (args: {
    action:
      | "onChange"
      | "prev"
      | "prev2"
      | "next"
      | "next2"
      | "drillUp"
      | "drillDown"
    activeStartDate: Date | null
    value: CalendarValue
    view: "month" | "year" | "decade" | "century"
  }) => void
  onDetailDown?: (args: {
    action:
      | "onChange"
      | "prev"
      | "prev2"
      | "next"
      | "next2"
      | "drillUp"
      | "drillDown"
    activeStartDate: Date | null
    value: CalendarValue
    view: "month" | "year" | "decade" | "century"
  }) => void
  onViewChange?: (args: {
    action:
      | "onChange"
      | "prev"
      | "prev2"
      | "next"
      | "next2"
      | "drillUp"
      | "drillDown"
    activeStartDate: Date | null
    value: CalendarValue
    view: "month" | "year" | "decade" | "century"
  }) => void
}
