import React from 'react';
import { Button } from 'components';
import { PlusIcon } from 'components/Icons';
import styles from './Counter.module.scss';

type Props = {
	count: number;
	onDecClick: () => void;
	onIncClick: () => void;
};

export const Counter: React.FC<Props> = ({ onDecClick, onIncClick, count }) => {
	return (
		<div className={styles.root}>
			<Button
				className={styles.minus}
				onClick={onDecClick}
				disabled={count === 1}
				circle
				outline>
				<PlusIcon />
			</Button>
			<b>{count}</b>
			<Button onClick={onIncClick} circle outline>
				<PlusIcon />
			</Button>
		</div>
	);
};
