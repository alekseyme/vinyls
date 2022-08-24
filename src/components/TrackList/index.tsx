import { TTrackItem } from 'store/products/slice';
import styles from './TrackList.module.scss';

type Props = {
	trackList: TTrackItem[];
};

export const TrackList: React.FC<Props> = ({ trackList }) => {
	return (
		<div className={styles.root}>
			<h4 className={styles.title}>Треклист</h4>
			<ul>
				{trackList.map((track) => (
					<li key={track.id} className={styles.list}>
						<div>
							<span className={styles.track_number}>{track.id}.</span>
							<span className={styles.track_name}>{track.name}</span>
						</div>
						<div>{track.duration}</div>
					</li>
				))}
			</ul>
		</div>
	);
};
