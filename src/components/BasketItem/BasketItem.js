import React, {useState}from 'react';
import styles from './BasketItem.module.scss'
import editImg from '../../images/edit.svg'
import MoreItem from './../MoreItem/MoreItem';

function BasketItem(props) {
	const [count, setCount] = useState(0);
	const [modal, setModal] = useState(false);


	const modalHandler = (e) =>{
		e.stopPropagation()
		setModal(!modal)
	}

	const countUpHandler = () =>{
		setCount(count + 1)
	}
	const countDownHandler = () =>{
		if(count > 0){
			setCount(count - 1);
		}
	}

	return (
		<div className={styles.basketItem}>
			<img className={styles.burgerImg} src={props.img} alt="img" />
			<div className={styles.basketItem__info}>
				<span className={styles.basketItem__title}>{props.title}</span>
				<div className={styles.basketItem__infoDetails}>
					<div className={styles.count}>
						<span onClick={countDownHandler} className={styles.countDown}>-</span>
						<span>{count}</span>
						<span onClick={countUpHandler} className={styles.countUp}>+</span>
					</div>
					<img onClick={modalHandler} className={styles.editBtn} src={editImg} alt="" />
				</div>
			</div>
			<span  className={styles.basketItem__price}>{props.price}&#8381;</span>



			<div 
				onClick={modalHandler}
 				className={modal? styles.modalBack : styles.closeModal}
			>
				<div className={styles.cardModal}>
					<div className={styles.cardModal__closeWrap}>
						<div onClick={modalHandler} className={styles.cardModal__close}></div>
					</div>
					<div className={styles.cardModal__about}>
						<img src={props.imgModal} alt="img" />
						<div className={styles.cardModal__aboutDesc}>
							<div>
								<h6>Описание</h6><span>{props.weight}</span>
							</div>
							<p>{props.text}</p>
						</div>
						<div className={styles.cardModal__aboutStruct}>
							<h6>Состав</h6>
							<p>
								{props.structure}
							</p>
						</div>
					</div>


					<div className={styles.info}>
						<div className={styles.infoMobTitle}>
							<img src={props.imgModal} alt="img" />
							<div className={styles.info__titleWrap}>
								<h3 className={styles.info__title}>{props.title}</h3>
								<span className={styles.info__weight}>{props.weight}</span> 
							</div>
								<span className={styles.card__price}>{props.price}&#8381;</span>
						</div>
						<div className={styles.info__sauceWrap}>
							<div className={styles.info__sauce}>
								<p>Выберите соус</p>
								<div>
									<label className={styles.info__radioWrap}>
										<input className={styles.radio__real} type="radio" name="sauce" />
										<span className={styles.radio__fake}></span>
										<span className={styles.radio__title}>Майонез</span>
									</label>
									<label className={styles.info__radioWrap}>
										<input className={styles.radio__real} type="radio" name="sauce" />
										<span className={styles.radio__fake}></span>
										<span className={styles.radio__title}>Кетчуп</span>
									</label>
									<label className={styles.info__radioWrap}>
										<input className={styles.radio__real} type="radio" name="sauce" />
										<span className={styles.radio__fake}></span>
										<span className={styles.radio__title}>Аджика</span>
									</label>
								</div>
							</div>
							<div className={styles.info__lavash}>
								<p>Выберите лаваш</p>
								<div>
									<label className={styles.info__radioWrap}>
										<input className={styles.radio__real} type="radio" name="lavash" />
										<span className={styles.radio__fake}></span>
										<span className={styles.radio__title}>Ржаной</span>
									</label>
									<label className={styles.info__radioWrap}>
										<input className={styles.radio__real} type="radio" name="lavash" />
										<span className={styles.radio__fake}></span>
										<span className={styles.radio__title}>Классический</span>
									</label>
								</div>
							</div>
						</div>
						<div className={styles.info__more}>
							<p>Добавить к заказу:</p>
							<div className={styles.info__moreWrap}>
								<MoreItem
									moreImg={props.moreImg}
									moreTitle={props.moreTitle}
								/>
								<MoreItem
									moreImg={props.moreImg}
									moreTitle={props.moreTitle}
								/>
								<MoreItem
									moreImg={props.moreImg}
									moreTitle={props.moreTitle}
								/>
								<MoreItem
									moreImg={props.moreImg}
									moreTitle={props.moreTitle}
								/>
								<MoreItem
									moreImg={props.moreImg}
									moreTitle={props.moreTitle}
								/>
								<MoreItem
									moreImg={props.moreImg}
									moreTitle={props.moreTitle}
								/>
							</div>
						</div>
						<div className={styles.aboutDescMob}>
							<div>
								<h6>Описание</h6>
							</div>
							<p>{props.text}</p>
						</div>
						<div className={styles.aboutStructMob}>
							<h6>Состав</h6>
							<p>
								{props.structure}
							</p>
						</div>
						<div className={styles.line}></div>
						<div className={styles.info__result}>
							<span className={styles.card__price}>{props.price}&#8381;</span>
							<div className={styles.card__count}>
								<span onClick={countDownHandler} className={styles.card__countDown}>-</span>
								<span>{count}</span>
								<span onClick={countUpHandler} className={styles.card__countUp}>+</span>
							</div>
							<button className={styles.info__resultBtn}>Добавить в корзину</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BasketItem;