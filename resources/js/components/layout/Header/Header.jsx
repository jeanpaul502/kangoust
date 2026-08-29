import { Icon } from '@iconify/react';
import { useState } from 'react';
import { router } from '@inertiajs/react';

export default function Header({ userName = 'Marie Dupont', userAvatar, onMobileMenuOpen }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="h-18 sm:h-20 bg-white border-b border-[#E4E9F2] px-4 sm:px-8 lg:px-10 flex items-center justify-between sticky top-0 z-30 shrink-0">
            {/* Bouton Menu Burger sur Mobile / Tablette */}
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={onMobileMenuOpen}
                    className="lg:hidden p-2 rounded-[8px] text-[#10245E] hover:bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center cursor-pointer"
                    aria-label="Ouvrir le menu"
                >
                    <Icon icon="griddy-icons:menu" className="w-6 h-6" />
                </button>
            </div>

            {/* Actions & Profil Utilisateur droite */}
            <div className="flex items-center gap-2.5 sm:gap-4">
                
                {/* Bouton Publier (Créer une annonce) */}
                <button
                    type="button"
                    className="hidden sm:flex items-center gap-2.5 px-3 h-10 sm:h-11 text-[#334155] hover:text-[#10245E] font-semibold transition-all cursor-pointer"
                >
                    <Icon icon="griddy-icons:plus-circle" className="w-7 h-7 text-[#64748B] hover:text-[#10245E] transition-colors" />
                    <span className="text-[15px]">Publier</span>
                </button>
                
                <button
                    type="button"
                    className="sm:hidden relative w-10 h-10 sm:w-11 sm:h-11 rounded-full text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#10245E] flex items-center justify-center transition-all cursor-pointer"
                >
                    <Icon icon="griddy-icons:plus-circle" className="w-7 h-7" />
                </button>

                <div className="hidden sm:block h-5 sm:h-6 w-[1px] bg-[#E2E8F0] mx-0.5" />

                {/* Cloche de Notifications */}
                <button
                    type="button"
                    className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full text-[#475569] hover:bg-[#F8FAFC] hover:text-[#10245E] border border-transparent hover:border-[#E2E8F0] flex items-center justify-center transition-all cursor-pointer"
                >
                    <Icon icon="solar:bell-broken" className="w-6 h-6 text-[#10245E]" />
                    <span className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-2 h-2 rounded-full bg-[#EF4444] ring-2 ring-white" />
                </button>

                {/* Messagerie */}
                <button
                    type="button"
                    className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full text-[#475569] hover:bg-[#F8FAFC] hover:text-[#10245E] border border-transparent hover:border-[#E2E8F0] flex items-center justify-center transition-all cursor-pointer"
                >
                    <Icon icon="solar:chat-dots-broken" className="w-6 h-6 text-[#10245E]" />
                    <span className="absolute -top-2 -right-3 sm:-top-2.5 sm:-right-3.5 min-w-[22px] h-5 sm:h-5.5 px-1.5 rounded-full bg-[#EF4444] text-[10px] sm:text-[11px] font-bold text-white flex items-center justify-center ring-2 ring-white shadow-sm">
                        99+
                    </span>
                </button>

                <div className="h-5 sm:h-6 w-[1px] bg-[#E2E8F0]" />

                {/* Profil Utilisateur */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-2 sm:gap-3 p-1 sm:p-1.5 sm:px-2 rounded-full hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all cursor-pointer"
                    >
                        <img
                            src={userAvatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'}
                            alt={userName}
                            className="w-12 h-12 rounded-full object-cover object-[center_15%] ring-2 ring-[#E4E9F2] shadow-sm"
                        />
                        <span className="text-[13px] sm:text-[14px] font-bold text-[#10245E] hidden md:inline">
                            {userName}
                        </span>
                        <Icon icon="griddy-icons:chevron-down" className="w-4 h-4 text-[#64718F] hidden md:inline" />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 top-[calc(100%+10px)] w-56 bg-white rounded-[12px] border border-[#E4E9F2] shadow-[0_16px_40px_rgba(16,36,94,0.14)] py-2.5 z-50 animate-in fade-in">
                            <button
                                type="button"
                                onClick={() => router.visit('/profile')}
                                className="w-full px-5 py-3 text-left text-[14px] font-semibold text-[#10245E] hover:bg-[#F8FAFC] flex items-center gap-3 transition-colors"
                            >
                                <Icon icon="griddy-icons:user" className="w-5 h-5 text-[#64718F]" />
                                Mon Profil
                            </button>
                            <button
                                type="button"
                                onClick={() => router.visit('/settings')}
                                className="w-full px-5 py-3 text-left text-[14px] font-semibold text-[#10245E] hover:bg-[#F8FAFC] flex items-center gap-3 transition-colors"
                            >
                                <Icon icon="griddy-icons:settings" className="w-5 h-5 text-[#64718F]" />
                                Paramètres
                            </button>
                            <div className="h-[1px] bg-[#F1F5F9] my-1.5 mx-3" />
                            <button
                                type="button"
                                onClick={() => router.visit('/login')}
                                className="w-full px-5 py-3 text-left text-[14px] font-semibold text-[#EF4444] hover:bg-red-50 flex items-center gap-3 transition-colors"
                            >
                                <Icon icon="griddy-icons:log-out" className="w-5 h-5 text-[#EF4444]" />
                                Se déconnecter
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
