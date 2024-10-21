import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black py-6 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-white text-4xl font-bold cursor-pointer">Website</h1>

        <ul className="flex items-center space-x-6 flex-grow justify-center">
          <li className="bg-gray-700 rounded-md px-4 py-2">
            <Link href="/" className="text-gray-300">Home</Link>
          </li>

          <li className="bg-gray-700 rounded-md px-4 py-2">
            <Link href="/about" className="text-gray-300">About</Link>
          </li>

          <li className="bg-gray-700 rounded-md px-4 py-2">
            <Link href="/skills" className="text-gray-300">Skills</Link>
          </li>

          <li className="bg-gray-700 rounded-md px-4 py-2">
            <Link href="/work" className="text-gray-300">Work</Link>
          </li>

          <li className="bg-gray-700 rounded-md px-4 py-2">
            <Link href="/contact" className="text-gray-300">Contact</Link>
          </li>

          <li className="bg-gray-700 rounded-md px-4 py-2">
            <Link href="/service" className="text-gray-300">Service</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
