"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Connected Wallets", value: "128", target: "500" },
  { label: "G$ Transactions", value: "342", target: "1,500" },
  { label: "G$ Distributed", value: "56,000", target: "250,000" },
  { label: "Weekly Users", value: "74", target: "300" },
];

export default function GoodBuildersStats() {
  return (
    <motion.div
      id="rewards"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
    >
      <h3 className="mb-2 text-xl font-bold">GoodBuilders Season 4 KPIs</h3>
      <p className="mb-5 text-sm opacity-70">
        Tracking Hundle’s G$ usage, rewards, and ecosystem growth.
      </p>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl bg-black/20 p-4">
            <p className="text-sm opacity-70">{stat.label}</p>
            <h4 className="mt-2 text-2xl font-bold">{stat.value}</h4>
            <p className="mt-1 text-xs opacity-60">Target: {stat.target}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}