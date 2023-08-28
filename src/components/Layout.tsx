import React from 'react'
import Nav from './nav/Nav'
import ResizeHook from '../utils/hooks/ResizeHook'
import Hamburger from './nav/Hamburger'
//Types
import type { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  const windowWidth = ResizeHook()
  return (
    <div className='flex flex-col gap-6 items-center bg-slate-300 min-h-screen overflow-hidden'>
        <div className='flex sm:flex-col max-w-7xl'>
          {
            windowWidth < 640 ? <Hamburger/> : <Nav/>
          }
          <main>{children}</main>
        </div>
    </div>
  )
}

export default Layout