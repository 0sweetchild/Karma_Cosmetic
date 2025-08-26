import React from 'react'

function Footer() {
  return (
   <footer className="bg-black text-white w-full h-50">
<div className=" text-center cursor-pointer  ">
  <h1 className="text-6xl  mb-4">Karma</h1>
  <h2 className="text-2xl">
  <span className="text-black hover:text-white transition-all duration-700">Natural</span>
  <span className="text-black hover:text-white transition-all duration-700">Cosmetic</span>

  <span className="text-black hover:text-white transition-all duration-700">For</span>
  <span className="text-black hover:text-white transition-all duration-700">Radiant</span>
  <span className="text-black hover:text-white transition-all duration-700">Skin</span>
  </h2>
  </div>

<hr className="ml-20 mr-20"></hr>
<div className="text-center text-gray-300 my-5">
  &copy; 2025 Karma Cosmetics. All rights reserved.
</div>


  
</footer>
  )
}

export default Footer