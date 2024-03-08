import type { Metadata } from "next"
import { Tournament } from "./Tournament"

export const metadata: Metadata = {
  title: "Schedule & Games",
  description: "See the current tournament schedule.",
}

export default function SchedulePage() {
  return (
    <>
      <h1 className="text-2xl font-bold">2024 TOURNAMENT SCHEDULE</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Tournament title="2024 Leo McMahon Memorial">
          <p>
            2024 Championship Qualifiers (Top 8 play for the A championship, all
            others play for the Reserve championship)
          </p>
          <p>Defending Champion: Robin Johnston</p>
          <p>March 13 - April 10, 2024</p>
          <p>Format 5 round Swiss</p>
          <p>45 min + 15 sec</p>
        </Tournament>
        <Tournament title="2024 Junior Championship">
          <p>Top two finishers from Kari Nurmi qualifier above.</p>
          <p>Defending Champion: Matéo Marut</p>
          <p>Starts April 10 - 17, 2024</p>
          <p>Format 4 game match</p>
          <p>15 min + 10 sec</p>
        </Tournament>
        <Tournament title="2024 Reserve Championship">
          <p>Defending Champion: Josh Clarizio</p>
          <p>Starts May 1, 2024</p>
          <p>Format 7 Round Swiss</p>
          <p>45 min + 15 sec</p>
        </Tournament>
        <Tournament title="2024 Tanz - Napierala Championship Cup">
          <p>Defending Champion: John Vlasov</p>
          <p>Starts May 1, 2024</p>
          <p>8 player Round Robin</p>
          <p>60 min + 30 sec</p>
        </Tournament>
      </div>
    </>
  )
}
