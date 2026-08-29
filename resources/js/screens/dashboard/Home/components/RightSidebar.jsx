import { Icon } from '@iconify/react';
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function RightSidebar() {
    const [completedSteps, setCompletedSteps] = useState([]);
    const [isRegistered, setIsRegistered] = useState(false);
    const [isInterested, setIsInterested] = useState(false);

    // Animation de la barre de progression circulaire
    const [progressValue, setProgressValue] = useState(0);
    const [displayPercent, setDisplayPercent] = useState(0);
    const targetProgress = 95;
    
    useEffect(() => {
        let start = 0;
        const duration = 1000;
        const interval = 16;
        const step = targetProgress / (duration / interval);
        
        const numTimer = setInterval(() => {
            start += step;
            if (start >= targetProgress) {
                setDisplayPercent(targetProgress);
                setProgressValue(targetProgress);
                clearInterval(numTimer);
            } else {
                setDisplayPercent(Math.floor(start));
                setProgressValue(start);
            }
        }, interval);

        return () => {
            clearInterval(numTimer);
        };
    }, []);

    const toggleStep = (stepId) => {
        setCompletedSteps((prev) =>
            prev.includes(stepId) ? prev.filter((id) => id !== stepId) : [...prev, id]
        );
    };

    const nextSteps = [
        { id: 'sim', label: 'Obtenir une carte SIM', tag: 'Recommandé', tagColor: 'bg-[#DCFCE7] text-[#15803D]' },
        { id: 'bank', label: 'Ouvrir un compte bancaire', tag: 'Recommandé', tagColor: 'bg-[#DCFCE7] text-[#15803D]' },
        { id: 'tfn', label: 'Demander le TFN', tag: 'Important', tagColor: 'bg-[#FEF3C7] text-[#B45309]' },
        { id: 'cv', label: 'Préparer son CV australien', tag: 'Important', tagColor: 'bg-[#FEF3C7] text-[#B45309]' },
    ];

    const attendeeAvatars = [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
    ];

    return (
        <div className="w-full h-full flex flex-col justify-between space-y-4">
            
            {/* ── Groupe Haut : Widgets Profil & Étapes ── */}
            <div className="space-y-4">
                {/* ── Widget 1 : Complétion du profil ── */}
                <div className="bg-white rounded-[14px] border border-[#E4E9F2] p-4.5 sm:p-5 shadow-xs space-y-3">
                    <h4 className="text-[15px] font-bold text-[#10245E]">
                        Complétion du profil
                    </h4>

                    <div className="flex items-center gap-3.5">
                        {/* Ring circulaire 85% */}
                        <div className="relative w-13 h-13 flex items-center justify-center shrink-0">
                            <svg className="w-13 h-13 transform -rotate-90" viewBox="0 0 36 36">
                                <path
                                    className="text-gray-100"
                                    strokeWidth="3.2"
                                    stroke="currentColor"
                                    fill="none"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                    className="text-[#10B981]"
                                    strokeDasharray={`${progressValue}, 100`}
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="none"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                            <span className="absolute text-[10px] font-extrabold text-[#10245E] leading-none mt-[1px]">{displayPercent}%</span>
                        </div>

                        <div className="min-w-0">
                            <h5 className="text-[13.5px] font-bold text-[#10245E]">
                                Profil bien avancé !
                            </h5>
                            <p className="text-[12px] text-[#64718F] leading-snug mt-0.5">
                                Continuez pour débloquer toutes les fonctionnalités.
                            </p>
                        </div>
                    </div>

                    <div className="pt-0.5">
                        <Link
                            href="/onboarding"
                            className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#2F67D8] hover:text-[#2458C2] hover:underline"
                        >
                            <span>Compléter mon profil</span>
                            <Icon icon="griddy-icons:arrow-right" className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>

                {/* ── Widget 2 : Mes prochaines étapes ── */}
                <div className="bg-white rounded-[14px] border border-[#E4E9F2] p-4.5 sm:p-5 shadow-xs space-y-3">
                    <h4 className="text-[15px] font-bold text-[#10245E]">
                        Mes prochaines étapes
                    </h4>

                    <div className="space-y-2">
                        {nextSteps.map((step) => {
                            const isDone = completedSteps.includes(step.id);

                            return (
                                <div
                                    key={step.id}
                                    onClick={() => toggleStep(step.id)}
                                    className="flex items-center justify-between gap-3 p-1.5 rounded-[7px] hover:bg-[#F8FAFC] cursor-pointer transition-colors"
                                >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                        <Icon
                                            icon={isDone ? 'griddy-icons:check-circle' : 'griddy-icons:checkbox'}
                                            className={`w-4.5 h-4.5 shrink-0 ${isDone ? 'text-[#10B981]' : 'text-[#94A3B8] hover:text-[#2F67D8]'}`}
                                        />
                                        <span className={`text-[12.5px] truncate ${isDone ? 'line-through text-gray-400' : 'font-medium text-[#10245E]'}`}>
                                            {step.label}
                                        </span>
                                    </div>

                                    <span className={`px-2 py-0.5 rounded-[4px] text-[10px] font-bold shrink-0 ${step.tagColor}`}>
                                        {step.tag}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="pt-0.5">
                        <Link
                            href="/guide"
                            className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#2F67D8] hover:text-[#2458C2] hover:underline"
                        >
                            <span>Voir toutes les étapes</span>
                            <Icon icon="griddy-icons:arrow-right" className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Widget 3 : Événement à venir ── */}
            <div className="space-y-2.5 flex-1 flex flex-col justify-between">
                
                {/* En-tête : Titre & Pagination */}
                <div className="flex items-center justify-between px-0.5">
                    <h4 className="text-[15px] font-bold text-[#10245E]">
                        Événement à venir
                    </h4>
                    <span className="text-[11.5px] font-semibold text-[#64718F]">
                        1 sur 4
                    </span>
                </div>

                {/* Carte carrousel */}
                <div className="bg-white rounded-[14px] border border-[#E4E9F2] overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 group flex flex-col justify-between flex-1">
                    
                    {/* Image agrandie avec Date dans le bloc blanc et Tag Communauté */}
                    <div className="relative h-44 sm:h-48 w-full bg-gray-100 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
                            alt="Soirée d'accueil des Français"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Bloc Date Calendrier blanc */}
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-[8px] px-2.5 py-1 text-center shadow-md border border-white/50">
                            <span className="block text-[9.5px] font-black tracking-wider uppercase text-[#2F67D8]">
                                NOV
                            </span>
                            <span className="block text-[15px] font-extrabold text-[#10245E] leading-none">
                                21
                            </span>
                        </div>

                        {/* Tag Communauté */}
                        <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-[4px] bg-black/60 backdrop-blur-xs text-white text-[10.5px] font-bold shadow-xs">
                            Communauté
                        </span>
                    </div>

                    {/* Contenu structuré */}
                    <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                            {/* Titre avec l'heure sur le même alignement à droite */}
                            <div className="flex items-start justify-between gap-2">
                                <h5 className="text-[14.5px] sm:text-[15px] font-bold text-[#10245E] group-hover:text-[#2F67D8] transition-colors leading-snug">
                                    Soirée d'accueil des Français 🇫🇷
                                </h5>
                                <span className="text-[11.5px] font-bold text-[#2F67D8] bg-[#EFF6FF] px-2 py-0.5 rounded-[5px] shrink-0 flex items-center gap-1">
                                    <Icon icon="griddy-icons:time" className="w-4.5 h-4.5 text-[#2F67D8]" />
                                    19h00
                                </span>
                            </div>

                            {/* Description courte */}
                            <p className="text-[12px] text-[#64718F] leading-relaxed line-clamp-2">
                                Rencontrez les nouveaux arrivants et PVTistes francophones pour échanger conseils, bons plans et contacts.
                            </p>

                            {/* Date & Lieu */}
                            <div className="space-y-1 text-[12px] text-[#64718F] pt-0.5">
                                <div className="flex items-center gap-1.5">
                                    <Icon icon="griddy-icons:calendar" className="w-4.5 h-4.5 text-[#94A3B8] shrink-0" />
                                    <span>Vendredi 21 novembre 2026</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Icon icon="griddy-icons:location-pin" className="w-4.5 h-4.5 text-[#94A3B8] shrink-0" />
                                    <span className="truncate">The Oxford Tavern, Darlinghurst (Sydney)</span>
                                </div>
                            </div>

                            {/* Participants avec avatars agrandis et bien visibles */}
                            <div className="flex items-center gap-2.5 pt-1">
                                <div className="flex -space-x-2">
                                    {attendeeAvatars.map((url, i) => (
                                        <img
                                            key={i}
                                            src={url}
                                            alt="participant"
                                            className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-xs ring-1 ring-black/5"
                                        />
                                    ))}
                                </div>
                                <span className="text-[12.5px] font-bold text-[#10245E]">
                                    +18 personnes inscrites
                                </span>
                            </div>
                        </div>

                        {/* Pied d'action avec icônes Griddy */}
                        <div className="flex items-center justify-between pt-2.5 border-t border-[#F1F5F9] mt-2">
                            <Link
                                href="/evenements"
                                className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#64718F] hover:text-[#10245E] transition-colors"
                            >
                                <span>Voir les détails</span>
                                <Icon icon="griddy-icons:arrow-right" className="w-4.5 h-4.5" />
                            </Link>

                            {/* Boutons Intéressé & Participer */}
                            <div className="flex items-center gap-2.5">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsInterested(!isInterested);
                                    }}
                                    className={`px-3 py-1.5 rounded-[6px] text-[11.5px] font-bold border transition-all cursor-pointer ${
                                        isInterested
                                            ? 'bg-slate-100 text-[#10245E] border-slate-300'
                                            : 'bg-white hover:bg-slate-50 text-[#10245E] border-[#D9E1EE]'
                                    }`}
                                >
                                    <span>{isInterested ? 'Intéressé ✓' : 'Intéressé'}</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsRegistered(!isRegistered);
                                    }}
                                    className={`px-3.5 py-1.5 rounded-[6px] text-[11.5px] font-bold transition-all cursor-pointer shadow-2xs ${
                                        isRegistered
                                            ? 'bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]'
                                            : 'bg-[#2F67D8] hover:bg-[#2458C2] text-white'
                                    }`}
                                >
                                    {isRegistered ? 'Inscrit ✓' : 'Participer'}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}
