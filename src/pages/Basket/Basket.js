import React, {useContext, useEffect, useState} from 'react';
import styles from './Basket.module.scss'
import home from '../../images/home.svg'
import blPhone from '../../images/bl-phone.svg'
import chesse from '../../images/chesse.png'
import salat from '../../images/salat.png'
import pomidor from '../../images/pomidor.png'
import BasketItem from '../../components/BasketItem/BasketItem';
import { Context } from '../../Context';


function Basket(props) {
	const [conChecked, setConChecked] = useState(false)
	const [totalPrice, setTotalPrice] = useState(0)
	const [basketPrice, setBasketPrice] = useState(0)
	const [deliveryPrice, setDeliveryPrice] = useState(0)
	const {basketProducts} = useContext(Context)

	const changeCon = ()=>{
		setConChecked(!conChecked)
	}

	const totalPriceHandler = ()=>{
		basketProducts.map(e => {
			setTotalPrice(totalPrice + e.price)
		})
	}

	useEffect(()=>{
		totalPriceHandler()
	},[basketProducts])
	


	return (
		<div className={styles.basket}>
			<img className={styles.chesse} src={chesse} alt="img" />
			<img className={styles.pomidor} src={pomidor} alt="img" />
			<img className={styles.salat} src={salat} alt="img" />
			<div className={styles.basket__main}>
				<p className={styles.basket__title}>Минимальная стоимость заказа от <span>300&#8381;</span></p>
				<div className={styles.basket__item}>
					<div className={styles.basket__itemTitle}>
						<div><span>1</span></div>
						<h3>Ваш заказ</h3>
					</div>
					<div className={styles.basket__itemBody}>
						{
							basketProducts.map(e=>(
								<BasketItem
									id = {e.id}
									productId={e.productId}
									img={e.img}
									title={e.name}
									price={e.price}
									count={e.count}
								/>
							))
						}

					</div>
				</div> 

				<div className={styles.basket__item}>
					<div className={styles.basket__itemTitle}>
						<div><span>2</span></div>
						<h3>Условия доставки</h3>
					</div>
					<div className={styles.basket__itemBody}>
						<div className={styles.basket__itemBodyElem}>
							<img className={styles.homeIcon} src={home} alt="icon" />
							<input 
								className={styles.inputHome} 
								type="text" 
								placeholder='Введите улицу и дом'
							/>
						</div>
						<div className={styles.basket__itemBodyElem}>
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
						<div className={styles.basket__itemBodyElem}>
							<input 
								className={styles.inputKom} 
								type="text" 
								placeholder='Комментарий к заказу'
							/>
						</div>
					</div>
				</div>

				<div className={styles.basket__item}>
					<div className={styles.basket__itemTitle}>
						<div><span>3</span></div>
						<h3>Контактная информация</h3>
					</div>
					<div className={styles.basket__itemBody}>
						<div className={styles.phoneWrap}>
							<img className={styles.phoneIcon} src={blPhone} alt="icon" />
							<input 
								className={styles.inputPhone} 
								placeholder='Номер телефона'
								type="text" 
							/>
						</div>
						<div className={styles.email}>
							<input 
								className={styles.inputEmail} 
								placeholder='E-mail'
								type="text" 
							/>
						</div>
						<div className={styles.conditions}>
							<label >
								<input 
									checked={conChecked} 
									onChange={changeCon} 
									className={styles.conditions__input} 
									type="checkbox" 
									name="conditions" 
								/>	
								<span className={styles.conditions__inputFake}></span>
								<span className={styles.conditions__text}>
									Я соглашаюсь с Условиями использования, Правилами обработки персональных данных
								</span>
							</label>
						</div>
					</div>
				</div>


			</div>
			<div className={styles.basket__total}> 
				<div className={styles.totalOff}>
					<span>Товар на сумму:</span><span>{totalPrice}&#8381;</span>
				</div>
				<div className={styles.totalOff}>
					<span>Доставка:</span><span>{deliveryPrice}&#8381;</span>
				</div>
				<div>
					<span>Сумма на оплату:</span><span className={styles.basket__totalPrice}>{basketPrice}&#8381;</span>
				</div>
				
				<button>Оплатить</button>
			</div>
		</div>
	);
}

export default Basket;