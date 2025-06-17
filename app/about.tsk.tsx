import Link from 'next/link';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white text-black">
      <nav className="absolute top-4 right-6 space-x-4">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <Link href="/about" className="text-blue-600 hover:underline">About</Link>
      </nav>

      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-600">
          I'm Hanzalah Jamal — a passionate CS student who builds apps in Python and clean web UIs.
        </p>
      </div>
    </main>
  );
}
