import React from 'react'
import './Container.css'

export default function Container({children}) {
  return (
    <nav className='container'>{children}</nav>
  )
}
