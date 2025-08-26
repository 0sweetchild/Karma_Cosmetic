import React from 'react'

function Login() {
  return (
    <div className="bg-black w-screen h-screen text-white flex justify-center text-center ">
{/* <div className='border-2 h-10 w-20 text-center items-center absolute top-5 left-5 cursor-pointer hover:bg-white hover:text-black rounded-full flex justify-center'>
    <span > <a href="/Home">  Return  </a></span>
</div> */}
 <div className="w-full max-w-md p-8 mt-30">
   <h1 className="text-3xl">log in</h1>
   <span>or <a href="/Signup" className='text-gray-400'>create a new account</a>
   </span>

   <div>
     <div className="flex justify-center my-4">
  <input type="text"  placeholder="Email or Username" className="w-full  h-16 px-6 bg-white rounded-full text-black border border-gray-300 "/>
</div>

<div className="flex justify-center my-4">
  <input type="Password"  placeholder="Password" className="w-full  h-16 px-6 bg-white rounded-full text-black border border-gray-300 "/>
</div>

<div className="flex justify-center my-4">
  <button className="w-full  h-16 px-6 bg-black rounded-full text-white border border-gray-300  hover:bg-white hover:text-black">Enter</button>
</div>

<span>Forgot Password?</span>

   </div>
 </div>

</div>
  )
}

export default Login