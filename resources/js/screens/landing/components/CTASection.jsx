import { Link } from '@inertiajs/react';

export default function CTASection() {
    const appName = import.meta.env.VITE_APP_NAME || 'Kangoust';

    const reasons = [
        {
            title: "Arrêtez de scroller inutilement",
            desc: "Trouvez rapidement les bonnes informations sans parcourir des dizaines de réseaux sociaux."
        },
        {
            title: `${appName} sait ce dont vous avez besoin`,
            desc: "Recevez les informations adaptées à chaque étape de votre installation en Australie."
        },
        {
            title: "Trouvez facilement ce que vous recherchez",
            desc: "Logement, emploi, véhicule, services et bons plans réunis au même endroit."
        },
        {
            title: "Rejoignez une vraie communauté",
            desc: "Échangez et entrez en contact avec d’autres membres installés ou en route pour l’Australie."
        },
        {
            title: "Toutes les informations utiles au même endroit",
            desc: `${appName} centralise les conseils et ressources essentiels pour faciliter votre aventure.`
        }
    ];

    return (
        <section className="pb-16 bg-white pt-8 lg:pt-12">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 2-column grid matching FeaturesSection width via translation */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 mb-12">
                    
                    {/* Left side: Banner 1 */}
                    <div 
                        className="rounded-[22px] p-7 lg:p-9 relative overflow-hidden flex flex-col justify-between min-h-[420px] border border-[#E4E9F2] -translate-x-4 lg:-translate-x-36"
                        style={{
                            background: 'linear-gradient(90deg, #F5F8FF 0%, #EEF5FF 45%, #E8F3FF 100%)'
                        }}
                    >
                        <div className="relative z-10 max-w-sm">
                            <h2 className="text-[24px] sm:text-[28px] leading-[1.2] font-bold text-[#10245E] mb-3">
                                Préparez votre départ, nous vous accompagnons.
                            </h2>
                            <p className="text-[13.5px] leading-[1.6] text-[#64718F] mb-6">
                                De votre arrivée à votre installation, {appName} est à vos côtés à chaque étape pour faire de l'Australie votre nouveau chez-vous.
                            </p>
                            <Link 
                                href="#guide" 
                                className="inline-flex items-center gap-2 bg-[#2F67D8] hover:bg-[#2458C2] text-white text-[13.5px] font-semibold h-[40px] px-5 rounded-[10px] transition-all shadow-sm"
                            >
                                <span>Découvrir les guides</span>
                                <span>→</span>
                            </Link>
                        </div>

                        {/* Illustration backdrop */}
                        <div className="absolute right-0 bottom-0 w-[55%] h-[85%] pointer-events-none opacity-35 flex items-end justify-end">
                            <svg viewBox="0 0 350 250" className="w-full h-auto text-[#10245E]" fill="currentColor">
                                <path d="M 150 250 Q 200 120 250 80 Q 300 160 350 250 Z" opacity="0.4"/>
                                <path d="M 50 250 Q 100 60 200 20 Q 250 140 300 250 Z" opacity="0.3"/>
                            </svg>
                        </div>
                    </div>

                    {/* Right side: The 5 points */}
                    <div className="flex flex-col justify-center space-y-6 lg:pl-4 translate-x-4 lg:translate-x-36">
                        {reasons.map((item, idx) => (
                            <div key={idx} className="flex gap-4 items-start">
                                {/* Icon container: Green circle, white checkmark, smaller size */}
                                <div className="w-5 h-5 shrink-0 rounded-full bg-[#10B981] flex items-center justify-center mt-0.5 shadow-sm">
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-[15px] font-bold text-[#10245E] mb-1 leading-snug">
                                        {item.title}
                                    </h4>
                                    <p className="text-[13.5px] text-[#64718F] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>

                {/* Banner 2 moved below */}
                <div>
                    <div 
                        className="rounded-[22px] p-7 lg:p-9 relative overflow-hidden flex flex-col justify-center min-h-[200px] border border-[#E4E9F2]"
                        style={{
                            background: 'linear-gradient(100deg, #F8FAFF 0%, #FFF9ED 100%)'
                        }}
                    >
                        <div className="relative z-10 max-w-xl">
                            <h2 className="text-[24px] sm:text-[28px] leading-[1.2] font-bold text-[#10245E] mb-3">
                                Votre aventure australienne commence ici !
                            </h2>
                            <p className="text-[13.5px] leading-[1.6] text-[#64718F] mb-6 max-w-md">
                                Rejoignez {appName} gratuitement et accédez à toutes les ressources pour réussir votre installation.
                            </p>
                            <Link 
                                href="/register" 
                                className="inline-flex items-center gap-2 bg-[#2F67D8] hover:bg-[#2458C2] text-white text-[13.5px] font-semibold h-[40px] px-5 rounded-[10px] transition-all shadow-sm"
                            >
                                <span>Créer mon compte gratuit</span>
                                <span>→</span>
                            </Link>
                        </div>

                        {/* Kangaroo silhouette */}
                        <div className="absolute right-6 bottom-0 w-[40%] h-[100%] pointer-events-none opacity-25 flex items-end justify-end overflow-hidden">
                            <svg viewBox="0 0 200 200" className="w-48 h-48 text-[#FF9F1C] translate-y-4" fill="currentColor">
                                <path d="M160 110c-3-10-12-28-27-42-4-3-9-5-13-6-4-1-9 0-12 3l-23 16c-3 2-7 1-9-2-2-3-1-7 2-9l21-13c12-8 12-19 12-19 0-21-17-38-38-38-17 0-31 10-36 26-1 2-1 4-2 5-6 5-12 12-18 18-9 9-16 19-20 31-2 4-3 10-3 14 0 4 1 7 3 10 2 4 4 6 8 8 4 2 7 2 10 2h4l-12 37c-3 8-3 17 0 25 4 9 10 15 18 19 7 4 15 4 23 4l27-4c9-1 17-5 22-12 5-7 8-16 7-25l-4-29c0-.1 0-.1 0-.2l20 8c6 3 13 3 20 0 6-3 12-8 15-14z"/>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
