import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-blue-300 h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-center text-6xl font-bold text-white mb-12">Welcome to My Websit</h1>
      <button className="bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition duration-300">
        <Link href="/about">Learn More</Link>
      </button>
    </div>
  );
}
