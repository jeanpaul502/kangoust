import { Link } from '@inertiajs/react';

export default function FeaturesSection() {
    const appName = import.meta.env.VITE_APP_NAME || 'Kangoust';

    const features = [
        {
            title: "Trouvez votre logement",
            desc: "Accédez à des milliers de chambres, coloc's et logements vérifiés par la communauté.",
            img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=260&h=260",
            link: "#"
        },
        {
            title: "Trouvez un emploi",
            desc: "Découvrez des offres d'emploi et les secteurs qui recrutent les jeunes arrivants.",
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=260&h=260",
            link: "#"
        },
        {
            title: "Guides pratiques",
            desc: "Accédez à des guides complets pour faciliter votre installation.",
            img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=260&h=260",
            link: "#"
        },
        {
            title: "Rejoignez la communauté",
            desc: "Échangez, partagez vos expériences et trouvez du soutien dont vous avez besoin.",
            img: "https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?auto=format&fit=crop&q=80&w=260&h=260",
            link: "#"
        }
    ];

    return (
        <section id="decouvrir" className="py-8 lg:py-10 bg-white">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 4 Cards Compact Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14 -mx-4 lg:-mx-36">
                    {features.map((f, i) => (
                        <div 
                            key={i} 
                            className="bg-white rounded-[14px] p-4 border border-[#E4E9F2] kangoust-card-shadow flex gap-4 items-start hover:border-[#2F67D8]/40 transition-all duration-200 group cursor-pointer"
                        >
                            {/* Left thumbnail image inside the card */}
                            <div className="w-[84px] h-[106px] rounded-[9px] overflow-hidden shrink-0 bg-slate-100 shadow-inner">
                                <img 
                                    src={f.img} 
                                    alt={f.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                />
                            </div>

                            {/* Right content */}
                            <div className="flex flex-col justify-between min-h-[106px] flex-1 min-w-0">
                                <div>
                                    <h3 className="text-[13.5px] font-bold text-[#10245E] mb-0.5 leading-snug truncate">
                                        {f.title}
                                    </h3>
                                    <p className="text-[11.5px] leading-[1.4] text-[#64718F] line-clamp-3">
                                        {f.desc}
                                    </p>
                                </div>
                                <div className="pt-1.5">
                                    <Link 
                                        href={f.link} 
                                        className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#2F67D8] hover:text-[#2458C2] transition-colors"
                                    >
                                        <span>En savoir plus</span>
                                        <span className="text-xs">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section Pourquoi Choisir */}
                <div className="mt-12 lg:mt-16 text-center">
                    <div className="inline-flex flex-col items-center">
                        <h2 className="text-[26px] lg:text-[32px] font-[750] text-[#10245E] tracking-tight mb-2">
                            Pourquoi utiliser {appName} ?
                        </h2>
                        {/* Trait de séparation fin avec bouts en aiguille (dégradé transparent) */}
                        <div className="w-[95%] h-[2px] bg-gradient-to-r from-transparent via-[#B0B8C7] to-transparent"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}
