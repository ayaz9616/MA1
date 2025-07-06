import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between shadow-md bg-white">
      {/* Left Logo */}
      <div className="flex items-center">
        <img src="/images/footer_path.png" alt="Logo" className="w-12 h-12 object-contain" />
      </div>

        <div className='flex'>
      {/* Center Navigation Links */}
      <nav className="flex gap-6 text-sm font-semibold text-black uppercase tracking-wide items-center justify-center">
        <a href="#" className="hover:text-blue-700">Home</a>
        <a href="#" className="hover:text-blue-700 min-w-28">How It Works</a>
        <a href="#" className="hover:text-blue-700">Services</a>
        <a href="#" className="hover:text-blue-700">Testimonials</a>
        <a href="#" className="hover:text-blue-700">Podcasts</a>
      </nav>

      {/* Right Badge */}
      <div className='flex justify-center items-center h-full w-full ml-8'>
        <img
          src="/images/nav.png"
          alt="BBB Badge"
          className="w-[160px] h-auto object-contain border border-teal-700 rounded-md"
        />
      </div>
      </div>
    </header>
  );
}
