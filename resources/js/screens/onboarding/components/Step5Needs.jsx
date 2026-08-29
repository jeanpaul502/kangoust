import { Check, ChevronDown, AlertCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Step5Needs({ formData, setFormData }) {
    const [priorityOpen, setPriorityOpen] = useState(false);
    const priorityRef = useRef(null);

    const allNeeds = [
        { id: 'housing', label: 'Trouver un logement' },
        { id: 'vehicle', label: 'Trouver un véhicule' },
        { id: 'admin', label: 'Démarches administratives' },
        { id: 'community', label: 'Communauté' },
        { id: 'events', label: 'Événements' },
        { id: 'pro_prep', label: 'Préparation professionnelle' },
        { id: 'job_search', label: 'Chercher du travail plus tard' },
    ];

    const priorityOptions = [
        'Haute priorité (Indispensable avant / dès mon arrivée)',
        'Priorité moyenne (Durant mes premières semaines)',
        'Basse priorité (Au fil de mon installation)',
        'Découverte et opportunités',
    ];

    const selectedNeeds = formData?.priorityNeeds || [];
    const otherNeeds = formData?.otherNeeds || '';
    const selectedPriority = formData?.priorityLevel || '';

    const toggleNeed = (needId) => {
        if (setFormData) {
            setFormData((prev) => {
                const current = prev?.priorityNeeds || [];
                const exists = current.includes(needId);
                return {
                    ...prev,
                    priorityNeeds: exists
                        ? current.filter((id) => id !== needId)
                        : [...current, needId],
                };
            });
        }
    };

    const handleChange = (field, value) => {
        if (setFormData) {
            setFormData((prev) => ({
                ...prev,
                [field]: value,
            }));
        }
    };

    // Fermeture automatique au clic à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (priorityRef.current && !priorityRef.current.contains(event.target)) {
                setPriorityOpen(false);
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
                        Quels sont vos besoins prioritaires ?
                    </h1>
                    <p className="text-[12.5px] sm:text-[14px] text-[#64718F] leading-relaxed max-w-xl">
                        Sélectionnez les besoins qui sont importants pour vous. <br className="hidden sm:block" />
                        Vous pouvez en choisir plusieurs.
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
                
                {/* Titre Section */}
                <h3 className="text-[15px] sm:text-[16.5px] font-bold text-[#10245E]">
                    Vos besoins
                </h3>

                {/* ── Grille 3 Colonnes de Cases à Cocher (3 par rangée) ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
                    {allNeeds.map((item) => {
                        const isChecked = selectedNeeds.includes(item.id);

                        return (
                            <div
                                key={item.id}
                                onClick={() => toggleNeed(item.id)}
                                className={`h-[46px] rounded-[8px] border px-3.5 flex items-center gap-3 cursor-pointer transition-all duration-150 ${
                                    isChecked
                                        ? 'border-[#94A3B8] bg-[#F8FAFC] text-[#10245E] shadow-2xs'
                                        : 'border-[#D9E1EE] bg-white hover:border-gray-400 text-gray-700'
                                }`}
                            >
                                <div
                                    className={`w-[18px] h-[18px] rounded-[4px] border-[1.6px] flex items-center justify-center shrink-0 transition-colors ${
                                        isChecked
                                            ? 'border-[#2F67D8] bg-[#2F67D8] text-white'
                                            : 'border-[#CBD5E1] bg-white'
                                    }`}
                                >
                                    {isChecked && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                                </div>
                                <span className="text-[12.5px] sm:text-[13px] font-medium whitespace-normal sm:whitespace-nowrap truncate pl-0.5" title={item.label}>
                                    {item.label}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* ── Rangée Inférieure : Autres besoins (optionnel) & Niveau de priorité ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-3">
                    
                    {/* Colonne 1: Autres besoins (optionnel) */}
                    <div className="space-y-1.5 sm:space-y-2">
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Autres besoins <span className="text-[#64718F] font-normal">(optionnel)</span>
                        </label>
                        <input
                            type="text"
                            value={otherNeeds}
                            onChange={(e) => handleChange('otherNeeds', e.target.value)}
                            placeholder="Précisez si nécessaire"
                            className="w-full h-[46px] px-3.5 rounded-[8px] border border-[#D9E1EE] bg-white text-[12.5px] sm:text-[13px] text-[#10245E] placeholder-[#64718F] focus:border-[#94A3B8] focus:ring-2 focus:ring-gray-200 outline-none transition-all pl-4"
                        />
                    </div>

                    {/* Colonne 2: Niveau de priorité */}
                    <div className="space-y-1.5 sm:space-y-2" ref={priorityRef}>
                        <label className="block text-[12px] sm:text-[13px] font-bold text-[#10245E]">
                            Niveau de priorité
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
                                    selectedPriority ? 'text-[#10245E]' : 'text-[#64718F]'
                                }`}>
                                    {selectedPriority || 'Sélectionnez votre priorité principale'}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-[#64718F] transition-transform duration-200 shrink-0 ${
                                    priorityOpen ? 'rotate-180 text-gray-700' : ''
                                }`} />
                            </div>

                            {/* Dropdown Options */}
                            {priorityOpen && (
                                <div className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white rounded-[8px] border border-[#E4E9F2] shadow-[0_12px_32px_rgba(16,36,94,0.12)] p-1.5 z-50 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95">
                                    {priorityOptions.map((opt) => {
                                        const isSelected = selectedPriority === opt;
                                        return (
                                            <div
                                                key={opt}
                                                onClick={() => {
                                                    handleChange('priorityLevel', opt);
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

            {/* Information / Notice Banner */}
            <div className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-[8px] p-3.5 sm:p-4.5 flex items-center gap-3 sm:gap-3.5 shadow-2xs">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B] shrink-0" />
                <p className="text-[12px] sm:text-[13.5px] text-[#334155] font-medium leading-snug">
                    Vos choix nous aideront à personnaliser vos recommandations tout au long de votre parcours.
                </p>
            </div>
        </div>
    );
}
