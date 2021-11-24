import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='navbar'>
		<NavLink to={'/'} style={({isActive})=> isActive ? styles.activeLink : styles.defaultLink}>
			Home page
		</NavLink>

		<NavLink to={'/about'} style={({isActive})=> isActive ? styles.activeLink : styles.defaultLink}>
			About page
		</NavLink>

		<NavLink to={'/contacts'} style={({isActive})=> isActive ? styles.activeLink : styles.defaultLink}>
			Contacts page
		</NavLink>
			
		</div>
	)
}

let styles = {
  activeLink: {
    color: "orange"
  },
  defaultLink: {
    color: "green"
  }
};


export default Navbar