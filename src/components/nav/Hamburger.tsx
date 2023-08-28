import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Hamburger = () => {
    const [ open, setOpen ] = useState(false)
    const toggle = () => {
        setOpen((prev)=> !prev)
    }
  return (
    <div className={`${open ? 'translate-x-1/4' : 'translate-x-full'} transform-translate duration-500 ease-in-out absolute right-0 z-10`}>
        <div className='flex items-start'>
            <button className='absolute right-full' onClick={toggle}>
                <GiHamburgerMenu className='fill-emerald-400' size='2rem'/>
            </button>
            <div className='bg-emerald-500 flex flex-col w-4/5 min-h-screen'>
                <Link href='/'>
                    Home
                </Link>
                <Link href='/contact'>
                    Contact
                </Link>
                <Link href='/about'>
                    About
                </Link>
                <Link href='/meet'>
                    Meet the Congregation
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hamburger