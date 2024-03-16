import type { Tournament } from "@prisma/client"
import prisma from "./db"
import { unstable_cache } from "next/cache"
import { addMonths, addWeeks } from "date-fns"

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
  { tags: ["tournaments"], revalidate: false }
)

export const getUpcomingTournaments = unstable_cache(
  () => {
    return prisma.tournament.findMany({
      orderBy: [{ startDate: "asc" }, { endDate: "asc" }],
      where: {
        startDate: { lte: addMonths(new Date(), 4) },
        OR: [
          {
            endDate: { gte: addWeeks(new Date(), -1) },
          },
          {
            startDate: { gte: addMonths(new Date(), -1) },
            endDate: null,
          },
        ],
      },
    })
  },
  ["Tournaments", "Upcoming"],
  { tags: ["tournaments"], revalidate: 604800 }
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
