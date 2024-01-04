import Form from '@/app/ui/loads/edit-trucklog'
import Breadcrumbs from '@/app/ui/trucklogs/breadcrumbs';
import { notFound } from 'next/navigation';
import { fetchLoadsToday } from '@/app/lib/data';
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
          { label: 'Truck Logs', href: '/dashboard/loads' },
          {
            label: 'Edit Truck Log',
            href: `/dashboard/loads/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form Load ={loads}/>
    </main>
  );
}