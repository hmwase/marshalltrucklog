import { PencilIcon, PlusIcon, TrashIcon, CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteTruckLog } from '@/app/lib/action';

export function CreateLoad() {
  return (
    <Link
      href="/dashboard/loads/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Truck Load</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function SubmitLoads() {
  return (
    <Link
      href="/dashboard/loads/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Submit Loads</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function ChooseFile() {
  <input type="file" className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
    <span>Choose file</span>{''}
    <PlusIcon className="h-5 md:ml-4" />
  </input>
}

export function UpdateTruckLoad({ id }: { id: number }) {
 
  return (
    <Link
      href={`/dashboard/loads/${id}/edit`}
      className="rounded-md border p-2 hover:bg-yellow-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteTruckLoad({ id }: { id: number }) {
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
    <button className=" w-20 h-5 bg-blue-500 text-white inline-flex items-center rounded-full px-2 py-1 text-xs">
      {title}
     </button>
  )
}