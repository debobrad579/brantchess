import { Tournament, TournamentSkeleton } from "@/components/page/Tournament"
import { getUpcomingTournaments } from "@/db/tournaments"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Schedule & Games",
  description: "See the upcoming tournament schedule.",
}

export default function SchedulePage() {
  return (
    <>
      <h1 className="text-2xl font-bold">TOURNAMENT SCHEDULE</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Suspense
          fallback={
            <>
              <TournamentSkeleton />
              <TournamentSkeleton />
              <TournamentSkeleton />
              <TournamentSkeleton />
            </>
          }
        >
          <UpcomingTournaments />
        </Suspense>
      </div>
    </>
  )
}

async function UpcomingTournaments() {
  const tournaments = await getUpcomingTournaments()

  return tournaments.map((tournament) => (
    <Tournament tournament={tournament} showCurrent key={tournament.id} />
  ))
}
