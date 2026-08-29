import { User, Briefcase, Plane, Home, Heart, Check, AlertCircle, ArrowRight, Users, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function StepSummarySuccess({
    locationType,
    formData,
    onEditResponses,
    onFinish,
}) {
    const isOutside = locationType === 'outside' || formData?.locationType === 'outside';

    // ─────────────────────────────────────────────────────────────
    // FORMATAGE DES DONNÉES COMMUNES & PARCOURS
    // ─────────────────────────────────────────────────────────────
    const nationality = formData?.nationality ? formData.nationality.replace(/[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, '').trim() : 'Française';
    const age = formData?.age ? `${formData.age} ans` : '28 ans';
    const languages = (formData?.languages && formData.languages.length > 0)
        ? formData.languages.join(', ')
        : 'Français, Anglais';
    const profileText = `${nationality} • ${age}`;

    // Mode Hors d'Australie
    const situationTextOutside = `Hors d'Australie • ${formData?.currentCountry || 'France'}`;
    const projectText = formData?.mainProject || 'Working Holiday';
    const arrivalCity = formData?.arrivalCity || 'Sydney';
    const arrivalDate = formData?.arrivalDate || 'Juin 2027';
    const arrivalText = `${arrivalCity} • ${arrivalDate}`;

    const destinationCity = formData?.destinationCity || 'Brisbane';
    const companionLabels = {
        solo: 'Seul(e)',
        couple: 'En couple',
        friends: 'Avec des amis',
        family: 'En famille',
    };
    const companionText = companionLabels[formData?.travelCompanion] || 'Seul(e)';
    const installationText = `${destinationCity} • ${companionText}`;

    const outsideNeeds = (formData?.priorityNeeds && formData.priorityNeeds.length > 0)
        ? formData.priorityNeeds.map((id) => ({
            housing: 'Logement',
            vehicle: 'Véhicule',
            admin: 'Démarches',
            community: 'Communauté',
            events: 'Événements',
            pro_prep: 'Préparation pro',
            job_search: 'Emploi',
        }[id] || id)).join(', ')
        : 'Logement, Démarches, Préparation pro';

    // Mode Déjà en Australie
    const situationTextInside = `Déjà en Australie • ${formData?.currentCity || 'Sydney, NSW'}`;
    const insideStatusText = `${formData?.visaType || 'Visa Working Holiday'} • ${formData?.stayDuration || '4 mois'}`;
    const insideNeedsText = (formData?.insideCurrentNeeds && formData.insideCurrentNeeds.length > 0)
        ? formData.insideCurrentNeeds.map((id) => ({
            housing: 'Logement',
            vehicle: 'Véhicule',
            work: 'Recherche de travail',
            community: 'Communauté',
            events: 'Événements',
        }[id] || id)).join(', ')
        : 'Logement, Communauté, Recherche de travail';

    const communityText = (formData?.communityActivities && formData.communityActivities.length > 0)
        ? formData.communityActivities.map((id) => ({
            join_community: 'Rejoindre une communauté',
            join_events: 'Participer à des événements',
            share_opps: 'Partager une opportunité',
            read_guides: 'Consulter les guides',
        }[id] || id)).join(' • ')
        : 'Événements • Guides';

    // Score de complétion avec animation continue fluide
    const targetScore = 85;
    const [progressVal, setProgressVal] = useState(0);

    useEffect(() => {
        const duration = 1200;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentScore = easeProgress * targetScore;
            setProgressVal(currentScore);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        const frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, []);

    const radius = 34;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progressVal / 100) * circumference;

    return (
        <div className="w-full space-y-5 sm:space-y-6">
            {/* Header avec Titre et Illustration Sydney */}
            <div className="relative min-h-[90px] sm:min-h-[130px] flex items-center justify-between gap-3 sm:gap-4 pb-2 overflow-visible">
                <div className="flex-1 min-w-0 pr-2 sm:pr-4 z-10">
                    <h1 className="text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#10245E] tracking-tight mb-1.5 sm:mb-2 leading-tight whitespace-normal sm:whitespace-nowrap">
                        Félicitations, votre parcours est prêt !
                    </h1>
                    <p className="text-[12.5px] sm:text-[14px] text-[#64718F] leading-relaxed max-w-xl">
                        Votre espace <span className="font-bold text-[#10245E]">Kangoust</span> a été personnalisé selon votre situation, <br className="hidden sm:block" />
                        votre projet et vos besoins.
                    </p>
                </div>

                {/* Illustration Sydney */}
                <div className="shrink-0 flex items-center justify-end pointer-events-none z-0 translate-x-2 sm:translate-x-3 md:translate-x-4">
                    <img
                        src="/images/bannier.png"
                        alt="Sydney Skyline & Kangourou"
                        className="h-[75px] sm:h-[145px] md:h-[170px] lg:h-[190px] w-auto max-w-none object-contain object-bottom"
                    />
                </div>
            </div>

            {/* Carte Principale (Votre espace est configuré) */}
            <div className="bg-white rounded-[10px] border border-[#E4E9F2] p-5 sm:p-8 lg:p-9 shadow-xs space-y-5 sm:space-y-6">
                
                {/* En-tête de la carte avec Check Vert */}
                <div className="flex items-center gap-3 pb-1">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#10B981] bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0 shadow-2xs">
                        <Check className="w-5.5 h-5.5 text-[#10B981] stroke-[2.5]" />
                    </div>
                    <h2 className="text-[17px] sm:text-[18.5px] font-bold text-[#10245E]">
                        Votre espace est configuré
                    </h2>
                </div>

                {/* Grille 2 Colonnes */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    
                    {/* Colonne Gauche */}
                    <div className="rounded-[10px] border border-[#E4E9F2] p-4 sm:p-6 divide-y divide-gray-100 bg-white">
                        
                        {/* 1. Situation */}
                        <div className="flex items-center justify-between gap-3 pb-4">
                            <div className="flex items-center gap-3.5 text-[#10245E]">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[9px] bg-[#F0F5FF] flex items-center justify-center shrink-0 shadow-2xs">
                                    <MapPin className="w-5 h-5 text-[#10245E]" strokeWidth={2} />
                                </div>
                                <span className="text-[13.5px] sm:text-[14px] font-bold text-[#10245E]">
                                    Situation
                                </span>
                            </div>
                            <span className="text-[13px] sm:text-[13.5px] font-medium text-[#334155] truncate">
                                {isOutside ? situationTextOutside : situationTextInside}
                            </span>
                        </div>

                        {/* 2. Projet ou Statut */}
                        <div className="flex items-center justify-between gap-3 py-4">
                            <div className="flex items-center gap-3.5 text-[#10245E]">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[9px] bg-[#F0F5FF] flex items-center justify-center shrink-0 shadow-2xs">
                                    <Briefcase className="w-5 h-5 text-[#10245E]" strokeWidth={2} />
                                </div>
                                <span className="text-[13.5px] sm:text-[14px] font-bold text-[#10245E]">
                                    {isOutside ? 'Projet' : 'Statut & Visa'}
                                </span>
                            </div>
                            <span className="text-[13px] sm:text-[13.5px] font-medium text-[#334155] truncate">
                                {isOutside ? projectText : insideStatusText}
                            </span>
                        </div>

                        {/* 3. Arrivée ou Besoins */}
                        <div className="flex items-center justify-between gap-3 pt-4">
                            <div className="flex items-center gap-3.5 text-[#10245E]">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[9px] bg-[#F0F5FF] flex items-center justify-center shrink-0 shadow-2xs">
                                    {isOutside ? (
                                        <Plane className="w-5 h-5 text-[#10245E]" strokeWidth={2} />
                                    ) : (
                                        <Heart className="w-5 h-5 text-[#10245E]" strokeWidth={2} />
                                    )}
                                </div>
                                <span className="text-[13.5px] sm:text-[14px] font-bold text-[#10245E]">
                                    {isOutside ? 'Arrivée' : 'Besoins'}
                                </span>
                            </div>
                            <span className="text-[13px] sm:text-[13.5px] font-medium text-[#334155] truncate">
                                {isOutside ? arrivalText : insideNeedsText}
                            </span>
                        </div>

                    </div>

                    {/* Colonne Droite */}
                    <div className="rounded-[10px] border border-[#E4E9F2] p-4 sm:p-6 divide-y divide-gray-100 bg-white">
                        
                        {/* 4. Installation ou Communauté */}
                        <div className="flex items-center justify-between gap-3 pb-4">
                            <div className="flex items-center gap-3.5 text-[#10245E]">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[9px] bg-[#F0F5FF] flex items-center justify-center shrink-0 shadow-2xs">
                                    {isOutside ? (
                                        <Home className="w-5 h-5 text-[#10245E]" strokeWidth={2} />
                                    ) : (
                                        <Users className="w-5 h-5 text-[#10245E]" strokeWidth={2} />
                                    )}
                                </div>
                                <span className="text-[13.5px] sm:text-[14px] font-bold text-[#10245E]">
                                    {isOutside ? 'Installation' : 'Communauté'}
                                </span>
                            </div>
                            <span className="text-[13px] sm:text-[13.5px] font-medium text-[#334155] truncate">
                                {isOutside ? installationText : communityText}
                            </span>
                        </div>

                        {/* 5. Besoins ou Profil */}
                        <div className="flex items-center justify-between gap-3 py-4">
                            <div className="flex items-center gap-3.5 text-[#10245E]">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[9px] bg-[#F0F5FF] flex items-center justify-center shrink-0 shadow-2xs">
                                    {isOutside ? (
                                        <Heart className="w-5 h-5 text-[#10245E]" strokeWidth={2} />
                                    ) : (
                                        <User className="w-5 h-5 text-[#10245E]" strokeWidth={2} />
                                    )}
                                </div>
                                <span className="text-[13.5px] sm:text-[14px] font-bold text-[#10245E]">
                                    {isOutside ? 'Besoins' : 'Profil'}
                                </span>
                            </div>
                            <span className="text-[13px] sm:text-[13.5px] font-medium text-[#334155] truncate">
                                {isOutside ? outsideNeeds : profileText}
                            </span>
                        </div>

                        {/* 6. Profil complété (85%) */}
                        <div className="flex items-center justify-between gap-3 pt-4">
                            <div className="flex items-center gap-3.5 text-[#10245E]">
                                <div className="relative w-15 h-15 sm:w-16 sm:h-16 flex items-center justify-center shrink-0 bg-white rounded-full">
                                    <svg className="w-full h-full transform -rotate-90 overflow-visible" viewBox="0 0 80 80">
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r={radius}
                                            className="text-gray-100"
                                            strokeWidth="3.6"
                                            stroke="currentColor"
                                            fill="transparent"
                                        />
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r={radius}
                                            className="text-[#10B981]"
                                            strokeWidth="3.6"
                                            strokeDasharray={circumference}
                                            strokeDashoffset={strokeDashoffset}
                                            strokeLinecap="round"
                                            stroke="currentColor"
                                            fill="transparent"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="text-[11.5px] sm:text-[12px] font-bold text-[#10B981] select-none leading-none">
                                            {Math.round(progressVal)}%
                                        </span>
                                    </div>
                                </div>

                                <span className="text-[13.5px] sm:text-[14px] font-bold text-[#10245E]">
                                    Profil complété
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Paragraphe d'accompagnement */}
                <p className="text-[12.5px] sm:text-[13px] text-[#64718F] leading-relaxed pt-1">
                    Kangoust va maintenant vous proposer des guides, des étapes pratiques, des annonces et des recommandations adaptées à votre parcours en Australie.
                </p>

            </div>

            {/* Notice Banner avec Icône Jaune */}
            <div className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-[8px] p-3.5 sm:p-4.5 flex items-center gap-3.5 shadow-2xs">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B] shrink-0" />
                <p className="text-[12.5px] sm:text-[13.5px] text-[#334155] font-medium leading-snug">
                    Vous pourrez modifier vos réponses à tout moment depuis votre profil.
                </p>
            </div>

            {/* Barre d'action inférieure */}
            <div className="bg-white rounded-[10px] border border-[#E4E9F2] p-3.5 sm:p-4.5 sm:px-6 flex items-center justify-between mt-5 sm:mt-6 w-full shadow-xs gap-3">
                <button
                    type="button"
                    onClick={onEditResponses}
                    className="px-4 sm:px-7 py-2.5 rounded-[8px] border border-[#D9E1EE] hover:border-gray-400 bg-white hover:bg-gray-50 text-[13px] sm:text-[14px] font-semibold text-[#10245E] transition-all cursor-pointer"
                >
                    Modifier mes réponses
                </button>

                <button
                    type="button"
                    onClick={onFinish}
                    className="px-6 sm:px-8 py-2.5 rounded-[8px] font-semibold text-[13px] sm:text-[14px] bg-[#2F67D8] hover:bg-[#2458C2] text-white shadow-[0_2px_8px_rgba(47,103,216,0.25)] hover:shadow-[0_4px_14px_rgba(47,103,216,0.35)] transition-all flex items-center gap-2 cursor-pointer"
                >
                    <span>Découvrir mon espace</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
            </div>
        </div>
    );
}
