import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeProduct, incProduct, decProduct, TCartItem } from 'store/cart/slice';

import { Button, Counter } from 'components';
import { DeleteIcon } from 'components/Icons';

import styles from './CartProduct.module.scss';

export const CartProduct: React.FC<TCartItem> = ({
	id,
	name,
	price,
	count,
	image,
	author,
	realese_date,
}) => {
	const dispatch = useDispatch();

	const handleIncProduct = () => {
		dispatch(incProduct(id));
	};

	const handleDecProduct = () => {
		dispatch(decProduct(id));
	};

	const handleRemoveProduct = () => {
		dispatch(removeProduct({ id, price, count }));
	};

	return (
		<div className={styles.root}>
			<div className={styles.vinyl_box}>
				<div className={styles.image}>
					<Link to={`/product/${id}`}>
						<img src={image} alt="vinyl" />
					</Link>
				</div>
				<div className={styles.info}>
					<h3>{name}</h3>
					<p>{author}</p>
					<p>{realese_date}</p>
				</div>
			</div>
			<div className={styles.price}>
				<b>{price} ₽</b>
			</div>
			<Counter count={count} onDecClick={handleDecProduct} onIncClick={handleIncProduct} />

			<div className={styles.remove}>
				<Button onClick={handleRemoveProduct} link>
					<DeleteIcon />
				</Button>
			</div>
		</div>
	);
};
