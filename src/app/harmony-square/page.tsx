import Image from "next/image"
import hs1 from "@/assets/img/hs1.png"

export default function HarmonySquarePage() {
  return (
    <>
      <h1 className="text-2xl font-bold">2024 HARMONY SQUARE PROGRAM</h1>
      <p className="font-semibold">
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
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">
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
        <Image src={hs1} alt="Harmony Square" className="ring-1 ring-ring" />
      </div>
    </>
  )
}
