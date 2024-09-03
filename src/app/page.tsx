import { Tournament, TournamentSkeleton } from "@/components/page/Tournament"
import { getHomePageInfo } from "@/db/home"
import { getUpcomingTournaments } from "@/db/tournaments"
import { isAfter } from "date-fns"
import { Suspense } from "react"

export default async function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold">
        WELCOME TO THE BRANTFORD CHESS CLUB CELEBRATING OVER 100 YEARS OF CHESS!
      </h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        <Suspense fallback="Loading...">
          <ClubInfoSection />
        </Suspense>
        <Suspense
          fallback={
            <div className="flex-1 basis-0 space-y-6">
              <div className="w-32 h-6 rounded bg-foreground/20 animate-pulse" />
              <TournamentSkeleton />
              <TournamentSkeleton />
            </div>
          }
        >
          <EventSection />
        </Suspense>
      </div>
    </>
  )
}

async function ClubInfoSection() {
  const homeInfo = (await getHomePageInfo())!

  return (
    <div className="flex-grow-[2] basis-0 space-y-4">
      <h2 className="text-xl font-bold">
        We Are Located At{" "}
        <a
          href={homeInfo?.locationUrl}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          {homeInfo?.location}
        </a>
      </h2>
      <div
        dangerouslySetInnerHTML={{ __html: homeInfo?.content }}
        className="space-y-4"
        id="home-info"
      />
    </div>
  )
}

async function EventSection() {
  const today = new Date()
  const tournaments = (await getUpcomingTournaments()).filter(
    (tournament) =>
      tournament.endDate == null || isAfter(tournament.endDate, today)
  )
  const firstCurrent =
    tournaments.length >= 1 ? isAfter(today, tournaments[0].startDate) : null
  const secondCurrent =
    tournaments.length >= 2 ? isAfter(today, tournaments[1].startDate) : null

  return (
    <div className="flex-1 basis-0 space-y-4">
      <h2 className="text-xl font-bold">
        {firstCurrent && secondCurrent
          ? "Current Events"
          : firstCurrent
          ? "Current Event"
          : "Upcoming Events"}
      </h2>
      {firstCurrent != null && <Tournament tournament={tournaments[0]} />}
      {firstCurrent && !secondCurrent && secondCurrent != null && (
        <h2 className="text-xl font-bold">Next Event</h2>
      )}
      {secondCurrent != null && <Tournament tournament={tournaments[1]} />}
    </div>
  )
}
