import { ChevronDown, Check, AlertCircle, Info, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Step2Project({ locationType, projectType, setProjectType, formData, setFormData }) {
    const isInside = locationType === 'inside';

    // Dropdowns open state (Outside mode)
    const [mainProjectOpen, setMainProjectOpen] = useState(false);
    const [precisionOpen, setPrecisionOpen] = useState(false);
    const [envisagedOpen, setEnvisagedOpen] = useState(false);
    const [departureOpen, setDepartureOpen] = useState(false);

    // Dropdowns open state (Inside mode)
    const [visaTypeOpen, setVisaTypeOpen] = useState(false);
    const [proSituationOpen, setProSituationOpen] = useState(false);
    const [urgentHelpOpen, setUrgentHelpOpen] = useState(false);
    const [calendarOpen, setCalendarOpen] = useState(false);

    // Calendar state for Inside mode
    const [calDate, setCalDate] = useState(new Date(2027, 5, 1)); // Default June 2027

    // Refs for outside click
    const mainProjectRef = useRef(null);
    const precisionRef = useRef(null);
    const envisagedRef = useRef(null);
    const departureRef = useRef(null);
    const visaTypeRef = useRef(null);
    const proSituationRef = useRef(null);
    const urgentHelpRef = useRef(null);
    const calendarRef = useRef(null);

    // Options for Outside mode
    const mainProjectOptions = [
        'Working Holiday Visa (WHV)',
        'Études / Formation',
        'Travail / Sponsor employeur',
        'Skilled / Travail qualifié',
        'Famille / Partenaire',
        'Tourisme / Découverte',
        'Autre projet',
    ];

    const precisionOptions = [
        '1er Working Holiday (Visa 417 / 462)',
        '2ème / 3ème Working Holiday',
        'Cours d’anglais (ELICOS)',
        'Formation professionnelle (VET / TAFE)',
        'Études universitaires (Bachelor / Master)',
        'Sponsorisé par une entreprise (TSS 482 / 186)',
        'Visa compétences indépendant (189 / 190)',
        'Autre catégorie',
    ];

    const envisagedOptions = [
        'Voyager et financer son séjour en travaillant',
        'Trouver un emploi qualifié dans mon secteur',
        'Perfectionner mon anglais et valider un diplôme',
        'S’installer durablement et envisager la résidence',
        'Faire un road-trip et découvrir la nature australienne',
        'Je ne sais pas encore exactement',
    ];

    const departureOptions = [
        'Dès que possible (moins d’un mois)',
        'Dans 1 à 3 mois',
        'Dans 3 à 6 mois',
        'Dans 6 à 12 mois',
        'Dans plus d’un an',
        'Je suis déjà sur place en Australie',
    ];

    // Options for Inside mode
    const visaTypeOptions = [
        'Working Holiday Visa (Subclass 417 / 462)',
        'Student Visa (Subclass 500)',
        'Temporary Graduate (Subclass 485)',
        'Temporary Skill Shortage (Subclass 482)',
        'Tourist / Visitor Visa (Subclass 600 / 651 / 601)',
        'Permanent Resident / Citizen',
        'Bridging Visa',
        'Autre statut',
    ];

    const proSituationOptions = [
        'En recherche active d’emploi',
        'En poste à temps plein (Full-time)',
        'En poste à temps partiel (Part-time)',
        'En contrat occasionnel (Casual)',
        'En stage / volontariat',
        'Sans activité professionnelle',
        'En reconversion / formation',
        'Autre situation',
    ];

    const urgentHelpOptions = [
        'Non, tout va bien',
        'Oui, pour trouver un logement rapidement',
        'Oui, pour des démarches administratives / visa',
        'Oui, pour trouver un emploi en urgence',
        'Oui, pour une aide juridique ou médicale',
        'Autre besoin urgent',
    ];

    // Form values
    const selectedMainProject = formData?.mainProject || '';
    const selectedPrecision = formData?.precision || '';
    const selectedEnvisaged = formData?.envisagedProject || '';
    const selectedDeparture = formData?.departureTime || '';
    const hasPreciseIdea = formData?.hasPreciseIdea || 'yes'; // 'yes' | 'no'

    // Inside form values
    const selectedVisaType = formData?.visaType || '';
    const visaExpiryDate = formData?.visaExpiryDate || '';
    const isWorkingCurrently = formData?.isWorkingCurrently || 'Non'; // 'Oui' | 'Non' | 'Occasionnellement'
    const hasHousingCurrently = formData?.hasHousingCurrently || 'Oui'; // 'Oui' | 'Non' | 'Temporairement'
    const selectedProSituation = formData?.proSituation || '';
    const selectedUrgentHelp = formData?.urgentHelp || '';

    const handleSelect = (field, value) => {
        if (setFormData) {
            setFormData((prev) => ({
                ...prev,
                [field]: value,
            }));
        }
    };

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mainProjectRef.current && !mainProjectRef.current.contains(event.target)) {
                setMainProjectOpen(false);
            }
            if (precisionRef.current && !precisionRef.current.contains(event.target)) {
                setPrecisionOpen(false);
            }
            if (envisagedRef.current && !envisagedRef.current.contains(event.target)) {
                setEnvisagedOpen(false);
            }
            if (departureRef.current && !departureRef.current.contains(event.target)) {
                setDepartureOpen(false);
            }
            if (visaTypeRef.current && !visaTypeRef.current.contains(event.target)) {
                setVisaTypeOpen(false);
            }
            if (proSituationRef.current && !proSituationRef.current.contains(event.target)) {
                setProSituationOpen(false);
            }
            if (urgentHelpRef.current && !urgentHelpRef.current.contains(event.target)) {
                setUrgentHelpOpen(false);
            }
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setCalendarOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // ─────────────────────────────────────────────────────────────
    // CAS 1 : UTILISATEUR DÉJÀ EN AUSTRALIE (isInside === true)
    // ─────────────────────────────────────────────────────────────
    if (isInside) {
        // Mois et jours pour le mini calendrier
        const monthNames = [
            'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
            'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ];
        const daysInMonth = new Date(calDate.getFullYear(), calDate.getMonth() + 1, 0).getDate();
        const firstDayIndex = (new Date(calDate.getFullYear(), calDate.getMonth(), 1).getDay() + 6) % 7;

        return (
            <div className="w-full space-y-5 sm:space-y-6">
                {/* Header avec Titre et Illustration Sydney */}
                <div className="relative min-h-[90px] sm:min-h-[130px] flex items-center justify-between gap-3 sm:gap-4 pb-2 overflow-visible">
                    <div className="flex-1 min-w-0 pr-2 sm:pr-4 z-10">
                        <h1 className="text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#10245E] tracking-tight mb-1.5 sm:mb-2 leading-tight whitespace-normal sm:whitespace-nowrap">
                            Précisez votre statut en Australie
                        </h1>
                        <p className="text-[12.5px] sm:text-[14px] text-[#64718F] leading-relaxed max-w-xl">
                            Ces informations nous aident à vous proposer un accompagnement adapté à votre situation actuelle.
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

                {/* Carte Principale du Formulaire (Votre statut actuel) */}
                <div className="bg-white rounded-[10px] border border-[#E4E9F2] p-4 sm:p-8 lg:p-9 shadow-xs space-y-5 sm:space-y-7">
                    <h3 className="text-[15px] sm:text-[16.5px] font-bold text-[#10245E]">
                        Votre statut actuel
                    </h3>

                    {/* ── Rangée 1 : Type de visa / statut & Date d'expiration du visa ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        
                        {/* Colonne 1: Type de visa / statut */}
                        <div className="space-y-1.5 sm:space-y-2" ref={visaTypeRef}>
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Type de visa / statut
                            </label>
                            <div className="relative">
                                <div
                                    onClick={() => {
                                        setVisaTypeOpen(!visaTypeOpen);
                                        setProSituationOpen(false);
                                        setUrgentHelpOpen(false);
                                        setCalendarOpen(false);
                                    }}
                                    className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                        visaTypeOpen
                                            ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                            : 'border-[#D9E1EE] hover:border-gray-400'
                                    }`}
                                >
                                    <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                        selectedVisaType ? 'text-[#10245E]' : 'text-[#64718F]'
                                    }`}>
                                        {selectedVisaType || 'Sélectionnez votre visa ou statut'}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                        visaTypeOpen ? 'rotate-180 text-gray-700' : ''
                                    }`} />
                                </div>

                                {visaTypeOpen && (
                                    <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                        {visaTypeOptions.map((opt) => {
                                            const isSelected = selectedVisaType === opt;
                                            return (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        handleSelect('visaType', opt);
                                                        setVisaTypeOpen(false);
                                                    }}
                                                    className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                        isSelected
                                                            ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                    }`}
                                                >
                                                    <span className="pl-1">{opt}</span>
                                                    {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Colonne 2: Date d'expiration du visa (option facultative) avec Info-bulle / Tooltip au survol */}
                        <div className="space-y-1.5 sm:space-y-2" ref={calendarRef}>
                            <label className="flex items-center gap-1.5 text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                <span>Date d'expiration du visa</span>
                                <span className="text-[#64718F] font-normal">(option facultative)</span>
                                <span className="relative inline-flex items-center group cursor-pointer ml-0.5">
                                    <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#94A3B8] group-hover:text-[#2F67D8] transition-colors" />
                                    
                                    {/* Tooltip Popover affiché au survol - forme rectangulaire allongée */}
                                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex flex-col items-center z-50 w-[320px] sm:w-[360px] pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                                        <span className="bg-[#10245E] text-white text-[11.5px] sm:text-[12px] font-normal leading-relaxed rounded-[8px] px-3.5 py-2.5 shadow-xl text-center">
                                            Cette date nous permet uniquement d’adapter nos rappels et conseils personnalisés. Vos informations restent strictement confidentielles.
                                        </span>
                                        <span className="w-2 h-2 bg-[#10245E] rotate-45 -mt-1" />
                                    </span>
                                </span>
                            </label>
                            <div className="relative">
                                <div
                                    onClick={() => {
                                        setCalendarOpen(!calendarOpen);
                                        setVisaTypeOpen(false);
                                        setProSituationOpen(false);
                                        setUrgentHelpOpen(false);
                                    }}
                                    className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                        calendarOpen
                                            ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                            : 'border-[#D9E1EE] hover:border-gray-400'
                                    }`}
                                >
                                    <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                        visaExpiryDate ? 'text-[#10245E]' : 'text-[#64718F]'
                                    }`}>
                                        {visaExpiryDate || 'JJ / MM / AAAA'}
                                    </span>
                                    <CalendarIcon className="w-4 h-4 text-[#64718F] shrink-0" />
                                </div>

                                {/* Mini calendrier popover */}
                                {calendarOpen && (
                                    <div className="absolute right-0 top-[calc(100%+6px)] bg-white rounded-[10px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-4 z-50 w-[290px] animate-in fade-in zoom-in-95">
                                        {/* Mois & Année avec flèches de navigation */}
                                        <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
                                            <button
                                                type="button"
                                                onClick={() => setCalDate(new Date(calDate.getFullYear(), calDate.getMonth() - 1, 1))}
                                                className="p-1 hover:bg-gray-100 rounded-[6px] text-gray-600 cursor-pointer"
                                            >
                                                <ChevronLeft className="w-4 h-4" />
                                            </button>
                                            <span className="text-[13px] font-bold text-[#10245E]">
                                                {monthNames[calDate.getMonth()]} {calDate.getFullYear()}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => setCalDate(new Date(calDate.getFullYear(), calDate.getMonth() + 1, 1))}
                                                className="p-1 hover:bg-gray-100 rounded-[6px] text-gray-600 cursor-pointer"
                                            >
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Jours de la semaine */}
                                        <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
                                            {['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'].map((d) => (
                                                <span key={d} className="text-[10.5px] font-bold text-[#64718F]">
                                                    {d}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Grille des jours */}
                                        <div className="grid grid-cols-7 gap-1 text-center">
                                            {Array.from({ length: firstDayIndex }).map((_, idx) => (
                                                <div key={`empty-${idx}`} />
                                            ))}
                                            {Array.from({ length: daysInMonth }).map((_, idx) => {
                                                const dayNum = idx + 1;
                                                const formatted = `${String(dayNum).padStart(2, '0')} / ${String(calDate.getMonth() + 1).padStart(2, '0')} / ${calDate.getFullYear()}`;
                                                const isSelected = visaExpiryDate === formatted;

                                                return (
                                                    <button
                                                        key={dayNum}
                                                        type="button"
                                                        onClick={() => {
                                                            handleSelect('visaExpiryDate', formatted);
                                                            setCalendarOpen(false);
                                                        }}
                                                        className={`h-7 w-7 rounded-[6px] text-[12px] font-medium flex items-center justify-center mx-auto transition-colors cursor-pointer ${
                                                            isSelected
                                                                ? 'bg-[#2F67D8] text-white font-bold'
                                                                : 'text-[#10245E] hover:bg-gray-100'
                                                        }`}
                                                    >
                                                        {dayNum}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

                    {/* ── Rangée 2 : Travaillez-vous actuellement ? & Avez-vous déjà un logement ? (Boutons radio libres et bien espacés) ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 pt-1">
                        
                        {/* Colonne 1: Travaillez-vous actuellement ? */}
                        <div className="space-y-2 sm:space-y-2.5">
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Travaillez-vous actuellement ?
                            </label>
                            <div className="flex items-center justify-start gap-6 sm:gap-9 lg:gap-10 pt-2">
                                {[
                                    { id: 'Oui', label: 'Oui' },
                                    { id: 'Non', label: 'Non' },
                                    { id: 'Occasionnellement', label: 'Occasionnellement' },
                                ].map((item) => {
                                    const isChecked = isWorkingCurrently === item.id;
                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => handleSelect('isWorkingCurrently', item.id)}
                                            className="flex items-center gap-2.5 cursor-pointer select-none group"
                                        >
                                            <svg className="w-[18px] h-[18px] shrink-0 transition-colors" viewBox="0 0 18 18" fill="none">
                                                <circle
                                                    cx="9"
                                                    cy="9"
                                                    r="7.75"
                                                    stroke={isChecked ? '#2F67D8' : '#CBD5E1'}
                                                    strokeWidth="1.7"
                                                    fill="#FFFFFF"
                                                />
                                                {isChecked && (
                                                    <circle cx="9" cy="9" r="3.2" fill="#2F67D8" />
                                                )}
                                            </svg>
                                            <span className={`text-[12.5px] sm:text-[13.5px] font-medium transition-colors ${
                                                isChecked ? 'text-[#10245E] font-semibold' : 'text-gray-700 group-hover:text-[#10245E]'
                                            }`}>
                                                {item.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Colonne 2: Avez-vous déjà un logement ? */}
                        <div className="space-y-2 sm:space-y-2.5">
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Avez-vous déjà un logement ?
                            </label>
                            <div className="flex items-center justify-start gap-6 sm:gap-9 lg:gap-10 pt-2">
                                {[
                                    { id: 'Oui', label: 'Oui' },
                                    { id: 'Non', label: 'Non' },
                                    { id: 'Temporairement', label: 'Temporairement' },
                                ].map((item) => {
                                    const isChecked = hasHousingCurrently === item.id;
                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => handleSelect('hasHousingCurrently', item.id)}
                                            className="flex items-center gap-2.5 cursor-pointer select-none group"
                                        >
                                            <svg className="w-[18px] h-[18px] shrink-0 transition-colors" viewBox="0 0 18 18" fill="none">
                                                <circle
                                                    cx="9"
                                                    cy="9"
                                                    r="7.75"
                                                    stroke={isChecked ? '#2F67D8' : '#CBD5E1'}
                                                    strokeWidth="1.7"
                                                    fill="#FFFFFF"
                                                />
                                                {isChecked && (
                                                    <circle cx="9" cy="9" r="3.2" fill="#2F67D8" />
                                                )}
                                            </svg>
                                            <span className={`text-[12.5px] sm:text-[13.5px] font-medium transition-colors ${
                                                isChecked ? 'text-[#10245E] font-semibold' : 'text-gray-700 group-hover:text-[#10245E]'
                                            }`}>
                                                {item.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>

                    {/* ── Rangée 3 : Situation professionnelle actuelle & Besoin d'accompagnement urgent ? ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 pt-1">
                        
                        {/* Colonne 1: Situation professionnelle actuelle */}
                        <div className="space-y-1.5 sm:space-y-2" ref={proSituationRef}>
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Situation professionnelle actuelle
                            </label>
                            <div className="relative">
                                <div
                                    onClick={() => {
                                        setProSituationOpen(!proSituationOpen);
                                        setVisaTypeOpen(false);
                                        setUrgentHelpOpen(false);
                                        setCalendarOpen(false);
                                    }}
                                    className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                        proSituationOpen
                                            ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                            : 'border-[#D9E1EE] hover:border-gray-400'
                                    }`}
                                >
                                    <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                        selectedProSituation ? 'text-[#10245E]' : 'text-[#64718F]'
                                    }`}>
                                        {selectedProSituation || 'Sélectionnez votre situation'}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                        proSituationOpen ? 'rotate-180 text-gray-700' : ''
                                    }`} />
                                </div>

                                {proSituationOpen && (
                                    <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                        {proSituationOptions.map((opt) => {
                                            const isSelected = selectedProSituation === opt;
                                            return (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        handleSelect('proSituation', opt);
                                                        setProSituationOpen(false);
                                                    }}
                                                    className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                        isSelected
                                                            ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                    }`}
                                                >
                                                    <span className="pl-1">{opt}</span>
                                                    {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Colonne 2: Besoin d'accompagnement urgent ? */}
                        <div className="space-y-1.5 sm:space-y-2" ref={urgentHelpRef}>
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Besoin d'accompagnement urgent ?
                            </label>
                            <div className="relative">
                                <div
                                    onClick={() => {
                                        setUrgentHelpOpen(!urgentHelpOpen);
                                        setVisaTypeOpen(false);
                                        setProSituationOpen(false);
                                        setCalendarOpen(false);
                                    }}
                                    className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                        urgentHelpOpen
                                            ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                            : 'border-[#D9E1EE] hover:border-gray-400'
                                    }`}
                                >
                                    <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                        selectedUrgentHelp ? 'text-[#10245E]' : 'text-[#64718F]'
                                    }`}>
                                        {selectedUrgentHelp || 'Sélectionnez une option'}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                        urgentHelpOpen ? 'rotate-180 text-gray-700' : ''
                                    }`} />
                                </div>

                                {urgentHelpOpen && (
                                    <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                        {urgentHelpOptions.map((opt) => {
                                            const isSelected = selectedUrgentHelp === opt;
                                            return (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        handleSelect('urgentHelp', opt);
                                                        setUrgentHelpOpen(false);
                                                    }}
                                                    className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                        isSelected
                                                            ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                    }`}
                                                >
                                                    <span className="pl-1">{opt}</span>
                                                    {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

                </div>

                {/* Information / Notice Banner avec Icône Jaune */}
                <div className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-[8px] p-3.5 sm:p-4.5 flex items-center gap-3 sm:gap-3.5 shadow-2xs">
                    <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B] shrink-0" />
                    <p className="text-[12px] sm:text-[13.5px] text-[#334155] font-medium leading-snug">
                        Ces réponses nous aident à adapter vos recommandations et vos démarches prioritaires.
                    </p>
                </div>
            </div>
        );
    }

    // ─────────────────────────────────────────────────────────────
    // CAS 2 : UTILISATEUR HORS D'AUSTRALIE (isInside === false)
    // ─────────────────────────────────────────────────────────────
    return (
        <div className="w-full space-y-5 sm:space-y-6">
            {/* Header avec Titre et Illustration Sydney */}
            <div className="relative min-h-[90px] sm:min-h-[130px] flex items-center justify-between gap-3 sm:gap-4 pb-2 overflow-visible">
                <div className="flex-1 min-w-0 pr-2 sm:pr-4 z-10">
                    <h1 className="text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#10245E] tracking-tight mb-1.5 sm:mb-2 leading-tight whitespace-normal sm:whitespace-nowrap">
                        Quel est votre projet pour l’Australie ?
                    </h1>
                    <p className="text-[12.5px] sm:text-[14px] text-[#64718F] leading-relaxed max-w-xl">
                        Ces informations nous aideront à vous proposer des conseils, des ressources et des étapes adaptées à votre projet.
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

            {/* Carte Principale du Formulaire */}
            <div className="bg-white rounded-[10px] border border-[#E4E9F2] p-4 sm:p-8 lg:p-9 shadow-xs space-y-5 sm:space-y-8">
                
                {/* ── Rangée 1 : Projet principal & Précision ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    
                    {/* Colonne 1: Projet principal */}
                    <div className="space-y-1.5 sm:space-y-2" ref={mainProjectRef}>
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Projet principal
                        </label>
                        <div className="relative">
                            <div
                                onClick={() => {
                                    setMainProjectOpen(!mainProjectOpen);
                                    setPrecisionOpen(false);
                                    setEnvisagedOpen(false);
                                    setDepartureOpen(false);
                                }}
                                className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                    mainProjectOpen
                                        ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                        : 'border-[#D9E1EE] hover:border-gray-400'
                                }`}
                            >
                                <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                    selectedMainProject ? 'text-[#10245E]' : 'text-[#64718F]'
                                }`}>
                                    {selectedMainProject || 'Sélectionnez votre projet'}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                    mainProjectOpen ? 'rotate-180 text-gray-700' : ''
                                }`} />
                            </div>

                            {mainProjectOpen && (
                                <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                    {mainProjectOptions.map((opt) => {
                                        const isSelected = selectedMainProject === opt;
                                        return (
                                            <div
                                                key={opt}
                                                onClick={() => {
                                                    handleSelect('mainProject', opt);
                                                    setMainProjectOpen(false);
                                                }}
                                                className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                    isSelected
                                                        ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                }`}
                                            >
                                                <span className="pl-1">{opt}</span>
                                                {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Colonne 2: Précision */}
                    <div className="space-y-1.5 sm:space-y-2" ref={precisionRef}>
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Précision
                        </label>
                        <div className="relative">
                            <div
                                onClick={() => {
                                    setPrecisionOpen(!precisionOpen);
                                    setMainProjectOpen(false);
                                    setEnvisagedOpen(false);
                                    setDepartureOpen(false);
                                }}
                                className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                    precisionOpen
                                        ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                        : 'border-[#D9E1EE] hover:border-gray-400'
                                }`}
                            >
                                <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                    selectedPrecision ? 'text-[#10245E]' : 'text-[#64718F]'
                                }`}>
                                    {selectedPrecision || 'Choisissez une catégorie'}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                    precisionOpen ? 'rotate-180 text-gray-700' : ''
                                }`} />
                            </div>

                            {precisionOpen && (
                                <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                    {precisionOptions.map((opt) => {
                                        const isSelected = selectedPrecision === opt;
                                        return (
                                            <div
                                                key={opt}
                                                onClick={() => {
                                                    handleSelect('precision', opt);
                                                    setPrecisionOpen(false);
                                                }}
                                                className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                    isSelected
                                                        ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                }`}
                                            >
                                                <span className="pl-1">{opt}</span>
                                                {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                {/* ── Rangée 2 : Avez-vous déjà une idée précise ? & Projet envisagé ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 pt-1 sm:pt-2">
                    
                    {/* Colonne 1: Avez-vous déjà une idée précise ? */}
                    <div className="space-y-1.5 sm:space-y-2">
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Avez-vous déjà une idée précise ?
                        </label>
                        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                            {/* Option 1: Oui, je sais déjà */}
                            <div
                                onClick={() => handleSelect('hasPreciseIdea', 'yes')}
                                className={`flex-1 min-h-[46px] rounded-[8px] border px-3.5 flex items-center gap-2.5 cursor-pointer transition-all duration-150 py-2.5 sm:py-0 ${
                                    hasPreciseIdea === 'yes'
                                        ? 'border-[#94A3B8] bg-[#F8FAFC] text-[#10245E] shadow-2xs'
                                        : 'border-[#D9E1EE] bg-white hover:border-gray-400 text-gray-700'
                                }`}
                            >
                                <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 18 18" fill="none">
                                    <circle
                                        cx="9"
                                        cy="9"
                                        r="7.75"
                                        stroke={hasPreciseIdea === 'yes' ? '#2F67D8' : '#CBD5E1'}
                                        strokeWidth="1.7"
                                        fill="#FFFFFF"
                                    />
                                    {hasPreciseIdea === 'yes' && (
                                        <circle cx="9" cy="9" r="3.2" fill="#2F67D8" />
                                    )}
                                </svg>
                                <span className="text-[12px] sm:text-[13px] font-medium whitespace-normal sm:whitespace-nowrap pl-0.5">
                                    Oui, je sais déjà
                                </span>
                            </div>

                            {/* Option 2: Je ne sais pas encore */}
                            <div
                                onClick={() => handleSelect('hasPreciseIdea', 'no')}
                                className={`flex-1 min-h-[46px] rounded-[8px] border px-3.5 flex items-center gap-2.5 cursor-pointer transition-all duration-150 py-2.5 sm:py-0 ${
                                    hasPreciseIdea === 'no'
                                        ? 'border-[#94A3B8] bg-[#F8FAFC] text-[#10245E] shadow-2xs'
                                        : 'border-[#D9E1EE] bg-white hover:border-gray-400 text-gray-700'
                                }`}
                            >
                                <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 18 18" fill="none">
                                    <circle
                                        cx="9"
                                        cy="9"
                                        r="7.75"
                                        stroke={hasPreciseIdea === 'no' ? '#2F67D8' : '#CBD5E1'}
                                        strokeWidth="1.7"
                                        fill="#FFFFFF"
                                    />
                                    {hasPreciseIdea === 'no' && (
                                        <circle cx="9" cy="9" r="3.2" fill="#2F67D8" />
                                    )}
                                </svg>
                                <span className="text-[12px] sm:text-[13px] font-medium whitespace-normal sm:whitespace-nowrap pl-0.5">
                                    Je ne sais pas encore
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Colonne 2: Projet envisagé */}
                    <div className="space-y-1.5 sm:space-y-2" ref={envisagedRef}>
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Projet envisagé
                        </label>
                        <div className="relative">
                            <div
                                onClick={() => {
                                    setEnvisagedOpen(!envisagedOpen);
                                    setMainProjectOpen(false);
                                    setPrecisionOpen(false);
                                    setDepartureOpen(false);
                                }}
                                className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                    envisagedOpen
                                        ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                        : 'border-[#D9E1EE] hover:border-gray-400'
                                }`}
                            >
                                <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                    selectedEnvisaged ? 'text-[#10245E]' : 'text-[#64718F]'
                                }`}>
                                    {selectedEnvisaged || 'Sélectionnez une option'}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                    envisagedOpen ? 'rotate-180 text-gray-700' : ''
                                }`} />
                            </div>

                            {envisagedOpen && (
                                <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                    {envisagedOptions.map((opt) => {
                                        const isSelected = selectedEnvisaged === opt;
                                        return (
                                            <div
                                                key={opt}
                                                onClick={() => {
                                                    handleSelect('envisagedProject', opt);
                                                    setEnvisagedOpen(false);
                                                }}
                                                className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                    isSelected
                                                        ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                }`}
                                            >
                                                <span className="pl-1">{opt}</span>
                                                {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                {/* ── Rangée 3 : Quand souhaitez-vous partir ? ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 pt-1 sm:pt-2">
                    
                    {/* Colonne 1: Quand souhaitez-vous partir ? */}
                    <div className="space-y-1.5 sm:space-y-2" ref={departureRef}>
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Quand souhaitez-vous partir ?
                        </label>
                        <div className="relative">
                            <div
                                onClick={() => {
                                    setDepartureOpen(!departureOpen);
                                    setMainProjectOpen(false);
                                    setPrecisionOpen(false);
                                    setEnvisagedOpen(false);
                                }}
                                className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                    departureOpen
                                        ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                        : 'border-[#D9E1EE] hover:border-gray-400'
                                }`}
                            >
                                <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                    selectedDeparture ? 'text-[#10245E]' : 'text-[#64718F]'
                                }`}>
                                    {selectedDeparture || 'Sélectionnez une période'}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                    departureOpen ? 'rotate-180 text-gray-700' : ''
                                }`} />
                            </div>

                            {departureOpen && (
                                <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                    {departureOptions.map((opt) => {
                                        const isSelected = selectedDeparture === opt;
                                        return (
                                            <div
                                                key={opt}
                                                onClick={() => {
                                                    handleSelect('departureTime', opt);
                                                    setDepartureOpen(false);
                                                }}
                                                className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                    isSelected
                                                        ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                }`}
                                            >
                                                <span className="pl-1">{opt}</span>
                                                {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                </div>

            </div>

            {/* Information / Notice Banner */}
            <div className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-[8px] p-3.5 sm:p-4.5 flex items-center gap-3 sm:gap-3.5 shadow-2xs">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B] shrink-0" />
                <p className="text-[12px] sm:text-[13.5px] text-[#334155] font-medium leading-snug">
                    Vous pourrez modifier ou préciser votre projet plus tard si nécessaire.
                </p>
            </div>
        </div>
    );
}
