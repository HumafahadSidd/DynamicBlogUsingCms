import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className="text-gray-600 body-font bg-[#31323C]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-[#31323C]">
    <Link href="/" className="flex title-font font-medium items-center  text-white mb-4 md:mb-0">
    
      <span className="ml-3 text-xl">BLOGS </span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-white justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/About" className="mr-5 hover:text-gray-900">About Us</Link>
      <Link href="/Blog" className="mr-5 hover:text-gray-900">Blogs</Link>
      <Link href="/Contact" className="mr-5 hover:text-gray-900">Contact Us</Link>
    </nav>

  </div>
</header>

    </div>
  )
}

export default Navbar