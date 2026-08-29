import { Head, Link, router } from '@inertiajs/react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function Login() {
    const appName = import.meta.env.VITE_APP_NAME || 'Kangoust';
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulation de connexion
        try {
            const saved = sessionStorage.getItem('kangoust_user');
            if (!saved) {
                sessionStorage.setItem('kangoust_user', JSON.stringify({
                    firstName: 'Voyageur',
                    email: email || '',
                }));
            }
        } catch (err) {
            console.error(err);
        }
        router.visit('/onboarding');
    };

    return (
        <>
            <Head title="Connexion" />

            <div className="min-h-screen flex flex-col justify-between py-6 relative selection:bg-[#EAF1FF] selection:text-[#2F67D8]">

                {/* Top Bar: Placed at extreme corners with pure text links */}
                <header className="w-full px-6 sm:px-12 lg:px-16 py-3 flex justify-between items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#64718F] hover:text-[#10245E] transition-colors py-1 group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span>Retour à l'accueil</span>
                    </Link>

                    <Link
                        href="#support"
                        className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#64718F] hover:text-[#10245E] transition-colors py-1 group"
                    >
                        <HelpCircle className="w-4 h-4 text-[#2F67D8] transition-transform group-hover:scale-110" />
                        <span>Besoin d'aide ? Support</span>
                    </Link>
                </header>

                {/* Main Content Area */}
                <main className="w-full flex-1 flex items-center justify-center py-6 px-4 sm:px-6">
                    {/* Enlarged Card (max-w-[620px]) */}
                    <div className="w-full max-w-[620px]">
                        <div className="bg-white rounded-[28px] border border-[#E4E9F2] p-8 sm:p-14 shadow-[0_20px_50px_rgba(16,36,94,0.06)]">

                            {/* Header: Logo & App Name only */}
                            <div className="flex flex-col items-center text-center mb-10">
                                <Link href="/" className="inline-block group mb-4">
                                    <div className="w-20 h-20 relative flex items-center justify-center shrink-0">
                                        <img src="/images/logovav.png" alt="Kangoust Logo" className="absolute w-[240%] h-[240%] max-w-none transition-transform duration-200 group-hover:scale-105 object-contain" />
                                    </div>
                                </Link>

                                <p className="text-[15px] text-[#64718F] font-[450] max-w-md leading-relaxed">
                                    Connectez-vous à votre compte pour poursuivre votre projet en Australie.
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-[14px] font-bold text-[#10245E] mb-2">
                                        Adresse email
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#64718F]">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="block w-full pl-12 pr-4 h-[50px] rounded-[14px] border border-[#E4E9F2] bg-[#F8FAFC]/70 text-[15px] font-medium text-[#10245E] placeholder-[#64718F]/50 focus:bg-white focus:border-[#2F67D8] focus:ring-4 focus:ring-[#2F67D8]/10 transition-all outline-none"
                                            placeholder="nom@exemple.com"
                                            autoComplete="username"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label htmlFor="password" className="block text-[14px] font-bold text-[#10245E] mb-2">
                                        Mot de passe
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#64718F]">
                                            <Lock className="h-5 w-5" />
                                        </div>
                                        <input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="block w-full pl-12 pr-12 h-[50px] rounded-[14px] border border-[#E4E9F2] bg-[#F8FAFC]/70 text-[15px] font-medium text-[#10245E] placeholder-[#64718F]/50 focus:bg-white focus:border-[#2F67D8] focus:ring-4 focus:ring-[#2F67D8]/10 transition-all outline-none"
                                            placeholder="••••••••••••"
                                            autoComplete="current-password"
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#64718F] hover:text-[#10245E] transition-colors cursor-pointer"
                                            onClick={() => setShowPassword(!showPassword)}
                                            tabIndex={-1}
                                        >
                                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="flex items-center justify-between pt-1">
                                    <label className="flex items-center gap-2.5 cursor-pointer select-none group">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            checked={remember}
                                            onChange={(e) => setRemember(e.target.checked)}
                                            className="w-4 h-4 rounded-[4px] border-[#D9E1EE] text-[#2F67D8] focus:ring-[#2F67D8]/20 focus:ring-offset-0 cursor-pointer accent-[#2F67D8]"
                                        />
                                        <span className="text-[14px] font-medium text-[#64718F] group-hover:text-[#10245E] transition-colors">
                                            Se souvenir de moi
                                        </span>
                                    </label>

                                    <Link
                                        href="/forgot-password"
                                        className="text-[14px] font-semibold text-[#2F67D8] hover:text-[#2458C2] transition-colors"
                                    >
                                        Mot de passe oublié ?
                                    </Link>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-3">
                                    <button
                                        type="submit"
                                        className="w-full h-[52px] bg-[#2F67D8] hover:bg-[#2458C2] active:scale-[0.99] text-white text-[15.5px] font-bold rounded-[14px] shadow-[0_4px_16px_rgba(47,103,216,0.3)] hover:shadow-[0_6px_22px_rgba(47,103,216,0.4)] transition-all duration-200 flex items-center justify-center cursor-pointer"
                                    >
                                        <span>Se connecter</span>
                                    </button>
                                </div>

                                {/* Divider (well spaced) */}
                                <div className="relative my-9 flex items-center justify-center">
                                    <div className="w-full border-t border-[#E4E9F2]"></div>
                                    <span className="bg-white px-4 text-[13px] font-semibold text-[#64718F] tracking-normal absolute">
                                        Ou continuer avec
                                    </span>
                                </div>

                                {/* Google & Apple Buttons (placed at bottom) */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        className="flex items-center justify-center gap-2.5 h-[48px] px-4 rounded-[14px] border border-[#E4E9F2] bg-white hover:bg-[#F8FAFC] hover:border-[#D9E1EE] text-[14.5px] font-semibold text-[#10245E] transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)] cursor-pointer"
                                    >
                                        <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                        <span>Google</span>
                                    </button>

                                    <button
                                        type="button"
                                        className="flex items-center justify-center gap-2.5 h-[48px] px-4 rounded-[14px] border border-[#E4E9F2] bg-white hover:bg-[#F8FAFC] hover:border-[#D9E1EE] text-[14.5px] font-semibold text-[#10245E] transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)] cursor-pointer"
                                    >
                                        <svg className="h-[26px] w-[26px] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.09 2.31-.83 3.63-.82 1.53.05 2.88.75 3.63 1.87-3.14 1.83-2.61 5.96.47 7.15-.75 1.77-1.84 3.12-2.81 3.97zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                        </svg>
                                        <span>Apple</span>
                                    </button>
                                </div>
                            </form>

                            {/* Footer Signup Link */}
                            <div className="mt-8 text-center">
                                <p className="text-[14.5px] text-[#64718F] font-[450]">
                                    Vous n'avez pas encore de compte ?{' '}
                                    <Link
                                        href="/register"
                                        className="font-bold text-[#2F67D8] hover:text-[#2458C2] hover:underline underline-offset-4 transition-colors ml-1"
                                    >
                                        Inscrivez-vous
                                    </Link>
                                </p>
                            </div>

                        </div>
                    </div>
                </main>

                {/* Footer copyright */}
                <footer className="w-full text-center py-4 text-[13px] text-[#64718F] font-medium">
                    © {new Date().getFullYear()} {appName}. Tous droits réservés.
                </footer>

            </div>
        </>
    );
}
