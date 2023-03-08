import React from 'react';
import styles from './AddressHelper.module.scss'


function AddressHelper(props) {
	return (
		<div className={styles.AddressHelper}>
			{	props.text	}
		</div>
	);
}

export default AddressHelper;