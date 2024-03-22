import type { Metadata } from "next"
import { ThemeProvider } from "@/components/themes/ThemeProvider"
import { Separator } from "@/components/ui/separator"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { roboto } from "@/assets/fonts"
import "./globals.css"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: {
    default: "Brantford Chess Club",
    template: `%s | Brantford Chess Club`,
  },
  description:
    "WELCOME TO THE BRANTFORD CHESS CLUB CELEBRATING OVER 100 YEARS OF CHESS!",
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
          <ScrollArea>
            <div className="flex flex-col justify-between h-screen">
              <div>
                <Navbar />
                <Separator />
                <main className="px-5 py-10 space-y-4 sm:px-10 md:px-20 lg:px-[10vw]">
                  {children}
                </main>
              </div>
              <div>
                <Separator />
                <Footer />
              </div>
            </div>
          </ScrollArea>
        </ThemeProvider>
      </body>
    </html>
  )
}
