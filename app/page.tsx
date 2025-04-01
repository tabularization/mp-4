"use client";
import { useState } from "react";
import { StockQuote } from "@/types";
import StockList from "../components/stock-data-display";
import getStockData from "@/lib/getStockData";
import Image from "next/image";

export default function Home() {
  const [ticker, setTicker] = useState("");
  const [stockData, setStockData] = useState<StockQuote | null>(null);
  const [display, setDisplay] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ticker) return;
    try {
      const res = await getStockData(ticker.toUpperCase());
      setStockData(res);
      setDisplay(ticker);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-start text-white flex gap-5 overflow-hidden">
      <div className="absolute inset-0 rotate-180 bg-[url('/bg1.png')] translate-y-50 bg-no-repeat z-[-1] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[url('/bg1.png')] translate-y-50 bg-no-repeat z-[-1] bg-cover" />
      <div className="flex flex-col max-w-[50vw] mt-20">
        <h1 className="text-6xl font-[500] tracking-wider mb-4 my-0">
          GET DATA <span className="italic">INSTANTLY.</span>
        </h1>
        <div className="max-w-[30vw]">
          <p className="font-[300] mb-5 text-m text-gray-400">
            Get the latest stock quote, including the current price, price change, percent change, opening price, and
            previous close.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
              name="ticker"
              type="text"
              onChange={(e) => setTicker(e.target.value)}
              placeholder="e.g., AAPL"
              className="flex-1 border border-gray-300 rounded px-3 py-2"
            />
            <button type="submit" className="bg-gray-500 text-white font-semibold px-4 py-2 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>

      {stockData ? (
        <StockList stocks={stockData} ticker={display} />
      ) : (
        <Image
          src="/img4.png"
          className="rounded-lg pt-10 pb-15 px-6 animate-float"
          alt="3d rendering of money z-[-1]"
          width={600}
          height={500}
        />
      )}
    </div>
  );
}
