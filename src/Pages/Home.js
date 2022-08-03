import React, {useEffect, useState} from 'react';
import ProductCard from "../Components/ProductCard";
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, STATUSES} from "../storage/slices/productSlice";

const Home = () => {
	const dispatch = useDispatch();
	const {data: products, status} = useSelector(state => state.product);

	useEffect(() => {
		dispatch(getProducts());
	}, [])

	if (status === STATUSES.LOADING) {
		return <>
			<h4>Loading...</h4>
		</>;
	} else if (status === STATUSES.ERROR) {
		return <h4>Something went wrong!</h4>
	}

	return <>
		<h1>All Products</h1>
		<Container>
			<Row>
				{
					products.map(product => <Col key={product.id}><ProductCard product={product}/></Col>)
				}
			</Row>
		</Container>
	</>;
}

export default Home;