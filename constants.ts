import { CareerProfile, FaqItem, JobListing } from './types';

export const JOB_LISTINGS: JobListing[] = [
  {
    id: '1',
    title: 'Filialleiter (m/w/d)',
    company: 'FreshMarket GmbH',
    location: 'Hamburg',
    type: 'Vollzeit',
    category: 'Management',
    salaryRange: '45.000€ - 60.000€',
    postedDate: '2023-10-25',
    featured: true
  },
  {
    id: '2',
    title: 'Verkäufer im Einzelhandel (m/w/d)',
    company: 'ModeBoutique Müller',
    location: 'Berlin',
    type: 'Teilzeit',
    category: 'Verkauf',
    salaryRange: '14€ - 16€ / Std',
    postedDate: '2023-10-24',
    featured: true
  },
  {
    id: '3',
    title: 'Lagerlogistiker (m/w/d)',
    company: 'Global Trade Logistics',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    category: 'Logistik',
    postedDate: '2023-10-23'
  },
  {
    id: '4',
    title: 'E-Commerce Manager (m/w/d)',
    company: 'TechStore24',
    location: 'München (Remote möglich)',
    type: 'Vollzeit',
    category: 'E-Commerce',
    salaryRange: '50.000€+',
    postedDate: '2023-10-22',
    featured: true
  },
  {
    id: '5',
    title: 'Ausbildung zum Kaufmann im Einzelhandel 2024',
    company: 'SuperKauf',
    location: 'Köln',
    type: 'Ausbildung',
    category: 'Verkauf',
    postedDate: '2023-10-20'
  }
];

