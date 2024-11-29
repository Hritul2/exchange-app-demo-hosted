"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Ticker } from "../utils/types";
import { getTicker } from "@/actions/getTicker";
import { Info } from "lucide-react"; // You can replace with an appropriate Info icon

import { SocketManager } from "@/utils/SocketManager";
import { SocketManagerType } from "@/utils/constants";

export default function MarketBar({ market }: { market: string }) {
  const [ticker, setTicker] = useState<Ticker | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    getTicker(market).then(setTicker);
    SocketManager.getInstance().registerCallback(
      SocketManagerType.Ticker,
      (data: Partial<Ticker>) =>
        setTicker((prevTicker) => ({
          firstPrice: data?.firstPrice ?? prevTicker?.firstPrice ?? "",
          high: data?.high ?? prevTicker?.high ?? "",
          lastPrice: data?.lastPrice ?? prevTicker?.lastPrice ?? "",
          low: data?.low ?? prevTicker?.low ?? "",
          priceChange: data?.priceChange ?? prevTicker?.priceChange ?? "",
          priceChangePercent:
            data?.priceChangePercent ?? prevTicker?.priceChangePercent ?? "",
          quoteVolume: data?.quoteVolume ?? prevTicker?.quoteVolume ?? "",
          symbol: data?.symbol ?? prevTicker?.symbol ?? "",
          trades: data?.trades ?? prevTicker?.trades ?? "",
          volume: data?.volume ?? prevTicker?.volume ?? "",
        })),
      `TICKER-${market}`,
    );

    SocketManager.getInstance().sendMessage({
      method: "SUBSCRIBE",
      params: [`ticker.${market}`],
    });

    return () => {
      SocketManager.getInstance().deRegisterCallback(
        "ticker",
        `TICKER-${market}`,
      );
      SocketManager.getInstance().sendMessage({
        method: "UNSUBSCRIBE",
        params: [`ticker.${market}`],
      });
    };
  }, [market]);

  if (!ticker) return null;

  return (
    <Card className="w-full rounded-none bg-background text-primary">
      <CardContent className="p-3">
        <div className="flex items-center justify-between">
          <TickerSymbol market={market} />
          {/* Responsive Content */}
          <div className="flex items-center space-x-4">
            {/* Visible on larger screens */}
            <div className="hidden space-x-4 md:flex">
              <PriceInfo label="Price" value={ticker.lastPrice} prefix="$" />
              <PriceInfo
                label="24h Change"
                value={`${Number(ticker.priceChange) > 0 ? "+" : ""}${
                  ticker.priceChange
                } (${Number(ticker.priceChangePercent).toFixed(2)}%)`}
                className={
                  Number(ticker.priceChange) > 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              />
              <PriceInfo label="24h High" value={ticker.high} prefix="$" />
              <PriceInfo label="24h Low" value={ticker.low} prefix="$" />
              <PriceInfo label="24h Volume" value={ticker.volume} />
            </div>

            {/* On smaller screens, show Info icon */}
            <div className="flex items-center space-x-2 md:hidden">
              <PriceInfo label="Price" value={ticker.lastPrice} prefix="$" />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowInfo(!showInfo)}
                aria-label="More Info"
              >
                <Info className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Expanded Info for small screens */}
        {showInfo && (
          <div className="mt-3 flex flex-wrap space-x-4 md:hidden">
            <PriceInfo
              label="24h Change"
              value={`${Number(ticker.priceChange) > 0 ? "+" : ""}${ticker.priceChange} (${Number(ticker.priceChangePercent).toFixed(2)}%)`}
              className={`${Number(ticker.priceChange) > 0 ? "text-green-500" : "text-red-500"}`}
            />
            <PriceInfo label="24h High" value={ticker.high} prefix="$" />
            <PriceInfo label="24h Low" value={ticker.low} prefix="$" />
            <PriceInfo label="24h Volume" value={ticker.volume} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function TickerSymbol({ market }: { market: string }) {
  const [base, quote] = market.split("_");

  return (
    <Button variant="ghost" className="p-0">
      <div className="flex items-center space-x-2">
        <div className="relative">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={`/${base.toLowerCase()}.webp`}
              alt={`${base} Logo`}
            />
            <AvatarFallback>{base[0]}</AvatarFallback>
          </Avatar>
          <Avatar className="absolute -bottom-1 -right-1 h-6 w-6">
            <AvatarImage
              src={`/${quote.toLowerCase()}.webp`}
              alt={`${quote} Logo`}
            />
            <AvatarFallback>{quote[0]}</AvatarFallback>
          </Avatar>
        </div>
        <span className="font-medium">{`${base} / ${quote}`}</span>
      </div>
    </Button>
  );
}

function PriceInfo({
  label,
  value,
  prefix = "",
  className = "",
}: {
  label: string;
  value: string | number;
  prefix?: string;
  className?: string;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className={`font-medium tabular-nums ${className}`}>
        {prefix}
        {value}
      </span>
    </div>
  );
}
