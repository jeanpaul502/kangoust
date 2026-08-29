const MODULES = [
    {
        icon: '🏠',
        title: 'Logement',
        description: 'Trouvez ou proposez une chambre, colocation ou appartement. Matching bidirectionnel automatique.',
        tags: ['Matching', 'Chat', 'Favoris'],
        color: 'amber',
    },
    {
        icon: '🚐',
        title: 'Véhicules',
        description: 'Achetez ou vendez votre van, voiture ou campervan. Système d\'offres et contre-offres intégré.',
        tags: ['Offres', 'Matching', 'Négociation'],
        color: 'sky',
    },
    {
        icon: '🎉',
        title: 'Événements',
        description: 'Créez ou rejoignez des événements : barbecue, randonnée, networking. Rencontrez la communauté.',
        tags: ['Local', 'Gratuit', 'Social'],
        color: 'violet',
    },
    {
        icon: '👥',
        title: 'Communauté',
        description: 'Rejoignez des groupes par ville, nationalité ou centre d\'intérêt. Échangez, aidez, progressez.',
        tags: ['Groupes', 'Entraide', 'Publications'],
        color: 'emerald',
    },
    {
        icon: '💼',
        title: 'Opportunités',
        description: 'Partagez et découvrez des opportunités professionnelles au sein de la communauté francophone.',
        tags: ['Communautaire', 'Expiration auto'],
        color: 'rose',
    },
    {
        icon: '📄',
        title: 'CV Australien',
        description: 'Créez votre CV au format australien avec assistance IA. Traduit en anglais professionnel.',
        tags: ['IA', 'PDF', 'Traduction'],
        color: 'teal',
    },
    {
        icon: '🗺️',
        title: 'Guides pratiques',
        description: 'TFN, banque, superannuation, SIM, permis, certifications — tout ce qu\'il faut pour s\'installer.',
        tags: ['TFN', 'Banque', 'RSA'],
        color: 'orange',
    },
    {
        icon: '🤖',
        title: 'Parcours intelligent',
        description: 'Un dashboard qui évolue avec vous : avant le départ, à l\'arrivée, et au fil des mois.',
        tags: ['Personnalisé', 'Adaptatif'],
        color: 'indigo',
    },
];

const COLOR_MAP = {
    amber:   'from-amber-500/20 to-amber-500/5 border-amber-500/20 group-hover:border-amber-400/40',
    sky:     'from-sky-500/20 to-sky-500/5 border-sky-500/20 group-hover:border-sky-400/40',
    violet:  'from-violet-500/20 to-violet-500/5 border-violet-500/20 group-hover:border-violet-400/40',
    emerald: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 group-hover:border-emerald-400/40',
    rose:    'from-rose-500/20 to-rose-500/5 border-rose-500/20 group-hover:border-rose-400/40',
    teal:    'from-teal-500/20 to-teal-500/5 border-teal-500/20 group-hover:border-teal-400/40',
    orange:  'from-orange-500/20 to-orange-500/5 border-orange-500/20 group-hover:border-orange-400/40',
    indigo:  'from-indigo-500/20 to-indigo-500/5 border-indigo-500/20 group-hover:border-indigo-400/40',
};

const TAG_COLOR = {
    amber: 'bg-amber-500/15 text-amber-300',
    sky: 'bg-sky-500/15 text-sky-300',
    violet: 'bg-violet-500/15 text-violet-300',
    emerald: 'bg-emerald-500/15 text-emerald-300',
    rose: 'bg-rose-500/15 text-rose-300',
    teal: 'bg-teal-500/15 text-teal-300',
    orange: 'bg-orange-500/15 text-orange-300',
    indigo: 'bg-indigo-500/15 text-indigo-300',
};

export default function ModulesShowcase() {
    const appName = import.meta.env.VITE_APP_NAME || 'Kangoust';

    return (
        <section id="modules" className="py-28 relative">
            {/* BG Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-amber-500/[0.03] blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 bg-slate-800/70 border border-slate-700/60 rounded-full text-slate-400 text-xs font-medium tracking-wider uppercase">
                        Tout ce dont vous avez besoin
                    </div>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                        Une plateforme, toutes vos démarches
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Logement, véhicule, travail, communauté, documents — {appName} centralise tout votre parcours australien.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {MODULES.map((mod, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-2xl border bg-gradient-to-br ${COLOR_MAP[mod.color]} p-5 transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden`}
                        >
                            {/* Glow on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                 style={{background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)'}}
                            />

                            <div className="text-4xl mb-4">{mod.icon}</div>
                            <h3 className="font-display text-lg font-bold text-white mb-2">{mod.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">{mod.description}</p>

                            <div className="flex flex-wrap gap-1.5">
                                {mod.tags.map((tag, j) => (
                                    <span key={j} className={`px-2 py-0.5 rounded-full text-xs font-medium ${TAG_COLOR[mod.color]}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
