import React from 'react'

function Navbar() {
  return (
    <nav className="fixed left-0 right-0 mx-5 mt-5 bg-white text-black h-20 flex justify-between items-center rounded-3xl shadow-lg">
  <div className="ml-8 flex justify-start">
    <ul className="hidden md:flex gap-8">
      <li className="hover:text-2xl transition-all duration-1500  "><a href="/">Home</a></li>
      <li className="hover:text-2xl transition-all duration-1500 "><a href="/shop">Shop</a></li>
     
      <li className="hover:text-2xl transition-all duration-1500 "><a href="/about">About Us</a></li>
    
      <li className="hover:text-2xl transition-all duration-1500 "><a href="/contact">Contact</a></li>
    </ul>
  </div>
  <div className="mr-8 flex gap-10">
    <h1 className="text-3xl">Karma</h1>
    <a href="/Login">
  <div className=" w-10 h-10 rounded-full border-2"> 
    
  </div>
  </a>

  </div>
</nav>
  )
}

export default Navbar