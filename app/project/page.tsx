import Link from 'next/link';

export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-black px-4 py-12">
      <nav className="absolute top-4 right-6 space-x-4">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <Link href="/about" className="text-blue-600 hover:underline">About</Link>
        <Link href="/projects" className="text-blue-600 hover:underline">Projects</Link>
      </nav>

      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">My Projects & Skills</h1>

        <div className="text-left space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">🛠 Skills</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Python (App Development)</li>
              <li>HTML / CSS / Tailwind</li>
              <li>JavaScript & React</li>
              <li>Next.js (This site!)</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">📁 Projects</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Portfolio Website:</strong> A personal site built with Next.js and Tailwind CSS.</li>
              <li><strong>Python App:</strong> A desktop app built using Tkinter.</li>
              <li><strong>DSA Console RPG:</strong> A game project in C++ with data structures.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
