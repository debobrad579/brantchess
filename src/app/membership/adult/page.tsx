import { formatCurrency } from "@/lib/formatters"

export default function MembershipPage() {
  return (
    <div>
      <div className="text-2xl font-bold">Adult Membership</div>
      <div className="text-lg">{formatCurrency(40)}</div>
      <div className="text-muted-foreground">
        A one year membership for adults between the ages of 18 and 54.
      </div>
      <div className="text-muted-foreground text-sm">
        Pay in person or etransfer $40 to brantchessca@gmail.com.
      </div>
    </div>
  )
}
