import { Icon } from '@iconify/react';
import { Link } from '@inertiajs/react';

export default function RecommendedJobs() {
    const jobs = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600',
            title: 'Laboureur chantier',
            location: 'Perth, WA',
            contractType: 'Temps plein',
            badgeColor: 'bg-[#EFF6FF] text-[#1D4ED8]',
            wage: '34 $',
            period: '/ h',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600',
            title: 'Serveur / Hospitality',
            location: 'Brisbane, QLD',
            contractType: 'Temps partiel',
            badgeColor: 'bg-[#FFF7ED] text-[#C2410C]',
            wage: '30 $',
            period: '/ h',
        },
    ];

    return (
        <div className="space-y-3.5 flex flex-col h-full justify-between">
            {/* Header avec Lien Voir tout */}
            <div className="flex items-center justify-end">
                <Link href="/travail" className="text-[12.5px] font-bold text-[#2F67D8] hover:underline">
                    Voir tout
                </Link>
            </div>

            {/* 2 Cartes superposées compactes avec image adaptée et SANS séparateur */}
            <div className="flex flex-col gap-3.5 sm:gap-4 flex-1 justify-between">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="bg-white rounded-[14px] border border-[#E4E9F2] overflow-hidden shadow-xs hover:shadow-md hover:border-[#2F67D8]/40 transition-all duration-200 cursor-pointer group flex items-stretch flex-1"
                    >
                        {/* Image bord-à-bord */}
                        <div className="w-24 sm:w-28 shrink-0 bg-gray-100 overflow-hidden">
                            <img
                                src={job.image}
                                alt={job.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Zone de contenu droite */}
                        <div className="flex-1 p-3 sm:p-3.5 flex flex-col justify-between min-w-0">
                            {/* Haut : Titre & Localisation */}
                            <div className="space-y-0.5">
                                <h4 className="text-[14px] font-bold text-[#10245E] group-hover:text-[#2F67D8] transition-colors truncate">
                                    {job.title}
                                </h4>
                                <div className="flex items-center gap-1.5 text-[12px] text-[#64718F]">
                                    <Icon icon="griddy-icons:location-pin" className="w-4 h-4 text-[#94A3B8] shrink-0" />
                                    <span className="truncate">{job.location}</span>
                                </div>
                            </div>

                            {/* Bas : Prix à gauche et Badge à droite SANS séparateur */}
                            <div className="flex items-center justify-between pt-1 mt-1">
                                <div className="text-[13px] font-extrabold text-[#10245E]">
                                    {job.wage} <span className="text-[11px] font-normal text-[#64718F]">{job.period}</span>
                                </div>

                                <span className={`px-2 py-0.5 rounded-[6px] text-[10.5px] font-bold flex items-center gap-1 ${job.badgeColor}`}>
                                    <Icon icon="griddy-icons:briefcase" className="w-4.5 h-4.5" />
                                    <span>{job.contractType}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
