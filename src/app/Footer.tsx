import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-navbar text-navbar-foreground flex flex-col justify-between gap-4 px-5 py-4 md:flex-row md:gap-8 sm:px-10 md:px-20 lg:px-[10vw]">
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-xl">Contact Information</h2>
        <div className="flex flex-col gap-2 text-navbar-muted-foreground">
          <div>
            <h3 className="font-bold">
              Rob Gashgarian - President & Treasurer
            </h3>
            <p>
              Email:{" "}
              <a
                href="mailto:brantchessca@gmail.com"
                className="hover:underline"
              >
                brantchessca@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:5197328909" className="hover:underline">
                (519) 732-8909
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-bold">
              Lee Hendon - Tournament & Website Director
            </h3>
            <p>
              Email:{" "}
              <a
                href="mailto:brantchessca@gmail.com"
                className="hover:underline"
              >
                brantchessca@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:5197718848" className="hover:underline">
                (519) 771-8848
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-xl">Membership Information</h2>
        <div className="flex flex-col gap-2 text-navbar-muted-foreground">
          <p>
            For all visitors, your first three visits are absolutely FREE! After
            that, you may continue to visit for a $2 fee per visit, or you may
            buy a membership.
          </p>
          <div>
            <h3 className="font-bold">Memberships</h3>
            <div className="flex gap-2 flex-wrap">
              <Button
                className="bg-navbar-muted hover:bg-navbar-muted/60 text-navbar-foreground"
                asChild
              >
                <Link href="/membership/adult">Adult ($40)</Link>
              </Button>
              <Button
                className="bg-navbar-muted hover:bg-navbar-muted/60 text-navbar-foreground"
                asChild
              >
                <Link href="/membership/student">
                  Student, Junior, & Senior ($30)
                </Link>
              </Button>
              <Button
                className="bg-navbar-muted hover:bg-navbar-muted/60 text-navbar-foreground"
                asChild
              >
                <Link href="/membership/family">Family ($60)</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
