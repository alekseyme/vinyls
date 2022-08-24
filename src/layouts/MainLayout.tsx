import { Cart, Sidebar } from 'components';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
	const location = useLocation();

	return (
		<>
			{location.pathname !== '/cart' && <Cart />}

			<Sidebar />
			<div className={styles.root}>
				<Outlet />
			</div>
		</>
	);
};

export default MainLayout;
