

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col w-screen justify-between bg-gray-100 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Empowering Tech Solutions
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl">
          We provide cutting-edge technology solutions to elevate your business.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
          Get Started
        </button>
      </section>
    </div>
  );
}
