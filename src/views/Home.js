import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
	let products = [
	{
		prodname: "Black shoes",
		id: 10
	},
	{
		prodname: "Black hat",
		id: 11
	}
	];

	let renderProducts =(data)=>(data.map(p=><div key={p.id}>
		<h1>Product name: {p.prodname}</h1>
		<p>Product ID: {p.id}</p>
		<NavLink to={`/singleproduct/${p.id}`}>See full product</NavLink>
	</div>))

	return (
		<div>
		<h1>Home component</h1>
		{renderProducts(products)}
		</div>
		)
}

export default Home