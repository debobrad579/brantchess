import { Tournament } from "@prisma/client"
import { format, isAfter, isBefore, isEqual } from "date-fns"

export function Tournament({
  tournament,
  showCurrent = false,
}: {
  tournament: Tournament
  showCurrent?: boolean
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <h2 className="font-bold text-xl">{tournament.title}</h2>
        {showCurrent &&
          isAfter(new Date(), tournament.startDate) &&
          (tournament.endDate == null ||
            isBefore(new Date(), tournament.endDate)) && (
            <h3 className="font-bold text-lg">(Current)</h3>
          )}
      </div>
      <p>{tournament.subtitle}</p>
      {tournament.defendingChampion != null && (
        <p>{`Defending Champion: ${tournament.defendingChampion}`}</p>
      )}
      <p>
        {tournament.endDate == null
          ? `Starts ${format(tournament.startDate, "MMMM do, y")}`
          : isEqual(tournament.startDate, tournament.endDate)
          ? format(tournament.startDate, "MMMM do, y")
          : `${format(tournament.startDate, "MMMM do")} - ${format(
              tournament.endDate,
              "MMMM do, y"
            )}`}
      </p>
      <p>{`Format: ${tournament.format}`}</p>
      <p>{`${tournament.startingTime} min + ${tournament.increment} sec`}</p>
    </div>
  )
}

export function TournamentSkeleton() {
  return (
    <div className="animate-pulse space-y-2 overflow-hidden">
      <div className="w-[22rem] h-6 rounded bg-foreground/20 mb-4" />
      <div className="w-72 h-4 rounded bg-foreground/20" />
      <div className="w-64 h-4 rounded bg-foreground/20" />
      <div className="w-[17rem] h-4 rounded bg-foreground/20" />
      <div className="w-60 h-4 rounded bg-foreground/20" />
    </div>
  )
}
