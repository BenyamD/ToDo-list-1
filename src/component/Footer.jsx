import React from 'react'

export default function Footer() {
    var currentYear = new Date().getFullYear();
    return (
    <div className='footer'>
     Copyright @ {currentYear} BD
    </div>
  )
}
