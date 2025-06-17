'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function about() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white flex flex-col justify-between">

      {/* Header */}
      <header className="w-full h-20 p-5 flex justify-between items-center bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md rounded-b-lg">
        {/* Logo on the left */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            className="rounded-full" 
          />
          <h1 className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">COFFEEE</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center sm:justify-end gap-2 text-sm">
          {['About', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="group relative px-4 py-2 text-white border border-white/20 rounded-md overflow-hidden transition duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition duration-300 z-0 blur-sm" />
              <span className="relative z-10 group-hover:shadow-lg group-hover:shadow-purple-500 transition duration-300">
                {item}
              </span>
            </Link>
          ))}
        </nav>
      </header> 

      <div className="h-0.5 w-full animate-gradient-line" />

      {/* Main Content */}
      <section id="about" className="text-center flex-grow flex flex-col items-center justify-center px-6 pt-35">
        <div className='p-[3px] rounded-full'>
          <Image
            src="/me.jpg.png" // Make sure your image is placed in the /public folder
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-6 border-4 border transparent hover:border hover:animate-gradient-line transition duration:500 ease-in-out transform hover:scale-105 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/50"
          />
        </div>
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent pb-10">COFFEE</h2>
        <div className="flex gap-4 mt-4">
          <button className="px-6 py-2 rounded-md bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-black font-semibold transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(216,180,254,0.8)]">
            Developer
          </button>
          <button className="px-6 py-2 rounded-md bg-gradient-to-r from-teal-200 via-green-200 to-blue-200 text-black font-semibold transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(170,255,243,0.8)]">
            Community Manager
          </button>
        </div>
        <div className="max-w-xl text-gray-400 text-base px-4 leading-relaxed mt-4 italic">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl text-center mx-auto px-4 mt-4">
            Hi there! I'm <span className="text-gray">Coffee</span> a Developer & Community Manager who finds joy in building cool things with code. I love exploring new tech, staying curious, and balancing work with creativity, whether that’s diving into a side project, catching up on games, jamming to music, or spending quality time with friends.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="https://discord.com/users/your-id"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg text-sm font-medium bg-white/10 text-white hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/40 transition duration-300 backdrop-blur-md border border-white/20 hover:bg-gradient-to-r from-indigo-500 to-purple-500 flex justify-center items-center gap-2"
          >
            <Image src="/icons/discord.png" alt="Discord" width={20} height={15} />
            Discord
          </a>
          <a
            href="https://x.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg text-sm font-medium bg-white/10 text-white hover:scale-105 hover:shadow-lg hover:shadow-slate-400/40 transition duration-300 backdrop-blur-md border border-white/20 hover:bg-gradient-to-r from-gray-600 to-black flex justify-center items-center gap-2"
          >
            <Image src="/icons/X.png" alt="X" width={35} height={35} />
            X
          </a>
          <a
            href="mailto:youremail@example.com"
            className="px-5 py-2 rounded-lg text-sm font-medium bg-white/10 text-white hover:scale-105 hover:shadow-lg hover:shadow-pink-400/40 transition duration-300 backdrop-blur-md border border-white/20 hover:bg-gradient-to-r from-pink-500 to-rose-400 flex justify-center items-center gap-2"
          >
            <Image src="/icons/email.png" alt="Email" width={35} height={35} />
            Email
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg text-sm font-medium bg-white/10 text-white hover:scale-105 hover:shadow-lg hover:shadow-neutral-400/40 transition duration-300 backdrop-blur-md border border-white/20 hover:bg-gradient-to-r from-zinc-700 to-gray-900 flex justify-center items-center gap-2"
          >
            <Image src="/icons/github.png" alt="GitHub" width={30} height={30} />
            GitHub
          </a>
        </div>
      </section>

      <section id="projects" className="py-16 px-6 pt-35">
        <h2 className="text-5xl font-extrabold text-center pb-10 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent pb-15">
          My Projects
        </h2>

        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
          {[
            {
              title: 'Portfolio Website',
              desc: 'A personal site built with Next.js and Tailwind CSS.',
              img: '/projects/portfolio.jpg',
            },
            {
              title: 'DSA Console RPG',
              desc: 'A game project in C++ that teaches data structures via RPG mechanics.',
              img: '/projects/rpg-game.jpg',
            },
            {
              title: 'Python App',
              desc: 'A desktop app built using Tkinter for basic utilities.',
              img: '/projects/python-app.jpg',
            },
          ].map((project, index) => (
            <div
              key={project.title}
              className="relative w-72 rounded-xl overflow-hidden bg-white/5 backdrop-blur-md text-white text-center
                   animate-heartbeat-glow transition-all duration-300 border border-transparent hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]"
            >
              {/* Gradient border background layer */}
              <div className="absolute inset-0 rounded-xl border border-transparent bg-black blur-md opacity-40 z-[-1]" />

              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-extrabold mb-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient-text">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section id="contact" className="py-20 px-6 pt-20 text-white text-center">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent pb-10"> Get In Touch</h2>
        <p className="max-w-xl mx-auto text-gray-400 text-lg mb-8">
          If you need an expert in digital innovation, let’s connect to explore how I can add value.
        </p>

        <div className="flex justify-center">
          <a
            href="mailto:youremail@example.com"
            className="px-8 py-4 rounded-lg text-lg font-medium bg-white/10 text-white hover:scale-105 hover:shadow-lg hover:shadow-pink-400/40 transition duration-300 backdrop-blur-md border border-white/20 hover:bg-gradient-to-r from-pink-500 to-rose-400 flex items-center gap-2"
          >
            <img src="/icons/email.png" alt="Email" width={34} height={34} />
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      {/* Gradient Line */}
      <div className="w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500" />

      {/* Footer Text */}
      <footer className="w-full h-20 p-5 bg-gradient-to-br from-black via-gray-900 to-blue-900 text-center">
        <p className="text-sm text-white">© 2025{` `}
          <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 hover:drop-shadow-md transition duration-300 cursor-pointer">
            Coffee
          </span>. All rights reserved.
        </p>
      </footer>

    </main>
  )
}
// This is a simple Next.js page component that serves as the homepage.
// Note: Ensure you have the necessary styles for the gradient line animation in your global CSS or Tailwind configuration.
// You can add the following CSS to your global styles or Tailwind config:
// .animate-gradient-line {
//   @apply bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-[length:400%_100%] animate-[gradientLine_6s_ease_infinite];
// } 