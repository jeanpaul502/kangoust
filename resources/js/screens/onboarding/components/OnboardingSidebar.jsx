import { Shield, ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';

export default function OnboardingSidebar({ steps, currentStep, onStepClick }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isSuccess = currentStep > steps.length;
    const activeStepData = isSuccess
        ? { title: 'Parcours prêt !', subtitle: 'Configuration terminée' }
        : steps.find((s) => s.number === currentStep) || steps[0];

    return (
        <>
            {/* ── VERSION MOBILE (< md) : Barre de progression compacte et fluide ── */}
            <div className="block md:hidden bg-white border-b border-[#E4E9F2] p-4">
                <div
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="flex items-center justify-between cursor-pointer"
                >
                    <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[12px] shadow-xs text-white ${
                            isSuccess ? 'bg-[#10B981]' : 'bg-[#2F67D8]'
                        }`}>
                            {isSuccess ? <Check className="w-4 h-4 text-white stroke-[3]" /> : currentStep}
                        </div>
                        <div>
                            <span className={`text-[11px] font-bold uppercase tracking-wider ${
                                isSuccess ? 'text-[#10B981]' : 'text-[#2F67D8]'
                            }`}>
                                {isSuccess ? 'Terminé' : `Étape ${currentStep} sur ${steps.length}`}
                            </span>
                            <h3 className="text-[14px] font-bold text-[#10245E] leading-tight">
                                {activeStepData.title}
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#64718F]">
                        <span className="text-[12px] font-medium">Étapes</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-180 text-[#2F67D8]' : ''}`} />
                    </div>
                </div>

                {/* Progress bar mobile */}
                <div className="w-full bg-gray-100 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-500 ${
                            isSuccess ? 'bg-[#10B981]' : 'bg-[#2F67D8]'
                        }`}
                        style={{ width: `${Math.min((currentStep / steps.length) * 100, 100)}%` }}
                    />
                </div>

                {/* Menu déroulant mobile des étapes */}
                {mobileMenuOpen && (
                    <div className="mt-4 pt-3 border-t border-gray-100 space-y-2 animate-in fade-in">
                        {steps.map((s) => {
                            const isActive = s.number === currentStep;
                            const isDone = s.number < currentStep;

                            return (
                                <div
                                    key={s.number}
                                    onClick={() => {
                                        if (isDone && onStepClick) {
                                            onStepClick(s.number);
                                            setMobileMenuOpen(false);
                                        }
                                    }}
                                    className={`flex items-center gap-3 p-2 rounded-[8px] transition-colors ${
                                        isActive
                                            ? 'bg-[#EAF1FF] text-[#2F67D8]'
                                            : isDone
                                            ? 'text-[#10245E] hover:bg-gray-50 cursor-pointer'
                                            : 'text-gray-400'
                                    }`}
                                >
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                                        isActive
                                            ? 'bg-[#2F67D8] text-white'
                                            : isDone
                                            ? 'bg-[#10B981] text-white'
                                            : 'border border-gray-300 text-gray-400'
                                    }`}>
                                        {isDone ? '✓' : s.number}
                                    </div>
                                    <span className="text-[13px] font-semibold truncate">
                                        {s.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* ── VERSION DESKTOP (>= md) : Sidebar complète d'origine ── */}
            <aside className="hidden md:flex w-[360px] lg:w-[400px] bg-white border-r border-[#E4E9F2] p-6 sm:p-8 lg:p-10 flex-col justify-between shrink-0">
                <div>
                    <h2 className="text-[20px] lg:text-[22px] font-extrabold text-[#10245E] mb-2 leading-tight tracking-tight">
                        Configuration de mon parcours
                    </h2>
                    <p className="text-[13px] lg:text-[13.5px] text-[#64718F] mb-8 lg:mb-10 leading-relaxed">
                        Répondez à quelques questions pour personnaliser votre expérience et recevoir des conseils adaptés à votre situation.
                    </p>

                    {/* Stepper List */}
                    <div className="space-y-6 lg:space-y-7">
                        {steps.map((s, idx) => {
                            const isActive = s.number === currentStep;
                            const isDone = s.number < currentStep;

                            return (
                                <div
                                    key={s.number}
                                    onClick={() => isDone && onStepClick && onStepClick(s.number)}
                                    className={`flex items-start gap-3.5 group ${
                                        isDone ? 'cursor-pointer' : ''
                                    }`}
                                >
                                    {/* Left Column: Badge + Centered Line */}
                                    <div className="relative flex flex-col items-center shrink-0">
                                        {/* Number Badge */}
                                        <div
                                            className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 z-10 transition-all ${
                                                isActive
                                                    ? 'bg-[#2F67D8] text-white shadow-md shadow-[#2F67D8]/25 ring-4 ring-[#2F67D8]/15'
                                                    : isDone
                                                    ? 'bg-[#10B981] text-white shadow-xs'
                                                    : 'bg-white border-2 border-[#E4E9F2] text-[#64718F]'
                                            }`}
                                        >
                                            {isDone ? (
                                                <Check className="w-4 h-4 text-white stroke-[2.8] translate-x-[1px] translate-y-[1px]" />
                                            ) : (
                                                <span className="text-[12.5px] font-bold leading-none select-none">
                                                    {s.number}
                                                </span>
                                            )}
                                        </div>

                                        {/* Connecting vertical line */}
                                        {idx < steps.length - 1 && (
                                            <div
                                                className={`absolute top-9 left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%+24px)] lg:h-[calc(100%+28px)] transition-colors z-0 ${
                                                    isDone ? 'bg-[#10B981]' : 'bg-[#E4E9F2]'
                                                }`}
                                            />
                                        )}
                                    </div>

                                    {/* Step Labels */}
                                    <div className="pt-1 flex-1">
                                        <h4
                                            className={`text-[14.5px] font-bold leading-snug transition-colors ${
                                                isActive ? 'text-[#2F67D8]' : isDone ? 'text-[#10245E] group-hover:text-[#2F67D8]' : 'text-[#10245E]'
                                            }`}
                                        >
                                            {s.title}
                                        </h4>
                                        <p className="text-[12.5px] text-[#64718F] leading-snug mt-0.5">
                                            {s.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Security Card */}
                <div className="bg-[#F0F5FF] border border-[#D9E1EE] rounded-[12px] p-3.5 sm:p-4 flex items-center gap-3.5 mt-8">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#D9E1EE] text-[#2F67D8] flex items-center justify-center shrink-0 shadow-xs">
                        <Shield className="w-5 h-5 text-[#2F67D8]" />
                    </div>
                    <div>
                        <h5 className="text-[12.5px] font-bold text-[#10245E] leading-tight">
                            Vos données sont sécurisées
                        </h5>
                        <p className="text-[11.5px] text-[#64718F] leading-tight mt-1">
                            Vos informations sont confidentielles et ne seront jamais partagées.
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
}
