"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { updateHomePageAction } from "./actions"
import { HomeInformation } from "@prisma/client"
import { AutosizeTextarea } from "@/components/ui/autoresize-textarea"
import { AdminFormField } from "@/components/page/AdminFormField"

const formSchema = z.object({
  location: z.string().min(1),
  locationUrl: z.string().min(1),
  content: z.string().min(1),
})

export function ClubInfoCard({ homeInfo }: { homeInfo: HomeInformation }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: homeInfo.location,
      locationUrl: homeInfo.locationUrl,
      content: homeInfo.content,
    },
  })

  const [isSaving, startSavingTransition] = useTransition()

  return (
    <Card className="flex-1">
      <CardHeader className="text-xl font-bold">
        Home Page Information
      </CardHeader>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            startSavingTransition(async () => {
              await updateHomePageAction(data)
            })
          })}
        >
          <CardContent className="space-y-2 p-3">
            <AdminFormField
              control={form.control}
              name="location"
              label="Location:"
            />
            <AdminFormField
              control={form.control}
              name="locationUrl"
              label="Location URL:"
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Home Content:</FormLabel>
                  <FormControl>
                    <AutosizeTextarea className="resize-none" {...field} />
                  </FormControl>
                </FormItem>
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
