import Image from "next/image";

export default async function About() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-400 p-6">
      <h1 className="text-4xl font-bold text-black mb-4">About Me</h1>

      <div className="cursor-pointer mb-6">
        <Image src="/profile image.jpeg" alt="Dua Shakir Hussain" width={300} height={200} className="border border-black rounded-xl"/>
      </div>

      <p className="text-lg text-black max-w-2xl text-center">
        <i>
          Hello! My name is Dua Shakir Hussain, and I am from Karachi,
          Pakistan. I am passionate about web development and constantly
          eager to learn and explore new technologies.
        </i>
      </p>
    </div>
  );
}
