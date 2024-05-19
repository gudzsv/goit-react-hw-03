import { useId } from 'react';

import styles from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
	const searchId = useId();

	return (
		<div className={styles.searchContainer}>
			<label className={styles.searchLabel} htmlFor={searchId}>
				Find contacts by name
			</label>
			<input
				onChange={(e) => onFilter(e.target.value)}
				className={styles.searchInput}
				id={searchId}
				type='search'
				inputMode='search'
				value={value}
			/>
		</div>
	);
};

export default SearchBox;
