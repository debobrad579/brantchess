import { unstable_cache } from "next/cache"
import prisma from "./db"
import { Champion, PrismaPromise } from "@prisma/client"

export const getOrderedChampions = unstable_cache(
  function (): PrismaPromise<(Champion & { total: number })[]> {
    return prisma.$queryRaw`
      SELECT *, ARRAY_LENGTH("years", 1) AS "total" FROM "public"."Champion" 
      ORDER BY "total" DESC, (SELECT AVG("value") FROM UNNEST("years") AS "value") DESC;
    `
  },
  ["Champions", "Ordered"],
  { tags: ["champions"], revalidate: false }
)

export const getChampions = unstable_cache(
  () => {
    return prisma.champion.findMany()
  },
  ["Champions"],
  { tags: ["champions"], revalidate: false }
)

export function createChampion({
  firstInitial,
  lastName,
  year,
}: Omit<Champion, "years"> & { year: number }) {
  return prisma.champion.create({
    data: {
      firstInitial: firstInitial,
      lastName: lastName,
      years: [year],
    },
  })
}

export function addYearToChampion({
  firstInitial,
  lastName,
  year,
}: Omit<Champion, "years"> & { year: number }) {
  return prisma.champion.update({
    where: {
      firstInitial_lastName: {
        firstInitial: firstInitial,
        lastName: lastName,
      },
    },
    data: {
      years: {
        push: year,
      },
    },
  })
}

export function removeYearFromChampion({
  firstInitial,
  lastName,
  year,
}: Omit<Champion, "years"> & { year: number }): PrismaPromise<Champion> {
  return prisma.$queryRaw`
    UPDATE "public"."Champion"
    SET "years" = array_remove("years", ${year})
    WHERE "firstInitial" = ${firstInitial} AND "lastName" = ${lastName};
  `
}

export function deleteChampion(firstInitial: string, lastName: string) {
  return prisma.champion.delete({
    where: {
      firstInitial_lastName: {
        firstInitial: firstInitial,
        lastName: lastName,
      },
    },
  })
}
