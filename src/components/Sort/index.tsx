import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sorts, TSortItem } from 'data';
import { selectSort, setSortBy } from 'store/filters/slice';

import { SortIcon } from 'components/Icons';

import styles from './Sort.module.scss';

export const Sort: React.FC = () => {
	const [visible, setVisible] = React.useState<boolean>(false);
	const sortBy = useSelector(selectSort);
	const dispatch = useDispatch();

	const ref = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const checkOutsideClick = (e: any) => {
			if (visible && ref.current && !ref.current.contains(e.target)) {
				setVisible(false);
			}
		};

		document.addEventListener('mousedown', checkOutsideClick);

		return () => {
			document.removeEventListener('mousedown', checkOutsideClick);
		};
	}, [visible]);

	const handleClick = () => {
		setVisible((prev) => !prev);
	};

	const handleChangeSortType = (sort: TSortItem) => {
		dispatch(setSortBy(sort));
		setVisible(false);
	};

	return (
		<div className={styles.root} ref={ref}>
			<div className={styles.label}>
				<SortIcon />
				<span onClick={handleClick}>{sortBy.name}</span>
			</div>
			{visible && (
				<div className={styles.popup}>
					<ul>
						{sorts.map((sort) => (
							<li
								key={sort.id}
								className={sort.id === sortBy?.id ? styles.popup_active : ''}
								onClick={() => handleChangeSortType(sort)}>
								{sort.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
