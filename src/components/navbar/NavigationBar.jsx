import * as React from 'react';

import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css';


/* Show responsive navbar in browser */
const NavigationBar = () => {
  const props = {
    items: [
      {
        text: 'Home',
        link: '/',
      },

      {
        text: 'About Me',
        link: '/about-me',
      },

      {
        text: 'Portfolio',
        link: '/portfolio',
      },

      {
        text: 'Contact Me',
        link: '/contact-me',
      }
    ],

    logo: {
      text: 'Alfrenanda Yonathan Siregar',
      link: '/',
    },

    style: {
      barStyle: {
        background: '#444',
      },

      sidebarStyles: {
        background: '#645f83',
        buttonColor: 'white'
      }
    },

  }
  return (
    <>
      <Navbar {...props} />
    </>
  )
}

export default NavigationBar
