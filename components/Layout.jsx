import React from 'react';
import { Header } from './';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout = ({children}) => {
  return (
    <>
        <div className='container'>
          <div className='wrapper'>
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </div>

    </>
  )
}

export default Layout