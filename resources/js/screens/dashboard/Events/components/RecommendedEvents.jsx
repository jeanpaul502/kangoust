import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function RecommendedEvents() {
    const [interestedVehicle, setInterestedVehicle] = useState(false);
    const [contactedVehicle, setContactedVehicle] = useState(false);
    const [joinedEvent, setJoinedEvent] = useState(false);
    const [interestedEvent, setInterestedEvent] = useState(false);

    return (
        <div className="space-y-3.5">
            <h3 className="text-[16px] font-bold text-[#10245E]">
                Opportunités autour de vous
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* ── CARTE 1 : ÉVÉNEMENT / SORTIE ROAD TRIP ── */}
                <div className="bg-white rounded-[14px] border border-[#E4E9F2] overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group flex items-stretch">
                    {/* Image */}
                    <div className="w-32 sm:w-40 shrink-0 bg-gray-100 overflow-hidden relative">
                        <img
                            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
                            alt="Road trip Perth"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-[4px] bg-black/65 backdrop-blur-xs text-white text-[10.5px] font-bold shadow-xs">
                            Road Trip
                        </span>
                    </div>

                    {/* Contenu compact verrouillé en hauteur */}
                    <div className="flex-1 p-3 sm:p-3.5 flex flex-col justify-between min-w-0">
                        <div className="space-y-1">
                            {/* Haut : Sortie à gauche */}
                            <div className="flex items-center justify-between">
                                <span className="px-2 py-0.5 rounded-[4px] text-[10.5px] font-bold bg-[#FFF7ED] text-[#C2410C]">
                                    Sortie
                                </span>
                            </div>

                            {/* Titre & Localisation */}
                            <div>
                                <h4 className="text-[14.5px] font-bold text-[#10245E] group-hover:text-[#2F67D8] transition-colors truncate">
                                    Road trip Côte Ouest & Perth
                                </h4>
                                <div className="flex items-center gap-1.5 text-[12px] text-[#64718F] mt-1">
                                    <Icon icon="griddy-icons:location-pin" className="w-4.5 h-4.5 text-[#94A3B8] shrink-0" />
                                    <span className="truncate">Départ Perth, WA</span>
                                </div>
                            </div>

                            {/* 3 éléments bien répartis */}
                            <div className="flex items-center justify-between w-full pt-2 text-[11.5px] sm:text-[12px] font-semibold text-[#334155]">
                                <span>🏕️ Camping</span>
                                <span>🚐 2 Vans</span>
                                <span>🏄 Plage & Surf</span>
                            </div>
                        </div>

                        {/* Bas : Inscrits & Boutons espacés avec icônes Griddy */}
                        <div className="flex items-center justify-between pt-1.5 border-t border-[#F1F5F9] mt-1.5">
                            <div className="flex items-center gap-1 text-[11.5px] sm:text-[12px] font-bold text-[#10245E]">
                                <Icon icon="griddy-icons:users" className="w-4.5 h-4.5 text-[#2F67D8] shrink-0" />
                                <span>12/16 inscrits</span>
                            </div>

                            {/* Boutons avec espacement généreux */}
                            <div className="flex items-center gap-2.5">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setInterestedEvent(!interestedEvent);
                                    }}
                                    className={`px-3 py-1 rounded-[6px] text-[11px] font-bold border transition-all cursor-pointer ${
                                        interestedEvent
                                            ? 'bg-slate-100 text-[#10245E] border-slate-300'
                                            : 'bg-white hover:bg-slate-50 text-[#10245E] border-[#D9E1EE]'
                                    }`}
                                >
                                    <span>{interestedEvent ? 'Intéressé ✓' : 'Intéressé'}</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setJoinedEvent(!joinedEvent);
                                    }}
                                    className={`px-3 py-1 rounded-[6px] text-[11px] font-bold transition-all cursor-pointer shadow-2xs ${
                                        joinedEvent
                                            ? 'bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]'
                                            : 'bg-[#2F67D8] hover:bg-[#2458C2] text-white'
                                    }`}
                                >
                                    <span>{joinedEvent ? 'Inscrit ✓' : 'Participe'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── CARTE 2 : VÉHICULE RECOMMANDÉ ── */}
                <div className="bg-white rounded-[14px] border border-[#E4E9F2] overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group flex items-stretch">
                    {/* Image */}
                    <div className="w-38 sm:w-44 shrink-0 bg-gray-100 overflow-hidden relative">
                        <img
                            src="https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&q=80&w=800"
                            alt="Toyota HiAce Campervan"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Contenu compact verrouillé en hauteur */}
                    <div className="flex-1 p-3.5 sm:p-4 flex flex-col justify-between min-w-0">
                        <div className="space-y-1.5">
                            {/* Haut : Véhicule à gauche ET Marque Toyota à droite */}
                            <div className="flex items-center justify-between">
                                <span className="px-2 py-0.5 rounded-[4px] text-[10.5px] font-bold bg-[#EFF6FF] text-[#1D4ED8]">
                                    Véhicule
                                </span>
                                <span className="text-[12px] font-black text-[#10245E] tracking-tight uppercase">
                                    TOYOTA
                                </span>
                            </div>

                            {/* Titre & Localisation */}
                            <div>
                                <h4 className="text-[14.5px] font-bold text-[#10245E] group-hover:text-[#2F67D8] transition-colors truncate">
                                    HiAce Campervan 3 places
                                </h4>
                                <div className="flex items-center gap-1.5 text-[12px] text-[#64718F] mt-1">
                                    <Icon icon="griddy-icons:location-pin" className="w-4.5 h-4.5 text-[#94A3B8] shrink-0" />
                                    <span className="truncate">Sydney, NSW (Bondi)</span>
                                </div>
                            </div>

                            {/* 3 éléments avec icônes Griddy */}
                            <div className="flex items-center justify-between w-full pt-2 text-[11.5px] sm:text-[12px] font-semibold text-[#334155]">
                                <span className="flex items-center gap-1">
                                    <Icon icon="griddy-icons:bed" className="w-5 h-5 text-[#2F67D8]" />
                                    <span>Lit+Cuisine</span>
                                </span>
                                <span className="flex items-center gap-1">
                                    <Icon icon="griddy-icons:gas-station" className="w-5 h-5 text-[#EA580C]" />
                                    <span>Unleaded</span>
                                </span>
                                <span className="flex items-center gap-1">
                                    <Icon icon="griddy-icons:flash" className="w-5 h-5 text-[#16A34A]" />
                                    <span>185 000 km</span>
                                </span>
                            </div>
                        </div>

                        {/* Bas : Prix à gauche & Boutons Contact + Intéressé espacés à droite */}
                        <div className="flex items-center justify-between pt-2 border-t border-[#F1F5F9] mt-2">
                            <div>
                                <div className="text-[14px] font-extrabold text-[#10245E] leading-tight">
                                    7 800 $
                                </div>
                                <span className="text-[10px] text-[#15803D] font-bold">
                                    Négociable
                                </span>
                            </div>

                            {/* Boutons Contact & Intéressé avec icônes Griddy */}
                            <div className="flex items-center gap-2.5">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setContactedVehicle(!contactedVehicle);
                                    }}
                                    className={`px-3 py-1 rounded-[6px] text-[11px] font-bold border transition-all cursor-pointer ${
                                        contactedVehicle
                                            ? 'bg-slate-100 text-[#10245E] border-slate-300'
                                            : 'bg-white hover:bg-slate-50 text-[#10245E] border-[#D9E1EE]'
                                    }`}
                                >
                                    <span>{contactedVehicle ? 'Contacté' : 'Contact'}</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setInterestedVehicle(!interestedVehicle);
                                    }}
                                    className={`px-3 py-1 rounded-[6px] text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer shadow-2xs ${
                                        interestedVehicle
                                            ? 'bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]'
                                            : 'bg-[#2F67D8] hover:bg-[#2458C2] text-white'
                                    }`}
                                >
                                    <Icon icon="griddy-icons:send" className="w-4 h-4" />
                                    <span>{interestedVehicle ? 'Envoyé ✓' : 'Intéressé'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
