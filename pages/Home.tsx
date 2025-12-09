import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, TrendingUp, Users, Truck, Store, ArrowRight, CheckCircle } from 'lucide-react';
import { SEO_TEXT_INTRO, CAREER_PROFILES, FAQS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary-900 text-white pt-24 pb-32 overflow-hidden">
        {/* Abstract shapes/bg */}
        <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Zukunft gestalten <br/>
            <span className="text-accent-500">im Handel</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Deutschlands führende Jobbörse für Einzelhandel, Großhandel & E-Commerce. 
            Finden Sie jetzt Ihren Platz in einer der dynamischsten Branchen der Welt.
          </p>
          
          {/* Quick Search Widget */}
          <div className="bg-white p-3 rounded-lg shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-3 transform -translate-y-2 md:translate-y-0">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input type="text" placeholder="Jobtitel, Stichwort oder Firma" className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900" />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input type="text" placeholder="Stadt oder PLZ" className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900" />
            </div>
            <Link to="/jobs" className="bg-accent-600 hover:bg-accent-700 text-white font-bold py-3 px-8 rounded-md transition-all md:w-auto w-full text-center">
              Jobs suchen
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories (GEO optimized links) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Beliebte Berufsfelder</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Der Handel ist vielfältig. Entdecken Sie die verschiedenen Bereiche und finden Sie heraus, wo Ihre Talente am besten eingesetzt sind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CategoryCard 
              icon={<Store className="w-8 h-8" />}
              title="Filiale & Verkauf"
              desc="Der direkte Draht zum Kunden. Beratung, Verkauf, Kasse."
              link="/jobs?category=Verkauf"
            />
            <CategoryCard 
              icon={<Truck className="w-8 h-8" />}
              title="Logistik & Lager"
              desc="Das Rückgrat des Handels. Warenannahme, Kommissionierung, Versand."
              link="/jobs?category=Logistik"
            />
            <CategoryCard 
              icon={<TrendingUp className="w-8 h-8" />}
              title="Management"
              desc="Filialleitung, Bezirksleitung, strategische Planung."
              link="/jobs?category=Management"
            />
            <CategoryCard 
              icon={<Users className="w-8 h-8" />}
              title="Zentrale & IT"
              desc="E-Commerce, Einkauf, Marketing, HR, Verwaltung."
              link="/jobs?category=Zentrale"
            />
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
                <img src="https://picsum.photos/seed/retail/600/400" alt="Modernes Einkaufszentrum" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum im Handel arbeiten?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {SEO_TEXT_INTRO}
              </p>
              <Link to="/profiles" className="text-primary-600 font-semibold hover:text-primary-800 flex items-center gap-1">
                Mehr über Berufsbilder erfahren <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Vorteile unserer Plattform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard 
              title="Spezialisierung" 
              desc="Wir konzentrieren uns zu 100% auf den Handel. Keine Streuverluste, nur relevante Angebote."
            />
            <BenefitCard 
              title="Transparenz" 
              desc="Detaillierte Infos zu Gehaltsspannen, Benefits und Anforderungen direkt in der Übersicht."
            />
            <BenefitCard 
              title="Technologie" 
              desc="Unsere KI-Algorithmen matchen Bewerber und Arbeitgeber basierend auf Skills und Kultur."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section for GEO */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Häufige Fragen (FAQ)</h2>
          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Bereit für den nächsten Karriereschritt?</h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Registrieren Sie sich kostenlos und erhalten Sie passende Jobangebote direkt in Ihr Postfach.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/jobs" className="bg-white text-accent-600 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Jobs ansehen
            </Link>
            <Link to="/employers" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white/10 transition-colors">
              Für Arbeitgeber
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const CategoryCard = ({ icon, title, desc, link }: { icon: React.ReactNode, title: string, desc: string, link: string }) => (
  <Link to={link} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
    <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </Link>
);

const BenefitCard = ({ title, desc }: { title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);