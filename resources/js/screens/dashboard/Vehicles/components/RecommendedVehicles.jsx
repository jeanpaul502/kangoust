import { MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function RecommendedVehicles() {
    const [favorites, setFavorites] = useState([]);

    const vehicles = [
        {
            id: 1,
            type: 'Van Aménagé',
            typeBadgeColor: 'bg-[#FEF3C7] text-[#B45309]',
            image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&q=80&w=600',
            title: 'Toyota HiAce Aménagé Road Trip',
            location: 'Sydney, NSW',
            price: '7 800 $',
            period: 'ou 220 $/sem.',
            available: 'Rego NSW OK',
            matchScore: 96,
        },
        {
            id: 2,
            type: 'Break Wagon',
            typeBadgeColor: 'bg-[#EFF6FF] text-[#1D4ED8]',
            image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600',
            title: 'Ford Falcon Break avec Matelas',
            location: 'Manly, Sydney NSW',
            price: '4 900 $',
            period: 'ou 160 $/sem.',
            available: 'RWC Valide',
            matchScore: 92,
        },
    ];

    const toggleFavorite = (id, e) => {
        e.stopPropagation();
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="space-y-3.5 flex flex-col h-full">
            <div className="flex items-center justify-between">
                <h3 className="text-[15px] sm:text-[16px] font-bold text-[#10245E] flex items-center gap-2">
                    <span>Véhicules & Vans pour vous</span>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#FFF4E5] text-[#D97706]">
                        8 suggestions
                    </span>
                </h3>
                <Link 
                    href="/vehicules"
                    className="text-[12.5px] font-bold text-[#2F67D8] hover:text-[#2458C2] hover:underline"
                >
                    Voir tout
                </Link>
            </div>

            {/* Grille de 2 Cartes de Véhicules de même taille */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 flex-1">
                {vehicles.map((v) => {
                    const isFav = favorites.includes(v.id);

                    return (
                        <div
                            key={v.id}
                            className="bg-white rounded-[10px] border border-[#E4E9F2] overflow-hidden shadow-xs hover:shadow-md hover:border-[#2F67D8]/40 transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                        >
                            <div>
                                {/* Image vignette */}
                                <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={v.image}
                                        alt={v.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    
                                    {/* Badge Type */}
                                    <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10.5px] font-bold shadow-xs ${v.typeBadgeColor}`}>
                                        {v.type}
                                    </span>

                                    {/* Match Score */}
                                    <span className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded-md text-[10px] font-extrabold bg-[#10245E]/85 text-white backdrop-blur-xs flex items-center gap-1 shadow-xs">
                                        <Sparkles className="w-2.5 h-2.5 text-[#FFD46A]" />
                                        {v.matchScore}% match
                                    </span>

                                    {/* Bouton Favori */}
                                    <button
                                        type="button"
                                        onClick={(e) => toggleFavorite(v.id, e)}
                                        className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-gray-600 hover:text-red-500 shadow-xs transition-colors cursor-pointer"
                                    >
                                        <Icon 
                                            icon={isFav ? 'solar:heart-bold' : 'solar:heart-broken'} 
                                            className={`w-4 h-4 ${isFav ? 'text-red-500' : 'text-gray-600'}`} 
                                        />
                                    </button>
                                </div>

                                {/* Contenu */}
                                <div className="p-3.5 space-y-1">
                                    <h4 className="text-[13.5px] font-bold text-[#10245E] group-hover:text-[#2F67D8] transition-colors truncate">
                                        {v.title}
                                    </h4>
                                    <div className="flex items-center gap-1.5 text-[12px] text-[#64718F]">
                                        <MapPin className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
                                        <span className="truncate">{v.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Prix & Statut Rego */}
                            <div className="px-3.5 pb-3.5 pt-2 border-t border-[#F1F5F9] flex items-center justify-between">
                                <div className="text-[13.5px] font-extrabold text-[#10245E]">
                                    {v.price} <span className="text-[11px] font-normal text-[#64718F]">{v.period}</span>
                                </div>
                                <span className="px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10.5px] font-semibold flex items-center gap-1">
                                    <ShieldCheck className="w-3 h-3" />
                                    <span>{v.available}</span>
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
