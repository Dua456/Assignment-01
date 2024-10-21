export default function Contact() {
  return (
    <div className="bg-purple-400 h-screen flex items-center justify-center">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center font-bold mb-4">Contact Me</h1>

        <form className="max-w-md w-full">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name"> Name </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name"/>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="your@email.com" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message"/>
          </div>

          <button className="bg-[#B99470] hover:bg-[#C5705D] text-white font-bold py-2 px-4 rounded" type="submit">Send Message </button>
        </form>
      </div>
    </div>
  );
}
