import { Head, Link, router } from '@inertiajs/react';
import { LogOut } from 'lucide-react';
import { useState } from 'react';
import OnboardingSidebar from '../components/OnboardingSidebar';
import Step1Situation from '../components/Step1Situation';
import Step2Project from '../components/Step2Project';
import Step3Arrival from '../components/Step3Arrival';
import Step4Installation from '../components/Step4Installation';
import Step5Needs from '../components/Step5Needs';
import Step6Profile from '../components/Step6Profile';
import Step7Summary from '../components/Step7Summary';
import StepSummarySuccess from '../components/StepSummarySuccess';
import OnboardingActions from '../components/OnboardingActions';

export default function Onboarding() {
    const appName = import.meta.env.VITE_APP_NAME || 'Kangoust';
    const [currentStep, setCurrentStep] = useState(1);
    const [locationType, setLocationType] = useState('outside'); // 'outside' | 'inside'
    const [projectType, setProjectType] = useState('whv'); // 'whv' | 'studies' | 'work_sponsor' | 'skilled' | 'family' | 'unsure'
    const [formData, setFormData] = useState({
        currentSituation: '',
        currentCountry: 'France 🇫🇷',
        preferredLanguage: 'Français',
        mainProject: '',
        precision: '',
        hasPreciseIdea: 'yes',
        envisagedProject: '',
        departureTime: '',
        arrivalDate: '',
        arrivalTime: '',
        arrivalCity: '',
        arrivalAirport: '',
        hasBookedArrival: 'no',
        destinationCity: '',
        destinationRegion: '',
        travelCompanion: 'solo',
        preferredEnvironment: '',
        hasChosenCity: 'yes',
        priorityNeeds: ['housing', 'admin', 'pro_prep'],
        age: '',
        nationality: '',
        languages: ['Français', 'Anglais'],
        bio: '',
        avatar: null,
    });

    const stepsOutside = [
        { number: 1, title: 'Votre situation', subtitle: 'Apprenons à vous connaître' },
        { number: 2, title: 'Votre projet', subtitle: "Définissez votre projet pour l'Australie" },
        { number: 3, title: 'Votre arrivée', subtitle: 'Informations sur votre arrivée en Australie' },
        { number: 4, title: 'Votre installation', subtitle: 'Préparez votre installation' },
        { number: 5, title: 'Vos besoins', subtitle: 'Vos besoins et centres d’intérêt' },
        { number: 6, title: 'Votre profil', subtitle: 'Complétez votre profil' },
        { number: 7, title: 'Récapitulatif', subtitle: 'Vérifiez vos réponses' },
    ];

    const stepsInside = [
        { number: 1, title: 'Votre situation', subtitle: 'Votre présence en Australie' },
        { number: 2, title: 'Votre statut', subtitle: 'Visa et situation actuelle' },
        { number: 3, title: 'Vos besoins', subtitle: 'Ce dont vous avez besoin' },
        { number: 4, title: 'Communauté & opportunités', subtitle: 'Réseau et activités' },
        { number: 5, title: 'Votre profil', subtitle: 'Complétez votre profil' },
        { number: 6, title: 'Récapitulatif', subtitle: 'Vérifiez vos réponses' },
    ];

    const steps = locationType === 'inside' ? stepsInside : stepsOutside;

    const handleContinue = () => {
        if (currentStep <= steps.length) {
            setCurrentStep(currentStep + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBack = () => {
        setCurrentStep((prev) => {
            if (prev > 1) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return prev - 1;
            }
            return prev;
        });
    };

    const handleCancel = () => {
        router.visit('/');
    };

    const handleLogout = () => {
        router.visit('/login');
    };

    const handleFinish = () => {
        console.log('Onboarding complete:', { locationType, projectType, formData });
        setCurrentStep(steps.length + 1); // Afficher l'écran de succès final
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleGoToDashboard = () => {
        router.visit('/dashboard');
    };

    const handleEditResponses = () => {
        setCurrentStep(1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const isSuccessStep = currentStep > steps.length;

    return (
        <>
            <Head title="Configuration de mon parcours" />

            <div className="min-h-screen bg-[#F5F8FF] flex flex-col selection:bg-[#EAF1FF] selection:text-[#2F67D8] font-sans antialiased">

                {/* ── Top Header ── */}
                <header className="w-full bg-white border-b border-[#E4E9F2] px-4 sm:px-10 lg:px-14 py-3 sm:py-3.5 flex justify-between items-center z-10 sticky top-0">
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 relative flex items-center justify-center shrink-0">
                            <img src="/images/logovav.png" alt="Kangoust Logo" className="absolute w-[240%] h-[240%] max-w-none transition-transform duration-200 group-hover:scale-105 object-contain" />
                        </div>
                        <span className="font-extrabold text-[20px] sm:text-[24px] tracking-tight text-[#10245E]">
                            {appName}
                        </span>
                    </Link>

                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={handleLogout}
                            className="inline-flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-[14px] font-semibold text-[#64718F] hover:text-[#10245E] transition-colors cursor-pointer"
                        >
                            <LogOut className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#64718F]" />
                            <span>Se déconnecter</span>
                        </button>
                    </div>
                </header>

                {/* ── Grand Conteneur Cadre Central (Responsive) ── */}
                <div className="flex-1 flex items-center justify-center p-3 sm:p-6 lg:p-8 w-full">
                    <div className="w-full max-w-[1380px] bg-white rounded-[12px] sm:rounded-[14px] border border-[#E4E9F2] shadow-[0_8px_36px_rgba(16,36,94,0.05)] overflow-hidden flex flex-col md:flex-row min-h-auto md:min-h-[720px]">
                        
                        {/* Colonne gauche : Stepper (Mobile & Desktop) */}
                        <OnboardingSidebar
                            steps={steps}
                            currentStep={currentStep}
                            onStepClick={(step) => {
                                setCurrentStep(step);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        />

                        {/* Colonne droite : Contenu du formulaire */}
                        <main className="flex-1 p-4 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#F8FAFC] overflow-y-auto">
                            <div className="w-full">
                                {currentStep === 1 && (
                                    <Step1Situation
                                        locationType={locationType}
                                        setLocationType={setLocationType}
                                        formData={formData}
                                        setFormData={setFormData}
                                    />
                                )}

                                {currentStep === 2 && (
                                    <Step2Project
                                        locationType={locationType}
                                        projectType={projectType}
                                        setProjectType={setProjectType}
                                        formData={formData}
                                        setFormData={setFormData}
                                    />
                                )}

                                {currentStep === 3 && (
                                    <Step3Arrival
                                        locationType={locationType}
                                        formData={formData}
                                        setFormData={setFormData}
                                    />
                                )}

                                {currentStep === 4 && (
                                    <Step4Installation
                                        locationType={locationType}
                                        formData={formData}
                                        setFormData={setFormData}
                                    />
                                )}

                                {currentStep === 5 && (
                                    locationType === 'inside' ? (
                                        <Step6Profile
                                            formData={formData}
                                            setFormData={setFormData}
                                        />
                                    ) : (
                                        <Step5Needs
                                            formData={formData}
                                            setFormData={setFormData}
                                        />
                                    )
                                )}

                                {currentStep === 6 && (
                                    locationType === 'inside' ? (
                                        <Step7Summary
                                            locationType={locationType}
                                            projectType={projectType}
                                            formData={formData}
                                            onEditStep={(step) => {
                                                setCurrentStep(step);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                            onBack={handleBack}
                                            onFinish={handleFinish}
                                        />
                                    ) : (
                                        <Step6Profile
                                            formData={formData}
                                            setFormData={setFormData}
                                        />
                                    )
                                )}

                                {currentStep === 7 && locationType === 'outside' && (
                                    <Step7Summary
                                        locationType={locationType}
                                        projectType={projectType}
                                        formData={formData}
                                        onEditStep={(step) => {
                                            setCurrentStep(step);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        onBack={handleBack}
                                        onFinish={handleFinish}
                                    />
                                )}

                                {isSuccessStep && (
                                    <StepSummarySuccess
                                        locationType={locationType}
                                        projectType={projectType}
                                        formData={formData}
                                        onEditResponses={handleEditResponses}
                                        onFinish={handleGoToDashboard}
                                    />
                                )}
                            </div>

                            {/* Barre d'action inférieure (jusqu'à l'avant-dernière étape) */}
                            {currentStep < steps.length && (
                                <OnboardingActions
                                    currentStep={currentStep}
                                    totalSteps={steps.length}
                                    onBack={handleBack}
                                    onCancel={handleCancel}
                                    onContinue={handleContinue}
                                />
                            )}
                        </main>

                    </div>
                </div>

            </div>
        </>
    );
}
