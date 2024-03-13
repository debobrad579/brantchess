import { getTournaments } from "@/db/tournaments"
import { ClubInfoCard } from "./ClubInfoCard"
import { HarmonySquareInfoCard } from "./HarmonySquareInfoCard"
import { TournamentCard } from "./TournamentCard"
import { ChampionsCard } from "./ChampionsCard"
import { getChampions } from "@/db/champions"

export default async function AdminPage() {
  const tournaments = await getTournaments()
  const champions = await getChampions()

  return (
    <div className="flex flex-col gap-4">
      <ClubInfoCard />
      <div className="flex flex-col gap-4 md:flex-row">
        <HarmonySquareInfoCard />
        <ChampionsCard champions={champions} />
      </div>
      <TournamentCard tournaments={tournaments} />
    </div>
  )
}
