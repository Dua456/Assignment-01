export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-orange-200 p-5">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">My Work</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Project 1</h3>
        <p className="text-gray-600 mb-4">
          Description of project 1.{" "}
          <a href="https://countdown-timer-66zwecvwh-dua-shakirs-projects-28eb8e4c.vercel.app" className="text-blue-500 underline hover:text-blue-700">
            View Project
          </a>
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Project 2</h3>
        <p className="text-gray-600 mb-4">
          Description of project 2.{" "}
          <a href="https://weather-widget-5uozmxuck-dua-shakirs-projects-28eb8e4c.vercel.app" className="text-blue-500 underline hover:text-blue-700">
            View Project
          </a>
        </p>
      </div>
    </div>
  );
}
