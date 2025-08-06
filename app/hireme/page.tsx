'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HireMe() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/careers');
  }, [router]);

  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Redirecting...</h1>
        <p className="text-gray-400">Taking you to our careers page.</p>
      </div>
    </div>
  );
}