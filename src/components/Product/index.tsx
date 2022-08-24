import React from 'react';
import { addProduct, selectIsProductAdded, TCartItem } from 'store/cart/slice';
import { TProduct } from 'store/products/slice';
import { useDispatch, useSelector } from 'react-redux';
import { pages } from 'data';
import { Link } from 'react-router-dom';

import { Button } from 'components';

import styles from './Product.module.scss';

export const Product: React.FC<TProduct> = ({
	id,
	name,
	author,
	realese_date,
	descripption,
	image,
	price,
	ganre,
	rating,
}) => {
	const dispatch = useDispatch();
	const isAdded = useSelector(selectIsProductAdded(id));

	const productGanre = pages.find((page) => page.id === ganre);

	const handleAddProduct = () => {
		const product: TCartItem = {
			count: 1,
			id,
			name,
			author,
			realese_date,
			descripption,
			image,
			price,
			ganre,
			rating,
		};
		dispatch(addProduct(product));
	};

	return (
		<div className={styles.root}>
			<Link to={`/product/${id}`}>
				<img className={styles.image} src={image} alt="clothes" />
			</Link>
			<h4 className={styles.title}>{name}</h4>
			<div className={styles.author}>{author}</div>
			<div className={styles.ganre}>{productGanre?.name}</div>

			<div className={styles.bottom}>
				<div className={styles.price}>{price} ₽</div>
				{isAdded ? (
					<Link to="/cart">
						<Button outline>В корзину</Button>
					</Link>
				) : (
					<Button onClick={handleAddProduct}>Добавить</Button>
				)}
			</div>
		</div>
	);
};
