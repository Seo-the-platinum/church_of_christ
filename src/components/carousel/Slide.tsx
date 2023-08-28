import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
//types

type Slide = {
    slide: {
        header: string,
        source: string,
        title: string,
        path: string,
    }
}
const Slide = ({ slide }: Slide) => {
  return (
    <Link className='flex flex-col min-w-full' href={`/${slide.path}`}>
        <Image className='w-full aspect-video' src={slide.source} alt={`${slide.title}`} width={200} height={100} />
        <div className='bg-slate-950 absolute bottom-0 h-20 bg-opacity-60 w-full flex items-center pl-4'>
            <p className='text-slate-100 text-2xl'>{slide.header}</p>
        </div>
    </Link>
  )
}

export default Slide