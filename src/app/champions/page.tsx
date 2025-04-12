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
import { robotoMono } from "@/assets/fonts"
import type { Metadata } from "next"
import { getOrderedChampions } from "@/db/champions"
import { ScrollArea } from "@/components/ui/scroll-area"
import andrew from "@/assets/img/trophy/Andrew David C Champion 2024.jpg"
import brady from "@/assets/img/trophy/Brady DeBoer 2024 Active Champion.jpg"
import clifford1 from "@/assets/img/trophy/Clifford Flair Club Champion 2024.jpg"
import clifford2 from "@/assets/img/trophy/Clifford Flair Leo McMahon Champion 2024.jpg"
import gabriel from "@/assets/img/trophy/Gabriel Momnbach B Champion 2024.jpg"
import paulo from "@/assets/img/trophy/Paulo Nunes Blitz Champion 2023.jpg"

const images = [
  {
    src: clifford1,
    title: "Clifford Flair - Club Champion 2024",
  },
  {
    src: gabriel,
    title: "Gabriel Momnbach - B Champion 2024",
  },
  {
    src: andrew,
    title: "Andrew David - C Champion 2024",
  },
  {
    src: clifford2,
    title: "Clifford Flair - Leo McMahon Champion 2024",
  },
  {
    src: brady,
    title: "Brady DeBoer - Active Champion 2024",
  },
  {
    src: paulo,
    title: "Paulo Nunes - Blitz Champion 2023",
  },
]

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
        <div className="flex-1 basis-0">
          <ScrollArea className="overflow-auto lg:aspect-[5/3] w-full">
            <Table className={robotoMono.className}>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead />
                  <TableHead>Year(s) of Championship</TableHead>
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
          </ScrollArea>
        </div>
        <div className="flex flex-col items-center gap-2 flex-1">
          <h2 className="text-xl font-bold text-center">
            2025 Trophy Presentations
          </h2>
          <Carousel className="w-3/4 max-w-sm">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={image.src.src}>
                  <Image
                    src={image.src}
                    alt={image.title}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 27vw"
                    priority={index === 0}
                    className="border border-ring"
                  />
                  <div className="text-center mt-2">{image.title}</div>
                </CarouselItem>
              ))}
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
