import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import Sidebar from './Sidebar';


function Navbar() {
  const [open,setOpen]=useState(false)
  const hanleNavButton=()=>{
    setOpen(!open)
    console.log("click")

  }
  return (
    <div className="">
   <div>
   <Sidebar hanleNavButto={hanleNavButton} open={open} />
   </div>
      <div className=" bg-gradient-to-r from-gray-600 via-blue-100 to-blue-300  h-24 z-40 px-4 w-full">
        {/* sidebar icon */}
        <div className="flex justify-between items-center relative   z-40 py-8">
        <div className={`w-[3.2rem] flex justify-center  items-center fixed ${open?'block':'hidden'} text-white p-2 bg-gradient-to-r from-pink-900 via-pink-700 to-pink-500 rounded-full` }>
          <AiOutlineMenu size={30} onClick={hanleNavButton} />
        </div>
          {/* university logo */}
          <div>

          </div>
          <div className=''>

     <h2 className='uppercase text-blue px-3 lg:block hidden'>cbst</h2>
          </div>
          {/* social icon */}
          <div className='flex justify-center items-center text-white'>
          <h2 className='uppercase text-blue px-3 lg:hidden block'>cbst</h2>
           <div className=' lg:block hidden'>
         <div className='flex justify-center items-center text-black'>
         <FaFacebook size={30} style={{ marginRight: '10px' }} />
            <FaTwitter size={30} style={{ marginRight: '10px' }} />
            <FaInstagram size={30} />
         </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
