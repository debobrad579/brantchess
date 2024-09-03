import { formatCurrency } from "@/lib/formatters"

export default function MembershipPage() {
  return (
    <div>
      <div className="text-2xl font-bold">Student Membership</div>
      <div className="text-lg">{formatCurrency(30)}</div>
      <div className="text-muted-foreground">
        A one year membership for a high school or post secondary school
        student.
      </div>
      <div className="text-muted-foreground text-sm">
        Pay in person or etransfer $30 to brantchessca@gmail.com.
      </div>
    </div>
  )
}
