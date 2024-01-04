import Form from '@/app/ui/trucklogs/create-log';
import Breadcrumbs from '@/app/ui/trucklogs/breadcrumbs';
import { fetchAllTruckCheckIns } from '@/app/lib/action';
import { notFound } from 'next/navigation';
 
export default async function Page() {

    const truckCheckIn = await fetchAllTruckCheckIns();
    if (!truckCheckIn) {
      return notFound();
    }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Truck Logs', href: '/dashboard/trucklogs' },
          {
            label: 'Edit Truck Log',
            href: `/dashboard/trucklogs`,
            active: true,
          },
        ]}
      />
      <Form TruckCheckIn={truckCheckIn}/>
    </main>
  );
}