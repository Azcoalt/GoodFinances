import { savingsCards } from '../Data';
import { SavingsCard } from '../components/SavingsCard';
import { Navigation } from '../components/Navigation';

export const SavingSection = () => {
  return (
    <div className="min-h-screen bg-black text-white">
        <Navigation/>
        <div className="max-w-7xl mx-auto px-4 py-6">
            {/* Savings Section */}
                    <section className="mb-12">
                      <h2 className="text-3xl font-bold mb-8 text-center">Apartados</h2>
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        {savingsCards.map((card, index) => (
                          <SavingsCard key={index} title={card.title} amount={card.amount} />
                        ))}
                      </div>
                      
                    </section>
        </div>
    </div>
  )
}
