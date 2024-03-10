import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { FormControl } from "../ui/form"
import { Button } from "../ui/button"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "../ui/calendar"
import type { Matcher, SelectRangeEventHandler } from "react-day-picker"

export function FormDateRangePicker({
  date,
  onSelect,
  disabled,
  defaultMonth,
}: {
  date: { from: Date; to: Date }
  onSelect: SelectRangeEventHandler
  disabled?: Matcher | Matcher[]
  defaultMonth?: Date
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            className={cn(
              "w-full min-w-0 flex justify-between gap-2 p-2",
              !date && "text-muted-foreground"
            )}
          >
            <div className="overflow-hidden">
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                ""
              )}
            </div>
            <CalendarIcon className="text-muted-foreground min-h-4 min-w-4 w-4 h-4" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          defaultMonth={defaultMonth ?? date?.from}
          selected={date}
          onSelect={onSelect}
          disabled={disabled}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
