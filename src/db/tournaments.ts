import { Tournament } from "@prisma/client"
import prisma from "./db"
import { unstable_cache } from "next/cache"

export async function createTournament(tournament: Omit<Tournament, "id">) {
  return await prisma.tournament.create({
    data: tournament,
  })
}

export const getTournaments = unstable_cache(() => {
  console.log("DB")
  return prisma.tournament.findMany()
}, ["Tournaments"])

export async function clearTournaments() {
  return await prisma.tournament.deleteMany()
}
