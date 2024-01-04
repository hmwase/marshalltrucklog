import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function TruckLogStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-yellow-500 text-white': status === 'checkedin',
          'bg-green-500 text-white': status === 'checkedout',
          'bg-red-500 text-white': status === 'loading',
          'bg-blue-500 text-white': status === 'stripping',
        },
      )}
    >
      {status === 'checkedin' ? (
        <>
          Checked-In
          <ClockIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'checkedout' ? (
        <>
          Checked-Out
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'loading' ? (
        <>
          Loading
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'stripping' ? (
        <>
          Stripping
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
