import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = ()=>{
let products = [
{
	prodname:'Black shoes', id:10
},{
	prodname:'Black hat', id:11
}
]

let renderProd = products.map( (prod, idx)=>{
	return <NavLink key={idx} to={`/singleproduct/${prod.id}`}>
	<h1>{prod.prodname}</h1>
	</NavLink>
} )


	return <div>

{renderProd}

	</div>
}

export default Home