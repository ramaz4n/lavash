import React from 'react';
import styles from './Modal.module.scss'
import MoreItem from './../MoreItem/MoreItem';

function Modal(props) {
	return (
		<div 
				onClick={props.onClick}
 				className={props.modal? styles.modalBack : styles.closeModal}
			>
				<div onClick={(e)=>{e.stopPropagation()}} className={styles.cardModal}>
					<div className={styles.cardModal__closeWrap}>
						<div onClick={props.onClick} className={styles.cardModal__close}></div>
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
								<span className={styles.card__price}>{props.price}&#8381;</span>
							</div>
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
								<span onClick={props.countDownHandler} className={styles.card__countDown}>-</span>
								<span>{props.count}</span>
								<span onClick={props.countUpHandler} className={styles.card__countUp}>+</span>
							</div>
							<button className={styles.info__resultBtn}>Добавить в корзину</button>
						</div>
					</div>
				</div>
			</div>
	);
}

export default Modal;