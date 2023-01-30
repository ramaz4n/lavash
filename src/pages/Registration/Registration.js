import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import styles from './Registration.module.scss'
import user from '../../images/user.svg'
import chese from '../../images/chesse.png'
import salat from '../../images/salat.png'
import pomidor from '../../images/pomidor.png'

function Registration(props) {
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')


	const changeEmail= (e)=>{
		setEmail(e.target.value)
  	}
	const changePhone= (e)=>{
		setPhone(e.target.value)
  	}
	const changePass= (e)=>{
		setPassword(e.target.value)
  	}
	const changePass2= (e)=>{
		setPassword2(e.target.value)
  	}

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
				<input onChange={changeEmail} className={styles.auth__revEmail} placeholder="E-mail" type="text" />
				<input onChange={changePhone} className={styles.auth__revPhone} placeholder="Номер телефона" type="text" />
				<input onChange={changePass} className={styles.auth__revPass} placeholder="Пароль" type="text" />
				<input onChange={changePass2} className={styles.auth__revPass2} placeholder="Подтвердите пароль" type="text" />
				<a href="#">Восстановить пароль</a>
				<div class={styles.auth__btnWrap}>
					<button class={styles.auth__btnEnter}>Регистрация</button>
					<Link to="/auth"><button class={styles.auth__btnReg}>Войти</button></Link>
				</div>
			</div>
		</div>
	);
}

export default Registration;