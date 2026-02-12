import { UserButton } from '@clerk/nextjs';
import { Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function Navbar() {
  return (
    <nav className='h-[10vh] flex items-center justify-between bg-black px-10 '>
      
      
      {/* Search Bar */}
      <div className='flex items-center gap-2 border-1  rounded-full px-4 py-2 w-96'>
        <input 
          type="text" 
          placeholder="Search..." 
          className='bg-transparent outline-none flex-1 text-sm '
        />
        <Search className='w-5 h-5 text-gray-500' />
      </div>
      <UserButton />
    </nav>
  )
}

export default Navbar;