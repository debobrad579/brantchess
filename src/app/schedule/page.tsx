import { Tournament } from "@/components/page/Tournament"
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
          <Tournament tournament={tournament} showCurrent key={tournament.id} />
        ))}
      </div>
    </>
  )
}
