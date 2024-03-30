import React, {useState} from 'react'
import logo from '../assets/mbblogo.jpg'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300'>
        <div>
            <img src={logo} alt="logo-image" style={{width: '80px'}}/>
        </div>


        {/* Menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
 

        {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                <MenuIcon />
            </div>



        {/* mobile menu */ }
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl' >Home</li>
                    <li className='py-6 text-4xl' >About</li>
                    <li className='py-6 text-4xl' >Skills</li>
                    <li className='py-6 text-4xl' >Contact</li>
            </ul>



        {/* social icon */}
        <div className='hidden'></div>
    </div>
  )
}

export default Navbar