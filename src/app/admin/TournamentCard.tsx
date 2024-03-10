"use client"

import { useState } from "react"
import type { Tournament } from "../schedule/page"
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

const formSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  defendingChampion: z.string(),
  date: z.object({
    from: z.date(),
    to: z.date(),
  }),
  format: z.string(),
  timeControl: z.object({
    startingTime: z.number(),
    increment: z.number(),
  }),
})

export const tournaments: Tournament[] = [
  {
    title: "2024 Leo McMahon Memorial",
    subtitle:
      "2024 Championship Qualifiers (Top 8 play for the A championship, all others play for the Reserve championship)",
    defendingChampion: "Robin Johnston",
    date: {
      from: new Date("2024-03-13"),
      to: new Date("2024-04-10"),
    },
    format: "5 round Swiss",
    timeControl: {
      startingTime: 45,
      increment: 15,
    },
  },
  {
    title: "2024 Junior Championship",
    subtitle: "Top two finishers from Kari Nurmi qualifier above.",
    defendingChampion: "Matéo Marut",
    date: {
      from: new Date("2024-04-10"),
      to: new Date("2024-04-17"),
    },
    format: "4 game match",
    timeControl: {
      startingTime: 15,
      increment: 10,
    },
  },
  {
    title: "2024 Reserve Championship",
    subtitle: "",
    defendingChampion: "Josh Clarizio",
    date: {
      from: new Date("2024-05-01"),
    },
    format: "7 Round Swiss",
    timeControl: {
      startingTime: 45,
      increment: 15,
    },
  },
  {
    title: "2024 Tanz - Napierala Championship Cup",
    subtitle: "",
    defendingChampion: "John Vlasov",
    date: {
      from: new Date("2024-05-01"),
    },
    format: "8 player Round Robin",
    timeControl: {
      startingTime: 60,
      increment: 30,
    },
  },
]

export function TournamentCard() {
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
          <CardContent className="p-3 h-[368px]">
            <div className="flex flex-col gap-2">
              {tournaments.map((tournament) => (
                <Button
                  className="whitespace-normal"
                  size="variable"
                  key={tournament.title}
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
      title: tournament?.title,
      subtitle: tournament?.subtitle,
      defendingChampion: tournament?.defendingChampion,
      date: tournament?.date,
      format: tournament?.format,
      timeControl: tournament?.timeControl,
    },
  })
  const isLarge = useMediaQuery("(min-width: 350px)")

  return (
    <Form {...form}>
      <form>
        <CardContent className="space-y-2 p-3">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <div className="flex gap-2 items-center">
                <FormLabel className="w-24 min-w-24">Title:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="subtitle"
            render={({ field }) => (
              <div className="flex gap-2 items-center">
                <FormLabel className="w-24 min-w-24">Subtitle:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="defendingChampion"
            render={({ field }) => (
              <div className="flex gap-2 items-center">
                <FormLabel className="w-24 min-w-24">Defending:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </div>
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
          />
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
