import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="h-full w-full shadow-rose-200 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <CardHeader className="space-y-4 p-6">
        <div className="flex items-center justify-center">{icon}</div>
        <CardTitle className="text-center text-xl">{title}</CardTitle>
        <CardDescription className="text-center text-base">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
