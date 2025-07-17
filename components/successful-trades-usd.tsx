import { CheckCircle, TrendingUp, Target } from "lucide-react"

export function SuccessfulTradesUSD() {
  const trades = [
    {
      ticker: "WKHS",
      entry: "3.25",
      tp1: "5.60",
      gainTP1: "+72.31%",
      tp2: "BE",
      gainTP2: "Break Even",
      note: "50% closed at TP1. Remaining exited at break-even.",
    },
    {
      ticker: "SQNS",
      entry: "2.68",
      tp1: "4.23",
      gainTP1: "+57.84%",
      tp2: "5.79",
      gainTP2: "+116.04%",
    },
    {
      ticker: "TAOX",
      entry: "4.92",
      tp1: "8.10",
      gainTP1: "+64.63%",
      tp2: "11.10",
      gainTP2: "+125.61%",
    },
    {
      ticker: "SONN",
      entry: "4.40",
      tp1: "9.42",
      gainTP1: "+114.09%",
      tp2: "14.43",
      gainTP2: "+227.95%",
    },
    {
      ticker: "QUBT",
      entry: "12.96",
      tp1: "17.33",
      gainTP1: "+33.68%",
      tp2: "21.70",
      gainTP2: "+67.44%",
    },
    {
      ticker: "ASTS",
      entry: "29.09",
      tp1: "35.06",
      gainTP1: "+20.52%",
      tp2: "41.03",
      gainTP2: "+41.05%",
    },
    {
      ticker: "CRCL",
      entry: "123.52",
      tp1: "172.92",
      gainTP1: "+40.00%",
      tp2: "222.42",
      gainTP2: "+80.07%",
    },
    {
      ticker: "BBAI",
      entry: "3.66",
      tp1: "4.87",
      gainTP1: "+33.06%",
      tp2: "6.09",
      gainTP2: "+66.39%",
    },
    {
      ticker: "SKYE",
      entry: "3.18",
      tp1: "4.59",
      gainTP1: "+44.34%",
      tp2: "5.71",
      gainTP2: "+79.56%",
    },
  ]

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#0A0D18" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🚀 Successful Trades – TP1 & TP2 Targets Hit
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            These trades successfully hit both take profit levels. AI-powered winning signals delivered on every trading
            day.
          </p>
        </div>

        {/* Table Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden mb-12">
          <div className="p-6 border-b border-gray-800">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <Target className="w-6 h-6" style={{ color: "#32A9E6" }} />
              Winning Trades – TP1 & TP2 in USD
            </h3>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: "#32A9E6" }}>
                  <th className="text-left text-white font-bold py-4 px-6">Ticker</th>
                  <th className="text-left text-white font-bold py-4 px-6">Entry (USD)</th>
                  <th className="text-left text-white font-bold py-4 px-6">TP1 (USD)</th>
                  <th className="text-left text-white font-bold py-4 px-6">% Gain TP1</th>
                  <th className="text-left text-white font-bold py-4 px-6">TP2 (USD)</th>
                  <th className="text-left text-white font-bold py-4 px-6">% Gain TP2</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((trade, index) => (
                  <tr
                    key={trade.ticker}
                    className={`border-b border-gray-800 hover:bg-gray-800/30 transition-colors duration-300 ${
                      index % 2 === 0 ? "bg-gray-900/30" : "bg-transparent"
                    }`}
                  >
                    <td className="text-white font-bold py-4 px-6 text-lg">{trade.ticker}</td>
                    <td className="text-white py-4 px-6">${trade.entry}</td>
                    <td className="text-white py-4 px-6">${trade.tp1}</td>
                    <td className="py-4 px-6">
                      <span className="text-green-400 font-semibold flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        {trade.gainTP1}
                      </span>
                    </td>
                    <td className="text-white py-4 px-6">${trade.tp2}</td>
                    <td className="py-4 px-6">
                      {trade.gainTP2 === "Break Even" ? (
                        <span className="text-red-400 font-semibold flex items-center gap-2">BE (Break Even)</span>
                      ) : (
                        <span className="text-green-400 font-semibold flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          {trade.gainTP2}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden p-6 space-y-6">
            {trades.map((trade) => (
              <div
                key={trade.ticker}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{trade.ticker}</h4>
                  <TrendingUp className="w-5 h-5" style={{ color: "#32A9E6" }} />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400 mb-1">Entry</p>
                    <p className="text-white font-semibold">${trade.entry}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">TP1</p>
                    <p className="text-white font-semibold">${trade.tp1}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">TP1 Gain</p>
                    <p className="text-green-400 font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {trade.gainTP1}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">TP2</p>
                    <p className="text-white font-semibold">${trade.tp2}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-400 mb-1">TP2 Gain</p>
                    {trade.gainTP2 === "Break Even" ? (
                      <p className="text-red-400 font-semibold">BE (Break Even)</p>
                    ) : (
                      <p className="text-green-400 font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        {trade.gainTP2}
                      </p>
                    )}
                  </div>
                </div>
                {trade.note && (
                  <div className="mt-4 p-3 bg-gray-700/50 rounded-lg">
                    <p className="text-sm text-gray-300">{trade.note}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text Section */}
        <div className="text-center py-8 px-6 bg-gray-900/30 rounded-2xl border border-gray-800">
          <p className="text-lg leading-relaxed" style={{ color: "#32A9E6" }}>
            ✨ This is just a small sample. Dozens of successful trades have been realized. Join AIBuysStocks.com and
            get winning signals every day — in real time.
          </p>
        </div>
      </div>
    </section>
  )
}
