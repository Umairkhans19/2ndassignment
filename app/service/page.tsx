import React from 'react';

const ServicePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-200">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Behind the stage of seemingly simple event, there are put lots of efforts 
        of organizers to serve the right purpose of the event. Team AL-FALAH takes charge 
        of all important and detailed responsibilities of client host and puts up a 
        dazzling event. Our 9 years of experience road helps us to quickly find solutions
         and ideas and respond to our customers. AL-FALAH tradition of taking diverse 
         event projects and then managing it with grace encourages clients to come to 
         us when they dont have a single idea. We then feed them sketch of what, 
         the event be like factoring in all the clients concerns and requirements. 
         We know very well how to implement a concept and promote it.
        Be it a festival, fund raiser, corporate meeting or wedding, AL-FALAH has set 
        records of organizing hi-fi events within shortest deadlines. We are always 
        eager to produce and project something that can make us the first choice of 
        our client.So tell us, when and what your next event is and we will give you 
        the best event planning services.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">What We Offer:</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li className="mb-2">Outdoor vs Indoor Events.</li>
          <li className="mb-2">Unraveling the Mystique: The Reality of Being an Event Planner.</li>
          <li className="mb-2">Extravagant Affairs: Exploring the Expensive Weddings in Pakistan.</li>
          <li className="mb-2">Weighing the Pros and Cons.</li>
          <li className="mb-2">Leaving attendees with cherished memories that last a lifetime.</li>
        </ul>
        <h4> <b>
        Call Us Today: +923-111-111-111
          </b>  </h4>
      </div>
    </div>
  );
};

export default ServicePage;