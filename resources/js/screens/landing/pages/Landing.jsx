import { Head } from '@inertiajs/react';
import Navbar from '@/screens/landing/components/Navbar';
import HeroSection from '@/screens/landing/components/HeroSection';
import StatsSection from '@/screens/landing/components/StatsSection';
import FeaturesSection from '@/screens/landing/components/FeaturesSection';
import CTASection from '@/screens/landing/components/CTASection';
import Footer from '@/screens/landing/components/Footer';

export default function Landing() {
    const appName = import.meta.env.VITE_APP_NAME || 'Kangoust';

    return (
        <>
            <Head>
                <meta name="description" content={`${appName} est votre guide pour bien commencer votre nouvelle vie en Australie. De votre préparation avant le départ jusqu’à votre installation sur place.`} />
            </Head>

            <div className="min-h-screen bg-white text-[#10245E] font-sans antialiased overflow-x-hidden">
                <Navbar />
                <main>
                    <HeroSection />
                    <StatsSection />
                    <FeaturesSection />
                    <CTASection />
                </main>
                <Footer />
            </div>
        </>
    );
}
