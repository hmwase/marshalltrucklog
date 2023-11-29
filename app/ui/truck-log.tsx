import { TruckIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center  leading-none text-white`}
    >
      <TruckIcon className="h-12 w-12" />
      <span className="text-[22px] px-2"><Link href="/">Marshall Truck Log</Link></span>
      

    </div>
  );
}
