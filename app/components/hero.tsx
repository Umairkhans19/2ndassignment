const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-red-200 via-red-300 to-red-400 py-20 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg p-12 max-w-3xl text-center border-4 border-red-500 transition-transform transform hover:scale-105 hover:rotate-2">
        <h2 className="text-4xl font-bold text-gray-900"> Welcome to the AL-FALAH EVENTS (Hero Section) </h2>
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">

          We give full liberty to the ideas of clients and do our best to execute them as 
          smartly and realistically as possible. We strive to add value to our service,
          providing cohesive corporate event planning while outlining your event strategy.
          Handling one event at a time help AL-FALAH EVENTS full resources towards exceptional
          and well focused event management.
          
        </p>
      </div>
    </section>
  );
};

export default Hero;