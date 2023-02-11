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
	const [correctEmail, setCorrectEmail] = useState(false)
	const [correctPhone, setCorrectPhone] = useState(false)
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')
	const [correctPassword, setCorrectPassword] = useState(false)
	const [correctPassword2, setCorrectPassword2] = useState(false)



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
	const passwordHandler =(e) =>{
		setPhone(e.target.value)
		const arr = [...e.target.value]

		if(arr.length < 5){
			e.target.style="border: 1px solid #c43939;"
			setCorrectPassword(false)
		}else{
			e.target.style="border: 1px solid #B9B9B9;"
			setPassword(e.target.value)
			setCorrectPassword(true)
		}
	}
	  
	const passwordHandler2= (e)=>{
		if(e.target.value !== password){
			e.target.style="border: 1px solid #c43939;"
			setCorrectPassword2(false)
		}else{
			setPassword2(e.target.value)
			setCorrectPassword2(true)
			e.target.style="border: 1px solid #B9B9B9;"
		}
	}

	const registrationHandler= (e)=>{
		if(!correctPassword || !correctPassword2){
			return alert("Введите корректный пароль")
		}
		if(correctEmail && correctPhone){

		}else{
			return alert("Введите корректные данные")
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
					<h2 className={styles.auth__title}>Быстрая регистрация</h2>
				</div>
				<input onChange={emailHandler} className={styles.auth__revEmail} placeholder="E-mail" type="text" />
				<input onChange={phoneHandler} className={styles.auth__revPhone} placeholder="Номер телефона" type="text" />
				<input onChange={passwordHandler} className={styles.auth__revPass} placeholder="Пароль" type="text" />
				<input onChange={passwordHandler2} className={styles.auth__revPass2} placeholder="Подтвердите пароль" type="text" />
				<a href="#">Восстановить пароль</a>
				<div class={styles.auth__btnWrap}>
					<button onClick={registrationHandler} class={styles.auth__btnEnter}>Регистрация</button>
					<Link to="/auth"><button class={styles.auth__btnReg}>Войти</button></Link>
				</div>
			</div>
		</div>
	);
}

export default Registration;