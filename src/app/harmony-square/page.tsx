import Image from "next/image"
import type { Metadata } from "next"
import harmonySquare from "@/assets/img/harmony-square.jpg"
import { getHarmonySquareInfo } from "@/db/harmony_square"
import { format, getYear } from "date-fns"

export const metadata: Metadata = {
  title: "Harmony Square",
  description:
    "Come out and enjoy a friendly game of chess at Harmony Square this summer.",
}

export default async function HarmonySquarePage() {
  const harmonySquareInfo = (await getHarmonySquareInfo())!
  const year = getYear(harmonySquareInfo.startDate)

  return (
    <>
      <h1 className="text-2xl font-bold">{year} HARMONY SQUARE PROGRAM</h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col gap-4 flex-grow-[2] basis-0">
          <h2 className="font-bold text-xl">
            Located at{" "}
            <a
              href="https://www.google.com/maps/place/Harmony+Square/@43.1387691,-80.2653493,16.91z/data=!4m6!3m5!1s0x882c660f6db65711:0x66c7e86d8c9e0e1b!8m2!3d43.1388889!4d-80.2647222!16s%2Fg%2F11b7gmtm8j?entry=ttu"
              target="_blank"
            >
              89 Dalhousie St, Brantford
            </a>
          </h2>
          <p className="font-bold">
            Begins {format(harmonySquareInfo.startDate, "MMMM do")} until{" "}
            {format(harmonySquareInfo.endDate, "MMMM do")}, {year}
            <br />
            Tuesday and Thursday 12 pm - 2 pm
          </p>
          <p>
            Come out and enjoy a friendly game of chess with a representative of
            the Brantford Chess Club or other like-minded individuals.
            <br />
            Don't know how to play? No problem, a member of the Brantford Chess
            Club will be on hand to teach or help improve your game!
            <br />
            Are you the competitive type? We also host tournaments at the Square
            so you can prove you're the Champion!
          </p>
          <h2 className="text-xl font-bold">
            Harmony Square Chess Tournaments for {year}
          </h2>
          {harmonySquareInfo.tournamentTitles.map((title, index) => (
            <div key={index}>
              <a target="_blank" href={harmonySquareInfo.tournamentUrls[index]}>
                {title}
              </a>
            </div>
          ))}
        </div>
        <div className="flex-1">
          <div className="aspect-[4/3] relative">
            <Image
              src={harmonySquare}
              alt="Harmony Square"
              className="ring-1 ring-ring"
              fill
              sizes="(min-width: 1024px) 27vw, 100vw"
            />
          </div>
        </div>
      </div>
    </>
  )
}
