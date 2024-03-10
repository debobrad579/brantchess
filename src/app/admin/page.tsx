import { ClubInfoCard } from "./ClubInfoCard"
import { HarmonySquareInfoCard } from "./HarmonySquareInfoCard"
import { TournamentCard } from "./TournamentCard"

export default function AdminPage() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <ClubInfoCard />
      <HarmonySquareInfoCard />
      <TournamentCard />
    </div>
  )
}
