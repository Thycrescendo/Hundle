"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const G_DOLLAR_RATE = 4500;

export default function TradeWidget() {
  const [amount, setAmount] = useState("");

  const receiveAmount = useMemo(() => {
    const value = Number(amount);
    if (!value || value <= 0) return "0.00";
    return (value * G_DOLLAR_RATE).toLocaleString();
  }, [amount]);

  return (
    <motion.div
      id="trade"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
    >
      <h3 className="mb-4 text-xl font-bold">G$ Trade Preview</h3>

      <div className="space-y-4">
        <div className="rounded-xl bg-black/20 p-4">
          <label className="text-sm opacity-70">You pay</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            inputMode="decimal"
            className="mt-2 w-full bg-transparent text-3xl outline-none"
          />
          <p className="mt-1 text-sm opacity-70">cUSD</p>
        </div>

        <div className="rounded-xl bg-black/20 p-4">
          <label className="text-sm opacity-70">You receive</label>
          <p className="mt-2 text-3xl">{receiveAmount}</p>
          <p className="mt-1 text-sm opacity-70">G$</p>
        </div>

        <button
          type="button"
          className="w-full rounded-xl border border-white/10 px-5 py-3 font-semibold transition hover:scale-[1.01]"
        >
          Preview Swap
        </button>
      </div>
    </motion.div>
  );
}