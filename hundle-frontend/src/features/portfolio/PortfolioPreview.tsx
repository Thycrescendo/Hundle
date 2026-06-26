"use client";

import { motion } from "framer-motion";

const portfolio = [
  { label: "Estimated Balance", value: "$1,284.40" },
  { label: "G$ Earned", value: "24,500 G$" },
  { label: "Active Campaigns", value: "7" },
];

export default function PortfolioPreview() {
  return (
    <motion.div
      id="portfolio"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
    >
      <h3 className="mb-4 text-xl font-bold">Portfolio Preview</h3>

      <div className="grid gap-4 md:grid-cols-3">
        {portfolio.map((item) => (
          <div key={item.label} className="rounded-xl bg-black/20 p-4">
            <p className="text-sm opacity-70">{item.label}</p>
            <h4 className="mt-2 text-2xl font-bold">{item.value}</h4>
          </div>
        ))}
      </div>
    </motion.div>
  );
}