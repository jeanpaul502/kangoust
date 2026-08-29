const STEPS = [
    {
        number: '01',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        title: 'Créez votre profil',
        description: 'Indiquez où vous en êtes : encore en France, sur le départ ou déjà en Australie. {appName} adapte immédiatement votre expérience.',
        color: 'from-amber-400 to-orange-500',
        glow: 'amber',
    },
    {
        number: '02',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
        title: 'Exprimez vos besoins',
        description: 'Logement, véhicule, communauté, emploi — dites-nous ce dont vous avez besoin. Notre moteur de matching intelligent se met au travail.',
        color: 'from-sky-400 to-blue-500',
        glow: 'sky',
    },
    {
        number: '03',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: '{appName} vous accompagne',
        description: 'Suggestions personnalisées, mises en relation automatiques, guides pratiques et dashboard évolutif — tout est centré sur votre parcours.',
        color: 'from-emerald-400 to-teal-500',
        glow: 'emerald',
    },
    {
        number: '04',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Rejoignez la communauté',
        description: "Échangez avec d'autres francophones, participez à des événements, devenez celui qui aide les nouveaux arrivants. La boucle est complète.",
        color: 'from-violet-400 to-purple-500',
        glow: 'violet',
    },
];

export default function HowItWorks() {
    const appName = import.meta.env.VITE_APP_NAME || 'Kangoust';

    return (
        <section id="how-it-works" className="py-28 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 bg-slate-800/70 border border-slate-700/60 rounded-full text-slate-400 text-xs font-medium tracking-wider uppercase">
                        Comment ça marche
                    </div>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                        Simple, intelligent, centré sur vous
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        {appName} n'est pas un catalogue d'annonces. C'est un système qui comprend où vous en êtes et vous guide pas à pas.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid lg:grid-cols-4 gap-6 relative">
                    {/* Connecting line (desktop) */}
                    <div className="absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent hidden lg:block" />

                    {STEPS.map((step, i) => (
                        <div
                            key={i}
                            className="relative group"
                        >
                            {/* Card */}
                            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
                                {/* Icon Circle */}
                                <div className="relative mb-6">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 shadow-lg`}>
                                        <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white">
                                            {step.icon}
                                        </div>
                                    </div>
                                    {/* Step number */}
                                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-slate-400 flex items-center justify-center">
                                        {i + 1}
                                    </span>
                                </div>

                                <h3 className="font-display text-xl font-bold text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
