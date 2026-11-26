interface RenterInfoProps {
  name: string;
  email: string;
}

export function RenterInfo({ name, email }: RenterInfoProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-xs text-muted-foreground">{email}</span>
    </div>
  );
}
