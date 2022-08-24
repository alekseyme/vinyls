import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ProductApi } from 'api';
import { pages } from 'data';
import { TProduct } from 'store/products/slice';
import { addProduct, selectIsProductAdded, TCartItem } from 'store/cart/slice';
import { createStarRating } from 'utils/createStarRating';

import { Counter, ProductInfoItem, Loader, Button, TrackList } from 'components';

import styles from './ProductDetail.module.scss';

export const ProductDetail: React.FC = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isAdded = useSelector(selectIsProductAdded(id || ''));
	const [product, setProduct] = React.useState<TProduct>();
	const [starRating, setStarRating] = React.useState<string>('');
	const [count, setCount] = React.useState<number>(1);

	const getProductById = async (id: string) => {
		try {
			const data = await ProductApi.getProductById(id);
			setProduct(data);
			setStarRating(createStarRating(data.rating));
		} catch (error) {
			navigate('/', { replace: true });
		}
	};

	const productGanre = product ? pages.find((page) => page.id === product.ganre) : null;

	React.useEffect(() => {
		if (id) {
			getProductById(id);
		} // eslint-disable-next-line
	}, []);

	const handleAddProduct = () => {
		if (product) {
			const productObj: TCartItem = {
				count,
				id: product.id,
				name: product.name,
				author: product.author,
				realese_date: product.realese_date,
				descripption: product.descripption,
				image: product.image,
				price: product.price,
				ganre: product.ganre,
				rating: product.rating,
			};
			// console.log(productObj);

			dispatch(addProduct(productObj));
		}
	};

	const handleDecProduct = () => {
		setCount((prev) => prev - 1);
	};

	const handleIncProduct = () => {
		setCount((prev) => prev + 1);
	};

	if (!product) {
		return (
			<div className={styles.root}>
				<Loader />
			</div>
		);
	}

	return (
		<div className={styles.root}>
			<div className={styles.poster}>
				<img src={product.image} alt="clothes" />
				{isAdded ? (
					<Link to="/cart">
						<Button outline>В корзину</Button>
					</Link>
				) : (
					<Button onClick={handleAddProduct}>Добавить</Button>
				)}
			</div>
			<div className={styles.info}>
				<h4 className={styles.title}>{product.name}</h4>
				<div className={styles.author}>{product.author}</div>
				<div className={styles.row}>
					<ProductInfoItem title="стоимость">
						<span className={styles.price}>{product.price} ₽</span>
					</ProductInfoItem>
					<ProductInfoItem title="кол-во">
						<Counter
							count={count}
							onDecClick={handleDecProduct}
							onIncClick={handleIncProduct}
						/>
					</ProductInfoItem>
				</div>

				<ProductInfoItem title="детали">
					<div className={styles.description_item}>
						<span>Год выпуска альбома:</span> {product.realese_date}
					</div>
					<div className={styles.description_item}>
						<span>Жанр:</span> {productGanre?.name}
					</div>
					<div className={styles.description_item}>
						<span>Рейтинг:</span>{' '}
						<span className={styles.star_rating}>{starRating}</span>
					</div>
					<div className={styles.description_item}>
						<span>Описание:</span> {product.descripption}
					</div>
				</ProductInfoItem>

				<ProductInfoItem title="итоговая стоимость">
					<span className={styles.price}>{product.price * count} ₽</span>
				</ProductInfoItem>

				<div className="bottom-controls">
					<Link to="/">
						<Button outline>Назад</Button>
					</Link>
				</div>
			</div>
			<TrackList trackList={product.track_list} />
		</div>
	);
};
