import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ProductApi } from 'api';
import { RootState } from '../store';

export const fetchProducts = createAsyncThunk(
	'products/fetchProductsStatus',
	async (params: Record<string, string>) => {
		const data = await ProductApi.getProducts(params);
		return data;
	},
);

export enum Status {
	LOADING = 'loading',
	COMPLETED = 'completed',
	ERROR = 'error',
}

export type TTrackItem = {
	id: number;
	name: string;
	duration: string;
};

export type TProduct = {
	id: string;
	name: string;
	author: string;
	realese_date: string;
	descripption: string;
	image: string;
	price: number;
	ganre: number;
	rating: number;
	track_list: TTrackItem[];
};

interface IProductSliceState {
	entities: TProduct[];
	status: Status;
}

const initialState: IProductSliceState = {
	entities: [],
	status: Status.LOADING,
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.entities = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.status = Status.LOADING;
			state.entities = [];
		});
		builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<TProduct[]>) => {
			state.entities = action.payload;
			state.status = Status.COMPLETED;
		});
		builder.addCase(fetchProducts.rejected, (state) => {
			state.status = Status.ERROR;
			state.entities = [];
		});
	},
});

export const selectProducts = (state: RootState) => state.products;

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
