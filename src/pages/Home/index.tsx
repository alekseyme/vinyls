import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch } from 'store/store';
import { fetchProducts, selectProducts } from 'store/products/slice';
import { selectFilters } from 'store/filters/slice';
import { pages } from 'data';

import { Product, ProductLoader, Sort } from 'components';

import styles from './Home.module.scss';

export const Home = () => {
	const dispatch = useAppDispatch();
	const { id } = useParams();
	const { sortBy } = useSelector(selectFilters);
	const { entities, status } = useSelector(selectProducts);

	const getProducts = () => {
		const params = {
			sortBy: sortBy?.value,
			order: sortBy?.order,
			ganre: Number(id) === 0 || !id ? '' : id,
		};
		dispatch(fetchProducts(params));
	};

	React.useEffect(() => {
		getProducts(); // eslint-disable-next-line
	}, [sortBy, id]);

	const productGanreName = !id ? 'Все' : pages.find((page) => page.id === Number(id))?.name;

	if (status === 'completed' && entities.length === 0) {
		return <Navigate to="/" replace={true} />;
	}

	return (
		<>
			<div className={styles.title_group}>
				<h2 className={styles.title}>{productGanreName}</h2>
				<Sort />
			</div>
			<div className={styles.root}>
				<div className={styles.items}>
					{status === 'loading'
						? [...new Array(4)].map((_, i) => <ProductLoader key={i} />)
						: entities.map((product: any) => <Product key={product.id} {...product} />)}
				</div>
			</div>
		</>
	);
};
