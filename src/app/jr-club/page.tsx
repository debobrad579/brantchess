import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jr. Club",
  description:
    "Here's some free resources to learn and improve at the game of chess.",
}

export default function JrClubPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">JUNIOR CHESS CLUB</h1>
      <h2 className="text-xl font-bold">
        Library Chess Club (Adults Now Welcome)
      </h2>
      <p>
        Have you ever wanted to learn chess? Here's an opportunity for kids ages
        6 and up to learn the game, or to practice the skills that you already
        have. A member of the Brantford Chess Club will offer basic instruction
        and tips on how to improve your game.
      </p>
      <div>
        <a
          href="https://calendar.brantfordlibrary.ca/default/Detail/2024-01-06-1000-Chess-Club"
          className="text-blue-500 hover:underline"
        >
          Library Program Schedule
        </a>
      </div>
      <h2 className="text-xl font-bold">Want to improve your game?</h2>
      <p>
        Here's some free software and databases with training questions to help
        you improve your game! First download and install the Fritz 5.32 file
        and then download and unzip the file Fritz532/mate1.zip file to solve
        some Checkmate in 1 positions. The third link is a video for anyone new
        to the game that explains the piece movements and other basics.
      </p>
      <ul className="ml-8">
        <li className="list-disc">
          <a
            href="http://home.primus.ca/~rgash/Fritz532/532Setup.exe"
            className="text-blue-500 hover:underline"
          >
            Fritz 5.32 Chess Program
          </a>
        </li>
        <li className="list-disc">
          <a
            href="http://home.primus.ca/~rgash/Fritz532/100%20Mates%20in%201.zip"
            className="text-blue-500 hover:underline"
          >
            100 Checkmates in 1 (Polgar 5334)
          </a>
        </li>
        <li className="list-disc">
          <a
            href="http://www.chesskid.com/video/player/the-magic-of-chess"
            className="text-blue-500 hover:underline"
          >
            Chess pieces and how they move
          </a>
        </li>
      </ul>
      <h2 className="text-xl font-bold">Junior Friendly Links:</h2>
      <ul className="ml-8">
        <li className="list-disc">
          <a
            href="http://www.chesskid.com/"
            className="text-blue-500 hover:underline"
          >
            ChessKid.com
          </a>
        </li>
        <li className="list-disc">
          <a
            href="http://www.chesskids.org.uk/"
            className="text-blue-500 hover:underline"
          >
            chessKIDS academy
          </a>
        </li>
      </ul>
    </>
  )
}
