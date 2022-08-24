import styles from './ProductInfoItem.module.scss';

type Props = {
	title?: string;
	children: JSX.Element | JSX.Element[];
};

export const ProductInfoItem: React.FC<Props> = ({ title, children }) => {
	return (
		<div className={styles.root}>
			<div className={styles.badge}>{title}</div>
			{children}
		</div>
	);
};
