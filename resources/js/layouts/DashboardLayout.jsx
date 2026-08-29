import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Icon } from '@iconify/react';
import Sidebar from '../components/layout/Sidebar/Sidebar';
import Header from '../components/layout/Header/Header';
import { mobileNavigation } from '../data/demo/navigation';
import { routes } from '../config/routes';
export default function DashboardLayout({ children, headerSearch = 'full', userName, userAvatar }) {
 const [open,setOpen]=useState(false); const {url}=usePage();
 return <div className="flex h-dvh max-w-full overflow-hidden bg-[#F5F8FF] font-sans text-[#10245E]">
  <Sidebar isMobileOpen={open} onMobileClose={()=>setOpen(false)}/>
  <div className="flex min-w-0 flex-1 flex-col overflow-hidden"><Header searchMode={headerSearch} userName={userName} userAvatar={userAvatar} onMobileMenuOpen={()=>setOpen(true)}/>
   <main className="min-w-0 flex-1 overflow-x-hidden overflow-y-auto p-4 pb-28 sm:p-6 sm:pb-28 lg:p-8 lg:pb-10 xl:p-10"><div className="mx-auto w-full max-w-[1650px]">{children}</div></main>
  </div>
  <nav aria-label="Navigation mobile" className="fixed inset-x-0 bottom-0 z-30 grid h-[72px] grid-cols-4 border-t border-[#E4E9F2] bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
   {[...mobileNavigation,{id:'profil',label:'Profil',icon:'solar:user-circle-broken',href:routes.profile}].map(item=>{const active=url===item.href||url.startsWith(item.href+'/');return <Link key={item.id} href={item.href} className={`flex flex-col items-center justify-center gap-1 text-[11px] font-semibold ${active?'text-[#2F67D8]':'text-[#64718F]'}`}><Icon icon={item.icon} className="h-5 w-5"/><span>{item.label}</span></Link>})}
  </nav>
  <Link href={routes.publish} aria-label="Publier une annonce" className="fixed bottom-[58px] right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#2F67D8] text-white shadow-[0_8px_24px_rgba(47,103,216,.38)] transition hover:bg-[#2458C2] focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden"><Icon icon="solar:add-circle-broken" className="h-7 w-7"/></Link>
 </div>
}
