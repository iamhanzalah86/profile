import Link from 'next/link';

export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-black px-4 py-12">
      <nav className="absolute top-4 right-6 space-x-4">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <Link href="/about" className="text-blue-600 hover:underline">About</Link>
        <Link href="/projects" className="text-blue-600 hover:underline">Projects</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </nav>

      <div>
  <h2 className="text-2xl font-semibold mb-3">🛠 Skills</h2>
  <div className="flex flex-wrap gap-3 justify-center">
    {[
      'Python (App Dev)',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Git',
      'GitHub',
    ].map((skill) => (
      <span
        key={skill}
        className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-br from-purple-200 via-blue-200 to-cyan-200 text-black shadow-md hover:scale-105 hover:shadow-purple-400 transition duration-300"
      >
        {skill}
      </span>
    ))}
  </div>
</div>
<div>
  <h2 className="text-2xl font-semibold mb-6 text-center">📁 Projects</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
    {[
      {
        title: 'Portfolio Website',
        desc: 'A personal site built with Next.js and Tailwind CSS.',
        img: '/projects/portfolio.jpg',
      },
      {
        title: 'Python App',
        desc: 'A desktop app built using Tkinter for basic utilities.',
        img: '/projects/python-app.jpg',
      },
    ].map((project) => (
      <div
        key={project.title}
        className="max-w-xs w-full rounded-xl overflow-hidden border border-transparent bg-white/5 backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300 shadow-md hover:shadow-cyan-400/30 hover:scale-105"
      >
        {/* Top Image */}
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-60 object-cover"
        />

        {/* Bottom Description */}
        <div className="p-4 text-white text-center">
          <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
          <p className="text-sm text-gray-300">{project.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>

 
    </main>
  );
}
