"use server"

import {
  addYearToChampion,
  createChampion,
  deleteChampion,
  removeYearFromChampion,
} from "@/db/champions"
import { updateHarmonySquareInfo } from "@/db/harmony_square"
import { updateHomePage } from "@/db/home"
import {
  createTournament,
  deleteOldTournaments,
  deleteTournament,
  updateTournament,
} from "@/db/tournaments"
import {
  Champion,
  HarmonySquareInformation,
  HomeInformation,
  Tournament,
} from "@prisma/client"
import { revalidatePath, revalidateTag } from "next/cache"

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

export async function updateHomePageAction(data: Omit<HomeInformation, "id">) {
  await updateHomePage(data)
  revalidateTag("homePage")
}

export async function updateHarmonySquarePageAction(
  data: Omit<HarmonySquareInformation, "id">
) {
  await updateHarmonySquareInfo(data)
  revalidateTag("harmonySquareInfo")
}

export async function redirectToDashboard(
  prevState: unknown,
  formData: FormData
): Promise<{ success?: boolean }> {
  if (formData.get("password") === process.env.ADMIN_PASSWORD) {
    return { success: true }
  }
  return { success: false }
}
