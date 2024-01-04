import Form from '@/app/ui/loading/loading-form';
import Breadcrumbs from '@/app/ui/trucklogs/breadcrumbs';
import { fetchTruckCheckInById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({params}: {params: {id: number}}) {
    const id = params.id;
    const truckCheckIn = await fetchTruckCheckInById(id);
    if (!truckCheckIn) {
      return notFound();
    }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Truck Logs', href: '/dashboard/loading' },
          {
            label: 'Edit Loading Log',
            href: `/dashboard/loading/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form TruckCheckIn={truckCheckIn}/>
    </main>
  );
}