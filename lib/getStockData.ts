import { StockQuote } from "@/types"

export default async function getStockData(ticker: string): Promise<StockQuote> {
  const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${process.env.FINNHUB_API_KEY}`);
  return res.json();
}
