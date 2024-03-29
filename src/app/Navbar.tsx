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
import { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 1100px)")

  return (
    <nav className="flex items-center justify-between px-5 py-2 bg-navbar text-navbar-foreground sm:px-10 md:px-20 lg:px-[10vw]">
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
              <NavLinkMobile href="/schedule">Schedule & Games</NavLinkMobile>
              <NavLinkMobile href="/champions">
                Brantford Chess Champions
              </NavLinkMobile>
              <NavLinkMobile href="/harmony-square">
                Harmony Square
              </NavLinkMobile>
              <NavLinkMobile href="/learning-resources">
                Learning Resources
              </NavLinkMobile>
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
            <NavLinkDesktop href="/schedule">Schedule & Games</NavLinkDesktop>
            <NavLinkDesktop href="/champions">
              Brantford Chess Champions
            </NavLinkDesktop>
            <NavLinkDesktop href="/harmony-square">
              Harmony Square
            </NavLinkDesktop>
            <NavLinkDesktop href="/learning-resources">
              Learning Resources
            </NavLinkDesktop>
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
                className="hover:bg-navbar-muted"
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

function NavLinkMobile(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname()

  return (
    <DropdownMenuItem
      asChild
      className={cn(
        pathname === props.href &&
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
      )}
    >
      <Link {...props} />
    </DropdownMenuItem>
  )
}

function NavLinkDesktop(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname()

  return (
    <Button
      asChild
      variant={null}
      className={cn(
        pathname === props.href
          ? "bg-navbar-foreground text-navbar hover:bg-navbar-foreground/90"
          : "hover:bg-navbar-muted"
      )}
    >
      <Link {...props} />
    </Button>
  )
}

function ExternalLinks() {
  return (
    <>
      <DropdownMenuItem asChild>
        <a href="https://www.chess.ca" target="_blank">
          CFC
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <a href="https://www.fide.com" target="_blank">
          FIDE
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <a href="https://www.chess.com" target="_blank">
          Chess.com
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <a href="https://lichess.org/" target="_blank">
          Lichess
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <a href="https://en.chessbase.com/" target="_blank">
          Chessbase
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <a href="https://forum.chesstalk.com/" target="_blank">
          Chess Talk
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <a href="https://theweekinchess.com/" target="_blank">
          The Week in Chess
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <a href="https://chesscafe.com/" target="_blank">
          Chess Cafe
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <a href="https://www.chesspublishing.com/" target="_blank">
          Chess Publishing
        </a>
      </DropdownMenuItem>
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
