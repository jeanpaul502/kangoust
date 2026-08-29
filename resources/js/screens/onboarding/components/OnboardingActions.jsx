import { ArrowRight } from 'lucide-react';

export default function OnboardingActions({
    currentStep,
    totalSteps = 7,
    onBack,
    onCancel,
    onContinue,
    canContinue = true,
    continueLabel,
}) {
    return (
        <div className="bg-white rounded-[10px] border border-[#E4E9F2] p-3.5 sm:p-4.5 sm:px-6 flex items-center justify-between mt-5 sm:mt-6 w-full shadow-xs gap-3">
            {currentStep > 1 ? (
                <button
                    type="button"
                    onClick={onBack}
                    className="px-4 sm:px-7 py-2.5 rounded-[8px] border border-[#D9E1EE] hover:border-gray-400 bg-white hover:bg-gray-50 text-[13px] sm:text-[14px] font-semibold text-[#10245E] transition-all cursor-pointer"
                >
                    Précédent
                </button>
            ) : (
                <button
                    type="button"
                    onClick={onCancel}
                    className="text-[12.5px] sm:text-[14px] font-semibold text-[#64718F] hover:text-[#10245E] transition-colors cursor-pointer py-2 px-1"
                >
                    Configurer plus tard
                </button>
            )}

            <button
                type="button"
                onClick={onContinue}
                disabled={!canContinue}
                className={`px-5 sm:px-8 py-2.5 rounded-[8px] font-semibold text-[13px] sm:text-[14px] transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
                    canContinue
                        ? 'bg-[#2F67D8] hover:bg-[#2458C2] text-white shadow-[0_2px_8px_rgba(47,103,216,0.25)] hover:shadow-[0_4px_14px_rgba(47,103,216,0.35)]'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
            >
                <span>
                    {continueLabel || (currentStep === totalSteps ? 'Terminer' : 'Continuer')}
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
        </div>
    );
}
