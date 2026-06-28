/**
 * Siti simulati per ogni settore — componenti React che imitano
 * layout reali con contenuto inventato. Mostrati dentro MacWindow.
 * Palette bianca/chiara di default (simulano siti reali dei clienti,
 * non il tema di ForgeSite).
 */

function SiteHeader({ name, links }: { name: string; links: string[] }) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-white shadow-sm border-b border-gray-100">
      <span className="font-bold text-gray-900 text-lg">{name}</span>
      <nav className="hidden sm:flex gap-6">
        {links.map((l) => (
          <span key={l} className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">{l}</span>
        ))}
      </nav>
      <button className="rounded-lg px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: "#10B981" }}>
        Contattaci
      </button>
    </header>
  );
}

// ── Sito Avvocato ──────────────────────────────────────────────────────
export function AvvocatoSite() {
  return (
    <div className="min-h-full bg-white font-sans">
      <SiteHeader name="Studio Legale Rossi" links={["Chi siamo","Aree di pratica","Team","Contatti"]} />
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-700 px-8 py-20 text-white text-center">
        <p className="mb-2 text-sm font-medium tracking-widest text-slate-400 uppercase">Dal 1998</p>
        <h1 className="mb-4 text-4xl font-bold leading-tight">Tutela i tuoi diritti<br />con chi li conosce</h1>
        <p className="mb-8 max-w-md mx-auto text-slate-300">Specializzati in diritto civile, commerciale e del lavoro. Prima consulenza gratuita.</p>
        <button className="rounded-lg px-8 py-3 font-semibold" style={{ backgroundColor: "#10B981", color: "#fff" }}>
          Prenota consulenza gratuita
        </button>
      </div>
      {/* Aree */}
      <div className="px-8 py-16">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">Aree di pratica</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {["Diritto civile","Diritto commerciale","Diritto del lavoro"].map((area) => (
            <div key={area} className="rounded-xl border border-gray-200 p-6 hover:border-green-400 transition-colors">
              <div className="h-10 w-10 rounded-full bg-green-100 mb-3 flex items-center justify-center">
                <span className="text-green-600 text-lg">⚖️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{area}</h3>
              <p className="text-sm text-gray-500">Assistenza completa in ogni fase del procedimento.</p>
            </div>
          ))}
        </div>
      </div>
      {/* Team */}
      <div className="bg-gray-50 px-8 py-14">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">Il team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "Avv. Marco Rossi", role: "Fondatore, diritto civile" },
            { name: "Avv. Lucia Bianchi", role: "Diritto commerciale" },
            { name: "Avv. Filippo Verdi", role: "Diritto del lavoro" },
          ].map((p) => (
            <div key={p.name} className="bg-white rounded-xl border border-gray-200 p-5 w-48 text-center">
              <div className="h-16 w-16 rounded-full bg-slate-200 mx-auto mb-3" />
              <p className="font-semibold text-gray-900 text-sm">{p.name}</p>
              <p className="text-xs text-gray-500 mt-1">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Sito Ristorante ─────────────────────────────────────────────────────
export function RistoranteSite() {
  return (
    <div className="min-h-full bg-white font-sans">
      <SiteHeader name="Trattoria da Nonna Rosa" links={["Il Menu","La Storia","Prenotazioni","Contatti"]} />
      <div className="relative h-72 overflow-hidden flex items-center justify-center"
        style={{ background: "linear-gradient(135deg,#78350f,#92400e)" }}>
        <div className="text-center text-white">
          <p className="mb-1 text-sm tracking-widest text-amber-300 uppercase">Cucina tipica toscana</p>
          <h1 className="text-4xl font-bold mb-3">La tradizione di famiglia,<br />dal 1972</h1>
          <button className="mt-4 rounded-lg px-6 py-2.5 font-semibold bg-amber-500 text-white hover:bg-amber-400">
            Prenota un tavolo
          </button>
        </div>
      </div>
      <div className="px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">I nostri piatti forti</h2>
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {[
            { name: "Ribollita della nonna", desc: "Zuppa toscana con cavolo nero, fagioli e pane", price: "€12" },
            { name: "Bistecca alla fiorentina", desc: "Chianina IGP, minimo 1kg, cotta al carbone", price: "€45/kg" },
            { name: "Pappardelle al cinghiale", desc: "Pasta fresca con ragù di cinghiale del Chianti", price: "€16" },
            { name: "Tiramisù della Rosa", desc: "Ricetta originale della fondatrice, ogni giorno", price: "€7" },
          ].map((dish) => (
            <div key={dish.name} className="rounded-xl border border-amber-100 p-4 bg-amber-50">
              <div className="h-28 rounded-lg bg-amber-200 mb-3" />
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{dish.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{dish.desc}</p>
                </div>
                <span className="text-amber-700 font-bold text-sm ml-2 flex-none">{dish.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Sito Fotografo ───────────────────────────────────────────────────────
export function FotografSite() {
  return (
    <div className="min-h-full bg-gray-950 font-sans text-white">
      <header className="flex items-center justify-between px-8 py-5">
        <span className="font-bold text-white tracking-wider">SARA TANAKA — Photography</span>
        <nav className="hidden sm:flex gap-6">
          {["Portfolio","Servizi","About","Contact"].map((l) => (
            <span key={l} className="text-sm text-gray-400 cursor-pointer hover:text-white transition-colors">{l}</span>
          ))}
        </nav>
      </header>
      {/* Grid foto */}
      <div className="grid grid-cols-3 gap-1 px-4">
        {[...Array(9)].map((_, i) => (
          <div key={i} className={`rounded-sm overflow-hidden ${i === 4 ? "col-span-1 row-span-2" : ""}`}
            style={{
              height: i === 4 ? 280 : 140,
              background: `linear-gradient(${45 + i * 30}deg, #1a1a2e, #16213e, #0f3460)`,
              opacity: 0.8 + Math.random() * 0.2
            }} />
        ))}
      </div>
      <div className="px-8 py-14 text-center">
        <h1 className="text-3xl font-bold mb-3">Raccontiamo le tue storie attraverso la luce</h1>
        <p className="text-gray-400 max-w-md mx-auto mb-8">Fotografia di matrimonio, ritratto e reportage. Basata a Milano, disponibile in tutta Italia.</p>
        <button className="rounded-full px-8 py-3 font-semibold border border-white text-white hover:bg-white hover:text-gray-950 transition-all">
          Vedi il portfolio completo
        </button>
      </div>
    </div>
  );
}

// ── Sito Consulente ──────────────────────────────────────────────────────
export function ConsulenteSite() {
  return (
    <div className="min-h-full bg-white font-sans">
      <SiteHeader name="Luca M. Consulting" links={["Servizi","Clienti","Blog","Contatti"]} />
      <div className="px-8 py-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider">Business Consultant</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">Aiuto le PMI a crescere con metodo</h1>
            <p className="text-gray-600 mb-6">Oltre 15 anni di esperienza in strategia aziendale, finanza e processi operativi. Ho aiutato più di 80 aziende a raddoppiare il fatturato.</p>
            <div className="flex gap-3">
              <button className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white" style={{ backgroundColor: "#3B82F6" }}>
                Prenota una call
              </button>
              <button className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700">
                Scarica il kit gratuito
              </button>
            </div>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6">
            <div className="h-48 rounded-xl bg-blue-200 mb-4" />
            <div className="flex gap-6 text-center">
              {[["80+","Aziende"],["15","Anni"],["€2M+","Fatturato generato"]].map(([n, l]) => (
                <div key={l}>
                  <p className="text-2xl font-bold text-blue-700">{n}</p>
                  <p className="text-xs text-gray-500">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Sito Artigiano ───────────────────────────────────────────────────────
export function ArtigianoSite() {
  return (
    <div className="min-h-full bg-stone-50 font-sans">
      <SiteHeader name="Bottega Ferrini — Legno artigianale" links={["Catalogo","Lavorazioni","Su misura","Chi siamo"]} />
      <div className="relative h-64 flex items-end px-8 pb-10 overflow-hidden"
        style={{ background: "linear-gradient(to right, #78350f, #a16207)" }}>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Fatto con le mani, fatto per durare</h1>
          <p className="text-amber-200">Mobili e oggetti in legno massello, costruiti su misura da oltre trent'anni</p>
        </div>
      </div>
      <div className="px-8 py-12 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Le nostre lavorazioni</h2>
        <div className="grid grid-cols-2 gap-4">
          {["Tavoli su misura","Librerie e scaffali","Cucine in legno","Restauro mobili antichi"].map((item) => (
            <div key={item} className="flex gap-3 items-center rounded-xl bg-white border border-stone-200 p-4">
              <div className="h-12 w-12 rounded-lg bg-amber-100 flex-none" />
              <p className="text-sm font-medium text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Sito Negozio ─────────────────────────────────────────────────────────
export function NegozioSite() {
  return (
    <div className="min-h-full bg-white font-sans">
      <SiteHeader name="MioNegozio Online" links={["Prodotti","Offerte","Chi siamo","Contatti"]} />
      <div className="bg-gradient-to-r from-violet-600 to-purple-800 px-8 py-14 text-white text-center">
        <p className="text-sm font-medium text-violet-200 mb-2">🎉 Spedizione gratuita sopra €49</p>
        <h1 className="text-4xl font-bold mb-3">La qualità che cercavi,<br />al prezzo giusto</h1>
        <button className="mt-4 rounded-full px-8 py-3 font-semibold bg-white text-violet-700 hover:bg-violet-50">
          Scopri i prodotti
        </button>
      </div>
      <div className="px-8 py-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Prodotti in evidenza</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: "Prodotto Alpha", price: "€29.90", badge: "Novità" },
            { name: "Prodotto Beta",  price: "€49.90", badge: "-20%" },
            { name: "Prodotto Gamma", price: "€19.90", badge: null },
            { name: "Prodotto Delta", price: "€79.90", badge: "Top" },
          ].map((p) => (
            <div key={p.name} className="rounded-xl border border-gray-200 overflow-hidden hover:-translate-y-1 transition-transform">
              <div className="relative h-36 bg-gradient-to-br from-purple-100 to-violet-200">
                {p.badge && (
                  <span className="absolute top-2 right-2 rounded-full px-2 py-0.5 text-xs font-bold text-white"
                    style={{ backgroundColor: p.badge === "-20%" ? "#EF4444" : "#8B5CF6" }}>
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-gray-800">{p.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold text-violet-700">{p.price}</span>
                  <button className="text-xs text-white rounded-lg px-2 py-1" style={{ backgroundColor: "#8B5CF6" }}>
                    Aggiungi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
