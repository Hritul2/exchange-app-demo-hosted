export interface MarketItem {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  type: "stock" | "crypto";
}

export const marketData: MarketItem[] = [
  {
    id: "1",
    name: "SOL_USDC",
    symbol: "SOL/USDC",
    price: 150.25,
    change: 2.5,
    type: "crypto",
  },
  {
    id: "1",
    name: "SOL_USDC",
    symbol: "SOL/USDC",
    price: 150.25,
    change: 2.5,
    type: "crypto",
  },
  {
    id: "1",
    name: "SOL_USDC",
    symbol: "SOL/USDC",
    price: 150.25,
    change: 2.5,
    type: "crypto",
  },
  {
    id: "1",
    name: "SOL_USDC",
    symbol: "SOL/USDC",
    price: 150.25,
    change: 2.5,
    type: "crypto",
  },
];
