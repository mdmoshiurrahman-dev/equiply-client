import type { ReactNode } from "react"

interface PageHeaderProps {
  breadcrumb: string[]
  title: string
  description: string
  /** Optional action rendered at the end of the header row (e.g. "Add Equipment"). */
  action?: ReactNode
}

/** Breadcrumb + title + description block with an optional top-right action. */
export function PageHeader({ breadcrumb, title, description, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
      <div className="space-y-1.5">
        <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          {breadcrumb.map((crumb, index) => (
            <span key={crumb}>
              {index > 0 && <span className="mx-1.5 font-normal opacity-60">/</span>}
              {crumb}
            </span>
          ))}
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
