import { Icon } from '@iconify/react';
import { Link } from '@inertiajs/react';

export default function Sidebar({ activeTab = 'accueil', onTabChange, isMobileOpen = false, onMobileClose }) {
    const navSections = [
        {
            title: 'PRINCIPAL',
            items: [
                { id: 'accueil', label: 'Accueil', icon: 'solar:home-angle-broken', route: '/dashboard', badge: null },
                { id: 'annonces', label: 'Annonces', icon: 'solar:magnifer-broken', route: '#', badge: '140+' },
            ],
        },
        {
            title: 'DÉCOUVRIR',
            items: [
                { id: 'travail', label: 'Travail', icon: 'solar:case-minimalistic-broken', route: '#', badge: '48' },
                { id: 'logement', label: 'Logement', icon: 'solar:buildings-broken', route: '#', badge: '24' },
                { id: 'vehicules', label: 'Véhicules', icon: 'solar:bus-broken', route: '#', badge: '18' },
                { id: 'evenements', label: 'Événements', icon: 'solar:calendar-broken', route: '#', badge: '6' },
                { id: 'guide', label: 'Guide', icon: 'solar:book-broken', route: '#', badge: null },
                { id: 'communaute', label: 'Communauté', icon: 'solar:users-group-rounded-broken', route: '#', badge: '2.4k' },
            ],
        },
        {
            title: 'OUTILS',
            items: [
                { id: 'recherches', label: 'Mes recherches', icon: 'solar:compass-broken', route: '#', badge: null },
                { id: 'favoris', label: 'Mes favoris', icon: 'solar:heart-broken', route: '#', badge: '3' },
                { id: 'mes_annonces', label: 'Mes annonces', icon: 'solar:tag-broken', route: '#', badge: '1' },
            ],
        },
    ];

    const sidebarContent = (
        <aside className="w-[260px] bg-white border-r border-[#E4E9F2] h-screen sticky top-0 flex flex-col shrink-0 select-none shadow-[2px_0_12px_rgba(16,36,94,0.02)] z-40">
            
            {/* Header Logo Kangoust */}
            <div className="h-18 sm:h-20 px-5.5 flex items-center justify-between shrink-0">
                <Link href="/dashboard" className="flex items-center gap-4 group">
                    <div className="w-14 h-14 relative flex items-center justify-center shrink-0">
                        <img src="/images/logovav.png" alt="Kangoust Logo" className="absolute w-[240%] h-[240%] max-w-none transition-transform duration-200 group-hover:scale-105 object-contain" />
                    </div>
                    <span className="font-extrabold text-[24px] tracking-tight text-[#10245E]">Kangoust</span>
                </Link>

                {/* Bouton de fermeture mobile */}
                <button
                    type="button"
                    onClick={onMobileClose}
                    className="lg:hidden p-1.5 rounded-[6px] text-[#64718F] hover:bg-gray-100 cursor-pointer"
                >
                    <Icon icon="griddy-icons:menu-close" className="w-5 h-5" />
                </button>
            </div>

            {/* Navigation Menus avec icônes Griddy */}
            <div className="pt-9 pb-6 px-3 space-y-8 flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {navSections.map((section) => (
                    <div key={section.title} className="space-y-2">
                        {/* Boutons */}
                        <div className="space-y-5">
                            {section.items.map((item) => {
                                const isActive = activeTab === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => {
                                            if (onTabChange) onTabChange(item.id);
                                            if (onMobileClose) onMobileClose();
                                        }}
                                        className={`relative w-full h-11.5 px-3.5 rounded-[7px] flex items-center justify-between text-[14.5px] sm:text-[15px] font-semibold transition-all duration-150 cursor-pointer group overflow-hidden ${
                                            isActive
                                                ? 'bg-[#EAF1FF] text-[#2F67D8] font-bold shadow-2xs'
                                                : 'text-[#334155] hover:bg-[#F8FAFC] hover:text-[#10245E]'
                                        }`}
                                    >
                                        {/* Contenu : Icône Griddy (24px) + Titre */}
                                        <div className="flex items-center gap-3 min-w-0">
                                            <Icon 
                                                icon={item.icon} 
                                                className={`w-7 h-7 shrink-0 transition-transform duration-150 group-hover:scale-105 ${
                                                    isActive 
                                                        ? 'text-[#2F67D8]' 
                                                        : item.color || 'text-[#64748B]'
                                                }`} 
                                            />
                                            <span className="truncate text-left">{item.label}</span>
                                        </div>

                                        {/* Badges / Valeurs numéraires */}
                                        {item.badge && (
                                            <span className={`px-2 py-0.5 rounded-[4px] text-[10.5px] font-bold shrink-0 transition-colors mr-1 ${
                                                isActive 
                                                    ? 'bg-[#2F67D8] text-white' 
                                                    : 'bg-[#F1F5F9] text-[#64718F] group-hover:bg-[#E2E8F0] group-hover:text-[#10245E]'
                                            }`}>
                                                {item.badge}
                                            </span>
                                        )}

                                        {/* Trait indicateur actif au coin droit extrême */}
                                        {isActive && (
                                            <span className="absolute right-0 top-0 bottom-0 w-[3px] bg-[#2F67D8]" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {/* Carte / Bannière Premium en bas */}
                <div className="pt-6 pb-4 px-1">
                    <div className="relative w-full rounded-[14px] bg-gradient-to-br from-[#2F67D8] to-[#10245E] p-4.5 overflow-hidden shadow-[0_8px_24px_rgba(16,36,94,0.15)] group">
                        {/* Effets lumineux d'arrière-plan */}
                        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-28 h-28 bg-white/15 rounded-full blur-[20px] transform group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none" />
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#38BDF8]/20 rounded-full blur-[16px] pointer-events-none" />
                        
                        <div className="relative z-10 flex flex-col gap-3">
                            {/* En-tête : Icône + Titre */}
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 shrink-0 rounded-[9px] bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
                                    <Icon icon="solar:document-add-broken" className="w-5 h-5" />
                                </div>
                                <h4 className="text-[14.5px] font-extrabold text-white leading-tight tracking-wide">
                                    Kangoust CV
                                </h4>
                            </div>
                            
                            {/* Description */}
                            <p className="text-[11.5px] text-blue-100/90 leading-[1.4]">
                                Créez le CV australien parfait et des lettres de motivation avec notre système d'analyse intelligent.
                            </p>
                            
                            <button className="mt-0.5 w-full h-9 bg-white text-[#10245E] text-[12.5px] font-bold rounded-[8px] hover:bg-blue-50 transition-colors shadow-sm flex items-center justify-center cursor-pointer">
                                Créer mon CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </aside>
    );

    return (
        <>
            {/* Version Desktop fixe */}
            <div className="hidden lg:block shrink-0">
                {sidebarContent}
            </div>

            {/* Version Mobile / Tablette */}
            {isMobileOpen && (
                <div className="lg:hidden fixed inset-0 z-50 flex">
                    <div 
                        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
                        onClick={onMobileClose}
                    />
                    <div className="relative z-10 w-[270px] bg-white shadow-2xl h-full animate-in slide-in-from-left duration-200">
                        {sidebarContent}
                    </div>
                </div>
            )}
        </>
    );
}
