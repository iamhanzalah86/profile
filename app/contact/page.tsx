import Link from 'next/link';

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black px-4">
      <nav className="absolute top-4 right-6 space-x-4">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <Link href="/about" className="text-blue-600 hover:underline">About</Link>
        <Link href="/projects" className="text-blue-600 hover:underline">Projects</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </nav>

      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">📬 Contact Me</h1>
        <p className="text-lg text-gray-700 mb-2">Feel free to reach out via email or GitHub:</p>
        <p className="text-blue-600 underline mb-1">
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
        <p className="text-blue-600 underline">
          <a href="https://github.com/iamhanzalah86" target="_blank">github.com/iamhanzalah86</a>
        </p>
      </div>
    </main>
  );
}
// This is a simple Next.js page component that serves as the contact page.
// It includes navigation links to other pages and displays contact information.