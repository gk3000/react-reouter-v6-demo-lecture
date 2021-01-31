import React from 'react'

const About = (props)=>{
	return <div>
	<h1>About us page / component (c) {props.year}</h1>
	<p onClick={()=>props.history.goBack()}>go back</p>
	</div>
}


export default About