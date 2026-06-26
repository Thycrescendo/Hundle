"use client";

import { useState } from "react";

export default function TradePanel() {
  const [amount, setAmount] = useState("");

  return (
    <section id="trade" className="rounded-3xl bg-white/5 p-6 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-4">Trade G$</h2>

      <div className="space-y-4">
        <div className="rounded-2xl bg-black/30 p-4">
          <label className="text-sm text-gray-400">You pay</label>
          <input
            className="w-full bg-transparent text-3xl text-white outline-none mt-2"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <p className="text-gray-400 mt-1">cUSD</p>
        </div>

        <div className="rounded-2xl bg-black/30 p-4">
          <label className="text-sm text-gray-400">You receive</label>
          <p className="text-3xl text-white mt-2">
            {amount ? Number(amount) * 4500 : "0.00"}
          </p>
          <p className="text-gray-400 mt-1">G$</p>
        </div>

        <button className="w-full rounded-xl bg-yellow-400 py-4 font-bold text-black">
          Preview Swap
        </button>
      </div>
    </section>
  );
}