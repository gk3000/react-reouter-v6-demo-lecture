import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = (props)=>{
	return <div className='navbar'>

	<NavLink 
	exact 
	to={'/'}
	>Home page
	</NavLink>

	<NavLink 
	exact 
	to={'/about'}
	>About us
	</NavLink>

	<NavLink 
	exact 
	to={'/contact'}
	>Contact page
	</NavLink>

{/*		<ul onClick={ (e)=>props.selectPage(e.target.textContent) }>
			<li>Home</li>
			<li>About</li>
			<li>Contacts</li>
		</ul>*/}
	</div>
}


export default Navbar