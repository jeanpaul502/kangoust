import { Link } from '@inertiajs/react';

export default function Footer() {
    const appName = import.meta.env.VITE_APP_NAME || 'Kangoust';

    return (
        <footer className="bg-white border-t border-[#E4E9F2] pt-12 pb-10">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main 5-Column Grid */}
                <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-12">
                    
                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-4">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="w-14 h-14 relative flex items-center justify-center shrink-0">
                                <img src="/images/logovav.png" alt="Kangoust Logo" className="absolute w-[240%] h-[240%] max-w-none object-contain" />
                            </div>
                            <span className="font-extrabold text-[24px] tracking-tight text-white">{appName}</span>
                        </Link>
                        <p className="text-[13px] leading-[1.6] text-[#64718F] mb-5 max-w-xs">
                            Votre compagnon pour vivre, travailler et vous installer en Australie.
                        </p>
                        {/* Social icons */}
                        <div className="flex items-center gap-2.5">
                            {['f', 'in', 'ig', 'tk'].map((item) => (
                                <a 
                                    key={item} 
                                    href="#" 
                                    className="w-7 h-7 rounded-full bg-[#F5F8FF] border border-[#E4E9F2] flex items-center justify-center text-[12px] font-bold text-[#64718F] hover:bg-[#EAF1FF] hover:text-[#2F67D8] transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 1: Explorer */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-[14px] font-semibold text-[#10245E] mb-3.5">Explorer</h4>
                        <ul className="space-y-2.5">
                            <li><a href="#annonces" className="text-[13px] text-[#64718F] hover:text-[#2F67D8] transition-colors">Annonces</a></li>
                            <li><a href="#guide" className="text-[13px] text-[#64718F] hover:text-[#2F67D8] transition-colors">Guide Australien</a></li>
                            <li><a href="#evenements" className="text-[13px] text-[#64718F] hover:text-[#2F67D8] transition-colors">Événements</a></li>
                            <li><a href="#communaute" className="text-[13px] text-[#64718F] hover:text-[#2F67D8] transition-colors">Communauté</a></li>
                        </ul>
                    </div>

                    {/* Column 2: À propos */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-[14px] font-semibold text-[#10245E] mb-3.5">À propos</h4>
                        <ul className="space-y-2.5">
                            <li><a href="#" className="text-[13px] text-[#64718F] hover:text-[#2F67D8] transition-colors">Qui sommes-nous</a></li>
                            <li><a href="#" className="text-[13px] text-[#64718F] hover:text-[#2F67D8] transition-colors">Notre mission</a></li>
                            <li><a href="#" className="text-[13px] text-[#64718F] hover:text-[#2F67D8] transition-colors">Témoignages</a></li>
                            <li><a href="#" className="text-[13px] text-[#64718F] hover:text-[#2F67D8] transition-colors">Partenaires</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Aide */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-[14px] font-semibold text-[#10245E] mb-3.5">Aide</h4>
                        <ul className="space-y-2.5">
                            <li><a href="#" className="text-[13px] text-[#64718F] hover:text-[#2F67D8] transition-colors">Centre d'aide</a></li>
                            <li><a href="#" className="text-[13px] text-[#64718F] hover:text-[#2F67D8] transition-colors">Nous contacter</a></li>
                            <li><a href="#" className="text-[13px] text-[#64718F] hover:text-[#2F67D8] transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Légal */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-[14px] font-semibold text-[#10245E] mb-3.5">Légal</h4>
                        <ul className="space-y-2.5">
                            <li><a href="#" className="text-[13px] text-[#64718F] hover:text-[#2F67D8] transition-colors">Conditions d'utilisation</a></li>
                            <li><a href="#" className="text-[13px] text-[#64718F] hover:text-[#2F67D8] transition-colors">Politique de confidentialité</a></li>
                            <li><a href="#" className="text-[13px] text-[#64718F] hover:text-[#2F67D8] transition-colors">Mentions légales</a></li>
                        </ul>
                    </div>

                </div>

                {/* Newsletter & Bottom Bar */}
                <div className="pt-8 border-t border-[#E4E9F2] flex flex-col md:flex-row justify-between items-center gap-5">
                    
                    {/* Copyright */}
                    <p className="text-[12px] text-[#64718F]">
                        © 2025 {appName}. Tous droits réservés.
                    </p>

                    {/* Newsletter Box */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                        <span className="text-[13px] font-semibold text-[#10245E] shrink-0">Restez informé</span>
                        <div className="flex max-w-sm w-full">
                            <input 
                                type="email" 
                                placeholder="Votre email" 
                                className="w-full sm:w-64 px-3.5 py-2 border border-[#E4E9F2] rounded-l-[10px] text-[13px] text-[#10245E] placeholder-[#64718F] focus:outline-none focus:border-[#2F67D8] bg-[#F5F8FF]" 
                            />
                            <button 
                                className="bg-[#2F67D8] hover:bg-[#2458C2] text-white px-4 py-2 rounded-r-[10px] transition-colors flex items-center justify-center"
                                aria-label="S'abonner"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    );
}
