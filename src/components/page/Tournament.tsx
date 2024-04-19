import { Tournament } from "@prisma/client"
import { addWeeks, format, isAfter, isBefore, isEqual } from "date-fns"

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
