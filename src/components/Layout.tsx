import React from 'react'
import Nav from './nav/Nav'

//Types
import type { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex flex-col gap-6 items-center bg-slate-300'>
        <div className='flex flex-col max-w-7xl'>
            <Nav />
            <main>{children}</main>
        </div>
    </div>
  )
}

export default Layout