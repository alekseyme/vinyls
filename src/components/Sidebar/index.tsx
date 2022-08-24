import React from 'react';
import { Menu } from 'components';
import styles from './Sidebar.module.scss';

export const Sidebar: React.FC = () => {
	return (
		<div className={styles.root}>
			<Menu />
		</div>
	);
};
