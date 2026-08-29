import { Link } from '@inertiajs/react';

export default function HeroSection() {
    const appName = import.meta.env.VITE_APP_NAME || 'Kangoust';

    return (
        <section className="relative pt-20 pb-8 lg:pt-28 lg:pb-14 overflow-hidden">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    
                    {/* Left Column (Hero Content) */}
                    <div className="lg:col-span-5 text-left relative z-20 -translate-x-12 lg:-translate-x-24 translate-y-6 lg:translate-y-9">
                        
                        {/* Pill badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1FF] border border-[#EAF1FF] text-[#2F67D8] text-[12px] font-semibold mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2F67D8] animate-pulse"></span>
                            Votre compagnon en Australie
                        </div>
                        
                        {/* Main Title */}
                        <h1 className="text-[32px] sm:text-[38px] lg:text-[45px] leading-[1.12] font-[750] tracking-[-0.02em] text-[#10245E] mb-4">
                            Votre compagnon<br className="hidden sm:inline" /> pour vivre, travailler et<br className="hidden sm:inline" /> vous installer en Australie.
                        </h1>
                        
                        {/* Subtitle */}
                        <p className="text-[14.5px] lg:text-[15.5px] leading-[1.55] font-[400] text-[#64718F] mb-6 max-w-md">
                            {appName} réunit les outils, les annonces et une communauté de confiance pour réussir chaque étape de votre aventure.
                        </p>
                        
                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-7">
                            <Link 
                                href="/register" 
                                className="inline-flex justify-center items-center gap-2 bg-[#2F67D8] hover:bg-[#2458C2] text-white text-[14px] font-semibold h-[42px] px-5 rounded-[10px] shadow-[0_3px_10px_rgba(47,103,216,0.25)] transition-all"
                            >
                                <span>Commencer maintenant</span>
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                            <Link 
                                href="#decouvrir" 
                                className="inline-flex justify-center items-center bg-white hover:bg-[#F5F8FF] text-[#10245E] text-[14px] font-semibold h-[42px] px-5 border border-[#D9E1EE] hover:border-[#2F67D8] rounded-[10px] transition-all shadow-sm"
                            >
                                Découvrir l'application
                            </Link>
                        </div>
                        
                        {/* Social Proof */}
                        <div className="flex items-center gap-3 pt-5">
                            <div className="flex -space-x-2.5">
                                {[
                                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=60&h=60',
                                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60&h=60',
                                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=60&h=60',
                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=60&h=60'
                                ].map((url, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shrink-0 shadow-sm">
                                        <img src={url} alt="avatar" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-[12px] font-semibold text-[#10245E] leading-tight">
                                    +12 000 membres nous font déjà confiance
                                </p>
                                <div className="flex items-center gap-1 mt-0.5">
                                    <div className="flex text-[#FF9F1C] text-[15px]">
                                        ★★★★★
                                    </div>
                                    <span className="text-[13px] font-bold text-[#10245E] ml-0.5 mt-0.5">4,8/5</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    {/* Right Column (Hero Image) */}
                    <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center z-10">
                        <div className="w-full max-w-[950px] lg:max-w-none lg:w-[150%] xl:w-[158%] transform lg:scale-[1.55] xl:scale-[1.62] lg:translate-x-56 xl:translate-x-72 lg:translate-y-8 xl:translate-y-12 origin-center lg:origin-right pointer-events-none select-none">
                            <img 
                                src="/images/hero.png" 
                                alt={`${appName} — Application mobile et plateforme pour l'Australie`} 
                                className="w-full h-auto object-contain block drop-shadow-sm"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
