'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HireMe() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/careers');
  }, [router]);

  return (
  <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
  <h1 className="text-xs md:text-sm font-bold text-black mb-4">Redirecting...</h1>
  <p className="text-xs md:text-sm text-gray-700">Taking you to our careers page.</p>
      </div>
    </div>
  );
}