import { USDStockInfoCard } from "@/components/usd-stock-info-card"

export default function USDInfoPage() {
  return (
    <main className="min-h-screen py-12 px-6" style={{ backgroundColor: "#0A0D18" }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Stock Information</h1>
          <p className="text-gray-300">Clear information about our trading focus</p>
        </div>

        <USDStockInfoCard />

        {/* Additional context */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            This ensures consistency and eliminates currency conversion confusion for all our members.
          </p>
        </div>
      </div>
    </main>
  )
}
