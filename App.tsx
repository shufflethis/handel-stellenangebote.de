import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { JobListings } from './pages/JobListings';
import { JobProfiles } from './pages/JobProfiles';
import { Employers } from './pages/Employers';
import { Impressum } from './pages/Impressum';
import { AiAssistant } from './components/AiAssistant';
import Datenschutz from './pages/Datenschutz';
import AutorSeite from './pages/AutorSeite';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/profiles" element={<JobProfiles />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/impressum" element={<Impressum />} />
                  {/* // HR-UPDATER: v1.0 */}
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/autor/thomas-sander" element={<AutorSeite />} />
          </Routes>
        <AiAssistant />
      </Layout>
    </Router>
  );
}

export default App;