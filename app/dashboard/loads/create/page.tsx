import Form from '@/app/ui/loads/load-form';
import Breadcrumbs from '@/app/ui/trucklogs/breadcrumbs';
import { fetchAllTruckCheckIns } from '@/app/lib/action';
import { notFound } from 'next/navigation';
 import ImportExcel  from '@/app/ui/loads/ImportExcel';
export default async function Page() {

    const truckCheckIn = await fetchAllTruckCheckIns();
    if (!truckCheckIn) {
      return notFound();
    }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Truck Loads', href: '/dashboard/loads' },
          {
            label: 'Edit Truck Load',
            href: `/dashboard/loads`,
            active: true,
          },
        ]}
      />
      <ImportExcel />
    </main>
  );
}