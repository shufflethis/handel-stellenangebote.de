import React from 'react';
import { CheckCircle, BarChart3, Search, Zap } from 'lucide-react';
import { SEO_TEXT_EMPLOYER } from '../constants';

export const Employers: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Finden Sie die besten Talente im Handel</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Von der Aushilfe bis zum Geschäftsführer. Wir verbinden Sie mit qualifizierten Kandidaten – schnell, effizient und kostengünstig.
          </p>
          <button className="bg-accent-600 hover:bg-accent-700 text-white font-bold py-4 px-10 rounded-md transition-all shadow-lg text-lg">
            Jetzt Anzeige schalten
          </button>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <h2 className="text-3xl font-bold text-gray-900 mb-6">Warum handel-stellenangebote.de?</h2>
               <div className="prose text-gray-600 leading-relaxed mb-8">
                 {SEO_TEXT_EMPLOYER}
               </div>
               
               <ul className="space-y-4">
                 <li className="flex items-center gap-3">
                   <CheckCircle className="text-green-500 w-6 h-6" />
                   <span className="text-lg text-gray-800">100% Fokus auf Handelsberufe</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <CheckCircle className="text-green-500 w-6 h-6" />
                   <span className="text-lg text-gray-800">KI-Optimierung Ihrer Stellenanzeigen</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <CheckCircle className="text-green-500 w-6 h-6" />
                   <span className="text-lg text-gray-800">Hohe Reichweite durch Google Jobs Integration</span>
                 </li>
               </ul>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
               <div className="bg-gray-50 p-6 rounded-xl">
                 <BarChart3 className="w-10 h-10 text-primary-600 mb-4" />
                 <h3 className="font-bold text-gray-900 mb-2">Analytics</h3>
                 <p className="text-sm text-gray-600">Detaillierte Auswertungen zu Klicks und Bewerbungen.</p>
               </div>
               <div className="bg-gray-50 p-6 rounded-xl">
                 <Search className="w-10 h-10 text-primary-600 mb-4" />
                 <h3 className="font-bold text-gray-900 mb-2">Active Sourcing</h3>
                 <p className="text-sm text-gray-600">Zugriff auf unsere Bewerber-Datenbank.</p>
               </div>
               <div className="bg-gray-50 p-6 rounded-xl">
                 <Zap className="w-10 h-10 text-primary-600 mb-4" />
                 <h3 className="font-bold text-gray-900 mb-2">Speed</h3>
                 <p className="text-sm text-gray-600">Anzeige online in weniger als 5 Minuten.</p>
               </div>
               <div className="bg-primary-600 p-6 rounded-xl text-white flex flex-col justify-center items-center text-center">
                 <span className="text-3xl font-bold mb-1">98%</span>
                 <span className="text-sm opacity-90">Kundenzufriedenheit</span>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pricing Teaser */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Faire Preise, volle Leistung</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
               <h3 className="font-bold text-xl mb-4">Starter</h3>
               <p className="text-4xl font-bold mb-6">99€ <span className="text-base font-normal text-gray-500">/ Anzeige</span></p>
               <ul className="text-left space-y-3 mb-8 text-sm text-gray-600">
                 <li>• 30 Tage Laufzeit</li>
                 <li>• Standard Design</li>
                 <li>• Email Support</li>
               </ul>
               <button className="w-full border-2 border-primary-600 text-primary-600 font-bold py-2 rounded-lg hover:bg-primary-50">Wählen</button>
             </div>
             
             <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-primary-500 transform scale-105 relative">
               <span className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">Bestseller</span>
               <h3 className="font-bold text-xl mb-4 text-primary-700">Premium</h3>
               <p className="text-4xl font-bold mb-6">199€ <span className="text-base font-normal text-gray-500">/ Anzeige</span></p>
               <ul className="text-left space-y-3 mb-8 text-sm text-gray-600">
                 <li>• 60 Tage Laufzeit</li>
                 <li>• <strong>KI-Textoptimierung inklusive</strong></li>
                 <li>• Hervorhebung in Suchergebnissen</li>
                 <li>• Social Media Push</li>
               </ul>
               <button className="w-full bg-primary-600 text-white font-bold py-2 rounded-lg hover:bg-primary-700">Wählen</button>
             </div>

             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
               <h3 className="font-bold text-xl mb-4">Enterprise</h3>
               <p className="text-4xl font-bold mb-6">Individuell</p>
               <ul className="text-left space-y-3 mb-8 text-sm text-gray-600">
                 <li>• Flatrate Angebote</li>
                 <li>• Schnittstelle zum ATS</li>
                 <li>• Employer Branding Profil</li>
                 <li>• Persönlicher Account Manager</li>
               </ul>
               <button className="w-full border-2 border-gray-400 text-gray-600 font-bold py-2 rounded-lg hover:bg-gray-100">Kontaktieren</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};