import React, { useEffect, useState } from 'react'

const ResizeHook = () => {
  const [ windowWidth, setWindowWidth ] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])
  return windowWidth
}

export default ResizeHook