import { useState } from 'react';
import Sidebar from '../components/layout/Sidebar/Sidebar';
import Header from '../components/layout/Header/Header';
import { Icon } from '@iconify/react';

export default function DashboardLayout({ 
    children, 
    activeTab = 'accueil', 
    onTabChange,
    userName = 'Fabrice',
    userAvatar
}) {
    const [currentTab, setCurrentTab] = useState(activeTab);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const handleTabChange = (tabId) => {
        setCurrentTab(tabId);
        if (onTabChange) onTabChange(tabId);
    };

    return (
        <div className="h-screen bg-[#F5F8FF] flex font-sans selection:bg-[#2F67D8] selection:text-white overflow-hidden">
            {/* Sidebar gauche fixe (Desktop) + Tiroir coulissant (Mobile/Tablette) */}
            <Sidebar 
                activeTab={currentTab} 
                onTabChange={handleTabChange}
                isMobileOpen={isMobileSidebarOpen}
                onMobileClose={() => setIsMobileSidebarOpen(false)}
            />

            {/* Zone de contenu droit */}
            <div className="flex-1 flex flex-col h-screen min-w-0 overflow-hidden">
                {/* Header supérieur fixe avec déclencheur burger mobile */}
                <Header 
                    userName={userName}
                    userAvatar={userAvatar}
                    onMobileMenuOpen={() => setIsMobileSidebarOpen(true)}
                />

                {/* Contenu principal défilable de façon fluide et responsive */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 xl:p-10 pb-24 lg:pb-10 max-w-[1650px] w-full mx-auto space-y-6 sm:space-y-7">
                    {children}
                </main>

                {/* ── Barre de Navigation Basse Mobile (Mobile Bottom Nav) avec icônes Griddy ── */}
                <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-md border-t border-[#E4E9F2] z-30 flex items-center justify-around px-2 shadow-[0_-4px_16px_rgba(16,36,94,0.04)]">
                    <button
                        type="button"
                        onClick={() => handleTabChange('accueil')}
                        className={`flex flex-col items-center justify-center gap-1 py-1 px-3 rounded-[8px] transition-colors cursor-pointer ${
                            currentTab === 'accueil' ? 'text-[#2F67D8] font-bold' : 'text-[#64718F]'
                        }`}
                    >
                        <Icon icon="solar:home-angle-linear" className="w-5 h-5" />
                        <span className="text-[10px]">Accueil</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleTabChange('annonces')}
                        className={`flex flex-col items-center justify-center gap-1 py-1 px-3 rounded-[8px] transition-colors cursor-pointer ${
                            currentTab === 'annonces' ? 'text-[#2F67D8] font-bold' : 'text-[#64718F]'
                        }`}
                    >
                        <Icon icon="griddy-icons:search" className="w-5 h-5" />
                        <span className="text-[10px]">Annonces</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleTabChange('publier')}
                        className="flex flex-col items-center justify-center -mt-5 cursor-pointer group"
                    >
                        <div className="w-12 h-12 rounded-full bg-[#2F67D8] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(47,103,216,0.35)] group-hover:scale-105 transition-transform">
                            <Icon icon="griddy-icons:plus-circle" className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold text-[#10245E] mt-1">Publier</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleTabChange('favoris')}
                        className={`flex flex-col items-center justify-center gap-1 py-1 px-3 rounded-[8px] transition-colors cursor-pointer ${
                            currentTab === 'favoris' ? 'text-[#2F67D8] font-bold' : 'text-[#64718F]'
                        }`}
                    >
                        <Icon icon="griddy-icons:heart" className="w-5 h-5" />
                        <span className="text-[10px]">Favoris</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => setIsMobileSidebarOpen(true)}
                        className="flex flex-col items-center justify-center gap-1 py-1 px-3 rounded-[8px] text-[#64718F] hover:text-[#10245E] transition-colors cursor-pointer"
                    >
                        <Icon icon="griddy-icons:menu" className="w-5 h-5" />
                        <span className="text-[10px]">Menu</span>
                    </button>
                </nav>

            </div>
        </div>
    );
}
