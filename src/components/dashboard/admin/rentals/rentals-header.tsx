interface RentalsHeaderProps {
  title: string;
  description: string;
}

export function RentalsHeader({ title, description }: RentalsHeaderProps) {
  return (
    <div className="space-y-1">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
