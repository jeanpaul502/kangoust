import { Head, Link } from '@inertiajs/react';
import { Icon } from '@iconify/react';
import DashboardLayout from '../../../../layouts/DashboardLayout';
export default function ComingSoon({ title = 'Bientôt disponible', description = 'Cet écran est en préparation.' }) {
 return <DashboardLayout><Head title={title}/><section className="min-h-[60vh] grid place-items-center"><div className="max-w-lg text-center bg-white border border-[#E4E9F2] rounded-2xl p-8 sm:p-12"><Icon icon="solar:widget-5-broken" className="mx-auto h-10 w-10 text-[#2F67D8]"/><h1 className="mt-5 text-2xl font-extrabold text-[#10245E]">{title}</h1><p className="mt-3 text-sm leading-6 text-[#64718F]">{description}</p><Link href="/dashboard" className="mt-6 inline-flex rounded-lg bg-[#2F67D8] px-5 py-3 text-sm font-bold text-white">Retour à l’accueil</Link></div></section></DashboardLayout>;
}
