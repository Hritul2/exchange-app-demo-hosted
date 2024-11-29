import { Zap, Globe, GitBranch, Database, BarChart2, Lock } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function KeyFeatures() {
  const features = [
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "High Performance",
      description: "Low-latency order execution with real-time processing",
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Real-Time Updates",
      description: "Live trade data streaming via WebSockets",
    },
    {
      icon: <GitBranch className="h-12 w-12 text-primary" />,
      title: "Scalability",
      description: "Handles millions of transactions with ease",
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "Robust Design",
      description: "Redis-powered pub/sub and queuing system",
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-primary" />,
      title: "Detailed Analytics",
      description: "Time-series database for advanced insights",
    },
    {
      icon: <Lock className="h-12 w-12 text-primary" />,
      title: "Security",
      description: "Enterprise-grade security measures",
    },
  ];

  return (
    <section className="w-full bg-background/10 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              Key Features
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg lg:text-xl">
              Built with performance and scalability in mind
            </p>
          </div>

          <div className="w-full max-w-6xl px-20">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="flex justify-center">
                  <FeatureCard {...feature} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
