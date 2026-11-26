import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { applicationStats } from "./moc/constants"


export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {applicationStats.map((stat) => (
        <Card key={stat.label} className="gap-1 py-4">
          <CardHeader className="px-4">
            <CardDescription>{stat.label}</CardDescription>
          </CardHeader>
          <CardContent className="px-4">
            <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