export const CAREER_PROFILES: CareerProfile[] = [
  {
    id: 'verkaeufer',
    title: 'Verkäufer / Verkäuferin',
    shortDesc: 'Das Gesicht des Handels. Sie beraten Kunden, pflegen das Sortiment und sorgen für ein Einkaufserlebnis.',
    fullDesc: `
      Der Beruf des Verkäufers ist einer der wichtigsten im gesamten Handelssektor. 
      Als Verkäufer sind Sie die direkte Schnittstelle zum Kunden. Ihre Hauptaufgaben umfassen 
      nicht nur das Kassieren, sondern vor allem die kompetente Beratung, die Warenpräsentation 
      und die Sicherstellung der Sauberkeit und Ordnung auf der Verkaufsfläche.
      
      Moderne Verkäufer nutzen zunehmend digitale Hilfsmittel wie Tablets zur Bestandsprüfung 
      oder mobile Kassensysteme. Soft Skills wie Empathie, Kommunikationsstärke und Geduld 
      sind unerlässlich.
    `,
    requirements: [
      'Kommunikationsstärke und Kundenorientierung',
      'Gepflegtes Erscheinungsbild',
      'Bereitschaft zur Schichtarbeit (auch Samstags)',
      'Grundlegendes mathematisches Verständnis'
    ],
    careerPath: 'Verkäufer -> Erstverkäufer -> Abteilungsleiter -> Filialleiter',
    salary: '24.000€ - 32.000€ p.a. (je nach Erfahrung und Tarif)'
  },
  {
    id: 'filialleiter',
    title: 'Filialleiter / Store Manager',
    shortDesc: 'Verantwortlich für Personal, Umsatz und den reibungslosen Ablauf einer Filiale.',
    fullDesc: `
      Als Filialleiter (Store Manager) tragen Sie die volle Verantwortung für eine wirtschaftliche 
      Einheit. Sie führen das Team, planen Personaleinsätze, überwachen Kennzahlen (KPIs) wie 
      Umsatz, Abschriften und Personalkostenquote und setzen zentrale Vorgaben der Unternehmensführung um.
      
      Diese Position erfordert ein hohes Maß an Führungskompetenz, betriebswirtschaftlichem 
      Denken und Stressresistenz. Oft sind Filialleiter auch Mentoren für Auszubildende.
    `,
    requirements: [
      'Abgeschlossene kaufmännische Ausbildung oder Studium',
      'Mehrjährige Berufserfahrung im Handel',
      'Führungserfahrung',
      'Analytisches Denken'
    ],
    careerPath: 'Filialleiter -> Bezirksleiter -> Regionalleiter -> Vertriebsleiter',
    salary: '40.000€ - 70.000€ p.a. (stark abhängig von Unternehmensgröße)'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Manager',
    shortDesc: 'Die Architekten des Online-Handels. Pflege von Webshops, Analyse von Traffic und Optimierung der User Journey.',
    fullDesc: `
      Der Handel findet zunehmend online statt. E-Commerce Manager betreuen Onlineshops, 
      pflegen Produktdaten, steuern Online-Marketing-Kampagnen (SEO/SEA) und analysieren 
      das Nutzerverhalten, um die Conversion Rate zu optimieren.
      
      Hier verschwimmen die Grenzen zwischen IT, Marketing und klassischem Handel. 
      Ein tiefes Verständnis für digitale Prozesse ist essenziell.
    `,
    requirements: [
      'Studium BWL, Wirtschaftsinformatik oder vergleichbare Ausbildung',
      'Erfahrung mit Shopsystemen (Shopware, Magento, Shopify)',
      'Kenntnisse in SEO und Online-Marketing',
      'Datengetriebene Arbeitsweise'
    ],
    careerPath: 'Junior Manager -> Senior E-Commerce Manager -> Head of E-Commerce',
    salary: '45.000€ - 65.000€ p.a.'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Welche Qualifikationen brauche ich für eine Karriere im Handel?",
    answer: "Der Handel ist sehr durchlässig. Während für Führungspositionen oft ein Studium (BWL, Handelsmanagement) oder eine Ausbildung zum Handelsfachwirt nötig ist, können Quereinsteiger im Verkauf oft direkt durchstarten. Wichtiger als Noten sind oft Einsatzbereitschaft und Kundenorientierung."
  },
  {
    question: "Wie sind die Arbeitszeiten im Einzelhandel?",
    answer: "Die Arbeitszeiten richten sich nach den Ladenöffnungszeiten. Schichtarbeit, Arbeit am Abend und am Samstag sind üblich. Viele Arbeitgeber bieten jedoch flexible Teilzeitmodelle an, um Beruf und Familie zu vereinbaren."
  },
  {
    question: "Was verdient man im Einzelhandel?",
    answer: "Die Gehälter variieren stark nach Branche (Lebensmittel vs. Luxusgüter), Region und Tarifbindung. Das Einstiegsgehalt für gelernte Verkäufer liegt oft zwischen 2.200€ und 2.800€ brutto im Monat. Filialleiter können deutlich mehr verdienen."
  },
  {
    question: "Ist der Einzelhandel ein sicherer Arbeitsplatz?",
    answer: "Der Handel ist im Wandel, aber essenziell. Während der stationäre Handel sich neu erfindet (Erlebnis-Shopping), boomt der Online-Handel. Wer flexibel bleibt und sich weiterbildet (z.B. Digitalisierung), hat hervorragende Zukunftsperspektiven."
  }
];

export const SEO_TEXT_INTRO = `
  Der Handel ist einer der größten Arbeitgeber in Deutschland. Egal ob im stationären Einzelhandel, 
  im dynamischen E-Commerce oder in der komplexen Logistik dahinter – die Branche bietet vielfältige 
  Karrierechancen für Menschen mit unterschiedlichsten Talenten. Von der Beratung am Point of Sale 
  bis hin zur strategischen Planung in der Zentrale: Hier finden Sie Ihren Platz.
`;

export const SEO_TEXT_EMPLOYER = `
  Der Wettbewerb um Fachkräfte im Handel ist härter denn je. 
  "handel-stellenangebote.de" unterstützt Arbeitgeber dabei, qualifizierte Mitarbeiter zu finden – 
  vom Aushilfsverkäufer bis zum erfahrenen Einkäufer. Nutzen Sie unsere KI-gestützte Plattform, 
  um Ihre Stellenanzeigen optimal zu platzieren und genau die Kandidaten anzusprechen, die zu Ihrer 
  Unternehmenskultur passen. Wir verstehen die Dynamik des Handels: Saisonalität, Flexibilität und Kundenfokus.
`;