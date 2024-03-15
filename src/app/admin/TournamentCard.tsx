"use client"

import { useState, useTransition } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Separator } from "@/components/ui/separator"
import { FormDateRangePicker } from "@/components/forms/FormDateRangePicker"
import {
  addTournamentAction,
  deleteTournamentAction,
  updateTournamentAction,
} from "./actions"
import { Tournament } from "@prisma/client"
import { Loader2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const formSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().optional(),
  defendingChampion: z.string().optional(),
  date: z.object({
    from: z.date(),
    to: z.date().optional(),
  }),
  format: z.string().min(1),
  timeControl: z.object({
    startingTime: z.coerce.number().int().gt(0),
    increment: z.coerce.number().int(),
  }),
})

export function TournamentCard({ tournaments }: { tournaments: Tournament[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [tournament, setTournament] = useState<Tournament>()

  return (
    <Card>
      <CardHeader className="text-xl font-bold">Tournaments</CardHeader>
      <Separator />
      {isOpen ? (
        <TournamentForm
          tournament={tournament}
          closeForm={() => setIsOpen(false)}
        />
      ) : (
        <ScrollArea className="overflow-auto">
          <CardContent className="p-3 h-[416px] sm:h-[368px]">
            <div className="flex flex-col gap-2">
              {tournaments.map((tournament) => (
                <Button
                  className="whitespace-normal"
                  size="variable"
                  key={tournament.id}
                  variant="outline"
                  type="button"
                  onClick={() => {
                    setTournament(tournament)
                    setIsOpen(true)
                  }}
                >
                  <span>{tournament?.title}</span>
                </Button>
              ))}
              <Button
                className="mb-3"
                type="button"
                size="variable"
                onClick={() => {
                  setTournament(undefined)
                  setIsOpen(true)
                }}
              >
                +
              </Button>
            </div>
          </CardContent>
        </ScrollArea>
      )}
    </Card>
  )
}

function TournamentForm({
  closeForm,
  tournament,
}: {
  closeForm: () => void
  tournament?: Tournament
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: tournament?.title ?? "",
      subtitle: tournament?.subtitle ?? "",
      defendingChampion: tournament?.defendingChampion ?? "",
      date: tournament
        ? {
            from: new Date(tournament.startDate),
            to: tournament?.endDate ? new Date(tournament.endDate) : undefined,
          }
        : undefined,
      format: tournament?.format ?? "",
      timeControl: {
        startingTime: tournament?.startingTime ?? 15,
        increment: tournament?.increment ?? 10,
      },
    },
  })
  const isLarge = useMediaQuery("(min-width: 400px)")
  const [isSubmitting, startSubmittingTransition] = useTransition()
  const [isDeleting, startDeletingTransition] = useTransition()

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startSubmittingTransition(async () => {
            const newData = {
              title: data.title,
              subtitle: data.subtitle || null,
              defendingChampion: data.defendingChampion || null,
              startDate: data.date.from,
              endDate: data.date.to || null,
              format: data.format,
              startingTime: data.timeControl.startingTime,
              increment: data.timeControl.increment,
            }
            if (tournament == null) {
              await addTournamentAction(newData)
            } else {
              await updateTournamentAction(newData, tournament.id)
            }

            closeForm()
          })
        })}
      >
        <CardContent className="space-y-2 p-3">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2 items-center">
                  <FormLabel className="w-24 min-w-24">Title:</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subtitle"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2 items-center">
                  <FormLabel className="w-24 min-w-24">Subtitle:</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="defendingChampion"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2 items-center">
                  <FormLabel className="w-24 min-w-24">Defending:</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
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
                  />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="format"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2 items-center">
                  <FormLabel className="w-24 min-w-24">Format:</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timeControl"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2 items-center">
                  <FormLabel className="w-24 min-w-24">Time Control:</FormLabel>
                  <div className="flex gap-2 items-center w-full">
                    <FormControl>
                      <Input
                        value={field.value?.startingTime}
                        onChange={(e) =>
                          field.onChange({
                            ...field.value,
                            startingTime: e.target.value,
                          })
                        }
                        name="startingValue"
                      />
                    </FormControl>
                    <span className="whitespace-nowrap text-muted-foreground">
                      {isLarge ? "min +" : "+"}
                    </span>
                    <Input
                      value={field.value?.increment}
                      onChange={(e) =>
                        field.onChange({
                          ...field.value,
                          increment: e.target.value,
                        })
                      }
                      name="increment"
                    />
                    {isLarge && (
                      <span className="text-muted-foreground">sec</span>
                    )}
                  </div>
                </div>
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2 p-3">
          <Button className="flex-1" disabled={isSubmitting || isDeleting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {tournament
              ? isSubmitting
                ? "Saving"
                : "Save"
              : isSubmitting
              ? "Adding"
              : "Add"}
          </Button>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              type="button"
              onClick={closeForm}
              disabled={isSubmitting || isDeleting}
              className="flex-1"
            >
              Discard
            </Button>
            {tournament && (
              <Dialog>
                <DialogTrigger className="flex-1" tabIndex={-1}>
                  <Button
                    variant="destructive"
                    disabled={isSubmitting || isDeleting}
                    className="w-full"
                    type="button"
                  >
                    Delete
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Are you sure you want to delete this tournament?
                    </DialogTitle>
                  </DialogHeader>
                  <Button
                    variant="destructive"
                    disabled={isSubmitting || isDeleting}
                    type="button"
                    onClick={() => {
                      startDeletingTransition(async () => {
                        await deleteTournamentAction(tournament.id)
                        closeForm()
                      })
                    }}
                  >
                    {isDeleting && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {isDeleting ? "Deleteing" : "Delete"}
                  </Button>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </CardFooter>
      </form>
    </Form>
  )
}
