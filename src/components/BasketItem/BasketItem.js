import React, {useContext, useState}from 'react';
import styles from './BasketItem.module.scss'
import editImg from '../../images/edit.svg'
import { Context } from '../../Context';
import Modal from '../Modal/Modal';

function BasketItem(props) {
	const [count, setCount] = useState(props.count);
	const [modal, setModal] = useState(false);
	const {basketProducts, setBasketProducts} = useContext(Context)

	const deteteBasketItem = (e) => {
		const newProducts = basketProducts.filter(product => product.id !== props.id)
		setBasketProducts(newProducts)
	}


	const modalHandler = (e) =>{
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
			<span onClick={deteteBasketItem} className={styles.closeItem}>&#10006;</span>
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

			<Modal
				id={props.id}
				onClick={modalHandler}
				modal={modal}
				count={count}
				countUpHandler={countUpHandler}
				countDownHandler={countDownHandler}
			/>

		</div>
	);
}

export default BasketItem;