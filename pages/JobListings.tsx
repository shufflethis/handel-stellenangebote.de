import React, { useState } from 'react';
import { JOB_LISTINGS } from '../constants';
import { MapPin, Building, Clock, Euro } from 'lucide-react';

export const JobListings: React.FC = () => {
  const [filterText, setFilterText] = useState('');
  const [selectedType, setSelectedType] = useState<string>('Alle');

  const filteredJobs = JOB_LISTINGS.filter(job => {
    const matchesText = job.title.toLowerCase().includes(filterText.toLowerCase()) || 
                        job.company.toLowerCase().includes(filterText.toLowerCase());
    const matchesType = selectedType === 'Alle' || job.type === selectedType;
    return matchesText && matchesType;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Aktuelle Stellenangebote</h1>
          <p className="text-gray-600 mt-2">Finden Sie Ihren Traumjob aus {JOB_LISTINGS.length} aktuellen Angeboten</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24">
              <h2 className="font-semibold text-lg mb-4">Filter</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Suche</label>
                <input 
                  type="text" 
                  placeholder="Stichwort..." 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Anstellungsart</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="Alle">Alle</option>
                  <option value="Vollzeit">Vollzeit</option>
                  <option value="Teilzeit">Teilzeit</option>
                  <option value="Ausbildung">Ausbildung</option>
                </select>
              </div>
              
              <div className="p-4 bg-primary-50 rounded-md text-sm text-primary-800">
                Tipp: Nutzen Sie unseren KI-Assistenten unten rechts für persönliche Empfehlungen!
              </div>
            </div>
          </div>

          {/* List */}
          <div className="lg:w-3/4 space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div key={job.id} className={`bg-white p-6 rounded-lg shadow-sm border transition-all hover:shadow-md ${job.featured ? 'border-l-4 border-l-accent-500' : 'border-gray-200'}`}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      {job.featured && <span className="inline-block bg-accent-100 text-accent-800 text-xs px-2 py-0.5 rounded-full mb-2 font-medium">Top Job</span>}
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1"><Building className="w-4 h-4" /> {job.company}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                        {job.salaryRange && <span className="flex items-center gap-1 text-green-600 font-medium"><Euro className="w-4 h-4" /> {job.salaryRange}</span>}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md font-medium transition-colors w-full md:w-auto">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
                <p className="text-gray-500">Keine Jobs gefunden, die Ihren Kriterien entsprechen.</p>
                <button 
                  onClick={() => {setFilterText(''); setSelectedType('Alle');}}
                  className="mt-4 text-primary-600 hover:text-primary-800 font-medium"
                >
                  Filter zurücksetzen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};