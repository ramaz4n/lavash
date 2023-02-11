import React, {useState} from 'react';
import styles from './Auth.module.scss'
import user from '../../images/user.svg'
import chese from '../../images/chesse.png'
import salat from '../../images/salat.png'
import pomidor from '../../images/pomidor.png'
import { Link } from 'react-router-dom';


function Auth(props) {
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [correctEmail, setCorrectEmail] = useState(false)
	const [correctPhone, setCorrectPhone] = useState(false)
	const [password, setPassword] = useState('')

	const phoneHandler =(e) =>{
		setPhone(e.target.value)
		const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
		if(!re.test(String(e.target.value).toLowerCase())){
			e.target.style="border: 1px solid #c43939;"
			setCorrectPhone(false)
		}else{
			e.target.style="border: 1px solid #B9B9B9;"
			setCorrectPhone(true)
		}
	}

	const emailHandler =(e) =>{
		setEmail(e.target.value)
		const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if(!re.test(String(e.target.value).toLowerCase())){
			e.target.style="border: 1px solid #c43939;"
			setCorrectEmail(false)
		}else{
			e.target.style="border: 1px solid #B9B9B9;"
			setCorrectEmail(true)
		}
	}
	const changePass= (e)=>{
		setPassword(e.target.value)
  	}
	const authHandler= (e)=>{
		if(correctEmail && correctPhone){

		}else{
			alert("Введите корректные данные")
		}
  	}


	return (
		<div className={styles.authWrap}>
			<img  className={styles.salat} src={salat} alt="" />
			<img className={styles.pomidor} src={pomidor} alt="" />
			<img className={styles.chese} src={chese} alt="" />
			<div className={styles.auth}>
				<div>
					<img src={user} alt="icon" />
					<h2 className={styles.auth__title}>Авторизация</h2>
				</div>
				<input onChange={emailHandler} className={styles.auth__revEmail} placeholder="E-mail" type="text" />
				<input onChange={phoneHandler} className={styles.auth__revPhone} placeholder="Номер телефона" type="text" />
				<input onChange={changePass} className={styles.auth__revPass} placeholder="Пароль" type="text" />
				<a href="#">Восстановить пароль</a>
				<div class={styles.auth__btnWrap}>
					<button onClick={authHandler} class={styles.auth__btnEnter}>Войти</button>
					<Link to="/registration"><button class={styles.auth__btnReg}>Регистрация</button></Link>
				</div>
			</div>
		</div>
	);
}

export default Auth;