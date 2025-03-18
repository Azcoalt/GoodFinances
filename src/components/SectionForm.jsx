import {useState} from 'react'
import { savingsCards as initialcard } from '../Data';

export const SectionForm = ({ onSubmit }) => {
  const [sectionName, setSectionName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [savingCards,setSavingCards] = useState(initialcard);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newItem = onSubmit({ title: sectionName, amount: parseFloat(targetAmount) });
  
    if (newItem) {
      setSavingCards(prev => [...prev, newItem]);
    }
  
    // Limpiar los inputs
    setSectionName('');
    setTargetAmount('');
  };
  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-white">Create New Section</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="sectionName" className="block text-sm font-medium text-gray-300 mb-1">
            Section Name
          </label>
          <input
            type="text"
            id="sectionName"
            value={sectionName}
            onChange={(e) => setSectionName(e.target.value)}
            className="w-full bg-gray-800 text-white rounded-lg py-2 px-3 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
            placeholder="e.g., Vacation Fund"
            required
          />
        </div>

        <div>
          <label htmlFor="targetAmount" className="block text-sm font-medium text-gray-300 mb-1">
            Target Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <input
              type="number"
              id="targetAmount"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
              className="w-full bg-gray-800 text-white rounded-lg py-2 px-8 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
              placeholder="0.00"
              step="0.01"
              min="0"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 mt-6"
        >
          Create Section
        </button>
      </div>
    </form>
  )
}
