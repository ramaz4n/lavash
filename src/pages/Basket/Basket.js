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
	const[order, setOrder] = useState()
	//Products for basket
	const {basketProducts, setBasketProducts} = useContext(Context)
	const [basProducts, setBasProducts] = useState(JSON.parse(localStorage.getItem('basketProducts')))

	//Conditions check state
	const [conditionsChecked, setConditionsChecked] = useState(false)

	//Prices states
	const [totalBasketPrice, setTotalBasketPrice] = useState(0)
	const [basketPrice, setBasketPrice] = useState(0)
	const [deliveryPrice, setDeliveryPrice] = useState(0)
	
	// Delivery states
	const [streetAndHome, setStreetAndHome] = useState('')
	const [flat, setFlat] = useState('')
	const [doorphone, setDoorphone] = useState('')
	const [entrance, setEntrance] = useState('')
	const [floor, setFloor] = useState('')

	//Comment state
	const [comment, setComment] = useState('')

	//Contact states
	const [phone, setPhone] = useState('')
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	console.log()

	const changeConditions = ()=>{
		setConditionsChecked(!conditionsChecked)
	}

	const totalBasketPriceHandler = ()=>{
		basketProducts.map(e => {
			setTotalBasketPrice(totalBasketPrice + e.price)
		})
	}
	
	
	const payHandler=()=>{
		if(conditionsChecked === false){
			return alert("Необходимо согласие с Условиями использования, Правилами обработки персональных данных. Согласитесь с данным пунктом внизу страницы")
		}
		if(basketProducts.length !== 0 ){
			let raw = {
				"delivery": {
					"streetAndNumber": streetAndHome,
					"flat": flat,
					"doorphone": doorphone,
					"entrance": entrance,
					"floor": floor
				},
				"comment": comment,
				"contact": {
					"phone": phone,
					"name": "",
					"email": email
				},
				"products": basketProducts
			}
			
			
			let requestOptions = {
				method: 'POST',
				body: raw,
				redirect: 'follow'
			};
			async function sendOrder(){
				await fetch(`https://lavash.endlessmind.space/api/order`, requestOptions)
				.then(response => response.json())
				.then(result => {
					console.log(result)
				})
				.catch(error => console.log('error', error));
			}
			sendOrder()
		}else{
			alert("Корзина пуста")
		}
	}

	
	useEffect(()=>{
		totalBasketPriceHandler()
	},[basProducts])

	//useEffect(()=>{
	//	getLocalStorageProducts()
	//},[])

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
							basProducts?
							basProducts.map(e=>(
								<BasketItem
									id = {e.id}
									productId={e.productId}
									img={e.img}
									title={e.name}
									price={e.price}
									count={e.count}
								/>
							))
							:
							null
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
								onChange={(e)=>setStreetAndHome(e.target.value)}
							/>
						</div>
						<div className={styles.basket__itemBodyElem}>
							<input 
								className={styles.inputKv} 
								type="text" 
								placeholder='Кв/офис' 
								onChange={(e)=>setFlat(e.target.value)}
							/>
							<input 
								className={styles.inputOther} 
								type="text" 
								placeholder='Домофон'
								onChange={(e)=>setDoorphone(e.target.value)}
							/>
							<input 
								className={styles.inputOther} 
								type="text" 
								placeholder='Подъезд'
								onChange={(e)=>setEntrance(e.target.value)}
							/>
							<input 
								className={styles.inputOther} 
								type="text" 
								placeholder='Этаж'
								onChange={(e)=>setFloor(e.target.value)}
							/>
						</div>
						<div className={styles.basket__itemBodyElem}>
							<input 
								className={styles.inputKom} 
								type="text" 
								placeholder='Комментарий к заказу'
								onChange={(e)=>setComment(e.target.value)}
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
								onChange={(e)=>setPhone(e.target.value)}
							/>
						</div>
						<div className={styles.email}>
							<input 
								className={styles.inputEmail} 
								placeholder='E-mail'
								type="text" 
								onChange={(e)=>setEmail(e.target.value)}
							/>
						</div>
						<div className={styles.conditions}>
							<label >
								<input 
									checked={conditionsChecked} 
									onChange={changeConditions} 
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
					<span>Товар на сумму:</span><span>{}&#8381;</span>
				</div>
				<div className={styles.totalOff}>
					<span>Доставка:</span><span>{deliveryPrice}&#8381;</span>
				</div>
				<div>
					<span>Сумма на оплату:</span><span className={styles.basket__totalPrice}>{basketPrice}&#8381;</span>
				</div>
				
				<button onClick={payHandler}>Оплатить</button>
			</div>
		</div>
	);
}

export default Basket;


