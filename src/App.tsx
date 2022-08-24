import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout';
import { Home, ProductDetail, Cart, NotFound } from 'pages';

import './scss/app.scss';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="" element={<Home />} />
				<Route path="/ganre/:id" element={<Home />} />
				<Route path="/product/:id" element={<ProductDetail />} />
				<Route path="cart" element={<Cart />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default App;
