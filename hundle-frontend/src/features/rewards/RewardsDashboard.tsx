const kpis = [
  { label: "Connected wallets", value: "128", target: "500" },
  { label: "G$ transactions", value: "342", target: "1,500" },
  { label: "G$ distributed", value: "56,000", target: "250,000" },
  { label: "Weekly active users", value: "74", target: "300" },
];

export default function RewardsDashboard() {
  return (
    <section id="rewards" className="rounded-3xl bg-white/5 p-6 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-2">GoodBuilders Rewards</h2>
      <p className="text-gray-400 mb-6">
        Track Hundle’s Season 4 G$ adoption, incentives, and ecosystem growth.
      </p>

      <div className="grid gap-4 md:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-2xl bg-black/30 p-4">
            <p className="text-sm text-gray-400">{kpi.label}</p>
            <h3 className="text-2xl font-bold text-white">{kpi.value}</h3>
            <p className="text-xs text-gray-500">Target: {kpi.target}</p>
          </div>
        ))}
      </div>
    </section>
  );
}