import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 pt-24 lg:pt-28 bg-black">
      <div className="glass-card p-8 rounded-xl shadow-lg text-center max-w-md mx-4">
        <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-300 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary px-6 py-3 rounded-lg font-semibold inline-block">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
