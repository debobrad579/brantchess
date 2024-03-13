import { FormMessage, useFormField } from "../ui/form"

export function FormErrorPopup() {
  const { error } = useFormField()

  return (
    error && (
      <div className="border p-3 rounded-lg bg-destructive text-destructive-foreground absolute">
        {error.message}
      </div>
    )
  )
}
