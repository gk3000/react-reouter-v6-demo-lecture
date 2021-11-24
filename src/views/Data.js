import React from 'react'
import {useParams} from 'react-router-dom'

const Data = () => {
	const params = useParams()
	return (
		<div>
			<h1>Data component</h1>
			<p>This data is coming through the url params: {params.somedata}</p>
		</div>
	)
}

export default Data