import {createSlice} from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
		IDLE: 'idle',
		ERROR: 'error',
		LOADING: 'loading'
	}
)

const initialState = {
	data: [],
	status: STATUSES.IDLE,
}

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		// addProduct: (state, action) => {
		// }
		setProducts: (state, action) => {
			state.data = action.payload
		},
		setStatus: (state, action) => {
			state.status = action.payload
		}
	}
})

export const {setProducts, setStatus} = productSlice.actions
export default productSlice.reducer;

export function getProducts() {
	return async function(dispatch, action) {
		dispatch(setStatus(STATUSES.LOADING));

		try {
			const response = await fetch('https://fakestoreapi.com/products');
			const products = await response.json();

			dispatch(setProducts(products));
			dispatch(setStatus(STATUSES.IDLE));
		} catch (e) {
			dispatch(setProducts([]));
			dispatch(setStatus(STATUSES.ERROR));
		}
	}
}
