import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='flex gap-6 bg-slate-900 text-slate-50 p-2 justify-evenly'>
        <Link href='/'>
            HOME
        </Link>
        <Link href='/about'>
            WHAT&apos;S THE CHURCH ABOUT?
        </Link>
        <Link href='/contact'>
            CONTACT US
        </Link>
    </div>
  )
}

export default Nav