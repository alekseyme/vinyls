import React from 'react';
import styles from './NotFound.module.scss';

export const NotFound: React.FC = () => {
	return (
		<div className={styles.root}>
			<h1>Беда</h1>
			<div className={styles.info}>Такой страницы не существует</div>
		</div>
	);
};
