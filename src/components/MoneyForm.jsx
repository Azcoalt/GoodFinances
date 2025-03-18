import {useState} from 'react'

export const MoneyForm = ({ onSubmit }) => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('expense');
    const [selectedSection, setSelectedSection] = useState('');
  
    // This would typically come from your app's state/database
    const availableSections = [
      { id: 'gym', name: 'GYM' },
      { id: 'savings', name: 'Savings' },
      { id: 'emergency', name: 'Emergency Fund' },
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({
        amount: parseFloat(amount),
        type,
        ...(type === 'section' && { selectedSection }),
      });
      setAmount('');
      setType('expense');
      setSelectedSection('');
    };
  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 rounded-xl p-6 shadow-lg">
      <div className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">
            Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-gray-800 text-white rounded-lg py-2 px-8 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
              placeholder="0.00"
              step="0.01"
              min="0"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-1">
            Type
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-gray-800 text-white rounded-lg py-2 px-3 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
          >
            <option value="expense">Expense</option>
            <option value="section">Section</option>
          </select>
        </div>

        {type === 'section' && (
          <div>
            <label htmlFor="section" className="block text-sm font-medium text-gray-300 mb-1">
              Select Section
            </label>
            <select
              id="section"
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="w-full bg-gray-800 text-white rounded-lg py-2 px-3 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
              required={type === 'section'}
            >
              <option value="">Select a section</option>
              {availableSections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 mt-4"
        >
          Add {type === 'expense' ? 'Expense' : 'to Section'}
        </button>
      </div>
    </form>
  )
}
