"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { getYear } from "date-fns"
import type { Champion } from "@prisma/client"
import {
  addYearToChampionAction,
  createChampionAction,
  deleteChampionAction,
  removeYearFromChampionAction,
} from "./actions"
import { useTransition } from "react"
import { Loader2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AdminFormField } from "@/components/page/AdminFormField"

const formSchema = z.object({
  name: z.object({
    firstInitial: z.string().length(1),
    lastName: z.string().min(1),
  }),
  year: z.coerce.number().int().min(1954).max(getYear(new Date())),
})

export function ChampionsCard({ champions }: { champions: Champion[] }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: {
        firstInitial: "",
        lastName: "",
      },
      year: getYear(new Date()),
    },
  })
  const [isAdding, startAddingTransition] = useTransition()
  const [isDeleting, startDeletingTransition] = useTransition()

  return (
    <Card className="flex-1">
      <CardHeader className="text-xl font-bold">Champions</CardHeader>
      <Separator />
      <CardContent className="p-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              if (
                champions.find(
                  (champion) =>
                    (champion.firstInitial !== data.name.firstInitial ||
                      champion.lastName !== data.name.lastName) &&
                    champion.years.includes(data.year)
                ) != null
              )
                return form.setError("year", {
                  type: "manual",
                  message: "Year already has a champion",
                })

              const newData = {
                firstInitial: data.name.firstInitial,
                lastName: data.name.lastName,
                year: data.year,
              }

              startAddingTransition(async () => {
                if (
                  champions.find(
                    (champion) =>
                      champion.firstInitial === newData.firstInitial &&
                      champion.lastName === newData.lastName &&
                      champion.years.includes(newData.year) &&
                      champion.years.length === 1
                  ) != null
                ) {
                  return await deleteChampionAction(
                    newData.firstInitial,
                    newData.lastName
                  )
                }
                if (
                  champions.find(
                    (champion) =>
                      champion.firstInitial === newData.firstInitial &&
                      champion.lastName === newData.lastName &&
                      champion.years.includes(newData.year)
                  ) != null
                ) {
                  return await removeYearFromChampionAction(newData)
                }
                if (
                  champions.find(
                    (champion) =>
                      champion.firstInitial === newData.firstInitial &&
                      champion.lastName === newData.lastName
                  ) != null
                ) {
                  return await addYearToChampionAction(newData)
                }
                await createChampionAction(newData)
              })
            })}
            className="space-y-2"
          >
            <AdminFormField
              control={form.control}
              name="name"
              label="Name:"
              render={(field) => (
                <>
                  <FormControl>
                    <Input
                      className="w-8"
                      value={field.value?.firstInitial}
                      onChange={(e) =>
                        field.onChange({
                          ...field.value,
                          firstInitial: e.target.value,
                        })
                      }
                      name="firstInitial"
                      autoComplete="off"
                    />
                  </FormControl>
                  <Input
                    value={field.value?.lastName}
                    onChange={(e) =>
                      field.onChange({
                        ...field.value,
                        lastName: e.target.value,
                      })
                    }
                    name="lastName"
                    autoComplete="off"
                  />
                  {champions.find(
                    (champion) =>
                      champion.firstInitial === field.value.firstInitial &&
                      champion.lastName === field.value.lastName
                  ) && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="destructive"
                          type="button"
                          disabled={isAdding || isDeleting}
                        >
                          Delete
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            Are you sure you want to delete this champion?
                          </DialogTitle>
                        </DialogHeader>
                        <Button
                          disabled={isDeleting}
                          variant="destructive"
                          type="button"
                          onClick={() =>
                            startDeletingTransition(async () => {
                              await deleteChampionAction(
                                field.value.firstInitial,
                                field.value.lastName
                              )
                            })
                          }
                        >
                          {isDeleting && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          )}
                          {isDeleting ? "Deleteing" : "Delete"}
                        </Button>
                      </DialogContent>
                    </Dialog>
                  )}
                </>
              )}
            />
            <AdminFormField
              control={form.control}
              name="year"
              label="Year:"
              render={(field) => (
                <>
                  <FormControl>
                    <Input {...field} autoComplete="off" />
                  </FormControl>
                  <Button disabled={isDeleting || isAdding}>
                    {isAdding && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {champions.find(
                      (champion) =>
                        champion.firstInitial ===
                          form.getValues().name.firstInitial &&
                        champion.lastName === form.getValues().name.lastName &&
                        champion.years.includes(Number(field.value))
                    )
                      ? isAdding
                        ? "Removing"
                        : "Remove"
                      : isAdding
                      ? "Adding"
                      : "Add"}
                  </Button>
                </>
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
