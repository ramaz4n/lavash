import React from 'react';
import styles from './Contacts.module.scss'

function Contacts(props) {
	return (
		<div className={styles.contacts}>
			<div className={styles.contacts__title}>
				<div></div>
				<h3>Контакты</h3>
			</div>
		</div>
	);
}

export default Contacts;