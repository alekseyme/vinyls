import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Product.module.scss';

export const ProductLoader: React.FC = (props: any) => (
	<ContentLoader
		speed={2}
		className={styles.root}
		width={240}
		height={390}
		viewBox="0 0 240 390"
		backgroundColor="#e5e5e5"
		foregroundColor="#ecebeb"
		{...props}>
		<rect x="0" y="470" rx="6" ry="6" width="280" height="86" />
		<rect x="0" y="590" rx="6" ry="6" width="100" height="26" />
		<rect x="153" y="583" rx="6" ry="6" width="123" height="41" />
		<rect x="0" y="430" rx="6" ry="6" width="280" height="27" />
		<rect x="0" y="0" rx="10" ry="10" width="240" height="240" />
		<rect x="0" y="248" rx="10" ry="10" width="170" height="26" />
		<rect x="0" y="280" rx="10" ry="10" width="120" height="22" />
		<rect x="0" y="322" rx="10" ry="10" width="100" height="22" />
		<rect x="0" y="356" rx="10" ry="10" width="120" height="26" />
		<rect x="137" y="350" rx="19" ry="19" width="103" height="38" />
	</ContentLoader>
);
