import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import styles from './Card.module.scss'

function Card(props) {
	const [count, setCount] = useState(0);
	const [modal, setModal] = useState(false);

	const requestOptions = {
		method: 'GET',
		redirect: 'follow'
	 };

	 
	 async function getProduct (){
		 await fetch(`http://lavash.endlessmind.space/api/products/${props.id}`, requestOptions)
		 .then(response => response.json())
		 .then(result => {
			 console.log(result)
			 //setMenuItems(result)
		 })
		 .catch(error => console.log('error', error));
	 }
	 
	 
	 const modalHandler = () =>{
		getProduct()
		setModal(!modal)
	}
	const closeModal = () =>{
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
		<div className={styles.card}>
			<img className={styles.card__img} src={props.img} alt="img" />
			<div>
				<h3 className={styles.card__title}>{props.title}</h3>
				<p className={styles.card__text}>{props.text}</p>

				<div  className={styles.contentGroup}>
					<div className={styles.card__group}>
						<span className={styles.card__price}>{props.price}&#8381;</span>
						<div className={styles.card__count}>
							<span onClick={countDownHandler} className={styles.card__countDown}>-</span>
							<span>{count}</span>
							<span onClick={countUpHandler} className={styles.card__countUp}>+</span>
						</div>
					</div>
					<button onClick={modalHandler} className={styles.card__btn}>Заказать</button>
				</div>

			</div>

				<Modal
					onClick={closeModal}
					modal={modal}
					count={count}
					countUpHandler={countUpHandler}
					countDownHandler={countDownHandler}
					
				/>
			
		</div>
	);
}

export default Card;