import React from 'react'
import Haeder from './Componenets/Navabar/Haeder'

const Layout = ({children}) => {
  return (
    <>
      <Haeder />
      <main>{children}</main>
    </>
  )
}

export default Layout