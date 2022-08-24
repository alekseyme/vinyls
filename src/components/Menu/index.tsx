import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { pages } from 'data';
import styles from './Menu.module.scss';

export const Menu: React.FC = () => {
	const { id } = useParams();

	return (
		<div className={styles.root}>
			<ul>
				<li className={!id ? styles.active : ''}>
					<Link to="/">Все</Link>
				</li>
				{pages.map((page) => (
					<li key={page.id} className={Number(id) === page.id ? styles.active : ''}>
						<Link to={`/ganre/${page.id}`}>{page.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
