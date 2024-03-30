import React from 'react'
import logo from '../assets/mbblogo.jpg'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300'>
        <div>
            <img src={logo} alt="logo-image" style={{width: '80px'}}/>
        </div>


        {/* Menu */}
        <div>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Hamburger */}
        <div className='hidden'>
            <MenuIcon />
        </div>



        {/* mobile menu */ }
       <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Contact</li>
       </ul>



        {/* social icon */}
        <div className='hidden'></div>
    </div>
  )
}

export default Navbar