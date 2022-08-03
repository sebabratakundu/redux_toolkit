import React from 'react';
import {Button, Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {add} from "../storage/slices/cartSlice";

const ProductCard = ({product}) => {
	const dispatch = useDispatch();

	const addToCart = () => {
		dispatch(add(product))
	}

	return <>
	<Card>
		<Card.Body>
			<Card.Img src={product.image} height='250'></Card.Img>
			<Card.Title>{product.title}</Card.Title>
			<Card.Text>{product.description.substring(0, 100)}</Card.Text>
			<Button onClick={addToCart}>Add to Cart</Button>
		</Card.Body>
	</Card>
	</>
}

export default ProductCard;