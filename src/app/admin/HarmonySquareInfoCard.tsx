"use client"

import { FormDateRangePicker } from "@/components/forms/FormDateRangePicker"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
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
import { getMonth, isThursday, isTuesday } from "date-fns"
import { Loader2 } from "lucide-react"
import { Fragment, useTransition } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { updateHarmonySquarePageAction } from "./actions"
import type { HarmonySquareInformation } from "@prisma/client"

const formSchema = z.object({
  date: z.object({
    from: z.date(),
    to: z.date(),
  }),
  tournaments: z.array(
    z.object({
      title: z.string(),
      url: z.string(),
    })
  ),
})

export function HarmonySquareInfoCard({
  harmonySquareInfo,
}: {
  harmonySquareInfo: HarmonySquareInformation
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: {
        from: new Date(harmonySquareInfo.startDate),
        to: new Date(harmonySquareInfo.endDate),
      },
      tournaments: harmonySquareInfo.tournamentTitles.map((title, index) => ({
        title,
        url: harmonySquareInfo.tournamentUrls[index],
      })),
    },
  })

  const [isSaving, startSavingTransition] = useTransition()

  return (
    <Card className="flex-1">
      <CardHeader className="text-xl font-bold">
        Harmony Square Information
      </CardHeader>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            startSavingTransition(async () => {
              await updateHarmonySquarePageAction({
                startDate: data.date.from,
                endDate: data.date.to,
                tournamentTitles: data.tournaments.map((pair) => pair.title),
                tournamentUrls: data.tournaments.map((pair) => pair.url),
              })
            })
          })}
        >
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
            <Separator />
            <h2 className="font-bold">Tournaments</h2>
            <FormField
              control={form.control}
              name="tournaments"
              render={({ field }) => (
                <>
                  {field.value.map((value, index) => (
                    <Fragment key={index}>
                      <Separator />
                      <FormItem>
                        <div className="flex gap-2 items-center">
                          <FormLabel className="w-24 min-w-24">
                            Title:
                          </FormLabel>
                          <FormControl>
                            <Input
                              value={value.title}
                              onChange={(e) => {
                                let newValue = field.value
                                newValue[index].title = e.target.value
                                field.onChange(newValue)
                              }}
                            />
                          </FormControl>
                        </div>
                      </FormItem>
                      <FormItem>
                        <div className="flex gap-2 items-center">
                          <FormLabel className="w-24 min-w-24">URL:</FormLabel>
                          <FormControl>
                            <Input
                              value={value.url}
                              onChange={(e) => {
                                let newValue = field.value
                                newValue[index].url = e.target.value
                                field.onChange(newValue)
                              }}
                            />
                          </FormControl>
                        </div>
                      </FormItem>
                    </Fragment>
                  ))}
                  <Separator />
                  <div className="display flex gap-2">
                    <Button
                      className="w-full"
                      type="button"
                      onClick={() =>
                        field.onChange([...field.value, { title: "", url: "" }])
                      }
                    >
                      +
                    </Button>
                    <Button
                      className="w-full"
                      variant="destructive"
                      type="button"
                      onClick={() => field.onChange(field.value.slice(0, -1))}
                    >
                      -
                    </Button>
                  </div>
                  <Separator />
                </>
              )}
            />
          </CardContent>
          <CardFooter className="flex gap-2 p-3 pt-0">
            <Button disabled={isSaving} className="flex-1">
              {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSaving ? "Saving" : "Save"}
            </Button>
            <Button
              disabled={isSaving}
              variant="secondary"
              type="button"
              onClick={() => form.reset()}
            >
              Discard
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
