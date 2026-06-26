"use client";

import { motion } from "framer-motion";

const markets = [
  { pair: "G$/cUSD", price: "0.00021", change: "+8.40%", volume: "$12.4K" },
  { pair: "CELO/cUSD", price: "0.72", change: "+2.10%", volume: "$84.9K" },
  { pair: "G$/CELO", price: "0.00029", change: "+5.60%", volume: "$7.8K" },
];

export default function MarketPreview() {
  return (
    <motion.div
      id="markets"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
    >
      <h3 className="mb-4 text-xl font-bold">Market Preview</h3>

      <div className="space-y-3">
        {markets.map((market) => (
          <div
            key={market.pair}
            className="grid grid-cols-4 items-center rounded-xl bg-black/20 p-3 text-sm"
          >
            <span className="font-semibold">{market.pair}</span>
            <span>{market.price}</span>
            <span className="text-green-400">{market.change}</span>
            <span className="text-right opacity-80">{market.volume}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}