export function Footer() {
  return (
    <footer className="bg-navbar text-navbar-foreground flex flex-col justify-between gap-8 px-5 py-6 md:flex-row sm:px-10 md:px-20">
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex flex-col gap-2 text-navbar-muted-foreground">
          <div>
            <h3 className="font-semibold">
              Rob Gashgarian - President & Treasurer
            </h3>
            <p>Email: brantchessca@gmail.com</p>
            <p>Phone: (519) 732-8909</p>
          </div>
          <div>
            <h3 className="font-semibold">
              Lee Hendon - Tournament & Website Director
            </h3>
            <p>Email: brantchessca@gmail.com</p>
            <p>Phone: (519) 771-8848</p>
          </div>
          <div>
            <h3 className="font-semibold">Location</h3>
            <a
              href="https://www.google.com/maps/@43.1418356,-80.2687033,19z?entry=ttu"
              target="_blank"
              className="hover:underline"
            >
              10 Albion St. Brantford, Grace Anglican Church, Lower Level
            </a>
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
            <h3 className="font-semibold">Membership Fees</h3>
            <p>Adults: $40</p>
            <p>Students, Juniors, & Seniors: $30</p>
            <p>Family: $60</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
