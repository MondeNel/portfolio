import React, {useState} from 'react'
import logo from '../assets/mbblogo.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';

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
                {!nav ? <MenuIcon /> : <CloseIcon />}
            </div>



        {/* mobile menu */ }
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl' >Home</li>
                    <li className='py-6 text-4xl' >About</li>
                    <li className='py-6 text-4xl' >Skills</li>
                    <li className='py-6 text-4xl' >Contact</li>
            </ul>



        {/* social icon */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-white'
                    href="/">
                        LinkedIn <LinkedInIcon size={30}/>
                    </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-white'
                    href="/">
                        GitHub <GitHubIcon size={30}/>
                    </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6de4ca]'>
                    <a className='flex justify-between items-center w-full text-white'
                    href="/">
                        Email <EmailIcon size={30}/>
                    </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5f5f5f]'>
                    <a className='flex justify-between items-center w-full text-white'
                    href="/">
                        Resume <ArticleIcon size={30}/>
                    </a>
                    </li>
                </ul> 
        </div>
    </div>
  )
}

export default Navbar