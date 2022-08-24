import React from 'react';
import { LoaderIcon } from 'components/Icons';
import styles from './Loader.module.scss';

export const Loader: React.FC = () => {
	return (
		<div className={styles.root}>
			<LoaderIcon />
		</div>
	);
};
