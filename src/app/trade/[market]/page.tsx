"use client";

import { useParams } from "next/navigation";
import MarketBar from "@/components/MarketBar";
import SwapUI from "@/components/swap-ui";
import TradeView from "@/components/TradeView";
import Depth from "@/components/depth/Depth";

export default function TradingPage() {
  const { market } = useParams<{ market: string }>();

  return (
    <div className="mb-16 flex flex-col">
      <div className="mt-[1px] border border-b-0 border-rose-700">
        <MarketBar market={market} />
      </div>

      {/* Desktop and Tablet Layout (md and up) */}
      <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-4">
        <div className="col-span-3 grid grid-cols-3 border border-rose-700">
          <div className="col-span-2 ml-1">
            <TradeView market={market} />
          </div>
          <div className="col-span-1 ml-1 border-l border-red-700">
            <div className="max-h-[35rem] overflow-scroll">
              <Depth market={market} />
            </div>
          </div>
        </div>
        <div className="col-span-1 border border-l-0 border-rose-700">
          <SwapUI market={market} />
        </div>
      </div>

      {/* Mobile Layout (below md) */}
      <div className="flex flex-col md:hidden">
        {/* Full width chart */}
        <div className="border border-rose-700">
          <TradeView market={market} />
        </div>

        {/* Swap UI and Depth in tabs or accordion style */}
        <div className="mt-4 grid grid-cols-1 gap-4">
          <div className="border border-rose-700">
            <SwapUI market={market} />
          </div>
          <div className="border border-rose-700">
            <div className="max-h-[24rem] overflow-scroll">
              <Depth market={market} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
