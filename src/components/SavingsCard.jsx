export const SavingsCard = ({title, amount}) => {
  return (
    <div className="border-2 border-blue-600 rounded-xl p-4 text-center">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-2xl font-bold mb-3">${amount}</p>
      <button className="bg-blue-600 text-white px-6 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors">
        ver
      </button>
    </div>
  )
}
