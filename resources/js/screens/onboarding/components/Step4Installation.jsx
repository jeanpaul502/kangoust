import { ChevronDown, Check, AlertCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Step4Installation({ locationType, formData, setFormData }) {
    const isInside = locationType === 'inside';

    // ─────────────────────────────────────────────────────────────
    // ÉTATS POUR LE MODE HORS D'AUSTRALIE (Outside - Étape 4)
    // ─────────────────────────────────────────────────────────────
    const [cityOpen, setCityOpen] = useState(false);
    const [regionOpen, setRegionOpen] = useState(false);
    const [environmentOpen, setEnvironmentOpen] = useState(false);

    const cityRef = useRef(null);
    const regionRef = useRef(null);
    const environmentRef = useRef(null);

    const destinationCities = [
        'Sydney (NSW)',
        'Melbourne (VIC)',
        'Brisbane (QLD)',
        'Perth (WA)',
        'Adelaide (SA)',
        'Gold Coast (QLD)',
        'Cairns (QLD)',
        'Darwin (NT)',
        'Canberra (ACT)',
        'Hobart (TAS)',
        'Je ne sais pas encore',
    ];

    const regions = [
        'New South Wales (NSW)',
        'Victoria (VIC)',
        'Queensland (QLD)',
        'Western Australia (WA)',
        'South Australia (SA)',
        'Northern Territory (NT)',
        'Tasmania (TAS)',
        'Australian Capital Territory (ACT)',
    ];

    const environments = [
        'Grande métropole animée (Sydney, Melbourne)',
        'Bord de mer / Plages ensoleillées (Gold Coast, Sunshine Coast)',
        'Ville moyenne calme et agréable (Adelaide, Perth)',
        'Ville régionale / Immersion rurale (Outback, Regional Areas)',
        'Climat tropical et nature (Cairns, Darwin)',
        'Pas de préférence particulière',
    ];

    const travelCompanionOptions = [
        { id: 'solo', label: 'Seul(e)' },
        { id: 'couple', label: 'En couple' },
        { id: 'friends', label: 'Avec des amis' },
        { id: 'family', label: 'En famille' },
    ];

    const selectedCity = formData?.destinationCity || '';
    const selectedRegion = formData?.destinationRegion || '';
    const selectedCompanion = formData?.travelCompanion || 'solo';
    const selectedEnvironment = formData?.preferredEnvironment || '';
    const hasChosenCity = formData?.hasChosenCity || 'yes';

    // ─────────────────────────────────────────────────────────────
    // ÉTATS POUR LE MODE DÉJÀ EN AUSTRALIE (Inside - Étape 4: Communauté & opportunités)
    // ─────────────────────────────────────────────────────────────
    const [insideZoneOpen, setInsideZoneOpen] = useState(false);
    const [communityTypeOpen, setCommunityTypeOpen] = useState(false);
    const [frequencyOpen, setFrequencyOpen] = useState(false);

    const insideZoneRef = useRef(null);
    const communityTypeRef = useRef(null);
    const frequencyRef = useRef(null);

    const insideCommunityOptions = [
        { id: 'join_community', label: 'Rejoindre une communauté' },
        { id: 'join_events', label: 'Participer à des événements' },
        { id: 'share_opps', label: 'Partager une opportunité' },
        { id: 'read_guides', label: 'Consulter les guides' },
    ];

    const zoneOptions = [
        'Sydney (NSW)',
        'Melbourne (VIC)',
        'Brisbane (QLD)',
        'Perth (WA)',
        'Adelaide (SA)',
        'Gold Coast (QLD)',
        'Partout en Australie',
        'Autre ville / zone',
    ];

    const communityTypeOptions = [
        'Expatriés / Francophones',
        'Professionnels / Networking',
        'Étudiants',
        'Voyageurs / Road-trippers',
        'Sports & Loisirs',
        'Tous types de communautés',
    ];

    const frequencyOptions = [
        'Régulièrement (plusieurs fois par semaine)',
        'Hebdomadaire',
        'Mensuel',
        'Occasionnellement',
        'Selon les opportunités',
    ];

    const selectedCommunityActivities = formData?.communityActivities || [];
    const selectedZone = formData?.interestZone || '';
    const selectedCommunityType = formData?.communityType || '';
    const selectedFrequency = formData?.communityFrequency || '';

    const handleSelect = (field, value) => {
        if (setFormData) {
            setFormData((prev) => ({
                ...prev,
                [field]: value,
            }));
        }
    };

    const toggleCommunityActivity = (id) => {
        if (!setFormData) return;
        setFormData((prev) => {
            const current = prev?.communityActivities || [];
            const exists = current.includes(id);
            const next = exists ? current.filter((x) => x !== id) : [...current, id];
            return {
                ...prev,
                communityActivities: next,
            };
        });
    };

    // Fermeture automatique au clic à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cityRef.current && !cityRef.current.contains(event.target)) {
                setCityOpen(false);
            }
            if (regionRef.current && !regionRef.current.contains(event.target)) {
                setRegionOpen(false);
            }
            if (environmentRef.current && !environmentRef.current.contains(event.target)) {
                setEnvironmentOpen(false);
            }
            if (insideZoneRef.current && !insideZoneRef.current.contains(event.target)) {
                setInsideZoneOpen(false);
            }
            if (communityTypeRef.current && !communityTypeRef.current.contains(event.target)) {
                setCommunityTypeOpen(false);
            }
            if (frequencyRef.current && !frequencyRef.current.contains(event.target)) {
                setFrequencyOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // ─────────────────────────────────────────────────────────────
    // CAS 1 : UTILISATEUR DÉJÀ EN AUSTRALIE (isInside === true)
    // ─────────────────────────────────────────────────────────────
    if (isInside) {
        return (
            <div className="w-full space-y-5 sm:space-y-6">
                {/* Header avec Titre et Illustration Sydney */}
                <div className="relative min-h-[90px] sm:min-h-[130px] flex items-center justify-between gap-3 sm:gap-4 pb-2 overflow-visible">
                    <div className="flex-1 min-w-0 pr-2 sm:pr-4 z-10">
                        <h1 className="text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#10245E] tracking-tight mb-1.5 sm:mb-2 leading-tight whitespace-normal sm:whitespace-nowrap">
                            Communauté & opportunités
                        </h1>
                        <p className="text-[12.5px] sm:text-[14px] text-[#64718F] leading-relaxed max-w-xl">
                            Précisez les activités et opportunités qui vous intéressent le plus.
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

                {/* Carte Principale du Formulaire (Réseau et activités) */}
                <div className="bg-white rounded-[10px] border border-[#E4E9F2] p-4 sm:p-8 lg:p-9 shadow-xs space-y-5 sm:space-y-7">
                    <h3 className="text-[15px] sm:text-[16.5px] font-bold text-[#10245E]">
                        Réseau et activités
                    </h3>

                    {/* Grille 2 colonnes (2 par 2) des activités */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-3.5">
                        {insideCommunityOptions.map((item) => {
                            const isChecked = selectedCommunityActivities.includes(item.id);

                            return (
                                <div
                                    key={item.id}
                                    onClick={() => toggleCommunityActivity(item.id)}
                                    className={`h-[48px] rounded-[8px] border px-4 flex items-center gap-3.5 cursor-pointer transition-all duration-150 select-none ${
                                        isChecked
                                            ? 'border-[#94A3B8] bg-[#F8FAFC] text-[#10245E] shadow-2xs'
                                            : 'border-[#E4E9F2] bg-white hover:border-gray-400 text-gray-700'
                                    }`}
                                >
                                    {/* Checkbox carrée arrondie */}
                                    <div
                                        className={`w-[18px] h-[18px] rounded-[4px] border flex items-center justify-center transition-colors shrink-0 ${
                                            isChecked
                                                ? 'bg-[#2F67D8] border-[#2F67D8]'
                                                : 'border-[#CBD5E1] bg-white'
                                        }`}
                                    >
                                        {isChecked && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                                    </div>
                                    <span className={`text-[12.5px] sm:text-[13.5px] font-medium truncate ${
                                        isChecked ? 'text-[#10245E] font-semibold' : 'text-gray-700'
                                    }`}>
                                        {item.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Rangée inférieure à 3 colonnes : Ville/Zone, Type de communauté, Fréquence souhaitée */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 pt-2">
                        
                        {/* Colonne 1: Ville ou zone d'intérêt */}
                        <div className="space-y-1.5 sm:space-y-2" ref={insideZoneRef}>
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Ville ou zone d'intérêt
                            </label>
                            <div className="relative">
                                <div
                                    onClick={() => {
                                        setInsideZoneOpen(!insideZoneOpen);
                                        setCommunityTypeOpen(false);
                                        setFrequencyOpen(false);
                                    }}
                                    className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                        insideZoneOpen
                                            ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                            : 'border-[#D9E1EE] hover:border-gray-400'
                                    }`}
                                >
                                    <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                        selectedZone ? 'text-[#10245E]' : 'text-[#64718F]'
                                    }`}>
                                        {selectedZone || 'Sélectionnez une ville ou une zone'}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                        insideZoneOpen ? 'rotate-180 text-gray-700' : ''
                                    }`} />
                                </div>

                                {insideZoneOpen && (
                                    <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                        {zoneOptions.map((z) => {
                                            const isSelected = selectedZone === z;
                                            return (
                                                <div
                                                    key={z}
                                                    onClick={() => {
                                                        handleSelect('interestZone', z);
                                                        setInsideZoneOpen(false);
                                                    }}
                                                    className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                        isSelected
                                                            ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                    }`}
                                                >
                                                    <span className="pl-1">{z}</span>
                                                    {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Colonne 2: Type de communauté */}
                        <div className="space-y-1.5 sm:space-y-2" ref={communityTypeRef}>
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Type de communauté
                            </label>
                            <div className="relative">
                                <div
                                    onClick={() => {
                                        setCommunityTypeOpen(!communityTypeOpen);
                                        setInsideZoneOpen(false);
                                        setFrequencyOpen(false);
                                    }}
                                    className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                        communityTypeOpen
                                            ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                            : 'border-[#D9E1EE] hover:border-gray-400'
                                    }`}
                                >
                                    <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                        selectedCommunityType ? 'text-[#10245E]' : 'text-[#64718F]'
                                    }`}>
                                        {selectedCommunityType || 'Sélectionnez un type'}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                        communityTypeOpen ? 'rotate-180 text-gray-700' : ''
                                    }`} />
                                </div>

                                {communityTypeOpen && (
                                    <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                        {communityTypeOptions.map((t) => {
                                            const isSelected = selectedCommunityType === t;
                                            return (
                                                <div
                                                    key={t}
                                                    onClick={() => {
                                                        handleSelect('communityType', t);
                                                        setCommunityTypeOpen(false);
                                                    }}
                                                    className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                        isSelected
                                                            ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                    }`}
                                                >
                                                    <span className="pl-1">{t}</span>
                                                    {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Colonne 3: Fréquence souhaitée */}
                        <div className="space-y-1.5 sm:space-y-2" ref={frequencyRef}>
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Fréquence souhaitée
                            </label>
                            <div className="relative">
                                <div
                                    onClick={() => {
                                        setFrequencyOpen(!frequencyOpen);
                                        setInsideZoneOpen(false);
                                        setCommunityTypeOpen(false);
                                    }}
                                    className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                        frequencyOpen
                                            ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                            : 'border-[#D9E1EE] hover:border-gray-400'
                                    }`}
                                >
                                    <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                        selectedFrequency ? 'text-[#10245E]' : 'text-[#64718F]'
                                    }`}>
                                        {selectedFrequency || 'Sélectionnez une fréquence'}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                        frequencyOpen ? 'rotate-180 text-gray-700' : ''
                                    }`} />
                                </div>

                                {frequencyOpen && (
                                    <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                        {frequencyOptions.map((f) => {
                                            const isSelected = selectedFrequency === f;
                                            return (
                                                <div
                                                    key={f}
                                                    onClick={() => {
                                                        handleSelect('communityFrequency', f);
                                                        setFrequencyOpen(false);
                                                    }}
                                                    className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                        isSelected
                                                            ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                    }`}
                                                >
                                                    <span className="pl-1">{f}</span>
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
                        Nous utiliserons ces préférences pour organiser votre tableau de bord et vos recommandations.
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
                        Préparez votre installation
                    </h1>
                    <p className="text-[12.5px] sm:text-[14px] text-[#64718F] leading-relaxed max-w-xl">
                        Dites-nous où vous souhaitez vous installer et comment vous envisagez votre arrivée sur place.
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
                
                {/* ── Rangée 1 : Ville d'installation souhaitée & État / région ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    
                    {/* Colonne 1: Ville d'installation souhaitée */}
                    <div className="space-y-1.5 sm:space-y-2" ref={cityRef}>
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Ville d'installation souhaitée
                        </label>
                        <div className="relative">
                            <div
                                onClick={() => {
                                    setCityOpen(!cityOpen);
                                    setRegionOpen(false);
                                    setEnvironmentOpen(false);
                                }}
                                className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                    cityOpen
                                        ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                        : 'border-[#D9E1EE] hover:border-gray-400'
                                }`}
                            >
                                <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                    selectedCity ? 'text-[#10245E]' : 'text-[#64718F]'
                                }`}>
                                    {selectedCity || 'Sélectionnez votre ville de destination'}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                    cityOpen ? 'rotate-180 text-gray-700' : ''
                                }`} />
                            </div>

                            {/* Dropdown Villes */}
                            {cityOpen && (
                                <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                    {destinationCities.map((c) => {
                                        const isSelected = selectedCity === c;
                                        return (
                                            <div
                                                key={c}
                                                onClick={() => {
                                                    handleSelect('destinationCity', c);
                                                    setCityOpen(false);
                                                }}
                                                className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                    isSelected
                                                        ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                }`}
                                            >
                                                <span className="pl-1">{c}</span>
                                                {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Colonne 2: État / région */}
                    <div className="space-y-1.5 sm:space-y-2" ref={regionRef}>
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            État / région
                        </label>
                        <div className="relative">
                            <div
                                onClick={() => {
                                    setRegionOpen(!regionOpen);
                                    setCityOpen(false);
                                    setEnvironmentOpen(false);
                                }}
                                className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                    regionOpen
                                        ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                        : 'border-[#D9E1EE] hover:border-gray-400'
                                }`}
                            >
                                <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                    selectedRegion ? 'text-[#10245E]' : 'text-[#64718F]'
                                }`}>
                                    {selectedRegion || 'Sélectionnez une région'}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                    regionOpen ? 'rotate-180 text-gray-700' : ''
                                }`} />
                            </div>

                            {/* Dropdown Régions */}
                            {regionOpen && (
                                <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                    {regions.map((r) => {
                                        const isSelected = selectedRegion === r;
                                        return (
                                            <div
                                                key={r}
                                                onClick={() => {
                                                    handleSelect('destinationRegion', r);
                                                    setRegionOpen(false);
                                                }}
                                                className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                    isSelected
                                                        ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                }`}
                                            >
                                                <span className="pl-1">{r}</span>
                                                {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                {/* ── Rangée 2 : Avec qui voyagez-vous ? (4 options en pleine largeur) ── */}
                <div className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
                    <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                        Avec qui voyagez-vous ?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                        {travelCompanionOptions.map((opt) => {
                            const isSelected = selectedCompanion === opt.id;

                            return (
                                <div
                                    key={opt.id}
                                    onClick={() => handleSelect('travelCompanion', opt.id)}
                                    className={`min-h-[46px] rounded-[8px] border px-3 sm:px-3.5 flex items-center gap-2.5 cursor-pointer transition-all duration-150 py-2.5 sm:py-0 ${
                                        isSelected
                                            ? 'border-[#94A3B8] bg-[#F8FAFC] text-[#10245E] shadow-2xs'
                                            : 'border-[#D9E1EE] bg-white hover:border-gray-400 text-gray-700'
                                    }`}
                                >
                                    <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 18 18" fill="none">
                                        <circle
                                            cx="9"
                                            cy="9"
                                            r="7.75"
                                            stroke={isSelected ? '#2F67D8' : '#CBD5E1'}
                                            strokeWidth="1.7"
                                            fill="#FFFFFF"
                                        />
                                        {isSelected && (
                                            <circle cx="9" cy="9" r="3.2" fill="#2F67D8" />
                                        )}
                                    </svg>
                                    <span className="text-[12px] sm:text-[13px] font-medium whitespace-normal sm:whitespace-nowrap pl-0.5">
                                        {opt.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── Rangée 3 : Type d'environnement recherché (Gauche) & Avez-vous déjà choisi votre ville ? (Droite) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 pt-1 sm:pt-2">
                    
                    {/* Colonne 1: Type d'environnement recherché */}
                    <div className="space-y-1.5 sm:space-y-2" ref={environmentRef}>
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Type d'environnement recherché
                        </label>
                        <div className="relative">
                            <div
                                onClick={() => {
                                    setEnvironmentOpen(!environmentOpen);
                                    setCityOpen(false);
                                    setRegionOpen(false);
                                }}
                                className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                    environmentOpen
                                        ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                        : 'border-[#D9E1EE] hover:border-gray-400'
                                }`}
                            >
                                <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                    selectedEnvironment ? 'text-[#10245E]' : 'text-[#64718F]'
                                }`}>
                                    {selectedEnvironment || 'Grande ville, bord de mer, ville régionale...'}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                    environmentOpen ? 'rotate-180 text-gray-700' : ''
                                }`} />
                            </div>

                            {environmentOpen && (
                                <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                    {environments.map((env) => {
                                        const isSelected = selectedEnvironment === env;
                                        return (
                                            <div
                                                key={env}
                                                onClick={() => {
                                                    handleSelect('preferredEnvironment', env);
                                                    setEnvironmentOpen(false);
                                                }}
                                                className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                    isSelected
                                                        ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                }`}
                                            >
                                                <span className="pl-1">{env}</span>
                                                {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Colonne 2: Avez-vous déjà choisi votre ville ? (Côte à côte avec Type d'environnement) */}
                    <div className="space-y-1.5 sm:space-y-2">
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Avez-vous déjà choisi votre ville ?
                        </label>
                        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                            {/* Option 1: Oui */}
                            <div
                                onClick={() => handleSelect('hasChosenCity', 'yes')}
                                className={`flex-1 min-h-[46px] rounded-[8px] border px-3.5 flex items-center gap-2.5 cursor-pointer transition-all duration-150 py-2.5 sm:py-0 ${
                                    hasChosenCity === 'yes'
                                        ? 'border-[#94A3B8] bg-[#F8FAFC] text-[#10245E] shadow-2xs'
                                        : 'border-[#D9E1EE] bg-white hover:border-gray-400 text-gray-700'
                                }`}
                            >
                                <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 18 18" fill="none">
                                    <circle
                                        cx="9"
                                        cy="9"
                                        r="7.75"
                                        stroke={hasChosenCity === 'yes' ? '#2F67D8' : '#CBD5E1'}
                                        strokeWidth="1.7"
                                        fill="#FFFFFF"
                                    />
                                    {hasChosenCity === 'yes' && (
                                        <circle cx="9" cy="9" r="3.2" fill="#2F67D8" />
                                    )}
                                </svg>
                                <span className="text-[12px] sm:text-[13px] font-medium whitespace-normal sm:whitespace-nowrap pl-0.5">
                                    Oui
                                </span>
                            </div>

                            {/* Option 2: Je ne sais pas encore */}
                            <div
                                onClick={() => handleSelect('hasChosenCity', 'no')}
                                className={`flex-1 min-h-[46px] rounded-[8px] border px-3.5 flex items-center gap-2.5 cursor-pointer transition-all duration-150 py-2.5 sm:py-0 ${
                                    hasChosenCity === 'no'
                                        ? 'border-[#94A3B8] bg-[#F8FAFC] text-[#10245E] shadow-2xs'
                                        : 'border-[#D9E1EE] bg-white hover:border-gray-400 text-gray-700'
                                }`}
                            >
                                <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 18 18" fill="none">
                                    <circle
                                        cx="9"
                                        cy="9"
                                        r="7.75"
                                        stroke={hasChosenCity === 'no' ? '#2F67D8' : '#CBD5E1'}
                                        strokeWidth="1.7"
                                        fill="#FFFFFF"
                                    />
                                    {hasChosenCity === 'no' && (
                                        <circle cx="9" cy="9" r="3.2" fill="#2F67D8" />
                                    )}
                                </svg>
                                <span className="text-[12px] sm:text-[13px] font-medium whitespace-normal sm:whitespace-nowrap pl-0.5">
                                    Je ne sais pas encore
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Information / Notice Banner */}
            <div className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-[8px] p-3.5 sm:p-4.5 flex items-center gap-3 sm:gap-3.5 shadow-2xs">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B] shrink-0" />
                <p className="text-[12px] sm:text-[13.5px] text-[#334155] font-medium leading-snug">
                    Vous pourrez toujours ajuster votre ville d'installation si vos projets évoluent.
                </p>
            </div>
        </div>
    );
}
