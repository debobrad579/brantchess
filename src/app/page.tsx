import { Tournament } from "@/components/page/Tournament"
import { getHomePageInfo } from "@/db/home"
import { getCurrentTournaments, getNextTournaments } from "@/db/tournaments"
import { isAfter, isBefore } from "date-fns"

export default async function Home() {
  const homeInfo = (await getHomePageInfo())!
  const currentTournaments = await getCurrentTournaments()
  const nextTournaments = await getNextTournaments()

  return (
    <>
      <h1 className="text-2xl font-bold">
        WELCOME TO THE BRANTFORD CHESS CLUB CELEBRATING OVER 100 YEARS OF CHESS!
      </h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-grow-[2] basis-0 space-y-4">
          <h2 className="text-xl font-bold">
            We Are Located At{" "}
            <a href={homeInfo?.locationUrl} target="_blank">
              {homeInfo?.location}
            </a>
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: homeInfo?.content }}
            className="space-y-4"
          />
        </div>
        <div className="flex-1 basis-0 space-y-4">
          {currentTournaments.length === 1 && (
            <h2 className="text-xl font-bold">Current Event</h2>
          )}
          {currentTournaments.length > 1 && (
            <h2 className="text-xl font-bold">Current Events</h2>
          )}
          {currentTournaments.map((currentTournament) => (
            <Tournament
              tournament={currentTournament}
              key={currentTournament.id}
            />
          ))}
          {currentTournaments.length === 1 && (
            <>
              <h2 className="text-xl font-bold">Next Event</h2>
              <Tournament tournament={nextTournaments[0]} />
            </>
          )}
          {currentTournaments.length === 0 && (
            <>
              <h2 className="text-xl font-bold">Upcoming Events</h2>
              {nextTournaments.map((nextTournament) => (
                <Tournament
                  tournament={nextTournament}
                  key={nextTournament.id}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}
