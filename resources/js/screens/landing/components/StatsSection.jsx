export default function StatsSection() {
    const stats = [
        { 
            icon: (
                <svg className="w-4 h-4 text-[#2F67D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ), 
            value: "12 000+", 
            label: "Utilisateurs accompagnés" 
        },
        { 
            icon: (
                <svg className="w-4 h-4 text-[#2F67D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ), 
            value: "4 500+", 
            label: "Offres d'emploi" 
        },
        { 
            icon: (
                <svg className="w-4 h-4 text-[#2F67D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ), 
            value: "8 200+", 
            label: "Annonces publiées" 
        },
        { 
            icon: (
                <svg className="w-4 h-4 text-[#2F67D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ), 
            value: "1 200+", 
            label: "Événements organisés" 
        },
        { 
            icon: (
                <svg className="w-4 h-4 text-[#2F67D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ), 
            value: "350+", 
            label: "Communautés actives" 
        },
    ];

    return (
        <section className="bg-white relative z-20 mt-6 lg:mt-10">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-t border-[#E4E9F2] pt-8 pb-5 lg:pt-10 lg:pb-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center">
                        {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center text-center">
                            <div className="text-[20px] lg:text-[24px] font-bold text-[#10245E] leading-none mb-1">
                                {stat.value}
                            </div>
                            <div className="text-[12px] font-[450] text-[#64718F] leading-tight">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
