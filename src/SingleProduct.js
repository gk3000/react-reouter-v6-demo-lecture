import React from 'react'

const SingleProduct = (props)=>{
	return <h1>Product: {props.match.params.product}</h1>
}


export default SingleProduct