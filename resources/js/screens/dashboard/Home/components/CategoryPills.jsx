import { Briefcase, Home, Car, Calendar, BookOpen, Users } from 'lucide-react';

export default function CategoryPills({ onSelectCategory }) {
    const categories = [
        { id: 'travail', label: 'Travail', icon: Briefcase, color: 'text-[#2F67D8]', bg: 'bg-[#F0F5FF]' },
        { id: 'logement', label: 'Logement', icon: Home, color: 'text-[#0284C7]', bg: 'bg-[#F0F9FF]' },
        { id: 'vehicules', label: 'Véhicules', icon: Car, color: 'text-[#EA580C]', bg: 'bg-[#FFF7ED]' },
        { id: 'evenements', label: 'Événements', icon: Calendar, color: 'text-[#E11D48]', bg: 'bg-[#FFF1F2]' },
        { id: 'guide', label: 'Guide', icon: BookOpen, color: 'text-[#9333EA]', bg: 'bg-[#FAF5FF]' },
        { id: 'communaute', label: 'Communauté', icon: Users, color: 'text-[#16A34A]', bg: 'bg-[#F0FDF4]' },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
            {categories.map((cat) => {
                const IconComponent = cat.icon;

                return (
                    <button
                        key={cat.id}
                        type="button"
                        onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                        className="h-12 rounded-[12px] border border-[#E2E8F0] bg-white hover:bg-gray-50 hover:border-gray-300 px-4 flex items-center justify-center gap-3 transition-all shadow-xs cursor-pointer group"
                    >
                        <div className={`w-8 h-8 rounded-[8px] ${cat.bg} flex items-center justify-center shrink-0`}>
                            <IconComponent className={`w-4.5 h-4.5 ${cat.color}`} />
                        </div>
                        <span className="text-[13.5px] font-bold text-[#10245E] group-hover:text-[#2F67D8] transition-colors">
                            {cat.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
