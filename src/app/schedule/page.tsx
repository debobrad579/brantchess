import { getUpcomingTournaments } from "@/db/tournaments"
import { format } from "date-fns"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Schedule & Games",
  description: "See the current tournament schedule.",
}

export default async function SchedulePage() {
  const tournaments = await getUpcomingTournaments()

  return (
    <>
      <h1 className="text-2xl font-bold">UPCOMING TOURNAMENT SCHEDULE</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {tournaments.map((tournament) => (
          <div key={tournament.id}>
            <h2 className="font-bold text-xl mb-2">{tournament.title}</h2>
            <p>{tournament.subtitle}</p>
            {tournament.defendingChampion != null && (
              <p>{`Defending Champion: ${tournament.defendingChampion}`}</p>
            )}
            <p>
              {tournament.endDate == null
                ? `Starts ${format(tournament.startDate, "MMMM do, y")}`
                : `${format(tournament.startDate, "MMMM do")} - ${format(
                    tournament.endDate,
                    "MMMM do, y"
                  )}`}
            </p>
            <p>{`Format: ${tournament.format}`}</p>
            <p>{`${tournament.startingTime} min + ${tournament.increment} sec`}</p>
          </div>
        ))}
      </div>
    </>
  )
}
