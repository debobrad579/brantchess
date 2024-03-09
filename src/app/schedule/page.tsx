import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Schedule & Games",
  description: "See the current tournament schedule.",
}

type Tournament = {
  title: string
  specificInfo: string
  defendingChampion: string
  date: string
  format: string
  timeControl: {
    startingTime: number
    increment: number
  }
}

const tournaments: Tournament[] = [
  {
    title: "2024 Leo McMahon Memorial",
    specificInfo:
      "2024 Championship Qualifiers (Top 8 play for the A championship, all others play for the Reserve championship)",
    defendingChampion: "Robin Johnston",
    date: "March 13 - April 10, 2024",
    format: "5 round Swiss",
    timeControl: {
      startingTime: 45,
      increment: 15,
    },
  },
  {
    title: "2024 Junior Championship",
    specificInfo: "Top two finishers from Kari Nurmi qualifier above.",
    defendingChampion: "Matéo Marut",
    date: "Starts April 10 - 17, 2024",
    format: "4 game match",
    timeControl: {
      startingTime: 15,
      increment: 10,
    },
  },
  {
    title: "2024 Reserve Championship",
    specificInfo: "",
    defendingChampion: "Josh Clarizio",
    date: "Starts May 1, 2024",
    format: "7 Round Swiss",
    timeControl: {
      startingTime: 45,
      increment: 15,
    },
  },
  {
    title: "2024 Leo McMahon Memorial",
    specificInfo: "",
    defendingChampion: "John Vlasov",
    date: "Starts May 1, 2024",
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
            <p>{tournament.specificInfo}</p>
            <p>{`Defending Champion: ${tournament.defendingChampion}`}</p>
            <p>{tournament.date}</p>
            <p>{`Format ${tournament.format}`}</p>
            <p>{`${tournament.timeControl.startingTime} min + ${tournament.timeControl.increment} sec`}</p>
          </div>
        ))}
      </div>
    </>
  )
}
