"use client"
import { navLinks } from '@/constants';
import Link from 'next/link';
import { useState } from 'react';


const NavItems = ({ onClick = () => { } }) => (
   <ul className="nav-ul">
      {navLinks.map((item) => (
         <li key={item.id} className="nav-li">
            <Link href={item.href} className="nav-li_a" onClick={onClick}>
               {item.name}
            </Link>
         </li>
      ))}
   </ul>
);

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => setIsOpen(!isOpen);
   const closeMenu = () => setIsOpen(false);

   return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50">
         <div className="max-w-7xl mx-auto c-space">
            <div className="flex justify-between items-center py-5 mx-auto ">
               <Link href="/" className="text-neutral-200 font-bold text-xl hover:text-white transition-colors">
                  Shourav
               </Link>

               <button
                  onClick={toggleMenu}
                  className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                  aria-label="Toggle menu">
                  <img src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'} alt="toggle" className="w-6 h-6" />
               </button>

               <nav className="sm:flex hidden">
                  <NavItems />
               </nav>
            </div>
         </div>

         <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <nav className="p-5">
               <NavItems onClick={closeMenu} />
            </nav>
         </div>
      </header>
   );
};

export default Navbar;
