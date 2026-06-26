export default function PortfolioCard() {
  return (
    <section id="portfolio" className="rounded-3xl bg-white/5 p-6 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-4">Portfolio</h2>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-black/30 p-4">
          <p className="text-gray-400">Total Balance</p>
          <h3 className="text-3xl font-bold text-white">$1,284.40</h3>
        </div>

        <div className="rounded-2xl bg-black/30 p-4">
          <p className="text-gray-400">G$ Earned</p>
          <h3 className="text-3xl font-bold text-white">24,500 G$</h3>
        </div>

        <div className="rounded-2xl bg-black/30 p-4">
          <p className="text-gray-400">Active Rewards</p>
          <h3 className="text-3xl font-bold text-white">7</h3>
        </div>
      </div>
    </section>
  );
}