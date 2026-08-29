import { Calendar, Clock, ChevronDown, ChevronLeft, ChevronRight, Check, AlertCircle, Info } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Step3Arrival({ locationType, formData, setFormData }) {
    const isInside = locationType === 'inside';

    // ─────────────────────────────────────────────────────────────
    // ÉTATS POUR LE MODE HORS D'AUSTRALIE (Outside)
    // ─────────────────────────────────────────────────────────────
    const [datePickerOpen, setDatePickerOpen] = useState(false);
    const [cityOpen, setCityOpen] = useState(false);
    const [airportOpen, setAirportOpen] = useState(false);
    const [viewDate, setViewDate] = useState(new Date());

    const dateRef = useRef(null);
    const cityRef = useRef(null);
    const airportRef = useRef(null);

    const australianCities = [
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
        'Autre ville',
    ];

    const australianAirports = [
        'Sydney Kingsford Smith (SYD)',
        'Melbourne Tullamarine (MEL)',
        'Brisbane Airport (BNE)',
        'Perth Airport (PER)',
        'Adelaide Airport (ADL)',
        'Gold Coast Airport (OOL)',
        'Cairns Airport (CNS)',
        'Darwin Airport (DRW)',
        'Canberra Airport (CBR)',
        'Hobart Airport (HBA)',
        'Autre aéroport',
    ];

    const monthNames = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];

    const selectedArrivalDate = formData?.arrivalDate || '';
    const selectedArrivalTime = formData?.arrivalTime || '';
    const selectedArrivalCity = formData?.arrivalCity || '';
    const selectedAirport = formData?.arrivalAirport || '';
    const hasBooked = formData?.hasBookedArrival || 'no';

    // ─────────────────────────────────────────────────────────────
    // ÉTATS POUR LE MODE DÉJÀ EN AUSTRALIE (Inside - Étape 3: Vos besoins)
    // ─────────────────────────────────────────────────────────────
    const [priorityOpen, setPriorityOpen] = useState(false);
    const priorityRef = useRef(null);

    const insideNeedsList = [
        { id: 'housing', label: 'Trouver un logement' },
        { id: 'vehicle', label: 'Trouver un véhicule' },
        { id: 'work', label: 'Recherche de travail' },
        { id: 'community', label: 'Communauté' },
        { id: 'events', label: 'Événements' },
    ];

    const priorityOptions = [
        'Trouver un logement',
        'Trouver un véhicule',
        'Recherche de travail',
        'Communauté',
        'Événements',
        'Autre priorité',
    ];

    const selectedNeeds = formData?.insideCurrentNeeds || [];
    const otherNeeds = formData?.otherNeeds || '';
    const mainPriority = formData?.mainPriority || '';

    const handleChange = (field, value) => {
        if (setFormData) {
            setFormData((prev) => ({
                ...prev,
                [field]: value,
            }));
        }
    };

    const toggleNeed = (id) => {
        if (!setFormData) return;
        setFormData((prev) => {
            const current = prev?.insideCurrentNeeds || [];
            const exists = current.includes(id);
            const next = exists ? current.filter((x) => x !== id) : [...current, id];
            return {
                ...prev,
                insideCurrentNeeds: next,
            };
        });
    };

    // Fermeture automatique au clic à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dateRef.current && !dateRef.current.contains(event.target)) {
                setDatePickerOpen(false);
            }
            if (cityRef.current && !cityRef.current.contains(event.target)) {
                setCityOpen(false);
            }
            if (airportRef.current && !airportRef.current.contains(event.target)) {
                setAirportOpen(false);
            }
            if (priorityRef.current && !priorityRef.current.contains(event.target)) {
                setPriorityOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Calendrier helpers (Outside mode)
    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => {
        const day = new Date(year, month, 1).getDay();
        return day === 0 ? 6 : day - 1;
    };

    const currentYear = viewDate.getFullYear();
    const currentMonth = viewDate.getMonth();
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);

    const prevMonth = () => {
        setViewDate(new Date(currentYear, currentMonth - 1, 1));
    };

    const nextMonth = () => {
        setViewDate(new Date(currentYear, currentMonth + 1, 1));
    };

    const selectDate = (day) => {
        const d = String(day).padStart(2, '0');
        const m = String(currentMonth + 1).padStart(2, '0');
        const y = currentYear;
        handleChange('arrivalDate', `${d}/${m}/${y}`);
        setDatePickerOpen(false);
    };

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
                            Quels sont vos besoins actuels ?
                        </h1>
                        <p className="text-[12.5px] sm:text-[14px] text-[#64718F] leading-relaxed max-w-xl">
                            Sélectionnez ce qui est important pour vous aujourd’hui.
                            <br className="hidden sm:inline" />
                            Vous pouvez choisir plusieurs options.
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

                {/* Carte Principale du Formulaire (Vos besoins actuels) */}
                <div className="bg-white rounded-[10px] border border-[#E4E9F2] p-4 sm:p-8 lg:p-9 shadow-xs space-y-5 sm:space-y-6">
                    <h3 className="text-[15px] sm:text-[16.5px] font-bold text-[#10245E]">
                        Vos besoins actuels
                    </h3>

                    {/* Grille 2 colonnes des besoins (8 options) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-3.5">
                        {insideNeedsList.map((need) => {
                            const isChecked = selectedNeeds.includes(need.id);

                            return (
                                <div
                                    key={need.id}
                                    onClick={() => toggleNeed(need.id)}
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
                                    <span className={`text-[12.5px] sm:text-[13px] font-medium truncate ${
                                        isChecked ? 'text-[#10245E] font-semibold' : 'text-gray-700'
                                    }`}>
                                        {need.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Rangée inférieure : Autres besoins (optionnel) & Priorité principale */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 pt-2">
                        
                        {/* Colonne 1: Autres besoins (optionnel) */}
                        <div className="space-y-1.5 sm:space-y-2">
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Autres besoins <span className="text-[#64718F] font-normal">(optionnel)</span>
                            </label>
                            <input
                                type="text"
                                value={otherNeeds}
                                onChange={(e) => handleChange('otherNeeds', e.target.value)}
                                placeholder="Décrivez vos autres besoins"
                                className="w-full h-[46px] px-3.5 rounded-[8px] border border-[#D9E1EE] bg-white text-[12.5px] sm:text-[13px] text-[#10245E] placeholder-[#64718F] focus:border-[#94A3B8] focus:ring-2 focus:ring-gray-200 outline-none transition-all pl-4"
                            />
                        </div>

                        {/* Colonne 2: Priorité principale */}
                        <div className="space-y-1.5 sm:space-y-2" ref={priorityRef}>
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Priorité principale
                            </label>
                            <div className="relative">
                                <div
                                    onClick={() => setPriorityOpen(!priorityOpen)}
                                    className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                        priorityOpen
                                            ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                            : 'border-[#D9E1EE] hover:border-gray-400'
                                    }`}
                                >
                                    <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                        mainPriority ? 'text-[#10245E]' : 'text-[#64718F]'
                                    }`}>
                                        {mainPriority || 'Sélectionnez votre priorité principale'}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                        priorityOpen ? 'rotate-180 text-gray-700' : ''
                                    }`} />
                                </div>

                                {priorityOpen && (
                                    <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                        {priorityOptions.map((opt) => {
                                            const isSelected = mainPriority === opt;
                                            return (
                                                <div
                                                    key={opt}
                                                    onClick={() => {
                                                        handleChange('mainPriority', opt);
                                                        setPriorityOpen(false);
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
                        Vos choix nous aideront à personnaliser votre espace et vos suggestions.
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
                        Parlez-nous de votre arrivée
                    </h1>
                    <p className="text-[12.5px] sm:text-[14px] text-[#64718F] leading-relaxed max-w-xl">
                        Ces informations nous aideront à mieux préparer votre parcours et à vous proposer des conseils pertinents.
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
                
                {/* ── Rangée 1 : Date d'arrivée prévue & Heure d'arrivée (optionnel) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    
                    {/* Colonne 1: Date d'arrivée prévue */}
                    <div className="space-y-1.5 sm:space-y-2" ref={dateRef}>
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Date d'arrivée prévue
                        </label>
                        <div className="relative">
                            <div
                                onClick={() => {
                                    setDatePickerOpen(!datePickerOpen);
                                    setCityOpen(false);
                                    setAirportOpen(false);
                                }}
                                className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                    datePickerOpen
                                        ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                        : 'border-[#D9E1EE] hover:border-gray-400'
                                }`}
                            >
                                <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                    selectedArrivalDate ? 'text-[#10245E]' : 'text-[#64718F]'
                                }`}>
                                    {selectedArrivalDate || 'JJ / MM / AAAA'}
                                </span>
                                <Calendar className="w-4 h-4 text-[#64718F] shrink-0" />
                            </div>

                            {/* Calendrier Flottant */}
                            {datePickerOpen && (
                                <div className="absolute left-0 top-[calc(100%+6px)] w-[290px] sm:w-[320px] max-w-[calc(100vw-48px)] bg-white rounded-[10px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.14)] p-3.5 sm:p-4 z-50 animate-in fade-in zoom-in-95">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="text-[14px] font-bold text-[#10245E]">
                                            {monthNames[currentMonth]} {currentYear}
                                        </h4>
                                        <div className="flex items-center gap-1">
                                            <button
                                                type="button"
                                                onClick={prevMonth}
                                                className="w-7 h-7 rounded-md hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
                                            >
                                                <ChevronLeft className="w-4 h-4" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={nextMonth}
                                                className="w-7 h-7 rounded-md hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
                                            >
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
                                        {['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'].map((d) => (
                                            <span key={d} className="text-[11px] font-semibold text-gray-400">
                                                {d}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-7 gap-1 text-center">
                                        {Array.from({ length: firstDayIndex }).map((_, i) => (
                                            <div key={`empty-${i}`} className="h-7.5" />
                                        ))}
                                        {Array.from({ length: daysInMonth }).map((_, i) => {
                                            const day = i + 1;
                                            const dateStr = `${String(day).padStart(2, '0')}/${String(currentMonth + 1).padStart(2, '0')}/${currentYear}`;
                                            const isSelected = selectedArrivalDate === dateStr;

                                            return (
                                                <button
                                                    key={day}
                                                    type="button"
                                                    onClick={() => selectDate(day)}
                                                    className={`h-7.5 rounded-[6px] text-[12px] font-semibold transition-all flex items-center justify-center cursor-pointer ${
                                                        isSelected
                                                            ? 'bg-[#2F67D8] text-white shadow-xs'
                                                            : 'hover:bg-[#EAF1FF] hover:text-[#2F67D8] text-gray-700'
                                                    }`}
                                                >
                                                    {day}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-2.5 pt-2.5 border-t border-gray-100 flex justify-between items-center text-[11.5px]">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const today = new Date();
                                                setViewDate(today);
                                                selectDate(today.getDate());
                                            }}
                                            className="text-[#2F67D8] font-bold hover:underline cursor-pointer"
                                        >
                                            Aujourd'hui
                                        </button>
                                        {selectedArrivalDate && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    handleChange('arrivalDate', '');
                                                    setDatePickerOpen(false);
                                                }}
                                                className="text-gray-400 hover:text-gray-600 cursor-pointer"
                                            >
                                                Effacer
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Colonne 2: Heure d'arrivée (optionnel) */}
                    <div className="space-y-1.5 sm:space-y-2">
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Heure d'arrivée <span className="text-[#64718F] font-normal">(optionnel)</span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={selectedArrivalTime}
                                onChange={(e) => handleChange('arrivalTime', e.target.value)}
                                placeholder="HH:MM"
                                className="w-full h-[46px] px-3.5 rounded-[8px] border border-[#D9E1EE] bg-white text-[12.5px] sm:text-[13px] text-[#10245E] placeholder-[#64718F] focus:border-[#94A3B8] focus:ring-2 focus:ring-gray-200 outline-none transition-all pl-4"
                            />
                            <Clock className="w-4 h-4 text-[#64718F] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                    </div>

                </div>

                {/* ── Rangée 2 : Ville d'arrivée & Aéroport d'arrivée (optionnel) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 pt-1 sm:pt-2">
                    
                    {/* Colonne 1: Ville d'arrivée */}
                    <div className="space-y-1.5 sm:space-y-2" ref={cityRef}>
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Ville d'arrivée
                        </label>
                        <div className="relative">
                            <div
                                onClick={() => {
                                    setCityOpen(!cityOpen);
                                    setDatePickerOpen(false);
                                    setAirportOpen(false);
                                }}
                                className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                    cityOpen
                                        ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                        : 'border-[#D9E1EE] hover:border-gray-400'
                                }`}
                            >
                                <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                    selectedArrivalCity ? 'text-[#10245E]' : 'text-[#64718F]'
                                }`}>
                                    {selectedArrivalCity || 'Sélectionnez votre ville'}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                    cityOpen ? 'rotate-180 text-gray-700' : ''
                                }`} />
                            </div>

                            {/* Dropdown Villes */}
                            {cityOpen && (
                                <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                    {australianCities.map((city) => {
                                        const isSelected = selectedArrivalCity === city;
                                        return (
                                            <div
                                                key={city}
                                                onClick={() => {
                                                    handleChange('arrivalCity', city);
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

                    {/* Colonne 2: Aéroport d'arrivée (optionnel) */}
                    <div className="space-y-1.5 sm:space-y-2" ref={airportRef}>
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Aéroport d'arrivée <span className="text-[#64718F] font-normal">(optionnel)</span>
                        </label>
                        <div className="relative">
                            <div
                                onClick={() => {
                                    setAirportOpen(!airportOpen);
                                    setDatePickerOpen(false);
                                    setCityOpen(false);
                                }}
                                className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                    airportOpen
                                        ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                        : 'border-[#D9E1EE] hover:border-gray-400'
                                }`}
                            >
                                <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                    selectedAirport ? 'text-[#10245E]' : 'text-[#64718F]'
                                }`}>
                                    {selectedAirport || 'Sélectionnez ou saisissez l’aéroport'}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                    airportOpen ? 'rotate-180 text-gray-700' : ''
                                }`} />
                            </div>

                            {/* Dropdown Aéroports */}
                            {airportOpen && (
                                <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                    {australianAirports.map((airport) => {
                                        const isSelected = selectedAirport === airport;
                                        return (
                                            <div
                                                key={airport}
                                                onClick={() => {
                                                    handleChange('arrivalAirport', airport);
                                                    setAirportOpen(false);
                                                }}
                                                className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                    isSelected
                                                        ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                }`}
                                            >
                                                <span className="pl-1">{airport}</span>
                                                {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                {/* ── Rangée 3 : Avez-vous déjà réservé votre arrivée ? ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 pt-1 sm:pt-2">
                    
                    {/* Colonne 1: Avez-vous déjà réservé votre arrivée ? */}
                    <div className="space-y-1.5 sm:space-y-2">
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Avez-vous déjà réservé votre arrivée ?
                        </label>
                        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                            {/* Option 1: Oui */}
                            <div
                                onClick={() => handleChange('hasBookedArrival', 'yes')}
                                className={`flex-1 min-h-[46px] rounded-[8px] border px-3.5 flex items-center gap-2.5 cursor-pointer transition-all duration-150 py-2.5 sm:py-0 ${
                                    hasBooked === 'yes'
                                        ? 'border-[#94A3B8] bg-[#F8FAFC] text-[#10245E] shadow-2xs'
                                        : 'border-[#D9E1EE] bg-white hover:border-gray-400 text-gray-700'
                                }`}
                            >
                                <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 18 18" fill="none">
                                    <circle
                                        cx="9"
                                        cy="9"
                                        r="7.75"
                                        stroke={hasBooked === 'yes' ? '#2F67D8' : '#CBD5E1'}
                                        strokeWidth="1.7"
                                        fill="#FFFFFF"
                                    />
                                    {hasBooked === 'yes' && (
                                        <circle cx="9" cy="9" r="3.2" fill="#2F67D8" />
                                    )}
                                </svg>
                                <span className="text-[12px] sm:text-[13px] font-medium whitespace-normal sm:whitespace-nowrap pl-0.5">
                                    Oui
                                </span>
                            </div>

                            {/* Option 2: Pas encore */}
                            <div
                                onClick={() => handleChange('hasBookedArrival', 'no')}
                                className={`flex-1 min-h-[46px] rounded-[8px] border px-3.5 flex items-center gap-2.5 cursor-pointer transition-all duration-150 py-2.5 sm:py-0 ${
                                    hasBooked === 'no'
                                        ? 'border-[#94A3B8] bg-[#F8FAFC] text-[#10245E] shadow-2xs'
                                        : 'border-[#D9E1EE] bg-white hover:border-gray-400 text-gray-700'
                                }`}
                            >
                                <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 18 18" fill="none">
                                    <circle
                                        cx="9"
                                        cy="9"
                                        r="7.75"
                                        stroke={hasBooked === 'no' ? '#2F67D8' : '#CBD5E1'}
                                        strokeWidth="1.7"
                                        fill="#FFFFFF"
                                    />
                                    {hasBooked === 'no' && (
                                        <circle cx="9" cy="9" r="3.2" fill="#2F67D8" />
                                    )}
                                </svg>
                                <span className="text-[12px] sm:text-[13px] font-medium whitespace-normal sm:whitespace-nowrap pl-0.5">
                                    Pas encore
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
                    Ces informations nous aident à préparer les premières étapes pratiques qui vous attendent.
                </p>
            </div>
        </div>
    );
}
