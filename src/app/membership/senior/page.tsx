import { formatCurrency } from "@/lib/formatters"
import { addYears } from "date-fns"

export const revalidate = 604800

export default function MembershipPage() {
  return (
    <div>
      <div className="text-2xl font-bold">Senior Membership</div>
      <div className="text-lg">{formatCurrency(30)}</div>
      <div className="text-muted-foreground">
        A one year membership for anyone whose year of birth is{" "}
        {addYears(new Date(), -60).getFullYear()} or earlier.
      </div>
      <div className="text-muted-foreground text-sm">
        Pay in person or etransfer $30 to brantchessca@gmail.com.
      </div>
    </div>
  )
}
