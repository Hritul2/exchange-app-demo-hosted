import Image from "next/image";

export default function SystemArchitecture() {
  return (
    <section
      id="system-design"
      className="w-full bg-background py-10 md:py-14 lg:py-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              System Architecture
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg lg:text-xl">
              A robust and scalable architecture designed for high-frequency
              trading
            </p>
          </div>
          <div className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
            <div className="relative w-full overflow-hidden rounded-lg shadow-2xl shadow-rose-200/50 transition-shadow duration-300 hover:shadow-rose-300/60">
              <Image
                src="/images/system-architecture.png"
                width={1200}
                height={900}
                alt="System Architecture Diagram"
                className="h-auto w-full rounded-lg"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
