import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Briefcase, User, Phone, Globe } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Startseite', path: '/' },
    { name: 'Stellenangebote', path: '/jobs' },
    { name: 'Berufsbilder', path: '/profiles' },
    { name: 'Für Arbeitgeber', path: '/employers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-primary-600 p-2 rounded-lg">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl text-primary-900 tracking-tight">
                  Handel<span className="text-accent-600">Jobs</span>.de
                </span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'border-accent-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link to="/jobs" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm">
                Job finden
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="pt-2 pb-3 space-y-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-primary-50 border-primary-500 text-primary-700'
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <Link to="/jobs" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center bg-accent-600 text-white px-4 py-2 rounded-md font-medium">
                  Jetzt bewerben
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                 <ShoppingBag className="h-6 w-6 text-accent-500" />
                 <span className="font-bold text-xl text-white">HandelJobs.de</span>
              </div>
              <p className="text-sm leading-relaxed">
                Die Spezial-Jobbörse für den deutschen Handel. 
                Vom Tante-Emma-Laden bis zum internationalen Filialisten.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Für Bewerber</h3>
              <ul className="space-y-3">
                <li><Link to="/jobs" className="text-sm hover:text-white transition-colors">Stellensuche</Link></li>
                <li><Link to="/profiles" className="text-sm hover:text-white transition-colors">Berufsbilder & Gehälter</Link></li>
                <li><Link to="/profiles" className="text-sm hover:text-white transition-colors">Karriere-Ratgeber</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Für Arbeitgeber</h3>
              <ul className="space-y-3">
                <li><Link to="/employers" className="text-sm hover:text-white transition-colors">Stellenanzeige schalten</Link></li>
                <li><Link to="/employers" className="text-sm hover:text-white transition-colors">Preise & Konditionen</Link></li>
                <li><Link to="/employers" className="text-sm hover:text-white transition-colors">Talent-Pool</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Rechtliches</h3>
              <ul className="space-y-3">
                <li><Link to="/impressum" className="text-sm hover:text-white transition-colors">Impressum</Link></li>
                <li><Link to="/impressum" className="text-sm hover:text-white transition-colors">Datenschutz</Link></li>
                <li><Link to="/impressum" className="text-sm hover:text-white transition-colors">AGB</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} handel-stellenangebote.de. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               <span className="text-slate-500 text-sm flex items-center gap-1"><Globe className="w-4 h-4" /> Made in Germany</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};