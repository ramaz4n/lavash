import React from 'react';
import styles from './Account.module.scss'
import home from '../../images/home.svg'
import user from '../../images/user.svg'
import blPhone from '../../images/bl-phone.svg'
import chesse from '../../images/chesse.png'
import salat from '../../images/salat.png'
import pomidor from '../../images/pomidor.png'


function Account(props) {
	return (
		<div className={styles.account}>
			<img className={styles.chesse} src={chesse} alt="img" />
			<img className={styles.pomidor} src={pomidor} alt="img" />
			<img className={styles.salat} src={salat} alt="img" />
			<div className={styles.account__main}>
				<div className={styles.account__item}>
					<div className={styles.account__itemTitleWrap}>
						<img src={user} alt="icon" />
						<h2 className={styles.account_itemTitle}>Личный кабинет</h2>
					</div>
					<div className={styles.account__itemBody}>
						<p>Имя</p>
						<p>Логин</p>
					</div>
				</div> 

				<div className={styles.account__item}>
					<div className={styles.account__itemTitleWrap}>
						<img src={home} alt="icon" />
						<h2 className={styles.account_itemTitle}>Адрес доставки</h2>
					</div>
					<div className={styles.account__itemBody}>
						<div className={styles.account__itemBodyElem}>
							<input 
								className={styles.inputHome} 
								type="text" 
								placeholder='Введите улицу и дом'
							/>
						</div>
						<div className={styles.account__itemBodyElem}>
							<input 
								className={styles.inputKv} 
								type="text" 
								placeholder='Кв/офис' 
							/>
							<input 
								className={styles.inputOther} 
								type="text" 
								placeholder='Домофон'
							/>
							<input 
								className={styles.inputOther} 
								type="text" 
								placeholder='Подъезд'
							/>
							<input 
								className={styles.inputOther} 
								type="text" 
								placeholder='Этаж'
							/>
						</div>
						<div className={styles.account__itemBodyElem}>
							<input 
								className={styles.inputKom} 
								type="text" 
								placeholder='Комментарий к заказу'
							/>
						</div>
					</div>
				</div> 

				<div className={styles.account__item}>
					<div className={styles.account__itemTitleWrap}>
						<img src={blPhone} alt="icon" />
						<h2 className={styles.account_itemTitle}>Контактная информация</h2>
					</div>
					<div className={styles.account__itemBody}>
						<input 
							className={styles.inputKom} 
							type="text" 
							placeholder='Номер телефона'
						/>
						<input 
							className={styles.inputKom} 
							type="text" 
							placeholder='E-mail'
						/>
						<input 
							className={styles.inputKom} 
							type="text" 
							placeholder='Пароль'
						/>
						<input 
							className={styles.inputKom} 
							type="text" 
							placeholder='Подтверждение пароля'
						/>
					</div>
				</div> 

			</div>
			<div className={styles.account__total}> 
				<a href="#">Закладки</a>
				<a href="#">История заказов</a>
				<a href="#">Список адресов</a>
				<a href="#">Дополнить по необходимости</a>	
				<a href="#">Выход</a>
			</div>
		</div>
	);
}

export default Account;