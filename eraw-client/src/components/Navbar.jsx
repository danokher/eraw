import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// react icons
import { FaCrow, FaXmark, FaBars } from "react-icons/fa6";
import { key } from 'localforage';
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const {user} = useContext(AuthContext);
    // console.log(user)

    //toggle menu
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    }, [])

    // navItems here
    const navItems = [
        {link: "Home", path: "/"},
        {link: "Shop", path: "/shop"},
        {link: "Admin/Sellers Dashboard", path: "/admin/dashboard"},
    ]
  return (
    <header className='z-50 w-full bg-transparent fixed top-0 left-0 right-o transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 bg-salmon ${isSticky ? "sticky top-0 left-0 right-0 bg-salmon" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                {/* logo */}
                <Link to="/" className='text-2xl font-bold text-orange3 flex items-center gap-2' ><FaCrow
                className='inline-block'/>eRaw</Link>

                {/* nav items for large devices */}

                <ul className='md:flex space-x-12 m-auto hidden'>
                    {
                        navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base 
                        text-coltext uppercase cursor-pointer hover:text-orange3'>{link}</Link>)
                    }

                </ul>

                {/* menu btn for mobile devices */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-coltext focus:outline-none'>
                        {
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-orange3 hover:text-coltext'/> : <FaBars
                            className='h-5 w-5 text-orange3 hover:text-coltext'/> 
                        }
                    </button>
                </div>
            </div>

            {/* navitems for sm devices */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-orange3 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            
               {
                navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base 
                text-coltext hover:text-white uppercase cursor-pointer'>{link}</Link>)
               } 
            </div>
        </nav>
    </header>
  )
}

export default Navbar