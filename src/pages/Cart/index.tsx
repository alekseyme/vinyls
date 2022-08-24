import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, selectCart } from 'store/cart/slice';

import { CartProduct, Button } from 'components';
import EmptyCart from './EmptyCart';

import styles from './Cart.module.scss';

export const Cart: React.FC = () => {
	const { products, sum, count } = useSelector(selectCart);
	const dispatch = useDispatch();

	const handleOrderConfirm = () => {
		alert('Спасибо за клик');
	};

	if (products.length < 1) {
		return (
			<div className={styles.root}>
				<EmptyCart />
			</div>
		);
	}

	return (
		<div className={styles.root}>
			<div className={styles.top}>
				<h2>Корзина</h2>
				<Button onClick={() => dispatch(clearCart())} link>
					Удалить всё
				</Button>
			</div>
			<div className={styles.items}>
				{products.map((product) => (
					<CartProduct key={product.id} {...product} />
				))}
			</div>
			<div className={styles.bottom}>
				<div className={styles.details}>
					<div>
						Всего: <b>{count} шт.</b>
					</div>
					<div>
						Сумма: <b>{sum} ₽</b>
					</div>
				</div>
				<div className="bottom-controls">
					<Link to="/">
						<Button outline>Назад</Button>
					</Link>
					<Button onClick={handleOrderConfirm}>Оформить заказ</Button>
				</div>
			</div>
		</div>
	);
};
