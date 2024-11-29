interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export default function MetricCard({ icon, value, label }: MetricCardProps) {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-lg border border-primary/30 p-6 shadow-rose-200 transition-colors hover:bg-primary/10 hover:shadow-lg">
      {icon}
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-primary/70">{label}</p>
    </div>
  );
}
