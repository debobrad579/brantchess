import type { ReactNode } from "react"

export function Tournament({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div>
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      {children}
    </div>
  )
}
