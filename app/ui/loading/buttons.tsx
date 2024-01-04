import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteTruckLog } from '@/app/lib/action';

export function UpdateTruckLog({ id }: { id: number }) {
 
  return (
    <Link
      href={`/dashboard/loading/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Loading Log</span>
        <PencilIcon className="w-5" />
      </button>
    
    </Link>
  );
}

export function DeleteTruckLog({ id }: { id: number }) {
  const deleteTruckLogWithId = deleteTruckLog.bind(null, id);
  return (
    <>
    <form action={deleteTruckLogWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
    </>
  );
}

export function Location({title} : {title : string}) {
  return (
    <button className=" w-20 bg-blue-500 text-white inline-flex items-center rounded-full px-2 py-1 text-xs">
      {title}
    </button>
  )
}
