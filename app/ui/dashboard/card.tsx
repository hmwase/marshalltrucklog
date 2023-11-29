import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
  } from '@heroicons/react/24/outline';
  import { lusitana } from '@/app/ui/fonts';
  import { getTotalTrucksCheckedInForCurrentMonth } from '@/app/lib/data';
  import { getTotalTrucksCheckedInForCurrentYear } from '@/app/lib/data';
  import { getTotalTrucksCheckedInForToday } from '@/app/lib/data';
  import {getTotalUniqueCompaniesForCurrentMonth} from '@/app/lib/data';
  const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
  };
  
  export default async function CardWrapper() {
    const totalTrucksCheckedIn= await getTotalTrucksCheckedInForCurrentMonth();
    const totalTrucksForTheYear = await getTotalTrucksCheckedInForCurrentYear();
    const totalTrucksToday = await getTotalTrucksCheckedInForToday();
    const totalCompanies = await getTotalUniqueCompaniesForCurrentMonth();
    return (
      <>
        {/* NOTE: comment in this code when you get to this point in the course */}
  
        <Card title="Number of Trucks For The Month" value={totalTrucksCheckedIn} type="collected" />
         <Card title="Number of Trucks For the Current Year" value={totalTrucksForTheYear} type="pending" />
        <Card title="Number of Trucks Today" value={totalTrucksToday} type="invoices" />
        <Card
          title="Total Companies For the Month"
          value={totalCompanies}
          type="customers"
        />   
      </>
    );
  }
  
  export function Card({
    title,
    value,
    type,
  }: {
    title: string;
    value: number | string;
    type: 'invoices' | 'customers' | 'pending' | 'collected';
  }) {
    const Icon = iconMap[type];
  
    return (
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
          <h3 className="ml-2 text-sm font-medium">{title}</h3>
        </div>
        <p
          className={`${lusitana.className}
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          {value}
        </p>
      </div>
    );
  }
  