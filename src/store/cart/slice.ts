import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type TCartItem = {
	id: string;
	name: string;
	author: string;
	realese_date: string;
	descripption: string;
	image: string;
	price: number;
	ganre: number;
	rating: number;
	count: number;
};

interface ICartSliceState {
	sum: number;
	count: number;
	products: TCartItem[];
}

const initialState: ICartSliceState = {
	products: [],
	sum: 0,
	count: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<TCartItem>) => {
			const isAlreadyAdded = state.products.find((prod) => prod.id === action.payload.id);

			if (isAlreadyAdded) {
				isAlreadyAdded.count += action.payload.count;
			} else {
				state.products.push({ ...action.payload, count: action.payload.count });
			}
			state.sum += action.payload.price * action.payload.count;
			state.count += action.payload.count;
		},
		removeProduct: (
			state,
			action: PayloadAction<{ id: string; price: number; count: number }>,
		) => {
			state.products = state.products.filter((prod) => prod.id !== action.payload.id);
			state.sum -= action.payload.price * action.payload.count;
			state.count -= action.payload.count;
		},
		incProduct: (state, action: PayloadAction<string>) => {
			const product = state.products.find((prod) => prod.id === action.payload);
			if (product) {
				product.count++;
				state.sum += product.price;
				state.count++;
			}
		},
		decProduct: (state, action: PayloadAction<string>) => {
			const product = state.products.find((prod) => prod.id === action.payload);
			if (product) {
				product.count--;
				state.sum -= product.price;
				state.count--;
			}
		},
		clearCart: (state) => {
			state.products = [];
			state.sum = 0;
			state.count = 0;
		},
	},
});

export const selectCart = ({ cart }: RootState) => cart;
export const selectIsProductAdded = (id: string) => (state: RootState) =>
	Boolean(state.cart.products.find((product) => product.id === id));

export const { addProduct, removeProduct, decProduct, incProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
