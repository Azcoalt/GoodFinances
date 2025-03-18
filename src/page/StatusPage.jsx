import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Navigation } from '../components/Navigation';
import { data } from '../Data'; 

// const data = [
//     { date: '2024-01', income: 3000, expenses: 2000, savings: 1000, balance: 2000 },
//     { date: '2024-02', income: 3500, expenses: 1800, savings: 1200, balance: 3700 },
//     { date: '2024-03', income: 2800, expenses: 2200, savings: 800, balance: 4300 },
//     { date: '2024-04', income: 4000, expenses: 2500, savings: 1500, balance: 5800 },
//   ];

export const StatusPage = () => {
  return (
    <div className="min-h-screen bg-black text-white ">
      <Navigation/>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-8">Estatus Financiero</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6">
            <h3 className="text-gray-300 mb-2">Saldo total</h3>
            <p className="text-3xl font-bold">$5,800</p>
          </div>
          <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-xl p-6">
            <h3 className="text-gray-300 mb-2">Ingreso Mensual</h3>
            <p className="text-3xl font-bold">$4,000</p>
          </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl p-6">
            <h3 className="text-gray-300 mb-2">Gastos mensuales</h3>
            <p className="text-3xl font-bold">$2,500</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-6">
            <h3 className="text-gray-300 mb-2">Ahorros totales</h3>
            <p className="text-3xl font-bold">$1,500</p>
          </div>
        </div>

        {/* Balance History Chart */}
        <div className="bg-gray-900 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Historial de saldo</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="balance" stroke="#3B82F6" strokeWidth={2} dot={{ fill: '#3B82F6' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Income vs Expenses Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Ingresos vs. Gastos</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="income" fill="#10B981" />
                  <Bar dataKey="expenses" fill="#EF4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Savings Trend */}
          <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Tendencia de ahorro</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="savings" fill="#8B5CF6" stroke="#8B5CF6" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
