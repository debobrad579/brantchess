"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatCurrency } from "@/lib/formatters"
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { Loader2 } from "lucide-react"
import { useTheme } from "next-themes"
import { type FormEvent, useEffect, useState } from "react"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

export function CheckoutForm({
  clientSecret,
  membership,
}: {
  clientSecret: string
  membership: { priceInCents: number; name: string; description: string }
}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { theme, systemTheme } = useTheme()
  const isDarkMode =
    theme === "dark" || (theme === "system" && systemTheme === "dark")

  return (
    <div className="max-w-5xl w-full mx-auto space-y-8">
      <div>
        <div className="text-2xl font-bold">{membership.name} Membership</div>
        <div className="text-lg">
          {formatCurrency(membership.priceInCents / 100)}
        </div>
        <div className="text-muted-foreground">{membership.description}</div>
      </div>
      <Elements
        options={{
          clientSecret,
          fonts: [
            {
              family: "Roboto",
              cssSrc:
                "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
              weight: "400",
            },
          ],
          appearance: {
            theme: isDarkMode ? "night" : "stripe",
            variables: isDarkMode
              ? {
                  colorBackground: "hsl(222.2 84% 4.9%)",
                  colorText: "hsl(210 40% 98%)",
                  colorTextPlaceholder: "hsl(215 20.2% 65.1%)",
                  iconCardCvcColor: "hsl(215 20.2% 65.1%)",
                  colorDanger: "hsl(0 62.8% 30.6%)",
                  fontFamily: "Roboto",
                }
              : {
                  colorBackground: "hsl(0 0% 100%)",
                  colorText: "hsl(222.2 84% 4.9%)",
                  colorTextPlaceholder: "hsl(215.4 16.3% 46.9%)",
                  iconCardCvcColor: "hsl(215.4 16.3% 46.9%)",
                  colorDanger: "hsl(0 84.2% 60.2%)",
                  fontFamily: "Roboto",
                },
            rules: isDarkMode
              ? {
                  ".Input": {
                    borderColor: "hsl(217.2 32.6% 17.5%)",
                  },
                }
              : {
                  ".Input": {
                    borderColor: "hsl(214.3 31.8% 91.4%)",
                  },
                },
          },
        }}
        stripe={stripePromise}
      >
        <Form priceInCents={membership.priceInCents} />
      </Elements>
    </div>
  )
}

function Form({ priceInCents }: { priceInCents: number }) {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [email, setEmail] = useState<string>()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (stripe == null || elements == null || email == null) return
    setIsLoading(true)

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_BASE_PATH}/membership/success`,
        },
      })
      .then(({ error }) => {
        if (error.type === "card_error" || error.type === "validation_error")
          setErrorMessage(error.message)
        else setErrorMessage("An unknown error occured")
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          {errorMessage && (
            <CardDescription className="text-destructive">
              {errorMessage}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <PaymentElement />
          <div className="mt-2">
            <LinkAuthenticationElement
              onChange={(e) => setEmail(e.value.email)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            size="lg"
            disabled={stripe == null || elements == null || isLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading
              ? "Purchasing"
              : `Purchase - ${formatCurrency(priceInCents / 100)}`}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
