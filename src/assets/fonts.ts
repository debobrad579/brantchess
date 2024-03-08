import { Roboto, Roboto_Mono } from "next/font/google"

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "900"],
})

export const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["500"] })
