import axios from 'axios';
import { TProduct } from 'store/products/slice';

const api = () => {
	const api = axios.create({
		baseURL: 'https://62b4636aa36f3a973d32e8ac.mockapi.io',
	});

	return api;
};

export const ProductApi = {
	async getProductById(id: string) {
		const { data } = await api().get<TProduct>('/products/' + id);
		return data;
	},

	async getProducts(params: Record<string, string>) {
		const { data } = await api().get<TProduct[]>('/products', {
			params,
		});
		return data;
	},
};
