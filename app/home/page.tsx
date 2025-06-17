'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white flex flex-col justify-between">
      {/* Header */}
      <header className="w-full h-20 p-5 flex justify-between items-center bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md rounded-b-lg">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={70} height={70} className="rounded-full" />
          <h1 className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">COFFEEE</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center sm:justify-end gap-2 text-sm">
          {[
            { label: 'Home', href: '/home' },
            { label: 'About', href: '/about' },
            { label: 'Projects', href: '/projects' },
            { label: 'Contact', href: '/contact' }
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="group relative px-4 py-2 text-white border border-white/20 rounded-md overflow-hidden transition duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition duration-300 z-0 blur-sm" />
              <span className="relative z-10 group-hover:shadow-lg group-hover:shadow-purple-500 transition duration-300">
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-4">
          Welcome to My Portfolio
        </h2>
        <p className="text-gray-400 max-w-xl">
          Hi, I'm Coffee. I’m a developer and community manager who crafts meaningful projects. Explore more below.
        </p>
        <Link
          href="/about"
          className="mt-6 px-8 py-3 rounded-md text-lg font-medium bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 transition-all duration-300 shadow-md"
        >
          Learn About Me
        </Link>
      </section>

      {/* Footer */}
      <footer className="w-full h-20 p-5 bg-gradient-to-br from-black via-gray-900 to-blue-900 text-center">
        <p className="text-sm text-white">
          © 2025 <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Coffee</span>. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
