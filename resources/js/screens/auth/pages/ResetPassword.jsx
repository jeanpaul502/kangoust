import { Head, Link } from '@inertiajs/react';
import { Lock, Eye, EyeOff, ArrowLeft, HelpCircle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function ResetPassword({ token }) {
    const appName = import.meta.env.VITE_APP_NAME || 'Kangoust';
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (!password || !passwordConfirmation) {
            setError('Veuillez remplir tous les champs.');
            return;
        }
        if (password !== passwordConfirmation) {
            setError('Les mots de passe ne correspondent pas.');
            return;
        }
        setIsSubmitted(true);
    };

    return (
        <>
            <Head title="Réinitialiser le mot de passe" />
            
            <div className="min-h-screen flex flex-col justify-between py-6 relative selection:bg-[#EAF1FF] selection:text-[#2F67D8]">
                
                {/* Top Bar: Placed at extreme corners with pure text links */}
                <header className="w-full px-6 sm:px-12 lg:px-16 py-3 flex justify-between items-center">
                    <Link
                        href="/login"
                        className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#64718F] hover:text-[#10245E] transition-colors py-1 group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span>Retour à la connexion</span>
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
                            
                            {/* Header: Logo & App Name */}
                            <div className="flex flex-col items-center text-center mb-9">
                                <Link href="/" className="inline-block group mb-4">
                                    <div className="w-20 h-20 relative flex items-center justify-center shrink-0">
                                        <img src="/images/logovav.png" alt="Kangoust Logo" className="absolute w-[240%] h-[240%] max-w-none transition-transform duration-200 group-hover:scale-105 object-contain" />
                                    </div>
                                </Link>

                                <p className="text-[15px] text-[#64718F] font-[450] max-w-md leading-relaxed">
                                    {isSubmitted
                                        ? "Votre mot de passe a été mis à jour avec succès."
                                        : "Définissez et confirmez votre nouveau mot de passe."}
                                </p>
                            </div>

                            {isSubmitted ? (
                                <div className="space-y-6">
                                    <div className="bg-[#ECF8F0] border border-[#36A65C]/20 rounded-[18px] p-5 flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-[#36A65C] shrink-0 mt-0.5" />
                                        <div className="text-left">
                                            <h4 className="text-[14.5px] font-bold text-[#10245E] mb-1">
                                                Mot de passe réinitialisé !
                                            </h4>
                                            <p className="text-[13.5px] text-[#64718F] leading-relaxed">
                                                Votre nouveau mot de passe est désormais actif. Vous pouvez vous connecter dès maintenant.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <Link
                                            href="/login"
                                            className="w-full h-[52px] bg-[#2F67D8] hover:bg-[#2458C2] text-white text-[15.5px] font-bold rounded-[14px] shadow-[0_4px_16px_rgba(47,103,216,0.3)] transition-all flex items-center justify-center cursor-pointer"
                                        >
                                            Se connecter maintenant
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                /* Form with Nouveau mot de passe & Confirmer mot de passe */
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {error && (
                                        <div className="p-3.5 rounded-[12px] bg-red-50 border border-red-200 text-red-600 text-[13.5px] font-medium">
                                            {error}
                                        </div>
                                    )}

                                    {/* New Password Field */}
                                    <div>
                                        <label htmlFor="password" className="block text-[14px] font-bold text-[#10245E] mb-2">
                                            Nouveau mot de passe
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
                                                placeholder="Au moins 8 caractères"
                                                autoComplete="new-password"
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

                                    {/* Confirm Password Field */}
                                    <div>
                                        <label htmlFor="passwordConfirmation" className="block text-[14px] font-bold text-[#10245E] mb-2">
                                            Confirmer le mot de passe
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#64718F]">
                                                <Lock className="h-5 w-5" />
                                            </div>
                                            <input
                                                id="passwordConfirmation"
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                value={passwordConfirmation}
                                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                                className="block w-full pl-12 pr-12 h-[50px] rounded-[14px] border border-[#E4E9F2] bg-[#F8FAFC]/70 text-[15px] font-medium text-[#10245E] placeholder-[#64718F]/50 focus:bg-white focus:border-[#2F67D8] focus:ring-4 focus:ring-[#2F67D8]/10 transition-all outline-none"
                                                placeholder="Confirmez votre nouveau mot de passe"
                                                autoComplete="new-password"
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#64718F] hover:text-[#10245E] transition-colors cursor-pointer"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                tabIndex={-1}
                                            >
                                                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-3">
                                        <button
                                            type="submit"
                                            className="w-full h-[52px] bg-[#2F67D8] hover:bg-[#2458C2] active:scale-[0.99] text-white text-[15.5px] font-bold rounded-[14px] shadow-[0_4px_16px_rgba(47,103,216,0.3)] hover:shadow-[0_6px_22px_rgba(47,103,216,0.4)] transition-all duration-200 flex items-center justify-center cursor-pointer"
                                        >
                                            <span>Réinitialiser le mot de passe</span>
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* Footer Link (without separator) */}
                            <div className="mt-8 text-center">
                                <p className="text-[14.5px] text-[#64718F] font-[450]">
                                    Vous vous souvenez de votre mot de passe ?{' '}
                                    <Link
                                        href="/login"
                                        className="font-bold text-[#2F67D8] hover:text-[#2458C2] hover:underline underline-offset-4 transition-colors ml-1"
                                    >
                                        Se connecter
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
