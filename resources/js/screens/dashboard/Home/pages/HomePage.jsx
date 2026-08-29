import DashboardLayout from '../../../../layouts/DashboardLayout';
import HomeHero from '../components/HomeHero';
import RecommendedHousing from '../../Housing/components/RecommendedHousing';
import RecommendedJobs from '../../Work/components/RecommendedJobs';
import RecommendedEvents from '../../Events/components/RecommendedEvents';
import RightSidebar from '../components/RightSidebar';

export default function Dashboard() {
    return (
        <DashboardLayout activeTab="accueil" userName="Fabrice">
            {/* Grille principale : Colonne gauche (8 cols) et colonne droite (4 cols sur desktop, empilées sur tablette/mobile) */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-7 items-start">
                
                {/* ── Colonne Principale Gauche (8 cols sur grand écran) ── */}
                <div className="xl:col-span-8 space-y-7 sm:space-y-8.5">
                    
                    {/* Section Hero d'installation */}
                    <HomeHero
                        userName="Fabrice"
                        destinationCity="Perth"
                        daysRemaining={20}
                        originCity="Paris"
                        visaType="Visa PVT (Subclass 417)"
                        isInAustralia={false}
                    />

                    {/* Section Logements & Opportunités d'emploi */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                        <div className="lg:col-span-8 flex flex-col">
                            <RecommendedHousing />
                        </div>
                        <div className="lg:col-span-4 flex flex-col">
                            <RecommendedJobs />
                        </div>
                    </div>

                    {/* Section Opportunités autour de vous */}
                    <div>
                        <RecommendedEvents />
                    </div>

                </div>

                {/* ── Colonne Latérale Droite (4 cols sur grand écran) ── */}
                <div className="xl:col-span-4 flex flex-col">
                    <RightSidebar />
                </div>

            </div>
        </DashboardLayout>
    );
}
