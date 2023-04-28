import React from 'react'
import Navbar from './Navbar'
import toast, { Toaster } from 'react-hot-toast';
import Rout from '../Routes/Rout'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <Rout />
      <main>
        {children}
        <Toaster />
      </main>
    </div>
  )
}

export default Layout
