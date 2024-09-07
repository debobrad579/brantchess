import type {
  Control,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form"
import type { ReactElement } from "react"
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { Input } from "../ui/input"

export function AdminFormField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  render = (field) => (
    <FormControl>
      <Input {...field} />
    </FormControl>
  ),
}: {
  control: Control<TFieldValues>
  name: TName
  label: string
  render?: (field: ControllerRenderProps<TFieldValues, TName>) => ReactElement
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex gap-2 items-center">
            <FormLabel className="w-24 min-w-24">{label}</FormLabel>
            {render(field)}
          </div>
        </FormItem>
      )}
    />
  )
}
