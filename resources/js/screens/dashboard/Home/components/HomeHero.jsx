import { Icon } from '@iconify/react';
import { router } from '@inertiajs/react';

export default function HomeHero({
    userName = 'Fabrice',
    destinationCity = 'Perth',
    daysRemaining = 20,
    originCity = 'Paris',
    visaType = 'Visa PVT (Subclass 417)',
    isInAustralia = false,
}) {
    return (
        <div className="relative bg-white rounded-[14px] border border-[#E4E9F2] shadow-xs overflow-hidden py-8 sm:py-10.5 px-6 sm:px-8 lg:px-9 flex items-center">
            
            {/* ── Image panoramique d'arrière-plan (Skyline australienne & coucher de soleil) ── */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
                <img
                    src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1600"
                    alt="Australie Skyline"
                    className="w-full h-full object-cover object-right"
                />
                {/* Dégradé réduit pour laisser transparaître davantage l'image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#071022]/85 via-[#0A162F]/50 to-transparent" />
            </div>

            {/* ── Contenu Sobre, Aéré & Élégant ── */}
            <div className="relative z-10 max-w-2xl space-y-3.5 sm:space-y-4">
                
                {/* Salutation avec émoji animé */}
                <h2 className="text-[24px] sm:text-[28px] font-extrabold text-white tracking-tight flex items-center gap-2">
                    <span>Bonjour {userName}</span>
                    <span className="text-[24px] sm:text-[28px] inline-block animate-wave">👋</span>
                </h2>

                {/* Statut dynamique selon la situation */}
                {!isInAustralia ? (
                    <div className="space-y-1.5">
                        <p className="text-[16px] sm:text-[18px] font-bold text-white leading-snug">
                            Tu arrives à {destinationCity} dans <span className="text-[#FDE047]">{daysRemaining} jours</span>.
                        </p>
                        <p className="text-[13px] sm:text-[13.5px] text-[#94A3B8] font-medium leading-relaxed max-w-md">
                            Depuis {originCity}, on t'aide à préparer ton arrivée et tes démarches étape par étape.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-1.5">
                        <p className="text-[16px] sm:text-[18px] font-bold text-white leading-snug">
                            Installé à {destinationCity}.
                        </p>
                        <p className="text-[13px] sm:text-[13.5px] text-[#94A3B8] font-medium leading-relaxed max-w-md">
                            Découvre les meilleures opportunités de travail, logements et sorties autour de toi.
                        </p>
                    </div>
                )}

                {/* Info simple, SANS tableau/badge */}
                <div className="pt-1">
                    <span className="inline-flex items-center gap-2 text-white/95 text-[13.5px] font-semibold drop-shadow-sm">
                        <Icon icon="griddy-icons:airplane" className="w-5 h-5 text-[#60A5FA]" />
                        <span>Arrivée prévue le 15 sept.</span>
                    </span>
                </div>

                {/* Bouton CTA et Barre de Progression alignés côte à côte */}
                <div className="pt-3 flex items-center gap-5 sm:gap-6 w-full">
                    <button
                        type="button"
                        onClick={() => router.visit('/onboarding')}
                        className="h-10.5 px-6 rounded-[8px] font-bold text-[13.5px] bg-[#0B2545] hover:bg-[#10245E] text-white shadow-2xs transition-all inline-flex items-center gap-2 cursor-pointer shrink-0"
                    >
                        <span>Continuer mon parcours</span>
                        <Icon icon="griddy-icons:arrow-right" className="w-4 h-4" />
                    </button>

                    <div className="flex-1 w-full min-w-[250px] sm:min-w-[350px]">
                        <div className="flex items-center justify-between text-[10px] font-semibold text-white/80 mb-1">
                            <span>Préparation Australie</span>
                            <span>35%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden shadow-inner">
                            <div className="h-full bg-[#10B981] rounded-full transition-all duration-1000 ease-out" style={{ width: '35%' }} />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
