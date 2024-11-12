const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-24 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-16 max-w-2xl text-center border border-gray-300 transition-transform
       transform hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-semibold text-gray-600 mb-2 tracking-tight">
          Welcome to
        </h2>

        <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight leading-tight">
          <span className="text-indigo-600">AL-FALAH EVENTS</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          We bring your vision to life with creativity and precision. Our team is dedicated to delivering
           seamless and impactful events, focusing entirely on one event at a time to ensure meticulous 
           attention to detail. Trust AL-FALAH EVENTS for corporate event planning that elevates your ideas.
        </p>
      </div>
    </section>
  );
};

export default Hero;