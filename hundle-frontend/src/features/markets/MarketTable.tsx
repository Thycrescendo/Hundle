const markets = [
  { pair: "G$/cUSD", price: "0.00021", change: "+8.4%", volume: "$12,420" },
  { pair: "CELO/cUSD", price: "0.72", change: "+2.1%", volume: "$84,900" },
  { pair: "G$/CELO", price: "0.00029", change: "+5.6%", volume: "$7,810" },
];

export default function MarketTable() {
  return (
    <section id="markets" className="rounded-3xl bg-white/5 p-6 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-4">Live Markets</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-300">
          <thead>
            <tr className="border-b border-white/10 text-gray-400">
              <th className="py-3">Pair</th>
              <th>Price</th>
              <th>24h</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {markets.map((market) => (
              <tr key={market.pair} className="border-b border-white/5">
                <td className="py-4 font-semibold text-white">{market.pair}</td>
                <td>{market.price}</td>
                <td className="text-green-400">{market.change}</td>
                <td>{market.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}