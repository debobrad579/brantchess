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
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { isWednesday } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  location: z.string(),
  date: z.object({
    from: z.date(),
    to: z.date(),
  }),
  homeText: z.string(),
})

export function ClubInfoCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "10 Albion St. Brantford, Grace Anglican Church, Lower Level",
    },
  })

  return (
    <Card className="flex-1">
      <CardHeader className="text-xl font-bold">Club Information</CardHeader>
      <Separator />
      <Form {...form}>
        <form>
          <CardContent className="space-y-2 p-3">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-2 items-center">
                    <FormLabel className="w-24 min-w-24">Location:</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="homeText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Home Content</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <div className="flex gap-2 items-center">
                  <FormLabel className="w-24 min-w-24">Date:</FormLabel>
                  <FormDateRangePicker
                    date={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => !isWednesday(date)}
                  />
                </div>
              )}
            /> */}
          </CardContent>
        </form>
      </Form>
    </Card>
  )
}
