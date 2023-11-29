import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
export default function DashboardLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center  leading-none text-white`}
    >
    <GlobeAltIcon className="h-10 w-10 rotate-[15deg]" />
      <span className="text-[22px] px-2"><Link href="/dashboard">Dashboard</Link></span>
      

    </div>
  );
}
