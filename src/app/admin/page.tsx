import { getTournaments } from "@/db/tournaments"
import { ClubInfoCard } from "./HomeInfoCard"
import { HarmonySquareInfoCard } from "./HarmonySquareInfoCard"
import { TournamentCard } from "./TournamentCard"
import { ChampionsCard } from "./ChampionsCard"
import { getChampions } from "@/db/champions"
import { getHomePageInfo } from "@/db/home"
import { getHarmonySquareInfo } from "@/db/harmony_square"

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  const [tournaments, champions, homeInfo, harmonySquareInfo] =
    await Promise.all([
      getTournaments(),
      getChampions(),
      getHomePageInfo(),
      getHarmonySquareInfo(),
    ])

  return (
    <div className="flex flex-col gap-4">
      <ClubInfoCard homeInfo={homeInfo!} />
      <TournamentCard tournaments={tournaments} />
      <div className="flex flex-col gap-4 md:flex-row">
        <ChampionsCard champions={champions} />
        <HarmonySquareInfoCard harmonySquareInfo={harmonySquareInfo!} />
      </div>
    </div>
  )
}
