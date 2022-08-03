import React from 'react';
import {Badge, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Navigation = () => {
	const cart = useSelector((state) => state.cart);

	return <>
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="ml-auto">
					<Link to='/' className='nav-link'>Home</Link>
					<Link to='/products' className='nav-link'>Products</Link>
					<Link to='/cart' className='nav-link'>
						Cart &nbsp;
						<Badge>{cart.length}</Badge>
					</Link>
				</Nav>
			</Container>
		</Navbar>
	</>
}

export default Navigation;