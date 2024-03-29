import Stripe from "stripe"
import { CheckoutForm } from "../CheckoutForm"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const membership = { priceInCents: 6000, name: "Family", description: "Desc" }

export default async function MembershipPage() {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 6000,
    currency: "CAD",
    metadata: membership,
  })

  if (paymentIntent.client_secret == null)
    throw Error("Stripe failed to create payment intent")

  return (
    <CheckoutForm
      clientSecret={paymentIntent.client_secret}
      membership={membership}
    />
  )
}
