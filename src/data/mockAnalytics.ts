// Dati di esempio per i widget analytics. Etichettati esplicitamente come
// "dati di esempio" nell'interfaccia: quando il backend collega le vere
// credenziali Google Analytics/Search Console, questi vengono sostituiti
// dai dati reali e l'etichetta scompare automaticamente (vedi logica in
// GoogleToolsPanel — isConnected condiziona quale sorgente dati mostrare).

export const mockVisitorsTrend = [120, 145, 132, 168, 190, 175, 210, 230, 205, 245, 260, 280];

export const mockTopPages = [
  { path: "/", views: 1240, label: "Home" },
  { path: "/servizi", views: 680, label: "Servizi" },
  { path: "/prezzi", views: 520, label: "Prezzi" },
  { path: "/blog/perche-github-pages-per-il-tuo-sito", views: 310, label: "Blog: Perché GitHub Pages" },
  { path: "/chi-siamo", views: 190, label: "Chi siamo" },
];

export const mockTrafficSources = [
  { source: "Ricerca organica", percentage: 48, color: "#34D399" },
  { source: "Diretto", percentage: 27, color: "#60A5FA" },
  { source: "Social", percentage: 16, color: "#FBBF24" },
  { source: "Referral", percentage: 9, color: "#A78BFA" },
];

export const mockDevices = [
  { device: "Desktop", percentage: 58 },
  { device: "Mobile", percentage: 36 },
  { device: "Tablet", percentage: 6 },
];

export const mockKpis = {
  visitors: { value: 2840, change: 12.4 },
  pageviews: { value: 8120, change: 8.1 },
  avgSession: { value: "2m 14s", change: -3.2 },
  bounceRate: { value: "41%", change: -5.6 },
};

// --- Admin: metriche aggregate piattaforma ---

export const mockPlatformKpis = {
  totalUsers: { value: 1284, change: 18.2 },
  activeProjects: { value: 947, change: 9.6 },
  newSignups7d: { value: 64, change: 22.1 },
  conversionRate: { value: "6.8%", change: 1.4 },
};

export const mockSignupsTrend = [40, 52, 48, 61, 70, 65, 80, 92, 88, 101, 95, 110];

export const mockPlansBreakdown = [
  { plan: "Free", count: 1042, color: "#9CA8A1" },
  { plan: "Pro", count: 218, color: "#34D399" },
  { plan: "Agenzia", count: 24, color: "#60A5FA" },
];

export const mockTopTemplatesUsed = [
  { name: "SaaS Launch", uses: 156 },
  { name: "Clean Business", uses: 134 },
  { name: "Shop Minimal", uses: 98 },
  { name: "Developer Portfolio", uses: 87 },
  { name: "Trattoria Calda", uses: 71 },
];
