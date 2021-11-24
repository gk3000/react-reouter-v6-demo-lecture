import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'

const SingleProduct = () => {
	const params = useParams()
	
	// useEffect(()=>{
	// 	// send a request to the server to get full details of product with params.product
	// })

	return (
		<div>
			<p>The current product ID we are looking at is {params.product}</p>
		</div>
	)
}

export default SingleProduct