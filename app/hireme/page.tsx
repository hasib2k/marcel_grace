'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HireMe() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/careers');
  }, [router]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
      {/* Tech Circuit Pattern Background - Same as Footer */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <pattern id="tech-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="none" stroke="#697565" strokeWidth="0.2"/>
              <circle cx="5" cy="5" r="1" fill="#697565"/>
              <circle cx="15" cy="15" r="1" fill="#697565"/>
              <line x1="5" y1="5" x2="15" y2="5" stroke="#697565" strokeWidth="0.2"/>
              <line x1="15" y1="5" x2="15" y2="15" stroke="#697565" strokeWidth="0.2"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#tech-circuit)"/>
          </svg>
        </div>
      </div>

      <div className="relative text-center">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-200 p-8 sm:p-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 tracking-wider uppercase">
            REDIRECTING...
          </h1>
          <p className="text-sm sm:text-base text-gray-700 tracking-wide uppercase">
            TAKING YOU TO OUR CAREERS PAGE.
          </p>
        </div>
      </div>
    </div>
  );
}