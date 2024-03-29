import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { formatCurrency } from "@/lib/formatters"
import Link from "next/link"
import { notFound } from "next/navigation"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { payment_intent: string }
}) {
  if (searchParams.payment_intent == null) return notFound()

  const paymentIntent = await stripe.paymentIntents.retrieve(
    searchParams.payment_intent
  )

  if (paymentIntent.metadata.name == null) return notFound()

  const isSuccess = paymentIntent.status === "succeeded"

  return (
    <div className="max-w-5xl w-full mx-auto space-y-4">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">
          {isSuccess ? "Success!" : "Error!"}
        </h1>
        {!isSuccess && (
          <Button asChild>
            <Link
              href="/"
              className="text-primary-foreground hover:no-underline"
            >
              Try Again
            </Link>
          </Button>
        )}
      </div>
      <Separator />
      <div>
        <div className="text-2xl font-bold">
          {paymentIntent.metadata.name} Membership
        </div>
        <div className="text-lg">
          {formatCurrency(Number(paymentIntent.metadata.priceInCents) / 100)}
        </div>
        <div className="text-muted-foreground">
          {paymentIntent.metadata.description}
        </div>
      </div>
    </div>
  )
}
