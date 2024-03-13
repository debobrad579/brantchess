"use server"

import {
  addYearToChampion,
  createChampion,
  deleteChampion,
  removeYearFromChampion,
} from "@/db/champions"
import {
  createTournament,
  deleteOldTournaments,
  deleteTournament,
  updateTournament,
} from "@/db/tournaments"
import { Champion, Tournament } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function addTournamentAction(
  tournamentData: Omit<Tournament, "id">
) {
  await createTournament(tournamentData)
  await deleteOldTournaments()
  revalidatePath("/schedule")
  revalidatePath("/admin")
}

export async function updateTournamentAction(
  tournamentData: Omit<Tournament, "id">,
  tournamentId: number
) {
  await updateTournament(tournamentData, tournamentId)
  revalidatePath("/schedule")
  revalidatePath("/admin")
}

export async function deleteTournamentAction(tournamentId: number) {
  await deleteTournament(tournamentId)
  revalidatePath("/schedule")
  revalidatePath("/admin")
}

export async function addYearToChampionAction(
  data: Omit<Champion, "years"> & { year: number }
) {
  await addYearToChampion(data)
  revalidatePath("/champions")
  revalidatePath("/admin")
}

export async function removeYearFromChampionAction(
  data: Omit<Champion, "years"> & { year: number }
) {
  await removeYearFromChampion(data)
  revalidatePath("/champions")
  revalidatePath("/admin")
}

export async function createChampionAction(
  data: Omit<Champion, "years"> & { year: number }
) {
  await createChampion(data)
  revalidatePath("/champions")
  revalidatePath("/admin")
}

export async function deleteChampionAction(
  firstInitial: string,
  lastName: string
) {
  await deleteChampion(firstInitial, lastName)
  revalidatePath("/champions")
  revalidatePath("/admin")
}