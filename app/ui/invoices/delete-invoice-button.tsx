"use client"

import { TrashIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useFormStatus } from 'react-dom';

export default function DeleteInvoiceButton() {
  const { pending } = useFormStatus();
  if (pending) {
    return (
      <button disabled className="rounded-md border p-2" aria-disabled>
        <ClockIcon className="w-5 text-gray-300" />
      </button>)
  } else {
    return (
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <TrashIcon className="w-5" />
      </button>)
  }
}