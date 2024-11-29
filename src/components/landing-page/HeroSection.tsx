import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-rose-100 to-background py-16 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6 text-center md:space-y-8">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Revolutionizing Stock Trading
          </h1>
          <p className="mx-auto max-w-2xl px-4 text-base text-primary/80 md:text-xl lg:text-2xl">
            An advanced stock exchange system designed for real-time trading and
            unmatched scalability. Built for the future of financial markets.
          </p>
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#system-design" className="w-3/5 sm:w-auto">
              <Button variant="default" size="lg" className="w-full sm:w-auto">
                Explore System Design
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/trade" className="w-3/5 sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full text-primary sm:w-auto"
              >
                View Live Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
