import React, { useContext, useEffect, useState } from 'react';
import styles from './Modal.module.scss'
import MoreItem from './../MoreItem/MoreItem';
import { Context } from '../../Context';

function Modal(props) {
	const {setBasketProducts} = useContext(Context)
	const [product, setProduct] = useState();
	const [totalPrice, setTotalPrice] = useState(0);


	const requestOptions = {
		method: 'GET',
		redirect: 'follow'
	};



	async function getProduct (){
		await fetch(`https://lavash.endlessmind.space/api/products/${props.id}`, requestOptions)
		.then(response => response.json())
		.then(result => {
			setProduct(result)
		})
		.catch(error => console.log('error', error));
	}

	const addToBasket = (e) => {
		setBasketProducts(prev => [...prev, {
			"id":		props.id,
			"name":	product.name,
			"price":	totalPrice,
			"img":	product.photo_id,
			"count": props.count
		}])
	}

	useEffect((e) =>{
		getProduct()	
	},[])

	return (
		product?
			<div 
				onClick={props.onClick}
 				className={props.modal? styles.modalBack : styles.closeModal}
			>
				<div onClick={(e)=>{e.stopPropagation()}} className={styles.cardModal}>
					<div className={styles.cardModal__closeWrap}>
						<div onClick={props.onClick} className={styles.cardModal__close}></div>
					</div>
					<div className={styles.cardModal__about}>
						<img src={product.photo_id} alt="img" />
						<div className={styles.cardModal__aboutDesc}>
							<div>
								<h6>Описание</h6><span>{product.weight}г</span>
							</div>
							<p>{product.desc}</p>
						</div>
						<div className={styles.cardModal__aboutStruct}>
							<h6>Состав</h6>
							<p>
								{product.composition}
							</p>
						</div>
					</div>


					<div className={styles.info}>
						<div className={styles.infoMobTitle}>
							<img src={product.photo_id} alt="img" />
							<div className={styles.info__titleWrap}>
								<h3 className={styles.info__title}>{product.name}</h3>
								<span className={styles.info__weight}>{product.weight}г</span> 
								<span className={styles.card__price}>{product.price}&#8381;</span>
							</div>
						</div>
						<div className={styles.info__sauceWrap}>

							{
								product.options.map(e=>(
									<div id={e.id} className={styles.info__sauce}>
										<p>{e.alias}:</p>
										<div>
											{
												e.values.map(elem=>(
													<label price={elem.price} groupId={elem.group_id} id={elem.id} className={styles.info__radioWrap}>
														<input className={styles.radio__real} type="radio" name={e.name} />
														<span className={styles.radio__fake}></span>
														<span className={styles.radio__title}>{elem.name}</span>
													</label>
												))
											}
										</div>
									</div>
								))
							}

						</div>
						<div className={styles.info__more}>
							<p>Добавить к заказу:</p>
							<div className={styles.info__moreWrap}>
								{
									product.additions.map(e=>(
										<MoreItem
											id = {e.id}
											addPrice={e.price}
											moreImg={e.photo_id}
											moreTitle={e.name}
										/>
									))
								}
								
							</div>
						</div>
						<div className={styles.aboutDescMob}>
							<div>
								<h6>Описание</h6>
							</div>
							<p>{product.desc}</p>
						</div>
						<div className={styles.aboutStructMob}>
							<h6>Состав</h6>
							<p>
								{product.composition}
							</p>
						</div>
						<div className={styles.line}></div>
						<div className={styles.info__result}>
							<span className={styles.card__price}>{totalPrice}&#8381;</span>
							<div className={styles.card__count}>
								<span onClick={props.countDownHandler} className={styles.card__countDown}>-</span>
								<span>{props.count}</span>
								<span onClick={props.countUpHandler} className={styles.card__countUp}>+</span>
							</div>
							<button onClick={addToBasket} className={styles.info__resultBtn}>Добавить в корзину</button>
						</div>
					</div>
				</div>
			</div>
		:
		null
	);
}

export default Modal;