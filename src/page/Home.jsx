import { useState } from 'react';
import { SavingsCard } from '../components/SavingsCard';
import { FinancialCard } from '../components/FinancialCard';
import { MoneyForm } from '../components/MoneyForm';
import { PiggyBank, Plus, Search } from 'lucide-react';
import { SectionForm } from '../components/SectionForm';
import { Navigation } from '../components/Navigation';
import { savingsCards } from '../Data';

export const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [total, setTotal] = useState(123);
    const [apartados, setApartados] = useState(123);
    const [showForm, setShowForm] = useState(false);
    const [showSectionForm, setShowSectionForm] = useState(false);
  
    // const savingsCards = [
    //   { title: 'GYM', amount: 50 },
    //   { title: 'GYM', amount: 50 },
    //   { title: 'GYM', amount: 50 },
    // ];
  
    const handleMoneySubmit = (data) => {
      if (data.type === 'expense') {
        setTotal((prev) => prev - data.amount);
      } else if (data.type === 'section' && data.selectedSection) {
        setApartados((prev) => prev + data.amount);
        // Here you would typically update the specific section's amount
      }
      setShowForm(false);
    };
  
    const handleSectionSubmit = (data) => {
    //   setSavingsCards((prev) => [...prev, { title: data.name, amount: 0, target: data.targetAmount }]);
      setShowSectionForm(false);
    };
  
  return (
    <>
        <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Financial Overview Card */}
        <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-3xl p-6 mb-8 shadow-lg">
          <div className="flex items-center mb-4">
            <PiggyBank className="w-8 h-8 text-white" />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80 mb-1">Total</p>
              <h2 className="text-4xl font-bold">$ {50}</h2>
            </div>
            
            <div>
              <p className="text-sm opacity-80 mb-1">Apartados</p>
              <h2 className="text-4xl font-bold">$ {50}</h2>
            </div>

            <button  onClick={() => setShowForm(!showForm)} className="bg-blue-600 rounded-full p-3 hover:bg-blue-700 transition-colors shadow-xl">
              <Plus className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Money Form */}
        {showForm && (
          <div className="mb-8">
            <MoneyForm onSubmit={handleMoneySubmit} />
          </div>
        )}

        {/* Savings Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Apartados</h2>
          <div className="grid grid-cols-3 gap-6 mb-8">
            {savingsCards.map((card, index) => (
              <SavingsCard key={index} title={card.title} amount={card.amount} />
            ))}
          </div>
          
          <button onClick={() => setShowSectionForm(!showSectionForm)} className="w-full bg-[#1e3a8a] text-white py-4 rounded-2xl hover:bg-[#1e40af] transition-colors shadow-lg text-lg font-semibold">
            Genera Apartado
          </button>
        </section>

        {/* Section Form */}
        {showSectionForm && (
          <div className="mb-8">
            <SectionForm onSubmit={handleSectionSubmit} />
          </div>
        )}

      </main>
    </div>
    </>
  )
}
