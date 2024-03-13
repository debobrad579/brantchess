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
import { revalidateTag } from "next/cache"

export async function addTournamentAction(
  tournamentData: Omit<Tournament, "id">
) {
  await createTournament(tournamentData)
  await deleteOldTournaments()
  revalidateTag("tournaments")
}

export async function updateTournamentAction(
  tournamentData: Omit<Tournament, "id">,
  tournamentId: number
) {
  await updateTournament(tournamentData, tournamentId)
  revalidateTag("tournaments")
}

export async function deleteTournamentAction(tournamentId: number) {
  await deleteTournament(tournamentId)
  revalidateTag("tournaments")
}

export async function addYearToChampionAction(
  data: Omit<Champion, "years"> & { year: number }
) {
  await addYearToChampion(data)
  revalidateTag("champions")
}

export async function removeYearFromChampionAction(
  data: Omit<Champion, "years"> & { year: number }
) {
  await removeYearFromChampion(data)
  revalidateTag("champions")
}

export async function createChampionAction(
  data: Omit<Champion, "years"> & { year: number }
) {
  await createChampion(data)
  revalidateTag("champions")
}

export async function deleteChampionAction(
  firstInitial: string,
  lastName: string
) {
  await deleteChampion(firstInitial, lastName)
  revalidateTag("champions")
}
