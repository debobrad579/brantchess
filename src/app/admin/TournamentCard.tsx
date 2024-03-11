"use client"

import { FormEvent, useState } from "react"
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
import { addTournamentAction } from "./actions"
import { Tournament } from "@prisma/client"

const formSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  defendingChampion: z.string(),
  date: z.object({
    from: z.date(),
    to: z.date().optional(),
  }),
  format: z.string(),
  startingTime: z.coerce.number().int(),
  increment: z.coerce.number().int(),
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
          <CardContent className="p-3 h-[416px]">
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
      date: {
        from: tournament?.startDate,
        to: tournament?.endDate || undefined,
      },
      format: tournament?.format ?? "",
      startingTime: tournament?.startingTime ?? 15,
      increment: tournament?.increment ?? 10,
    },
  })
  const isLarge = useMediaQuery("(min-width: 400px)")

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          addTournamentAction({
            title: data.title,
            subtitle: data.subtitle || null,
            defendingChampion: data.defendingChampion,
            startDate: data.date.from,
            endDate: data.date.to || null,
            format: data.format,
            startingTime: data.startingTime,
            increment: data.increment,
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
          <div className="flex gap-2 justify-stretch">
            <FormField
              control={form.control}
              name="startingTime"
              render={({ field }) => (
                <FormItem className="flex-1 basis-24">
                  <div className="flex gap-2 items-center">
                    <FormLabel className="w-24 min-w-24">
                      Time Control:
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <span className="whitespace-nowrap text-muted-foreground">
                      {isLarge ? "min +" : "+"}
                    </span>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="increment"
              render={({ field }) => (
                <FormItem className="flex-1 basis-0">
                  <div className="flex gap-2 items-center">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    {isLarge && (
                      <span className="text-muted-foreground">sec</span>
                    )}
                  </div>
                </FormItem>
              )}
            />
          </div>
          {/* <FormField
            control={form.control}
            name="timeControl"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2 items-center">
                  <FormLabel className="w-24 min-w-24">Time Control:</FormLabel>
                  <FormControl>
                    <div className="flex gap-2 items-center w-full">
                      <Input
                        value={field.value?.startingTime}
                        onChange={field.onChange}
                      />
                      <span className="whitespace-nowrap text-muted-foreground">
                        {isLarge ? "min +" : "+"}
                      </span>
                      <Input
                        value={field.value?.increment}
                        onChange={field.onChange}
                      />
                      {isLarge && (
                        <span className="text-muted-foreground">sec</span>
                      )}
                    </div>
                  </FormControl>
                </div>
              </FormItem>
            )}
          /> */}
        </CardContent>
        <CardFooter className="flex gap-2 p-3">
          <Button className="flex-1">{tournament ? "Save" : "Add"}</Button>
          <Button variant="secondary" type="button" onClick={closeForm}>
            Discard
          </Button>
          {tournament && (
            <Button variant="destructive">{isLarge ? "Delete" : "Del"}</Button>
          )}
        </CardFooter>
      </form>
    </Form>
  )
}
