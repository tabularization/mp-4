import React from "react";
import { StockQuote } from "../types";

interface StockListProps {
  stocks: StockQuote;
  ticker?: string;
}

export default function StockList({ stocks, ticker }: StockListProps) {
  if (stocks.c == 0) {
    return (
      <div className="flex flex-col justify-end items-center pt-10 pb-15 px-6 ml-[150px] w-[450px] animate-float h-[450px] bg-[url('/img2.png')] bg-contain -translate-x-10 -translate-y-20 bg-no-repeat mt-20">
      </div>
    );
  }
  
  return (
    <div className="border border-gray-700 rounded-lg pt-10 pb-15 px-6 ml-[150px] animate-float w-[450px] h-[400px] bg-[url('/img1.png')] bg-fit bg-[position:calc(100%+190px)_calc(50%+40px)] -translate-x-10 -translate-y-10 bg-no-repeat mt-20">
      <h2 className="text-3xl font-bold text-white text-glow mb-4]">
        {`$${ticker} (${new Date().toLocaleDateString()})`}
      </h2>
      <ul className="text-gray-300 text-xl space-y-2 font-semibold mt-5 ">
        <li className="py-1 text-glow">
          <span className="font-semibold text-white">Current Price: </span> ${stocks.c}
        </li>
        <li className="py-1 text-glow">
          <span className="font-semibold text-white">Open Price: </span> ${stocks.o}
        </li>
        <li className="py-1 text-glow">
          <span className="font-semibold text-white">Previous Close: </span> ${stocks.pc}
        </li>
        <li className="py-1 text-glow">
          <span className="font-semibold text-white">Change: </span>
          <span className={stocks.dp > 0 ? "text-green-500" : "text-red-500"}>
            ${stocks.d} ({stocks.dp}%)
          </span>
        </li>
      </ul>
    </div>
  );
}
