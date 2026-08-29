import { Info, ChevronRight } from 'lucide-react';
import { router } from '@inertiajs/react';

export default function InstallationBanner() {
    return (
        <div 
            onClick={() => router.visit('/onboarding')}
            className="w-full bg-[#EAF3FF] border border-[#D0E2FF] rounded-[14px] p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#E2EDFC] transition-colors shadow-2xs group"
        >
            <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-full bg-white border border-[#2F67D8]/20 flex items-center justify-center text-[#2F67D8] shrink-0 shadow-2xs">
                    <Info className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                    <h4 className="text-[14px] sm:text-[14.5px] font-bold text-[#10245E]">
                        Il vous manque 2 étapes pour finaliser votre installation
                    </h4>
                    <p className="text-[12.5px] sm:text-[13px] text-[#64718F] mt-0.5 leading-snug">
                        Complétez les étapes essentielles pour profiter pleinement de votre expérience en Australie.
                    </p>
                </div>
            </div>

            <div className="shrink-0 text-[#2F67D8] group-hover:translate-x-1 transition-transform">
                <ChevronRight className="w-6 h-6" />
            </div>
        </div>
    );
}
