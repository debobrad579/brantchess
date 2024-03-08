import Image from "next/image"
import type { Metadata } from "next"
import harmonySquare from "@/assets/img/harmony-square.jpg"

export const metadata: Metadata = {
  title: "Harmony Square",
  description:
    "Come out and enjoy a friendly game of chess at Harmony Square this summer.",
}

export default function HarmonySquarePage() {
  return (
    <>
      <h1 className="text-2xl font-bold">2024 HARMONY SQUARE PROGRAM</h1>
      <p className="font-bold">
        Begins July 9 until August 26, 2024
        <br />
        Tuesday and Thursday 12 pm - 2 pm
      </p>
      <p>
        Come out and enjoy a friendly game of chess with a representative of the
        Brantford Chess Club or other like-minded individuals.
        <br />
        Don't know how to play? No problem, a member of the Brantford Chess Club
        will be on hand to teach or help improve your game!
        <br />
        Are you the competitive type? We also host tournaments at the Square so
        you can prove you're the Champion!
      </p>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">
            Harmony Square Chess Tournaments for 2024
          </h2>
          <a
            className="text-blue-500 hover:underline"
            href="http://home.primus.ca/~rgash/FoodBank2024.pdf"
          >
            15th Annual Food Bank Charity Tournament Sunday July 21, 2024
          </a>
          <a
            className="text-blue-500 hover:underline"
            href="http://home.primus.ca/~rgash/KariNurmiMemorial2024.pdf"
          >
            2024 Kari Nurmi Harmony Square Active Sunday August 18, 2024
          </a>
        </div>
        <div className="w-full relative aspect-[4/3] lg:w-1/2">
          <Image
            src={harmonySquare}
            alt="Harmony Square"
            className="ring-1 ring-ring"
            fill
            sizes="(min-width: 1024px) 40vw, (min-width: 1536px) 30vw, 100vw"
          />
        </div>
      </div>
    </>
  )
}
