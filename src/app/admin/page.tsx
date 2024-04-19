import { getTournaments } from "@/db/tournaments"
import { ClubInfoCard } from "./ClubInfoCard"
import { HarmonySquareInfoCard } from "./HarmonySquareInfoCard"
import { TournamentCard } from "./TournamentCard"
import { ChampionsCard } from "./ChampionsCard"
import { getChampions } from "@/db/champions"
import { getHomePageInfo } from "@/db/home"
import { getHarmonySquareInfo } from "@/db/harmony_square"

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  const tournaments = await getTournaments()
  const champions = await getChampions()
  const homeInfo = (await getHomePageInfo())!
  const harmonySquareInfo = (await getHarmonySquareInfo())!

  return (
    <div className="flex flex-col gap-4">
      <ClubInfoCard homeInfo={homeInfo} />
      <TournamentCard tournaments={tournaments} />
      <div className="flex flex-col gap-4 md:flex-row">
        <ChampionsCard champions={champions} />
        <HarmonySquareInfoCard harmonySquareInfo={harmonySquareInfo} />
      </div>
    </div>
  )
}
