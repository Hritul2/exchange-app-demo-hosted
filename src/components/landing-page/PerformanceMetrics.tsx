import { Cpu, LineChart, BarChart2 } from "lucide-react";
import MetricCard from "./MetricCard";

export default function PerformanceMetrics() {
  const metrics = [
    {
      icon: <Cpu className="h-12 w-12 text-primary" />,
      value: "10ms",
      label: "Average Order Latency",
    },
    {
      icon: <LineChart className="h-12 w-12 text-primary" />,
      value: "1M+",
      label: "Orders Per Second",
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-primary" />,
      value: "99.99%",
      label: "System Uptime",
    },
  ];

  return (
    <section className="w-full bg-background/90 py-12 text-primary md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center gap-20 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Performance Metrics
            </h2>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
