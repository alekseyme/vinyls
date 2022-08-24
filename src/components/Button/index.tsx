import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type Props = {
	children: JSX.Element | JSX.Element[] | string;
	outline?: boolean;
	disabled?: boolean;
	circle?: boolean;
	link?: boolean;
	className?: string;
	onClick?: () => void;
};

export const Button: React.FC<Props> = ({
	children,
	onClick,
	outline,
	circle,
	link,
	disabled,
	className,
}) => {
	return (
		<button
			className={clsx([
				styles.root,
				outline && styles.outline,
				circle && styles.circle,
				link && styles.link,
				className,
			])}
			disabled={disabled}
			onClick={onClick}>
			<span>{children}</span>
		</button>
	);
};
