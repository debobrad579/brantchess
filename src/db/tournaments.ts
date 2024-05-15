import type { Tournament } from "@prisma/client"
import prisma from "./db"
import { unstable_cache } from "next/cache"
import { addMonths, addWeeks } from "date-fns"
import { cache } from "react"

export function createTournament(tournamentData: Omit<Tournament, "id">) {
  return prisma.tournament.create({
    data: tournamentData,
  })
}

export function updateTournament(
  tournamentData: Omit<Tournament, "id">,
  tournamentId: number
) {
  return prisma.tournament.update({
    where: {
      id: tournamentId,
    },
    data: tournamentData,
  })
}

export const getTournaments = unstable_cache(
  () => {
    return prisma.tournament.findMany({
      orderBy: [{ startDate: "asc" }, { endDate: "asc" }],
    })
  },
  ["Tournaments"],
  { tags: ["tournaments"], revalidate: 1 }
)

export const getUpcomingTournaments = unstable_cache(
  cache(() => {
    return prisma.tournament.findMany({
      orderBy: [
        { startDate: "asc" },
        { endDate: "asc" },
        { startingTime: "desc" },
        { increment: "desc" },
      ],
      where: {
        OR: [
          {
            endDate: { gte: addWeeks(new Date(), -1) },
          },
          {
            endDate: null,
          },
        ],
      },
      take: 4,
    })
  }),
  ["Tournaments", "Upcoming"],
  { tags: ["tournaments"], revalidate: 86400 }
)

export function deleteTournament(tournamentId: number) {
  return prisma.tournament.delete({
    where: { id: tournamentId },
  })
}

export function deleteOldTournaments() {
  return prisma.tournament.deleteMany({
    where: {
      OR: [
        {
          endDate: { lte: addWeeks(new Date(), -1) },
        },
        {
          startDate: { lte: addMonths(new Date(), -1) },
          endDate: null,
        },
      ],
    },
  })
}
