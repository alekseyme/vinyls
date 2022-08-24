import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from 'store/cart/slice';

import { VinylIcon } from 'components/Icons';

import styles from './Cart.module.scss';

export const Cart: React.FC = () => {
	const { sum, count } = useSelector(selectCart);

	return (
		<div className={styles.root}>
			<Link to="/cart">
				<span>{sum} ₽</span>
				<VinylIcon />
				<span>{count}</span>
			</Link>
		</div>
	);
};
