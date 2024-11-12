'use client'
import { useState,useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionOpen,setIsSolutionOpen] = useState(false);
  const [isPlatformOpen,setisPlatformOpen] = useState(false);
  const [isCompanyOpen,setisCompanyOpen] = useState(false);
  const handleSolutionClick = () => {
    setIsSolutionOpen(!isSolutionOpen);
    setisPlatformOpen(false);
    setisCompanyOpen(false);
  };

  const handlePlatformClick = () => {
    setIsSolutionOpen(false);
    setisPlatformOpen(!isPlatformOpen);
    setisCompanyOpen(false);
  };

  const handleCompanyClick = () => {
    setIsSolutionOpen(false);
    setisPlatformOpen(false);
    setisCompanyOpen(!isCompanyOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      // Check if screen size is less than or equal to 'md' (768px)
      if (window.matchMedia('(max-width: 767px)').matches) {
        // Open the menu if screen size is within 'md' range
        setIsMenuOpen(true);
      } else {
        // Close the menu if screen size is greater than 'md'
        setIsMenuOpen(false);
      }
    };


    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up by removing event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <nav className='w-full flexCenter'>
      <div className='px-4 flex flexCenter flex-row w-full min-[1024px]:text-1xl'>
        <div className='flexCenter w-4/5 md:w-1/4'>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={150} height={150} className='w-24 h-12 min-[426px]:w-32 min-[426px]:h-16 lg:w-40 lg:h-20'/>
          </Link>
        </div>
        <div className='w-1/5 flex justify-end pr-4 md:w-3/4 md:justify-end lg:pr-20 2xl:pr-40'>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden focus:outline-none items-end"
          >
            <Image 
              src="/menu.png"
              width={60}
              height={60}
              alt='menu'
              className='w-8 h-8 min-[425px]:w-12 min-[425px]:h-12'
            />
          </button>

          
          <ul className={`md:flex md:justify-end md:gap-1 min-[1100px]:gap-4 lg:h-full lg:gap-8 lg:p-1  ${isMenuOpen ? 'flex flex-col bg-blue-60 flexCenter float-right absolute top-12 min-[426px]:top-14 left-0 right-0 z-20 p-4 pb-6' : 'hidden'}   `}> 
            <li >     
              <Link legacyBehavior href={'/'}>
                <div className="text-black flexCenter cursor-pointer transition-all block" >
                  <div onClick={handleSolutionClick}   className={`flexCenter p-2 gap-2 px-4 hover:rounded-full   `}>
                    <button className={`w-30 border-1 `}>Solutions</button>
                    <Image src="/arrow-down.png" alt='arrow-down' height={10} width={10}/>
                    <div className= {isSolutionOpen ? 'flex z-30 flex-col bg-slate-300 bg-opacity-10 flexCenter absolute top-12  min-[426px]:top-14  md:top-8  md:p-6 rounded-lg' : 'hidden'}>
                      <ul className='flex flex-col gap-2 md:gap-3 lg:gap-4'>
                        <li><a>Employeers</a></li>
                        <li><a>Employees</a></li>
                        <li><a>Brokers</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li className={`${isSolutionOpen ? 'mt-[90px] md:mt-0' : 'mt-0'} `} >     
              <Link legacyBehavior href={'/'}>
                <div className="text-black flexCenter cursor-pointer transition-all block" >
                  <div onClick={handlePlatformClick} className='flexCenter p-2 gap-2 px-4 hover:rounded-full'>
                    <button className={`w-30 border-1 `}>Platform</button>
                    <Image src="/arrow-down.png" alt='arrow-down' height={10} width={10}/>
                    <div className= {isPlatformOpen  ? 'flex z-30 flex-col bg-slate-300 bg-opacity-10 flexCenter absolute  md:top-8  top-24  md:p-6  rounded-lg' : 'hidden'}>
                      <ul className='flex flex-col gap-2 md:gap-3 lg:gap-4'>
                        <li><a>Overview</a></li>
                        <li><a>Benefits</a></li>
                      </ul>
                    </div>
                  </div>   
                </div>
              </Link>
            </li>
            <li className={`${isPlatformOpen ? 'mt-[65px] md:mt-0' : 'mt-0' } `} >     
              <Link legacyBehavior href={'/'}>
                <a className="text-black flexCenter cursor-pointer transition-all block" >
                  <div  className='flexCenter p-2 gap-2 px-4 hover:rounded-full'>
                    <button className={`w-30 border-1`}>Resources</button>                    
                  </div>
                  
                </a>
              </Link>
            </li>
            <li  >     
              <Link legacyBehavior href={'/'}>
                <div className="text-black flexCenter cursor-pointer transition-all block" >
                  <div onClick={handleCompanyClick} className='flexCenter p-2 gap-2 px-4 hover:rounded-full'>
                    <button className={`w-30 border-1`}>Company</button>
                    <Image src="/arrow-down.png" alt='arrow-down' height={10} width={10}/>
                    
                    <div className= {isCompanyOpen  ? 'flex flex-col z-30 bg-slate-300  bg-opacity-10 flexCenter absolute top-[170px] md:top-8 md:p-6 rounded-lg' : 'hidden'}

                     >
                      <ul className='flex flex-col gap-2 md:gap-3 lg:gap-4'>
                        <li><a>About</a></li>
                        <li><a>Careers</a></li>

                      </ul>
                    </div>
                  </div>
                  
                </div>
              </Link>
            </li>
            <Link className={`${isCompanyOpen ? 'mt-[60px] md:mt-0' : 'mt-0'} `} href={'/auth/Login'}>
            <button className='rounded-full px-8 p-2 bg-blue-50 text-white'>Login</button>
            </Link>
            
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;
