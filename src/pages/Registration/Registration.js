import React from 'react';
import styles from './Registration.module.scss'
import user from '../../images/user.svg'
import chese from '../../images/chesse.png'
import salat from '../../images/salat.png'
import pomidor from '../../images/pomidor.png'

function Registration(props) {
	return (
		<div className={styles.authWrap}>
			<img  className={styles.salat} src={salat} alt="" />
			<img className={styles.pomidor} src={pomidor} alt="" />
			<img className={styles.chese} src={chese} alt="" />
			<div className={styles.auth}>
				<div>
					<img src={user} alt="icon" />
					<h2 className={styles.auth__title}>Быстрая регистрация</h2>
				</div>
				<input className={styles.auth__revEmail} placeholder="E-mail" type="text" />
				<input className={styles.auth__revPass} placeholder="Пароль" type="text" />
				<input className={styles.auth__revPass2} placeholder="Подтвердите пароль" type="text" />
				<a href="#">Восстановить пароль</a>
				<div class={styles.auth__btnWrap}>
					<button class={styles.auth__btnEnter}>Войти</button>
					<button class={styles.auth__btnReg}>Регистрация</button>
				</div>
			</div>
		</div>
	);
}

export default Registration;