"use client"

import { FormDateRangePicker } from "@/components/forms/FormDateRangePicker"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  getMonth,
  isThursday,
  isTuesday,
  addMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  addDays,
  nextTuesday,
  addWeeks,
  previousThursday,
  endOfWeek,
  previousTuesday,
} from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  date: z.object({
    from: z.date(),
    to: z.date(),
  }),
})

export function HarmonySquareInfoCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: {
        from: getFirstTuesdayOfNextJuly(),
        to: getLastThursdayOfNextAugest(),
      },
    },
  })

  return (
    <Card className="flex-1">
      <CardHeader className="text-xl font-bold">
        Harmony Square Information
      </CardHeader>
      <Separator />
      <Form {...form}>
        <form>
          <CardContent className="space-y-2 p-3">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-2 items-center">
                    <FormLabel className="w-24 min-w-24">Date:</FormLabel>
                    <FormDateRangePicker
                      date={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        (!isTuesday(date) && !isThursday(date)) ||
                        (getMonth(date) !== 6 && getMonth(date) !== 7)
                      }
                    />
                  </div>
                </FormItem>
              )}
            />
          </CardContent>
        </form>
      </Form>
    </Card>
  )
}

function getFirstTuesdayOfNextJuly() {
  const currentDate = new Date()

  const nextJuly = addMonths(
    startOfMonth(currentDate),
    6 - getMonth(currentDate)
  )

  return nextTuesday(addWeeks(startOfMonth(nextJuly), 1))
}

function getLastThursdayOfNextAugest() {
  const currentDate = new Date()

  const nextAugest = addMonths(
    startOfMonth(currentDate),
    7 - getMonth(currentDate)
  )

  return previousTuesday(endOfMonth(nextAugest))
}
