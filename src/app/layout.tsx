import type { Metadata } from "next"
import { ThemeProvider } from "@/components/themes/ThemeProvider"
import { Separator } from "@/components/ui/separator"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { roboto } from "@/assets/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Brantford Chess Club",
  description: "New website concept for the Brantford Chess Club.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col justify-between h-screen">
            <div>
              <Navbar />
              <Separator />
              <main className="px-5 py-10 flex flex-col gap-4 sm:px-10 md:px-20 lg:px-[10vw] 2xl:px-[20vw]">
                {children}
              </main>
            </div>
            <div>
              <Separator />
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
