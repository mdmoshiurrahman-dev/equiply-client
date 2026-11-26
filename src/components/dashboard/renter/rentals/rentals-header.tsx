export function RentalsHeader() {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-medium tracking-wider text-emerald-700 uppercase dark:text-emerald-400">
        Rental Management
      </span>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        My Rentals
      </h1>
      <p className="text-sm text-muted-foreground sm:text-base">
        Manage your bookings, track rental periods and monitor payments.
      </p>
    </div>
  );
}
