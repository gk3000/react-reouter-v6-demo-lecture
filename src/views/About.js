import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

const About = (props) => {
	const location = useLocation()
	console.log(location)
	const navigate = useNavigate()

	return (
		<div>
			<h1>About component</h1>
			<p>Username from props: {props.username}</p>
			<button onClick={(e,d)=>props.hello(e,'banana')}>Click me</button>
			<p onClick={()=>navigate(-2)}>Go back</p>
			<p onClick={()=>navigate('/')}>Go Home</p>
		</div>
	)
}

export default About