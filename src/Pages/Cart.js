import React from 'react';
import {useSelector} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import ProductCard from "../Components/ProductCard";

const Cart = () => {
	const products = useSelector(state => state.cart);
	return <>
		<h2>My Cart</h2>
		<Container>
			<Row>
				{
					products.map(product => <Col key={product.id}><ProductCard product={product}/></Col>)
				}
			</Row>
		</Container>
	</>
}

export default Cart;