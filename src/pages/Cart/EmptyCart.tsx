import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Cart.module.scss';

const EmptyCart: React.FC = () => {
	return (
		<div className={styles.empty_cart}>
			В корзине нет ни одной пластинки
			<div className={styles.empty_cart_descr}>где-то в мире грустит один граммофон</div>
			<p>
				<Link to="/">перейти на страницу товаров</Link>
			</p>
		</div>
	);
};

export default EmptyCart;
