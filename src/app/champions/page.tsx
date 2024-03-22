import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"

import JV from "@/assets/img/JV.jpg"
import PN from "@/assets/img/PN.jpg"
import RG from "@/assets/img/RG.jpg"
import LH from "@/assets/img/LH.jpg"
import { robotoMono } from "@/assets/fonts"
import type { Metadata } from "next"
import { getOrderedChampions } from "@/db/champions"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Champions",
  description: "See all the Brantford Chess Champions since 1954.",
}

export default async function ChampionsPage() {
  const champions = await getOrderedChampions()

  return (
    <>
      <h1 className="text-2xl font-bold">CLUB CHAMPIONS</h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-grow-[2] basis-0">
          <ScrollArea className="overflow-auto">
            <div className="h-[45vh]">
              <Table className={robotoMono.className}>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead />
                    <TableHead>
                      Year(s) of Championship (Starting in 1954)
                    </TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {champions.map((champion) => (
                    <TableRow
                      key={`${champion.firstInitial}-${champion.lastName}`}
                    >
                      <TableCell className="font-medium">
                        {champion.firstInitial}.
                      </TableCell>
                      <TableCell>{champion.lastName}:</TableCell>
                      <TableCell>{formatYears(champion.years)}</TableCell>
                      <TableCell className="text-right">
                        {champion.total}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollArea>
        </div>
        <div className="flex flex-col items-center gap-2 flex-1">
          <h2 className="text-xl font-bold text-center">
            2018 Trophy Presentations
          </h2>
          <Carousel className="w-3/4 max-w-sm ring-1 ring-ring">
            <CarouselContent>
              <CarouselItem>
                <Image src={JV} alt="JV" />
              </CarouselItem>
              <CarouselItem>
                <Image src={PN} alt="PN" />
              </CarouselItem>
              <CarouselItem>
                <Image src={RG} alt="RG" />
              </CarouselItem>
              <CarouselItem>
                <Image src={LH} alt="LH" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  )
}

function formatYears(years: number[]) {
  years.sort((a, b) => a - b)
  return years.map((year) => year.toString().slice(-2)).join(", ")
}
