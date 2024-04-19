import { formatCurrency } from "@/lib/formatters"

export default function MembershipPage() {
  return (
    <div>
      <div className="text-2xl font-bold">Family Membership</div>
      <div className="text-lg">{formatCurrency(60)}</div>
      <div className="text-muted-foreground">
        A one year membership for an entire family.
      </div>
      <div className="text-muted-foreground text-sm">
        Pay in person or etransfer $60 to brantchessca@gmail.com.
      </div>
    </div>
  )
}
