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

export default function SchedulePage() {
  return (
    <>
      <h1 className="text-2xl font-bold">2024 TOURNAMENT SCHEDULE</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {tournaments.map((tournament) => (
          <div key={tournament.title}>
            <h2 className="font-bold text-xl mb-2">{tournament.title}</h2>
            <p>{tournament.subtitle}</p>
            <p>{`Defending Champion: ${tournament.defendingChampion}`}</p>
            <p>
              {tournament.date.to == null
                ? `Starts ${format(tournament.date.from, "MMMM Lo, yyyy")}`
                : `${format(tournament.date.from, "MMMM Lo")} - ${format(
                    tournament.date.to,
                    "MMMM Lo, yyyy"
                  )}`}
            </p>
            <p>{`Format ${tournament.format}`}</p>
            <p>{`${tournament.timeControl.startingTime} min + ${tournament.timeControl.increment} sec`}</p>
          </div>
        ))}
      </div>
    </>
  )
}
