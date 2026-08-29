import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
    const appName = import.meta.env.VITE_APP_NAME || 'Kangoust';

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 15);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 py-4 ${
                scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.05)]' : 'bg-transparent'
            }`}
        >
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12 relative">
                    
                    {/* Logo */}
                    <div className="flex-1 flex justify-start -translate-x-16 lg:-translate-x-36">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="w-14 h-14 relative flex items-center justify-center shrink-0">
                                <img src="/images/logovav.png" alt="Kangoust Logo" className="absolute w-[240%] h-[240%] max-w-none transition-transform duration-200 group-hover:scale-105 object-contain" />
                            </div>
                            <span className="font-extrabold text-[24px] tracking-tight text-[#10245E]">{appName}</span>
                        </Link>
                    </div>

                    {/* Desktop Menu Links */}
                    <div className="hidden md:flex flex-shrink-0 items-center justify-center gap-8">
                        <Link href="#guide" className="text-[14px] font-semibold text-[#10245E] border-b-2 border-[#FF9F1C] pb-1">
                            Guide australien
                        </Link>
                        <Link href="#annonces" className="text-[14px] font-medium text-[#64718F] hover:text-[#10245E] transition-colors">
                            Annonces
                        </Link>
                        <Link href="#communaute" className="text-[14px] font-medium text-[#64718F] hover:text-[#10245E] transition-colors">
                            Communauté
                        </Link>
                        <Link href="#evenements" className="text-[14px] font-medium text-[#64718F] hover:text-[#10245E] transition-colors">
                            Événements
                        </Link>
                        <Link href="#cv" className="text-[14px] font-medium text-[#64718F] hover:text-[#10245E] transition-colors">
                            Créer un CV
                        </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex-1 hidden md:flex items-center justify-end gap-3 translate-x-16 lg:translate-x-36">
                        <Link 
                            href="/login" 
                            className="text-[14px] font-medium text-[#10245E] hover:text-[#2F67D8] bg-white border border-[#D9E1EE] hover:border-[#2F67D8] px-4 py-2 rounded-[10px] transition-all"
                        >
                            Se connecter
                        </Link>
                        <Link 
                            href="/register" 
                            className="text-[14px] font-semibold text-white bg-[#2F67D8] hover:bg-[#2458C2] px-5 py-2 rounded-[10px] shadow-[0_2px_8px_rgba(47,103,216,0.25)] transition-all"
                        >
                            S'inscrire
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setMenuOpen(!menuOpen)} 
                            className="p-2 text-[#10245E] rounded-lg hover:bg-slate-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu dropdown */}
                {menuOpen && (
                    <div className="md:hidden mt-3 pt-3 pb-4 border-t border-[#E4E9F2] bg-white rounded-2xl shadow-xl px-4 flex flex-col gap-3">
                        <Link href="#guide" className="text-[15px] font-semibold text-[#10245E] py-1">Guide australien</Link>
                        <Link href="#annonces" className="text-[15px] font-medium text-[#64718F] py-1">Annonces</Link>
                        <Link href="#communaute" className="text-[15px] font-medium text-[#64718F] py-1">Communauté</Link>
                        <Link href="#evenements" className="text-[15px] font-medium text-[#64718F] py-1">Événements</Link>
                        <Link href="#cv" className="text-[15px] font-medium text-[#64718F] py-1">Créer un CV</Link>
                        <div className="flex flex-col gap-2 pt-2 border-t border-[#E4E9F2]">
                            <Link href="/login" className="text-center w-full py-2.5 border border-[#D9E1EE] rounded-[10px] text-[#10245E] font-medium">Se connecter</Link>
                            <Link href="/register" className="text-center w-full py-2.5 bg-[#2F67D8] text-white rounded-[10px] font-semibold">S'inscrire</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
