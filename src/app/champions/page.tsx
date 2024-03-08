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

export const metadata: Metadata = {
  title: "Champions",
  description: "See all the Brantford Chess Champions since 1954.",
}

type Champion = {
  firstInitial: string
  lastName: string
  years: number[]
}

const champions: Champion[] = [
  {
    firstInitial: "A.",
    lastName: "Napierala",
    years: [
      1967, 1968, 1972, 1975, 1976, 1977, 1984, 1986, 1991, 1992, 1993, 1994,
      1999,
    ],
  },
  {
    firstInitial: "H.",
    lastName: "Tanz",
    years: [1958, 1969, 1970, 1971, 1978, 1980, 1982, 1985, 1989, 1995, 1998],
  },
  {
    firstInitial: "J.",
    lastName: "Crosbie",
    years: [1960, 1962, 1963, 1964, 1965, 1966],
  },
  {
    firstInitial: "R.",
    lastName: "Gashgarian",
    years: [2000, 2006, 2007, 2013, 2018, 2022],
  },
  {
    firstInitial: "J.",
    lastName: "Vlasov",
    years: [2002, 2009, 2011, 2017, 2019, 2023],
  },
  {
    firstInitial: "E.",
    lastName: "Zwetschkenbaum",
    years: [1954, 1955, 1959],
  },
  {
    firstInitial: "P.",
    lastName: "Bos",
    years: [2003, 2004, 2005],
  },
  {
    firstInitial: "A.",
    lastName: "Cormier (NM)",
    years: [2010, 2015, 2016],
  },
  {
    firstInitial: "A.",
    lastName: "Hey",
    years: [1983, 1987],
  },
  {
    firstInitial: "J.",
    lastName: "Nagy",
    years: [1956],
  },
  {
    firstInitial: "J.",
    lastName: "Vegh",
    years: [1957],
  },
  {
    firstInitial: "F.",
    lastName: "Nemeth",
    years: [1961],
  },
  {
    firstInitial: "F.",
    lastName: "Szakal",
    years: [1973],
  },
  {
    firstInitial: "J.",
    lastName: "Monne",
    years: [1974],
  },
  {
    firstInitial: "P.",
    lastName: "Simon (NM)",
    years: [1981],
  },
  {
    firstInitial: "K.",
    lastName: "Whiting",
    years: [1981],
  },
  {
    firstInitial: "E.",
    lastName: "Penrose",
    years: [1988],
  },
  {
    firstInitial: "A.",
    lastName: "Solorzano",
    years: [1990],
  },
  {
    firstInitial: "W.",
    lastName: "Boer",
    years: [1996],
  },
  {
    firstInitial: "M.",
    lastName: "Egorov (NM)",
    years: [2001],
  },
  {
    firstInitial: "M.",
    lastName: "Smith",
    years: [2008],
  },
  {
    firstInitial: "B.",
    lastName: "McDonald",
    years: [2012],
  },
  {
    firstInitial: "R.",
    lastName: "Johnston",
    years: [2014],
  },
]

export default function ChampionsPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">CLUB CHAMPIONS</h1>
      <Table className={robotoMono.className}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead />
            <TableHead>Year(s) of Championship (Starting in 1954)</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {champions.map((champion) => (
            <TableRow
              key={`${champion.firstInitial}-${champion.lastName}-${champion.years}`}
            >
              <TableCell className="font-medium">
                {champion.firstInitial}
              </TableCell>
              <TableCell>{champion.lastName}</TableCell>
              <TableCell>
                {champion.years
                  .map((year) => year.toString().slice(-2))
                  .join(", ")}
              </TableCell>
              <TableCell className="text-right">
                {champion.years.length}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-xl font-bold text-center">
          {" "}
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
    </>
  )
}
