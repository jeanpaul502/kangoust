import { ChevronDown, Check, AlertCircle, Info } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Step1Situation({ locationType, setLocationType, formData, setFormData }) {
    const isInside = locationType === 'inside';

    // Dropdown open states
    const [situationOpen, setSituationOpen] = useState(false);
    const [cityOpen, setCityOpen] = useState(false);
    const [durationOpen, setDurationOpen] = useState(false);
    const [countryOpen, setCountryOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);

    // Refs for click outside
    const situationRef = useRef(null);
    const cityRef = useRef(null);
    const durationRef = useRef(null);
    const countryRef = useRef(null);
    const languageRef = useRef(null);

    const outsideSituationOptions = [
        'Je prépare mon futur départ',
        'Je viens d’obtenir mon visa',
        'Je suis en cours d’installation',
        'Je souhaite renouveler mon séjour',
        'Autre situation',
    ];

    const insideSituationOptions = [
        'Je viens tout juste d’arriver (moins de 3 mois)',
        'Je suis installé et je cherche du travail',
        'Je travaille déjà en Australie',
        'Je suis étudiant / en formation',
        'Je prépare le renouvellement de mon visa',
        'Je réside de façon permanente ou longue durée',
        'Autre situation sur place',
    ];

    const situationOptions = isInside ? insideSituationOptions : outsideSituationOptions;

    const cityOptions = [
        'Sydney',
        'Melbourne',
        'Brisbane',
        'Perth',
        'Adelaide',
        'Gold Coast',
        'Canberra',
        'Hobart',
        'Darwin',
        'Cairns',
        'Autre ville',
    ];

    const durationOptions = [
        'Moins de 1 mois',
        '1 à 3 mois',
        '3 à 6 mois',
        '6 mois à 1 an',
        'Plus de 1 an',
    ];

    const countryOptions = [
        'France 🇫🇷',
        'Belgique 🇧🇪',
        'Suisse 🇨🇭',
        'Canada 🇨🇦',
        'Royaume-Uni 🇬🇧',
        'Australie 🇦🇺',
        'Nouvelle-Zélande 🇳🇿',
        'Autre pays',
    ];

    const languageOptions = [
        'Français',
        'Anglais',
        'Espagnol',
        'Allemand',
        'Italien',
        'Autre langue',
    ];

    const selectedSituation = formData?.currentSituation || '';
    const selectedCity = formData?.currentCity || '';
    const selectedDuration = formData?.stayDuration || '';
    const selectedCountry = formData?.currentCountry || '';
    const selectedLanguage = formData?.preferredLanguage || '';

    const handleSelect = (field, value) => {
        if (setFormData) {
            setFormData((prev) => ({
                ...prev,
                [field]: value,
            }));
        }
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (situationRef.current && !situationRef.current.contains(event.target)) {
                setSituationOpen(false);
            }
            if (cityRef.current && !cityRef.current.contains(event.target)) {
                setCityOpen(false);
            }
            if (durationRef.current && !durationRef.current.contains(event.target)) {
                setDurationOpen(false);
            }
            if (countryRef.current && !countryRef.current.contains(event.target)) {
                setCountryOpen(false);
            }
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setLanguageOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="w-full space-y-5 sm:space-y-6">
            {/* Header avec Titre et Illustration Sydney */}
            <div className="relative min-h-[90px] sm:min-h-[130px] flex items-center justify-between gap-3 sm:gap-4 pb-2 overflow-visible">
                <div className="flex-1 min-w-0 pr-2 sm:pr-4 z-10">
                    <h1 className="text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#10245E] tracking-tight mb-1.5 sm:mb-2 leading-tight whitespace-normal sm:whitespace-nowrap">
                        {isInside ? 'Vous êtes déjà en Australie' : 'Où êtes-vous actuellement ?'}
                    </h1>
                    <p className="text-[12.5px] sm:text-[14px] text-[#64718F] leading-relaxed max-w-xl">
                        {isInside
                            ? 'Parfait ! Nous allons personnaliser votre parcours en fonction de votre situation actuelle sur place pour vous proposer des conseils et ressources vraiment utiles.'
                            : 'Ces informations nous aident à personnaliser votre parcours et à vous proposer des conseils pertinents.'}
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
            <div className="bg-white rounded-[10px] border border-[#E4E9F2] p-4 sm:p-8 lg:p-9 shadow-xs space-y-5 sm:space-y-7">
                <h3 className="text-[15px] sm:text-[16.5px] font-bold text-[#10245E]">
                    {isInside ? 'Votre situation actuelle' : 'Votre situation'}
                </h3>

                {/* ── Rangée 1 : Situation actuelle & Choisissez une option (Préservée pour les deux modes) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                    
                    {/* Colonne 1: Votre situation actuelle */}
                    <div className="lg:col-span-5 space-y-1.5 sm:space-y-2" ref={situationRef}>
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Votre situation actuelle
                        </label>
                        <div className="relative">
                            <div
                                onClick={() => {
                                    setSituationOpen(!situationOpen);
                                    setCityOpen(false);
                                    setDurationOpen(false);
                                    setCountryOpen(false);
                                    setLanguageOpen(false);
                                }}
                                className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                    situationOpen
                                        ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                        : 'border-[#D9E1EE] hover:border-gray-400'
                                }`}
                            >
                                <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                    selectedSituation ? 'text-[#10245E]' : 'text-[#64718F]'
                                }`}>
                                    {selectedSituation || 'Sélectionnez votre situation'}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                    situationOpen ? 'rotate-180 text-gray-700' : ''
                                }`} />
                            </div>

                            {/* Dropdown Options */}
                            {situationOpen && (
                                <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                    {situationOptions.map((opt) => {
                                        const isSelected = selectedSituation === opt;
                                        return (
                                            <div
                                                key={opt}
                                                onClick={() => {
                                                    handleSelect('currentSituation', opt);
                                                    if (opt === 'Je réside déjà en Australie') {
                                                        setLocationType('inside');
                                                    }
                                                    setSituationOpen(false);
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

                    {/* Colonne 2: Choisissez une option (2 boutons radios préservés et interactifs) */}
                    <div className="lg:col-span-7 space-y-1.5 sm:space-y-2">
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Choisissez une option
                        </label>
                        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                            {/* Option 1: Je suis encore hors d'Australie */}
                            <div
                                onClick={() => setLocationType('outside')}
                                className={`flex-[1.08] min-h-[46px] rounded-[8px] border px-3.5 flex items-center gap-2.5 cursor-pointer transition-all duration-150 py-2.5 sm:py-0 ${
                                    !isInside
                                        ? 'border-[#94A3B8] bg-[#F8FAFC] text-[#10245E] shadow-2xs'
                                        : 'border-[#D9E1EE] bg-white hover:border-gray-400 text-gray-700'
                                }`}
                            >
                                <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 18 18" fill="none">
                                    <circle
                                        cx="9"
                                        cy="9"
                                        r="7.75"
                                        stroke={!isInside ? '#2F67D8' : '#CBD5E1'}
                                        strokeWidth="1.7"
                                        fill="#FFFFFF"
                                    />
                                    {!isInside && (
                                        <circle cx="9" cy="9" r="3.2" fill="#2F67D8" />
                                    )}
                                </svg>
                                <span className="text-[12px] sm:text-[13px] font-medium whitespace-normal sm:whitespace-nowrap pl-0.5">
                                    Je suis encore hors d'Australie
                                </span>
                            </div>

                            {/* Option 2: Je suis déjà en Australie */}
                            <div
                                onClick={() => setLocationType('inside')}
                                className={`flex-[0.92] min-h-[46px] rounded-[8px] border px-3.5 flex items-center gap-2.5 cursor-pointer transition-all duration-150 py-2.5 sm:py-0 ${
                                    isInside
                                        ? 'border-[#94A3B8] bg-[#F8FAFC] text-[#10245E] shadow-2xs'
                                        : 'border-[#D9E1EE] bg-white hover:border-gray-400 text-gray-700'
                                }`}
                            >
                                <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 18 18" fill="none">
                                    <circle
                                        cx="9"
                                        cy="9"
                                        r="7.75"
                                        stroke={isInside ? '#2F67D8' : '#CBD5E1'}
                                        strokeWidth="1.7"
                                        fill="#FFFFFF"
                                    />
                                    {isInside && (
                                        <circle cx="9" cy="9" r="3.2" fill="#2F67D8" />
                                    )}
                                </svg>
                                <span className="text-[12px] sm:text-[13px] font-medium whitespace-normal sm:whitespace-nowrap pl-0.5">
                                    Je suis déjà en Australie
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ── CHAMPS POUR QUELQU'UN DÉJÀ EN AUSTRALIE : Ville actuelle & Depuis combien de temps êtes-vous en Australie ? (Côte à côte) ── */}
                {isInside && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 pt-1 sm:pt-2">
                        
                        {/* Colonne 1: Ville actuelle */}
                        <div className="space-y-1.5 sm:space-y-2" ref={cityRef}>
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Ville actuelle
                            </label>
                            <div className="relative">
                                <div
                                    onClick={() => {
                                        setCityOpen(!cityOpen);
                                        setDurationOpen(false);
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
                                        {selectedCity || 'Sélectionnez votre ville'}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                        cityOpen ? 'rotate-180 text-gray-700' : ''
                                    }`} />
                                </div>

                                {cityOpen && (
                                    <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                        {cityOptions.map((city) => {
                                            const isSelected = selectedCity === city;
                                            return (
                                                <div
                                                    key={city}
                                                    onClick={() => {
                                                        handleSelect('currentCity', city);
                                                        setCityOpen(false);
                                                    }}
                                                    className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                        isSelected
                                                            ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                    }`}
                                                >
                                                    <span className="pl-1">{city}</span>
                                                    {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Colonne 2: Depuis combien de temps êtes-vous en Australie ? */}
                        <div className="space-y-1.5 sm:space-y-2" ref={durationRef}>
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Depuis combien de temps êtes-vous en Australie ?
                            </label>
                            <div className="relative">
                                <div
                                    onClick={() => {
                                        setDurationOpen(!durationOpen);
                                        setCityOpen(false);
                                    }}
                                    className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                        durationOpen
                                            ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                            : 'border-[#D9E1EE] hover:border-gray-400'
                                    }`}
                                >
                                    <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                        selectedDuration ? 'text-[#10245E]' : 'text-[#64718F]'
                                    }`}>
                                        {selectedDuration || 'Sélectionnez une durée'}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                        durationOpen ? 'rotate-180 text-gray-700' : ''
                                    }`} />
                                </div>

                                {durationOpen && (
                                    <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                        {durationOptions.map((dur) => {
                                            const isSelected = selectedDuration === dur;
                                            return (
                                                <div
                                                    key={dur}
                                                    onClick={() => {
                                                        handleSelect('stayDuration', dur);
                                                        setDurationOpen(false);
                                                    }}
                                                    className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                        isSelected
                                                            ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                    }`}
                                                >
                                                    <span className="pl-1">{dur}</span>
                                                    {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                )}

                {/* ── CHAMPS POUR QUELQU'UN HORS D'AUSTRALIE : Pays actuel & Langue de préférence (Côte à côte) ── */}
                {!isInside && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 pt-1 sm:pt-2">
                        
                        {/* Colonne 1: Pays actuel */}
                        <div className="lg:col-span-5 space-y-1.5 sm:space-y-2" ref={countryRef}>
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Pays actuel
                            </label>
                            <div className="relative">
                                <div
                                    onClick={() => {
                                        setCountryOpen(!countryOpen);
                                        setSituationOpen(false);
                                        setLanguageOpen(false);
                                    }}
                                    className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                        countryOpen
                                            ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                            : 'border-[#D9E1EE] hover:border-gray-400'
                                    }`}
                                >
                                    <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                        selectedCountry ? 'text-[#10245E]' : 'text-[#64718F]'
                                    }`}>
                                        {selectedCountry || 'Sélectionnez votre pays'}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                        countryOpen ? 'rotate-180 text-gray-700' : ''
                                    }`} />
                                </div>

                                {countryOpen && (
                                    <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                        {countryOptions.map((country) => {
                                            const isSelected = selectedCountry === country;
                                            return (
                                                <div
                                                    key={country}
                                                    onClick={() => {
                                                        handleSelect('currentCountry', country);
                                                        setCountryOpen(false);
                                                    }}
                                                    className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                        isSelected
                                                            ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                    }`}
                                                >
                                                    <span className="pl-1">{country}</span>
                                                    {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Colonne 2: Langue de préférence */}
                        <div className="lg:col-span-7 space-y-1.5 sm:space-y-2" ref={languageRef}>
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Langue de préférence
                            </label>
                            <div className="relative">
                                <div
                                    onClick={() => {
                                        setLanguageOpen(!languageOpen);
                                        setSituationOpen(false);
                                        setCountryOpen(false);
                                    }}
                                    className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                        languageOpen
                                            ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                            : 'border-[#D9E1EE] hover:border-gray-400'
                                    }`}
                                >
                                    <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                        selectedLanguage ? 'text-[#10245E]' : 'text-[#64718F]'
                                    }`}>
                                        {selectedLanguage || 'Sélectionnez votre langue'}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                        languageOpen ? 'rotate-180 text-gray-700' : ''
                                    }`} />
                                </div>

                                {languageOpen && (
                                    <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                        {languageOptions.map((lang) => {
                                            const isSelected = selectedLanguage === lang;
                                            return (
                                                <div
                                                    key={lang}
                                                    onClick={() => {
                                                        handleSelect('preferredLanguage', lang);
                                                        setLanguageOpen(false);
                                                    }}
                                                    className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                        isSelected
                                                            ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                    }`}
                                                >
                                                    <span className="pl-1">{lang}</span>
                                                    {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                )}

            </div>

            {/* Information / Notice Banner */}
            <div className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-[8px] p-3.5 sm:p-4.5 flex items-center gap-3 sm:gap-3.5 shadow-2xs">
                {isInside ? (
                    <Info className="w-5 h-5 sm:w-6 sm:h-6 text-[#2F67D8] shrink-0" />
                ) : (
                    <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B] shrink-0" />
                )}
                <p className="text-[12px] sm:text-[13.5px] text-[#334155] font-medium leading-snug">
                    {isInside
                        ? 'Vos réponses nous aident à personnaliser vos recommandations locales et pertinentes.'
                        : 'Vos réponses nous permettent de déterminer les prochaines étapes de votre parcours.'}
                </p>
            </div>
        </div>
    );
}
