import type { Metadata } from "next"
import Image from "next/image"
import chessCom from "@/assets/img/chesscom-logo.png"
import lichess from "@/assets/img/lichess-logo.png"
import chessKid from "@/assets/img/chesskid-logo.png"
import chessable from "@/assets/img/chessable-logo.png"
import chessgames from "@/assets/img/chessgames-logo.png"
import chessagain from "@/assets/img/chessagain_logo.png"
import remoteChessAcademy from "@/assets/img/remotechessacademy-logo.png"

export const metadata: Metadata = {
  title: "Learning Resources",
  description:
    "Here's some free resources to learn and improve at the game of chess.",
}

export default function LearningResourcesPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">
        LIBRARY PROGRAM & LEARNING RESOURCES
      </h1>
      <div className="flex gap-8 flex-col lg:flex-row">
        <div className="space-y-4 flex-1">
          <p>
            Have you ever wanted to learn chess? Here's an opportunity for kids
            ages 6 and up to learn the game, or to practice the skills that you
            already have. Come out to the Brantford public library at{" "}
            <a
              target="_blank"
              href="http://maps.google.com/?q=173+Colborne+Street"
              className="text-blue-500 hover:underline"
            >
              173 Colborne Street
            </a>{" "}
            every other Saturday, and a member of the Brantford Chess Club will
            offer basic instruction and tips on how to improve your game.
          </p>
          <div>
            <a
              target="_blank"
              href="https://calendar.brantfordlibrary.ca/default/Detail/2024-01-06-1000-Chess-Club"
              className="text-blue-500 hover:underline"
            >
              Library Program Schedule
            </a>
          </div>
          <h2 className="text-xl font-bold">Video Based Resources:</h2>
          <ul className="ml-8">
            <li className="list-disc">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=p8pZbhjL-fQ&list=PL8N8j2e7RpPnpqbISqi1SJ9_wrnNU3rEm"
                className="text-blue-500 hover:underline"
              >
                Building Habits by Canadian GM Aman Hambleton
              </a>
            </li>
            <li className="list-disc">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=XtaEnxG2lbg&list=PLBRObSmbZluSo6h0AySyeZRdlQzEhr2XL"
                className="text-blue-500 hover:underline"
              >
                How To Win At Chess by IM Levy Rozman
              </a>
            </li>
            <li className="list-disc">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=mhUoe2JBxco&list=PLT1F2nOxLHOfQI_hFiDnnWj4lb5KsviJ_"
                className="text-blue-500 hover:underline"
              >
                Improve your end game with GM Daniel Naroditsky
              </a>
            </li>
            <li className="list-disc">
              <a
                target="_blank"
                href="https://www.youtube.com/@agadmator"
                className="text-blue-500 hover:underline"
              >
                Improve your overall game with Agamator
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-grow-[2] basis-0 space-y-2">
          <div className="flex items-center gap-3">
            <a href="https://www.chess.com" target="_blank" className="flex-1">
              <Image src={chessCom} alt="Chess.com" />
            </a>
            <p className="flex-grow-[3] basis-0">
              The largest chess site in the world for learning and play. While
              it is membership based, it is completely free to play and a
              certain amount of puzzles and lessons can be accessed completely
              for free every day or week.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.lichess.org"
              target="_blank"
              className="flex-1"
            >
              <Image src={lichess} alt="Lichess.org" className="dark:invert" />
            </a>
            <p className="flex-grow-[3] basis-0">
              A great free and open source chess.com alternative. All of the
              features of the site, including all the puzzles, lessons, and
              databases can be accessed completely for free.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.chesskid.com"
              target="_blank"
              className="flex-1"
            >
              <Image src={chessKid} alt="ChessKid" />
            </a>
            <p className="flex-grow-[3] basis-0">
              A great youth-friendly site directed at young players and learners
              of the game.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.chessable.com"
              target="_blank"
              className="flex-1"
            >
              <Image
                src={chessable}
                alt="Chessable"
                className="invert dark:invert-0"
              />
            </a>
            <p className="flex-grow-[3] basis-0">
              A good resource to study openings (primarily), middlegames, and
              endgames. While most of its content is paid, there are still
              plenty of free short-and-sweet courses to help you improve your
              game.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.chessagain.com"
              target="_blank"
              className="flex-1"
            >
              <Image
                src={chessagain}
                alt="chessagain.com"
                className="dark:invert"
              />
            </a>
            <p className="flex-grow-[3] basis-0">
              A resource for all levels/ages of player from novice to master
              level.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://chess-teacher.net/improve-chess-instantly/"
              target="_blank"
              className="flex-1 flex items-center gap-3"
            >
              <Image src={remoteChessAcademy} alt="Remote Chess Academy" />
            </a>
            <p className="flex-grow-[3] basis-0">
              Click the "yes, show me how!" button and enter a name and valid
              email address to get free (nearly daily) 5-15 minute videos for
              novice level players.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
