import MarketCarousel from "@/components/market-carousel";
import { marketData } from "@/utils/marketData";

export default function MarketPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-2 text-4xl font-bold">Market Overview</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Stay updated with the latest trends in stocks and cryptocurrencies
      </p>
      <MarketCarousel items={marketData} />
    </div>
  );
}
