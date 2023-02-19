import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='flex justify-between lg:px-8 xl:px-28 md:px-4 items-center text-white pt-3'>
            <img src="/assets/logo.svg" alt="logo" />
            <ul className='xl:flex lg:flex  gap-x-8 w-fit md:flex hidden '>
                <a href="#main"><li className='cursor-pointer uppercase text-xs font-Open_Sans font-bold'>MAIN</li></a>
                <a href="#about"><li className='cursor-pointer uppercase text-xs font-Open_Sans font-bold'>about</li></a>
                <a href="#fetures"><li className='cursor-pointer uppercase text-xs font-Open_Sans font-bold'>game features</li></a>
                <a href="#system_requirement"><li className='cursor-pointer uppercase text-xs font-Open_Sans font-bold'>System requirements</li></a>
                <a href="#quotes"><li className='cursor-pointer uppercase text-xs font-Open_Sans font-bold'>quotes</li></a>
            </ul>
            <div className='flex items-center'>
                <select name="" id="" className='bg-transparent text-darktext cursor-pointer'>
                    <option value="">eng</option>
                    <option value="">rus</option>
                    <option value="">fra</option>
                    <option value="">deu</option>
                </select>
                <span className='flex border-l pl-4 gap-x-4 ml-5'>
                    <img src="/assets/xbox icon.svg" alt="xbox" className='hidden xl:block md:block lg:block cursor-pointer' />
                    <img src="/assets/steam icon.svg" alt="stream" className='hidden xl:block md:block lg:block cursor-pointer'/>
                    <div className='lg:hidden md:hidden xl:hidden sm:hidden'>
                        <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="9.49854" y="15.0166" width="14.585" height="2.5" rx="1.25" fill="white"/>
                        <rect x="0.596191" y="7.51657" width="23.4873" height="2.5" rx="1.25" fill="white"/>
                        <rect x="0.596191" y="0.016571" width="23.4873" height="2.5" rx="1.25" fill="white"/>
                        </svg>
                    </div>
                </span>
            </div>
        </nav>
    </div>
  )
}
