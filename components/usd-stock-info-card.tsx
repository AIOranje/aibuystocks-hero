export function USDStockInfoCard() {
  return (
    <div className="rounded-2xl p-5 shadow-lg" style={{ backgroundColor: "#111520" }}>
      {/* Header */}
      <h3 className="text-xl font-bold mb-2" style={{ color: "#32A9E6" }}>
        📈 USD Stocks Only
      </h3>

      {/* Description */}
      <p className="text-base text-white mb-3 leading-relaxed">
        All trades are based on stocks listed on U.S. exchanges (NASDAQ, NYSE, AMEX). All prices, entries, stop losses,
        and take profits are in USD. Simple, clear, and profitable signals for U.S. stocks only.
      </p>

      {/* Features List */}
      <div className="text-base space-y-1" style={{ color: "#27C48F" }}>
        <div>✅ 100% Focused on U.S. Stocks</div>
        <div>✅ Simple Signals: Entry, Stop, TP1 & TP2</div>
        <div>✅ Always in USD — No confusion, just results</div>
      </div>
    </div>
  )
}
