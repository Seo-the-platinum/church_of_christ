import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
//types

type Slide = {
    slide: {
        source: string,
        title: string,
    }
}
const Slide = ({ slide }: Slide) => {
  return (
    <Link className='flex flex-col min-w-full' href={`/${slide.title}`}>
        <Image className='w-full' src={slide.source} alt={`${slide.title}`} width={100} height={100} />
    </Link>
  )
}

export default Slide