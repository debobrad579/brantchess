import { getTournaments } from "@/db/tournaments"
import { ClubInfoCard } from "./ClubInfoCard"
import { HarmonySquareInfoCard } from "./HarmonySquareInfoCard"
import { TournamentCard } from "./TournamentCard"

export default async function AdminPage() {
  const tournaments = await getTournaments()
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* <ClubInfoCard />
      <HarmonySquareInfoCard /> */}
      <TournamentCard tournaments={tournaments} />
    </div>
  )
}
