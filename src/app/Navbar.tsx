"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu"
import brantchessLogo from "@/assets/img/brantchess-logo.png"
import Link from "next/link"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { useMediaQuery } from "@/hooks/useMediaQuery"

export function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 1100px)")
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between px-5 py-2 bg-navbar text-navbar-foreground sm:px-10 md:px-20 relative">
      <Link href="/">
        <Image
          priority
          src={brantchessLogo}
          alt="Brantford Chess Club Logo"
          width="100"
        ></Image>
      </Link>
      {!isDesktop ? (
        <DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={null}
                size={null}
                className="hover:bg-navbar-muted"
              >
                <Menu size={64} />
                <span className="sr-only">Hamburger menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link href="/schedule" tabIndex={-1}>
                <DropdownMenuItem
                  className={
                    pathname === "/schedule"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                      : undefined
                  }
                >
                  Schedule & Games
                </DropdownMenuItem>
              </Link>
              <Link href="/champions" tabIndex={-1}>
                <DropdownMenuItem
                  className={
                    pathname === "/champions"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                      : undefined
                  }
                >
                  Brantford Chess Champions
                </DropdownMenuItem>
              </Link>
              <Link href="/harmony-square" tabIndex={-1}>
                <DropdownMenuItem
                  className={
                    pathname === "/harmony-square"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                      : undefined
                  }
                >
                  Harmony Square
                </DropdownMenuItem>
              </Link>
              <Link href="/jr-club" tabIndex={-1}>
                <DropdownMenuItem
                  className={
                    pathname === "/jr-club"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                      : undefined
                  }
                >
                  Jr. Club
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Links</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <ExternalLinks />
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <ThemeOptions />
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </DropdownMenu>
      ) : (
        <>
          <div className="flex absolute left-2/4 -translate-x-2/4 gap-1">
            <Link href="/schedule" tabIndex={-1}>
              <Button
                variant={null}
                className={
                  pathname === "/schedule"
                    ? "bg-navbar-foreground text-navbar hover:bg-navbar-foreground/90"
                    : "hover:bg-navbar-muted"
                }
              >
                Schedule & Games
              </Button>
            </Link>
            <Link href="/champions" tabIndex={-1}>
              <Button
                variant={null}
                className={
                  pathname === "/champions"
                    ? "bg-navbar-foreground text-navbar hover:bg-navbar-foreground/90"
                    : "hover:bg-navbar-muted"
                }
              >
                Brantford Chess Champions
              </Button>
            </Link>
            <Link href="/harmony-square" tabIndex={-1}>
              <Button
                variant={null}
                className={
                  pathname === "/harmony-square"
                    ? "bg-navbar-foreground text-navbar hover:bg-navbar-foreground/90"
                    : "hover:bg-navbar-muted"
                }
              >
                Harmony Square
              </Button>
            </Link>
            <Link href="/jr-club" tabIndex={-1}>
              <Button
                variant={null}
                className={
                  pathname === "/jr-club"
                    ? "bg-navbar-foreground text-navbar hover:bg-navbar-foreground/90"
                    : "hover:bg-navbar-muted"
                }
              >
                Jr. Club
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={null} className="hover:bg-navbar-muted">
                  Links
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <ExternalLinks />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={null}
                size="icon"
                className="hover:bg-navbar-muted relative"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <ThemeOptions />
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
    </nav>
  )
}

function ExternalLinks() {
  return (
    <>
      <a href="https://www.chess.ca" target="_blank">
        <DropdownMenuItem>CFC</DropdownMenuItem>
      </a>
      <a href="https://www.fide.com" target="_blank">
        <DropdownMenuItem>FIDE</DropdownMenuItem>
      </a>
      <a href="https://www.chess.com" target="_blank">
        <DropdownMenuItem>Chess.com</DropdownMenuItem>
      </a>
      <a href="https://lichess.org/" target="_blank">
        <DropdownMenuItem>Lichess</DropdownMenuItem>
      </a>
      <a href="https://en.chessbase.com/" target="_blank">
        <DropdownMenuItem>Chessbase</DropdownMenuItem>
      </a>
      <a href="https://forum.chesstalk.com/" target="_blank">
        <DropdownMenuItem>Chess Talk</DropdownMenuItem>
      </a>
      <a href="https://theweekinchess.com/" target="_blank">
        <DropdownMenuItem>The Week in Chess</DropdownMenuItem>
      </a>
      <a href="https://chesscafe.com/" target="_blank">
        <DropdownMenuItem>Chess Cafe</DropdownMenuItem>
      </a>
      <a href="https://www.chesspublishing.com/" target="_blank">
        <DropdownMenuItem>Chess Publishing</DropdownMenuItem>
      </a>
    </>
  )
}

function ThemeOptions() {
  const { setTheme } = useTheme()

  return (
    <>
      <DropdownMenuItem onClick={() => setTheme("light")}>
        Light
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("system")}>
        System
      </DropdownMenuItem>
    </>
  )
}
