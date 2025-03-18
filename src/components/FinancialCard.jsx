

export const FinancialCard = ({title,amount,icon}) => {

  return (
    <>
        <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
                <span className="text-lg text-white/90">{title}</span>
                    {icon}
            </div>
            <div className="text-3xl font-bold">$ {amount}</div>
        </div>
    </>
  )
}
