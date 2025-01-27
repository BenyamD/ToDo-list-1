import React from 'react'

export default function Footer() {
    var currentYear = new Date().getFullYear();
    return (
    <div>
     Copyright @ {currentYear} BD
    </div>
  )
}
