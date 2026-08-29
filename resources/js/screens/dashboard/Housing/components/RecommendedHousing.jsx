import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function RecommendedHousing() {
    const [favorites, setFavorites] = useState([]);

    const housings = [
        {
            id: 1,
            type: 'Chambre',
            textColor: 'text-[#D8B4FE]',
            image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=600',
            title: 'Chambre à Sydney',
            location: 'Surry Hills, NSW 2010',
            price: '290 $',
            period: '/ semaine',
            available: 'Disponible dès 20 nov.',
        },
        {
            id: 2,
            type: 'Colocation',
            textColor: 'text-[#FDE047]',
            image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600',
            title: 'Colocation à Melbourne',
            location: 'Fitzroy, VIC 3065',
            price: '350 $',
            period: '/ semaine',
            available: 'Disponible dès 15 nov.',
        },
    ];

    const toggleFavorite = (id, e) => {
        e.stopPropagation();
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="space-y-3.5">
            <h3 className="text-[16px] font-bold text-[#10245E]">
                Des opportunités pour vous
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {housings.map((h) => {
                    const isFav = favorites.includes(h.id);

                    return (
                        <div
                            key={h.id}
                            className="bg-white rounded-[14px] border border-[#E4E9F2] overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 group cursor-pointer"
                        >
                            {/* Image avec Badges type fond noir translucide */}
                            <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-gray-100">
                                <img
                                    src={h.image}
                                    alt={h.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                
                                {/* Badge Type fond noir translucide avec angles légèrement arrondis */}
                                <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-[4px] bg-black/65 backdrop-blur-xs text-[10.5px] font-bold shadow-xs ${h.textColor}`}>
                                    {h.type}
                                </span>

                                {/* Bouton Favori avec Griddy Heart */}
                                <button
                                    type="button"
                                    onClick={(e) => toggleFavorite(h.id, e)}
                                    className="absolute top-2.5 right-2.5 w-7.5 h-7.5 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-gray-600 hover:text-red-500 shadow-xs transition-colors cursor-pointer"
                                >
                                    <Icon
                                        icon={isFav ? 'solar:heart-bold' : 'solar:heart-broken'}
                                        className={`w-4.5 h-4.5 ${isFav ? 'text-red-500' : 'text-gray-600'}`}
                                    />
                                </button>
                            </div>

                            {/* Contenu */}
                            <div className="p-3.5 space-y-2">
                                <div>
                                    <h4 className="text-[14px] font-bold text-[#10245E] group-hover:text-[#2F67D8] transition-colors truncate">
                                        {h.title}
                                    </h4>
                                    <div className="flex items-center gap-1.5 text-[12px] text-[#64718F] mt-0.5">
                                        <Icon icon="griddy-icons:location-pin" className="w-4 h-4 text-[#94A3B8] shrink-0" />
                                        <span className="truncate">{h.location}</span>
                                    </div>
                                </div>

                                {/* Prix & Disponibilité */}
                                <div className="flex items-center justify-between pt-1.5 border-t border-[#F1F5F9]">
                                    <div className="text-[13.5px] font-extrabold text-[#10245E]">
                                        {h.price} <span className="text-[11.5px] font-normal text-[#64718F]">{h.period}</span>
                                    </div>
                                    <span className="px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] text-[10.5px] font-semibold">
                                        {h.available}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
