import { Search } from 'lucide-react';
import { Navigation } from '../components/Navigation';

export const IAPage = () => {
  return (
    <>
        <div className="min-h-screen bg-black text-white ">
            <Navigation/>
        {/* AI Assistant Section */}
        <div className="max-w-7xl mx-auto px-4 py-6">
        <section className="text-center mb-8">
          <p className="mb-6 text-lg text-gray-300">
            Preguntale a la IA para que te ayude con tus finanzas
          </p>
          <h3 className="text-2xl mb-6">¿Como te puedo ayudar?</h3>
          <div className="relative">
            <input
              type="text"
              className="w-full bg-gray-900 text-white rounded-full py-3 px-6 pr-12 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              placeholder="Escribe tu pregunta..."
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </section>
        </div>
        </div>
    </>
  )
}
