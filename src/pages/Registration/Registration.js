import React, {useState} from 'react';
import {Link} from 'react-router-dom'
//IMAGE
import user from '../../images/user.svg'
import chese from '../../images/chesse.png'
import salat from '../../images/salat.png'
import pomidor from '../../images/pomidor.png'
import passImg from '../../images/pass.png'
import unpassImg from '../../images/unpass.png'
//STYLE
import styles from './Registration.module.scss'

function Registration(props) {

	//REGISTATION
	const [registration, setRegistration] = useState()
	//EMAIL
	const [email, setEmail] = useState('')
	const [correctEmail, setCorrectEmail] = useState(false)
	//PHONE
	const [phone, setPhone] = useState('')
	const [correctPhone, setCorrectPhone] = useState(false)
	//PASSWORD
	const [password, setPassword] = useState('')
	const [correctPassword, setCorrectPassword] = useState(false)
	const [passVisible, setPassVisible] = useState(false)
	const [passType, setPassType] = useState('password')
	//PASSWORD2
	const [password2, setPassword2] = useState('')
	const [correctPassword2, setCorrectPassword2] = useState(false)
	const [passVisible2, setPassVisible2] = useState(false)
	const [passType2, setPassType2] = useState('password')



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
		setPassword(e.target.value)
		const re = /^(?=.*[a-z])(?=.*[0-9]).{6,}/i;
		if(!re.test(String(e.target.value))){
			e.target.style="border: 1px solid c;"
			setCorrectPassword(false)
		}else{
			e.target.style="border: 1px solid #B9B9B9;"
			setCorrectPassword(true)
		}
	}
	const passVisibleHandler = ()=>{
		setPassVisible(!passVisible)
		if(!passVisible){
			setPassType("text")
		}else{
			setPassType("password")
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
	const passVisibleHandler2 = ()=>{
		setPassVisible2(!passVisible2)
		if(!passVisible2){
			setPassType2("text")
		}else{
			setPassType2("password")
		}
	}

	const registrationHandler= (e)=>{
		if(!correctPassword || !correctPassword2){
			return alert("Введите корректный пароль")
		}
		if(correctEmail){
			setRegistration({
				"name": "Булат",
				"phone": phone,
				"password": password,
				"password_confirmation": password2
			})
			//createUser()

		}else{
			return alert("Введите корректные данные")
		}
		
  	}

	const requestOptions = {
		method: 'POST',
		body: registration,
		redirect: 'follow'
	 };
	
	async function createUser(){
		fetch("https://lavash.endlessmind.space/api/register", requestOptions)
			.then(response => response.text())
			.then(result => {
				console.log(result)
			})
			.catch(error => console.log('error', error));
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
				{
					correctPassword? null :<p className={styles.passInfo} >Пароль должен содержать цифру, латинскую букву и длина не менее 6 символов</p>
				}
				<div className={styles.passVisible}>
					<input onChange={passwordHandler} className={styles.auth__revPass} placeholder="Пароль" type={passType} />
					{
						passVisible?
							<img onClick={passVisibleHandler} className={styles.passVisible__img} src={unpassImg} alt="" />
						:
						<img onClick={passVisibleHandler} className={styles.passVisible__img} src={passImg} alt="" />
					}
				</div>
				<div className={styles.passVisible}>
					<input onChange={passwordHandler2} className={styles.auth__revPass2} placeholder="Подтвердите пароль" type={passType2} />
					{
						passVisible2?
							<img onClick={passVisibleHandler2} className={styles.passVisible__img} src={unpassImg} alt="" />
						:
						<img onClick={passVisibleHandler2} className={styles.passVisible__img} src={passImg} alt="" />
					}
				</div>
				
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