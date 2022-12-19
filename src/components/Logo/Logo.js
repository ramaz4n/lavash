import React from 'react';
import styles from './Logo.module.scss'
import logo from '../../images/logo.png'

function Logo(props) {
	return (
		<a href="/">
			<div className={styles.logo} >
				<img className={styles.logo__img} src={logo} alt="logo" />
				<span className={styles.logo__text}>папа лаваш</span>
			</div>
		</a>
	);
}

export default Logo;