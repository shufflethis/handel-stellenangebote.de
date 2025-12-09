import React from 'react';
import { CAREER_PROFILES } from '../constants';
import { Check } from 'lucide-react';

export const JobProfiles: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Berufsbilder im Handel</h1>
          <p className="text-xl text-gray-600">
            Der Handel bietet weit mehr als nur Regale einräumen. 
            Erfahren Sie alles über Aufgaben, Anforderungen und Karrierechancen in den wichtigsten Berufen der Branche.
          </p>
        </div>

        <div className="space-y-16">
          {CAREER_PROFILES.map((profile, index) => (
            <article key={profile.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden scroll-mt-24" id={profile.id}>
              <div className="bg-slate-50 p-8 border-b border-gray-100">
                <h2 className="text-3xl font-bold text-primary-900 mb-2">{profile.title}</h2>
                <p className="text-lg text-slate-600 italic">{profile.shortDesc}</p>
              </div>
              
              <div className="p-8">
                <div className="prose prose-slate max-w-none mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Aufgabenbeschreibung</h3>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {profile.fullDesc}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-primary-50 p-6 rounded-xl">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      Anforderungen
                    </h4>
                    <ul className="space-y-2">
                      {profile.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Karrierepfad</h4>
                      <p className="text-sm text-gray-700 bg-white p-3 rounded border border-gray-200 shadow-sm">
                        {profile.careerPath}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Gehaltsspanne</h4>
                      <p className="text-lg font-mono text-green-700 font-bold">
                        {profile.salary}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">* Durchschnittswerte, können regional abweichen.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 bg-accent-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-accent-900 mb-4">Unsicher, welcher Beruf zu Ihnen passt?</h3>
            <p className="text-accent-800 mb-6">Unser KI-Karriere-Coach kann Ihnen helfen, basierend auf Ihren Stärken den perfekten Job zu finden.</p>
            <p className="text-sm text-accent-700 italic">Klicken Sie auf den blauen Button unten rechts!</p>
        </div>
      </div>
    </div>
  );
};