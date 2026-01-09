'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function BackButton({ label = 'Артқа' }: { label?: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="mb-6 text-gray-600 hover:text-black transition flex items-center gap-2 text-sm"
      aria-label="Go back"
      type="button"
    >
      <span className="text-lg leading-none">←</span>
      <span>{label}</span>
    </button>
  );
}
