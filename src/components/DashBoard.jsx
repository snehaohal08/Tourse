import { ArrowPathIcon, MinusIcon, XMarkIcon } from "@/components/icons"
import DonutChart from "@/components/donut-chart"
import BarChart from "@/components/bar-chart"
import AreaChart from "@/components/area-chart"

export default function DashBoard() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard 4</h1>
        <div className="flex items-center space-x-2 text-purple-600">
          <span>UBold</span>
          <span className="text-gray-400">&gt;</span>
          <span>Dashboards</span>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-400">Dashboard 4</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Lifetime Sales Card */}
        <div className="bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium text-gray-700">Lifetime Sales</h2>
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 hover:text-gray-600">
                <ArrowPathIcon className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <MinusIcon className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">3,487</div>
                <div className="text-sm text-gray-500">Total Sales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">814</div>
                <div className="text-sm text-gray-500">Open Campaign</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">5,324</div>
                <div className="text-sm text-gray-500">Daily Sales</div>
              </div>
            </div>
            <div className="flex justify-center">
              <DonutChart />
            </div>
          </div>
        </div>

        {/* Statistics Card */}
        <div className="bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium text-gray-700">Statistics</h2>
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 hover:text-gray-600">
                <ArrowPathIcon className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <MinusIcon className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">1,284</div>
                <div className="text-sm text-gray-500">Total Sales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">7,841</div>
                <div className="text-sm text-gray-500">Open Campaign</div>
              </div>
            </div>
            <div className="h-64">
              <BarChart />
            </div>
          </div>
        </div>

        {/* Income Amounts Card */}
        <div className="bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium text-gray-700">Income Amounts</h2>
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 hover:text-gray-600">
                <ArrowPathIcon className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <MinusIcon className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">2,845</div>
                <div className="text-sm text-gray-500">Total Sales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">6,487</div>
                <div className="text-sm text-gray-500">Open Campaign</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">201</div>
                <div className="text-sm text-gray-500">Daily Sales</div>
              </div>
            </div>
            <div className="h-64">
              <AreaChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

