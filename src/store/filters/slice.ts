import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sorts, TSortItem } from 'data';
import { RootState } from '../store';

interface IFilterSliceState {
	sortBy: TSortItem;
}

const initialState: IFilterSliceState = {
	sortBy: sorts[0],
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setSortBy: (state, action: PayloadAction<TSortItem>) => {
			state.sortBy = action.payload;
		},
		setFilters(state, action) {
			//@ts-ignore
			state.sortBy = sorts.find(
				(sort) =>
					sort.value === action.payload.sortBy && sort.order === action.payload.order,
			);
		},
	},
});

export const selectFilters = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sortBy;

export const { setSortBy, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
