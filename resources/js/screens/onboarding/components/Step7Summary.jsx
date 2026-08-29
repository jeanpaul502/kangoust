import { MapPin, Briefcase, Heart, Users, User, ArrowRight, AlertCircle, Plane, Home } from 'lucide-react';

export default function Step7Summary({
    locationType,
    formData,
    onEditStep,
    onBack,
    onFinish,
}) {
    const isOutside = locationType === 'outside' || formData?.locationType === 'outside';

    // ─────────────────────────────────────────────────────────────
    // FORMATAGE DES DONNÉES
    // ─────────────────────────────────────────────────────────────
    const nationality = formData?.nationality ? formData.nationality.replace(/[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, '').trim() : 'Française';
    const age = formData?.age ? `${formData.age} ans` : '28 ans';
    const languages = (formData?.languages && formData.languages.length > 0)
        ? formData.languages.join(', ')
        : 'Français, Anglais';
    const profileText = `${nationality} — ${age} — ${languages}`;

    // Mode Hors d'Australie (7 étapes)
    const arrivalCity = formData?.arrivalCity || 'Sydney';
    const arrivalDate = formData?.arrivalDate || 'Juin 2027';
    const arrivalText = `${arrivalCity} — ${arrivalDate}`;

    const destinationCity = formData?.destinationCity || 'Brisbane';
    const companionLabels = {
        solo: 'Seul(e)',
        couple: 'En couple',
        friends: 'Avec des amis',
        family: 'En famille',
    };
    const companionText = companionLabels[formData?.travelCompanion] || 'Seul(e)';
    const installationText = `${destinationCity} — ${companionText}`;

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

    const outsideRows = [
        {
            id: 1,
            label: 'Situation',
            value: `Hors d'Australie — ${formData?.currentCountry || 'France'}`,
            icon: MapPin,
            step: 1,
        },
        {
            id: 2,
            label: 'Projet',
            value: formData?.mainProject || 'Working Holiday',
            icon: Briefcase,
            step: 2,
        },
        {
            id: 3,
            label: 'Arrivée',
            value: arrivalText,
            icon: Plane,
            step: 3,
        },
        {
            id: 4,
            label: 'Installation',
            value: installationText,
            icon: Home,
            step: 4,
        },
        {
            id: 5,
            label: 'Besoins',
            value: outsideNeeds,
            icon: Heart,
            step: 5,
        },
        {
            id: 6,
            label: 'Profil',
            value: profileText,
            icon: User,
            step: 6,
        },
    ];

    // Mode Déjà en Australie (6 étapes)
    const insideCity = formData?.currentCity || 'Sydney, NSW';
    const stayDuration = formData?.stayDuration || 'sur place depuis 4 mois';
    const visaType = formData?.visaType || 'Visa Working Holiday';
    const insideStatusText = `${visaType} — ${stayDuration}`;

    const insideNeedsText = (formData?.insideCurrentNeeds && formData.insideCurrentNeeds.length > 0)
        ? formData.insideCurrentNeeds.map((id) => ({
            housing: 'Logement',
            vehicle: 'Véhicule',
            work: 'Recherche de travail',
            community: 'Communauté',
            events: 'Événements',
        }[id] || id)).join(', ')
        : 'Logement, Communauté, Recherche de travail';

    const communityActivitiesText = (formData?.communityActivities && formData.communityActivities.length > 0)
        ? formData.communityActivities.map((id) => ({
            join_community: 'Rejoindre une communauté',
            join_events: 'Participer à des événements',
            share_opps: 'Partager une opportunité',
            read_guides: 'Consulter les guides',
        }[id] || id)).join(' — ')
        : 'Participer à des événements — Consulter les guides';

    const insideRows = [
        {
            id: 1,
            label: 'Situation',
            value: `Déjà en Australie — ${insideCity}`,
            icon: MapPin,
            step: 1,
        },
        {
            id: 2,
            label: 'Statut',
            value: insideStatusText,
            icon: Briefcase,
            step: 2,
        },
        {
            id: 3,
            label: 'Besoins',
            value: insideNeedsText,
            icon: Heart,
            step: 3,
        },
        {
            id: 4,
            label: 'Communauté & opportunités',
            value: communityActivitiesText,
            icon: Users,
            step: 4,
        },
        {
            id: 5,
            label: 'Profil',
            value: profileText,
            icon: User,
            step: 5,
        },
    ];

    const rows = isOutside ? outsideRows : insideRows;

    return (
        <div className="w-full space-y-5 sm:space-y-6">
            {/* Header avec Titre et Illustration Sydney */}
            <div className="relative min-h-[90px] sm:min-h-[130px] flex items-center justify-between gap-3 sm:gap-4 pb-2 overflow-visible">
                <div className="flex-1 min-w-0 pr-2 sm:pr-4 z-10">
                    <h1 className="text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#10245E] tracking-tight mb-1.5 sm:mb-2 leading-tight whitespace-normal sm:whitespace-nowrap">
                        Vérifiez vos réponses
                    </h1>
                    <p className="text-[12.5px] sm:text-[14px] text-[#64718F] leading-relaxed max-w-xl">
                        Avant de créer votre espace personnalisé, prenez un instant pour vérifier les informations renseignées.
                    </p>
                </div>

                {/* Illustration Sydney */}
                <div className="shrink-0 flex items-center justify-end pointer-events-none z-0 translate-x-2 sm:translate-x-4 md:translate-x-5">
                    <img
                        src="/images/bannier.png"
                        alt="Sydney Skyline & Kangourou"
                        className="h-[75px] sm:h-[145px] md:h-[170px] lg:h-[190px] w-auto max-w-none object-contain object-bottom"
                    />
                </div>
            </div>

            {/* Carte Principale du Récapitulatif */}
            <div className="bg-white rounded-[10px] border border-[#E4E9F2] p-4 sm:p-7 lg:p-8 shadow-xs space-y-5 sm:space-y-6">
                
                {/* Liste des lignes récapitulatives */}
                <div className="divide-y divide-gray-100">
                    {rows.map((r) => {
                        const IconComponent = r.icon;

                        return (
                            <div
                                key={r.id}
                                className="py-3.5 sm:py-4 flex items-center justify-between gap-3 sm:gap-4 hover:bg-[#FAFBFD] px-2 rounded-[8px] transition-colors"
                            >
                                <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
                                    {/* Rond d'icône bleu clair épuré */}
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EBF2FE] flex items-center justify-center shrink-0">
                                        <IconComponent className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#2F67D8]" strokeWidth={2} />
                                    </div>

                                    {/* Intitulé */}
                                    <span className="w-24 sm:w-44 text-[13px] sm:text-[14px] font-bold text-[#10245E] shrink-0">
                                        {r.label}
                                    </span>

                                    {/* Valeur de la réponse */}
                                    <span className="text-[12.5px] sm:text-[13.5px] text-[#334155] font-medium truncate flex-1 pr-2">
                                        {r.value}
                                    </span>
                                </div>

                                {/* Bouton Modifier */}
                                <button
                                    type="button"
                                    onClick={() => onEditStep && onEditStep(r.step)}
                                    className="text-[12.5px] sm:text-[13px] font-semibold text-[#2F67D8] hover:text-[#1d4db0] hover:underline cursor-pointer shrink-0 py-1 px-1.5 transition-colors"
                                >
                                    Modifier
                                </button>
                            </div>
                        );
                    })}
                </div>

            </div>

            {/* Barre d'action inférieure (Précédent & Créer mon espace) */}
            <div className="bg-white rounded-[10px] border border-[#E4E9F2] p-3.5 sm:p-4.5 sm:px-6 flex items-center justify-between mt-5 sm:mt-6 w-full shadow-xs gap-3">
                <button
                    type="button"
                    onClick={() => {
                        if (onBack) onBack();
                    }}
                    className="px-4 sm:px-7 py-2.5 rounded-[8px] border border-[#D9E1EE] hover:border-gray-400 bg-white hover:bg-gray-50 text-[13px] sm:text-[14px] font-semibold text-[#10245E] transition-all cursor-pointer"
                >
                    Précédent
                </button>

                <button
                    type="button"
                    onClick={() => {
                        if (onFinish) onFinish();
                    }}
                    className="px-6 sm:px-8 py-2.5 rounded-[8px] font-semibold text-[13px] sm:text-[14px] bg-[#2F67D8] hover:bg-[#2458C2] text-white shadow-[0_2px_8px_rgba(47,103,216,0.25)] hover:shadow-[0_4px_14px_rgba(47,103,216,0.35)] transition-all flex items-center gap-2 cursor-pointer"
                >
                    <span>Créer mon espace</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
            </div>
        </div>
    );
}
