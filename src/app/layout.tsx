import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'


export default function RootLayout({ children,}: {
     children: React.ReactNode
   }) {
  return (
    <html lang="en">
      {/*
        <head/> will contain the components returned by the component: head.jsx.
  */}
      
      <body>
        <div className='header'>
          <Link className='logo' href='/'>
              {/*insert logo image or icon here*/}
              <img src="/ttt.png" alt="TTT logo"/>
          </Link>
          <nav className='navbar'>
            <ul>
              {/*insert list items for navbar here*/}
              <li><a href="/">Home</a></li>
              <li><a href="booking_session">Book a Session</a></li>
              {/* <li><a href="services">Services</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#About">Footsteps</a></li> */}
              <li><a href="blog_categories">Blogs</a></li>
              {/* <li><a href="#About">Contact</a></li> */}

            </ul>
          </nav>
        </div>
        {children}

        <div className='footer'>
          <div className='address'>
            <p className='emphasize'>Talk To Tobo</p>
            <p>+27 (81) 123 456</p>
            <p>hello@ttt.com</p>
            <br/>
            <p>House of Success</p>
            <p>28 Second Avenue</p>
            <p>Norwood, Mthahtha</p>
            <p>5099</p>
          </div>
          <div className='social'>
            <p className='emphasize'>Connect with Tobo</p>
            <div className="social-icons">
            
           </div>
          </div>
          <div className='icon'>
            <Image 
              src="/ttt.png" 
              alt="Hero image"
              width={140}
              height={100}>
            </Image>
            
          </div>
        </div>
      </body>
    </html>
  )
}
export const metadata = {
  title: 'TTT App by Duge',
  description: 'Prototype by Denver for TTT',
}
