import React from 'react'
import Navbar from './Navbar'
import Rout from '../Routes/Rout'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <Rout />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
