import { unstable_cache } from "next/cache"
import prisma from "./db"
import { HarmonySquareInformation } from "@prisma/client"

export const getHarmonySquareInfo = unstable_cache(
  () => {
    return prisma.harmonySquareInformation.findFirst()
  },
  ["HarmonySquareInfo"],
  { tags: ["harmonySquareInfo"] }
)

export function updateHarmonySquareInfo(
  data: Omit<HarmonySquareInformation, "id">
) {
  return prisma.harmonySquareInformation.updateMany({ data: data })
}
