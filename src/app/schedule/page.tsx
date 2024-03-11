import { getTournaments } from "@/db/tournaments"
import { format } from "date-fns"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Schedule & Games",
  description: "See the current tournament schedule.",
}

export type Tournament = {
  title: string
  subtitle: string
  defendingChampion: string
  date: {
    from: Date
    to?: Date
  }
  format: string
  timeControl: {
    startingTime: number
    increment: number
  }
}

export default async function SchedulePage() {
  const tournaments = await getTournaments()

  return (
    <>
      <h1 className="text-2xl font-bold">2024 TOURNAMENT SCHEDULE</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {tournaments.map((tournament) => (
          <div key={tournament.id}>
            <h2 className="font-bold text-xl mb-2">{tournament.title}</h2>
            <p>{tournament.subtitle}</p>
            <p>{`Defending Champion: ${tournament.defendingChampion}`}</p>
            <p>
              {tournament.endDate == null
                ? `Starts ${format(tournament.startDate, "MMMM Lo, yyyy")}`
                : `${format(tournament.startDate, "MMMM Lo")} - ${format(
                    tournament.endDate,
                    "MMMM do, y"
                  )}`}
            </p>
            <p>{`Format ${tournament.format}`}</p>
            <p>{`${tournament.startingTime} min + ${tournament.increment} sec`}</p>
          </div>
        ))}
      </div>
    </>
  )
}
