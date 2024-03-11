"use server"

import { createTournament } from "@/db/tournaments"
import { Tournament } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function addTournamentAction(tournament: Omit<Tournament, "id">) {
  createTournament(tournament)
  revalidatePath("/schedule")
  revalidatePath("/admin")
}
