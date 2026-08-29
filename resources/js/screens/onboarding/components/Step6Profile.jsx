import { useState, useRef, useEffect } from 'react';
import { Camera, ChevronDown, Check, User, X, AlertCircle } from 'lucide-react';

export default function Step6Profile({ formData, setFormData }) {
    const [nationalityOpen, setNationalityOpen] = useState(false);
    const [languagesOpen, setLanguagesOpen] = useState(false);
    const [avatarPreview, setAvatarPreview] = useState(null);

    const nationalityRef = useRef(null);
    const languagesRef = useRef(null);
    const fileInputRef = useRef(null);

    const nationalities = [
        'Française 🇫🇷',
        'Belge 🇧🇪',
        'Suisse 🇨🇭',
        'Canadienne 🇨🇦',
        'Italienne 🇮🇹',
        'Espagnole 🇪🇸',
        'Allemande 🇩🇪',
        'Britannique 🇬🇧',
        'Irlandaise 🇮🇪',
        'Australienne 🇦🇺',
        'Autre nationalité',
    ];

    const availableLanguages = [
        'Français',
        'Anglais',
        'Espagnol',
        'Allemand',
        'Italien',
        'Portugais',
        'Arabe',
        'Mandarin',
        'Japonais',
        'Néerlandais',
        'Autre langue',
    ];

    const selectedNationality = formData?.nationality || '';
    const selectedLanguages = formData?.languages || ['Français'];
    const bioText = formData?.bio || '';
    const ageValue = formData?.age || '';

    const handleChange = (field, value) => {
        if (setFormData) {
            setFormData((prev) => ({
                ...prev,
                [field]: value,
            }));
        }
    };

    const toggleLanguage = (lang, e) => {
        if (e) e.stopPropagation();
        if (setFormData) {
            setFormData((prev) => {
                const current = prev?.languages || [];
                const exists = current.includes(lang);
                return {
                    ...prev,
                    languages: exists
                        ? current.filter((l) => l !== lang)
                        : [...current, lang],
                };
            });
        }
    };

    const removeLanguage = (lang, e) => {
        if (e) e.stopPropagation();
        if (setFormData) {
            setFormData((prev) => ({
                ...prev,
                languages: (prev?.languages || []).filter((l) => l !== lang),
            }));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatarPreview(reader.result);
                handleChange('avatar', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Fermeture automatique au clic extérieur
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (nationalityRef.current && !nationalityRef.current.contains(event.target)) {
                setNationalityOpen(false);
            }
            if (languagesRef.current && !languagesRef.current.contains(event.target)) {
                setLanguagesOpen(false);
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
                        Complétez votre profil
                    </h1>
                    <p className="text-[12.5px] sm:text-[14px] text-[#64718F] leading-relaxed max-w-xl">
                        Quelques informations supplémentaires pour mieux vous connaître et faciliter les mises en relation.
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
            <div className="bg-white rounded-[10px] border border-[#E4E9F2] p-4 sm:p-8 lg:p-9 shadow-xs space-y-6 sm:space-y-7">
                
                {/* ── Section : Photo de profil (gauche) & Informations (droite) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                    
                    {/* Colonne 1: Photo de profil (3 cols) */}
                    <div className="lg:col-span-3 flex flex-col items-center justify-start space-y-3 pt-1">
                        <label className="block text-[12.5px] sm:text-[13px] font-bold text-[#10245E] text-center">
                            Photo de profil
                        </label>

                        {/* Rond d'avatar */}
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#EDF3FA] border border-[#D9E1EE] flex items-center justify-center overflow-hidden shadow-2xs">
                            {avatarPreview || formData?.avatar ? (
                                <img
                                    src={avatarPreview || formData?.avatar}
                                    alt="Avatar Preview"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <User className="w-12 h-12 text-[#94A3B8]" />
                            )}
                        </div>

                        {/* Input fichier caché */}
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept="image/png, image/jpeg, image/webp"
                            className="hidden"
                        />

                        {/* Bouton Ajouter une photo */}
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="h-[36px] px-3.5 rounded-[8px] border border-[#2F67D8] text-[#2F67D8] bg-white hover:bg-[#F5F8FF] text-[12.5px] font-semibold flex items-center gap-2 cursor-pointer shadow-2xs transition-all"
                        >
                            <Camera className="w-4 h-4 text-[#2F67D8]" />
                            <span>Ajouter une photo</span>
                        </button>
                    </div>

                    {/* Colonne 2: Champs de saisie (9 cols) */}
                    <div className="lg:col-span-9 space-y-4 sm:space-y-5">
                        
                        {/* Sous-rangée 1 : Âge & Nationalité */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            
                            {/* Âge */}
                            <div className="space-y-1.5 sm:space-y-2">
                                <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                    Âge
                                </label>
                                <input
                                    type="text"
                                    value={ageValue}
                                    onChange={(e) => handleChange('age', e.target.value)}
                                    placeholder="Ex. 24"
                                    className="w-full h-[46px] px-3.5 rounded-[8px] border border-[#D9E1EE] bg-white text-[12.5px] sm:text-[13px] text-[#10245E] placeholder-[#64718F] focus:border-[#94A3B8] focus:ring-2 focus:ring-gray-200 outline-none transition-all pl-4"
                                />
                            </div>

                            {/* Nationalité */}
                            <div className="space-y-1.5 sm:space-y-2" ref={nationalityRef}>
                                <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                    Nationalité
                                </label>
                                <div className="relative">
                                    <div
                                        onClick={() => {
                                            setNationalityOpen(!nationalityOpen);
                                            setLanguagesOpen(false);
                                        }}
                                        className={`w-full h-[46px] px-3.5 rounded-[8px] border bg-white flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                            nationalityOpen
                                                ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                                : 'border-[#D9E1EE] hover:border-gray-400'
                                        }`}
                                    >
                                        <span className={`text-[12.5px] sm:text-[13px] font-medium truncate pl-1 ${
                                            selectedNationality ? 'text-[#10245E]' : 'text-[#64718F]'
                                        }`}>
                                            {selectedNationality || 'Sélectionnez votre nationalité'}
                                        </span>
                                        <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                            nationalityOpen ? 'rotate-180 text-gray-700' : ''
                                        }`} />
                                    </div>

                                    {/* Dropdown Nationalité */}
                                    {nationalityOpen && (
                                        <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                            {nationalities.map((nat) => {
                                                const isSelected = selectedNationality === nat;
                                                return (
                                                    <div
                                                        key={nat}
                                                        onClick={() => {
                                                            handleChange('nationality', nat);
                                                            setNationalityOpen(false);
                                                        }}
                                                        className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                            isSelected
                                                                ? 'bg-gray-100 text-[#10245E] font-semibold'
                                                                : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                        }`}
                                                    >
                                                        <span className="pl-1">{nat}</span>
                                                        {isSelected && <Check className="w-3.5 h-3.5 text-gray-700" />}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>

                        {/* Sous-rangée 2 : Langues parlées (Sélection multiple sous forme de tags) */}
                        <div className="space-y-1.5 sm:space-y-2" ref={languagesRef}>
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Langues parlées
                            </label>
                            <div className="relative">
                                <div
                                    onClick={() => {
                                        setLanguagesOpen(!languagesOpen);
                                        setNationalityOpen(false);
                                    }}
                                    className={`w-full min-h-[46px] px-3.5 py-1.5 rounded-[8px] border bg-white flex items-center justify-between gap-2 cursor-pointer transition-all duration-150 ${
                                        languagesOpen
                                            ? 'border-[#94A3B8] ring-2 ring-gray-200'
                                            : 'border-[#D9E1EE] hover:border-gray-400'
                                    }`}
                                >
                                    {/* Tags des langues sélectionnées */}
                                    <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0">
                                        {selectedLanguages.length > 0 ? (
                                            selectedLanguages.map((lang) => (
                                                <span
                                                    key={lang}
                                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[6px] bg-[#F0F5FF] border border-[#D9E1EE] text-[#2F67D8] text-[12px] font-semibold shadow-2xs animate-in fade-in"
                                                >
                                                    <span>{lang}</span>
                                                    <span
                                                        onClick={(e) => removeLanguage(lang, e)}
                                                        className="w-3.5 h-3.5 rounded-full hover:bg-blue-200 flex items-center justify-center text-[#2F67D8] cursor-pointer transition-colors"
                                                    >
                                                        <X className="w-2.5 h-2.5 stroke-[3]" />
                                                    </span>
                                                </span>
                                            ))
                                        ) : (
                                            <span className="text-[12.5px] sm:text-[13px] font-medium text-[#64718F] pl-1">
                                                Sélectionnez vos langues
                                            </span>
                                        )}
                                    </div>

                                    <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                        languagesOpen ? 'rotate-180 text-gray-700' : ''
                                    }`} />
                                </div>

                                {/* Dropdown Multi-langues */}
                                {languagesOpen && (
                                    <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                        {availableLanguages.map((lang) => {
                                            const isSelected = selectedLanguages.includes(lang);
                                            return (
                                                <div
                                                    key={lang}
                                                    onClick={(e) => toggleLanguage(lang, e)}
                                                    className={`px-3 py-2 rounded-[6px] text-[12.5px] font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                                        isSelected
                                                            ? 'bg-[#F0F5FF] text-[#2F67D8] font-semibold'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#10245E]'
                                                    }`}
                                                >
                                                    <span className="pl-1">{lang}</span>
                                                    {isSelected && <Check className="w-3.5 h-3.5 text-[#2F67D8]" />}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sous-rangée 3 : Courte bio */}
                        <div className="space-y-1.5 sm:space-y-2">
                            <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                                Courte bio
                            </label>
                            <div className="relative">
                                <textarea
                                    rows="3"
                                    maxLength="300"
                                    value={bioText}
                                    onChange={(e) => handleChange('bio', e.target.value)}
                                    placeholder="Présentez-vous en quelques lignes..."
                                    className="w-full p-3 pb-6 rounded-[8px] border border-[#D9E1EE] bg-white text-[12.5px] sm:text-[13px] text-[#10245E] placeholder-[#64718F] focus:border-[#94A3B8] focus:ring-2 focus:ring-gray-200 outline-none transition-all resize-none leading-relaxed"
                                />
                                <span className="absolute right-3 bottom-2 text-[11px] font-medium text-[#64718F]">
                                    {bioText.length} / 300
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* Information / Notice Banner avec Icône Jaune */}
            <div className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-[8px] p-3.5 sm:p-4.5 flex items-center gap-3 sm:gap-3.5 shadow-2xs">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B] shrink-0" />
                <p className="text-[12px] sm:text-[13.5px] text-[#334155] font-medium leading-snug">
                    Ces informations nous aideront à personnaliser votre expérience et à proposer des contenus pertinents.
                </p>
            </div>
        </div>
    );
}
