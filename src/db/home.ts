import { HomeInformation } from "@prisma/client"
import prisma from "./db"
import { unstable_cache } from "next/cache"

export function updateHomePage(data: Omit<HomeInformation, "id">) {
  return prisma.homeInformation.updateMany({
    data: data,
  })
}

export const getHomePageInfo = unstable_cache(
  () => {
    return prisma.homeInformation.findMany()
  },
  ["HomePage"],
  { tags: ["homePage"], revalidate: false }
)
