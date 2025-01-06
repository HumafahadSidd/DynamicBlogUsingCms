import React from 'react';

export default function MainPage() {
  return (
    <div className="w-full h-screen relative">
      {/* YouTube iframe */}
      <iframe
        width="100%" // Making the iframe responsive
        height="100%" // Adjusting height to cover the container
        src="https://www.youtube.com/embed/T4NT9_XDHkU?controls=0&modestbranding=1&rel=0&showinfo=0"
        title="The World Travel Guy"
        allow="accelerometer=0; autoplay=0; clipboard-write=0; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute top-0 left-0"
      ></iframe>

      {/* Overlay Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-5xl  mb-4 font-semibold">EXPLORE.DREAM.DISCOVER</h1>
        <h2 className="text-lg">This is a world travel blog featuring beautiful destinations</h2>
        <p className="text-white px-10 text-center">Please tag along!</p>
<div className="mt-6 text-center">
  
          
             <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg border bg-transparent border-white  font-bold text-white py-2 px-4 hover:bg-orange-400 hover:text-black transition duration-300 ">
    Explore More
  </button> 
</div>

      </div>
    </div>
  );
}
