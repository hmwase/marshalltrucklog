import Form from '@/app/ui/truckLoads/edit-trucklog';
import Breadcrumbs from '@/app/ui/trucklogs/breadcrumbs';
import { fetchLoadsToday } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({params}: {params: {id: number}}) {
    const id = params.id;
    const loads = await fetchLoadsToday(id);
    if (!loads) {
      return notFound();
    }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Truck Logs', href: '/dashboard/trucklogs' },
          {
            label: 'Edit Truck Log',
            href: `/dashboard/truckLoads/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form Load={loads}/>
    </main>
  );
}