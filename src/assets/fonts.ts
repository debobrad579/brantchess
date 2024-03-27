import { Roboto, Roboto_Mono } from "next/font/google"

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "900"],
  variable: "--roboto",
})

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--roboto-mono",
})
