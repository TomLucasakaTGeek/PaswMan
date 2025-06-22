import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
    <div className='mycontainer flex justify-between items-center px-4 py-5 h-14'>
        
        <div className='logo font-bold text-white text-2xl'>
            <span className='text-green-500'>&lt;</span>
            <span>Pass</span>
            <span className='text-green-500'>OP/&gt;</span>
        </div>
      
      <button className='text-white bg-green-500 my-5 rounded-full flex justify-between items-center p-1 px-2 cursor-pointer'>
        <img className="invert w-6 mr-2" src="/github.svg" alt="github logo" /><span className='font-bold'>GitHub</span>
      </button>

      </div>
    </nav>
  )
}

export default Navbar
