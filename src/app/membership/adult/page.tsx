import { formatCurrency } from "@/lib/formatters"
import { addYears } from "date-fns"

export const revalidate = 604800

export default function MembershipPage() {
  return (
    <div>
      <div className="text-2xl font-bold">Adult Membership</div>
      <div className="text-lg">{formatCurrency(40)}</div>
      <div className="text-muted-foreground">
        A one year membership for anyone whose birth year is between{" "}
        {addYears(new Date(), -59).getFullYear()} and{" "}
        {addYears(new Date(), -21).getFullYear()} (inclusive).
      </div>
      <div className="text-muted-foreground text-sm">
        Pay in person or etransfer $40 to brantchessca@gmail.com.
      </div>
    </div>
  )
}
