"use client"

import { Button } from "@/components/ui/button"
import { redirectToDashboard } from "./actions"
import { Input } from "@/components/ui/input"
import { useFormState } from "react-dom"
import type { ReactNode } from "react"

export function PasswordForm({
  adminDashboard,
}: {
  adminDashboard: ReactNode
}) {
  const [state, action] = useFormState(redirectToDashboard, {
    success: undefined,
  })

  return state.success ? (
    adminDashboard
  ) : (
    <>
      <form className="flex justify-center items-center gap-2" action={action}>
        <Input name="password" type="password" placeholder="Password" />
        <Button>Submit</Button>
      </form>
      {state.success === false && (
        <div className="text-destructive">Incorrect Password</div>
      )}
    </>
  )
}
