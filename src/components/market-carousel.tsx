"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { MarketItem } from "@/utils/marketData";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import Link from "next/link";

interface MarketCarouselProps {
  items: MarketItem[];
}

export default function MarketCarousel({ items }: MarketCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <Link href={`/trade/${item.name}`}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-start p-6">
                    <div className="mb-4 flex w-full items-center justify-between">
                      <span className="text-2xl font-semibold">
                        {item.symbol}
                      </span>
                      <span
                        className={`text-sm font-medium ${item.type === "stock" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"} rounded-full px-2 py-1`}
                      >
                        {item.type === "stock" ? "Stock" : "Crypto"}
                      </span>
                    </div>
                    <span className="mb-2 text-lg text-muted-foreground">
                      {item.name}
                    </span>
                    <span className="mb-2 text-3xl font-bold">
                      ${item.price.toLocaleString()}
                    </span>
                    <div
                      className={`flex items-center ${item.change >= 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      {item.change >= 0 ? (
                        <ArrowUpIcon className="mr-1 h-4 w-4" />
                      ) : (
                        <ArrowDownIcon className="mr-1 h-4 w-4" />
                      )}
                      <span className="text-lg font-semibold">
                        {Math.abs(item.change)}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
