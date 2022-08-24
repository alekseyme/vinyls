import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filterReducer from 'store/filters/slice';
import cartReducer from 'store/cart/slice';
import productsReducer from 'store/products/slice';
import { useDispatch } from 'react-redux';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
	filter: filterReducer,
	cart: cartReducer,
	products: productsReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['products'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
