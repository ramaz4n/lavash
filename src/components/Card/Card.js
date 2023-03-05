import React, {useState, useContext, useEffect} from 'react';
import Modal from '../Modal/Modal';
import styles from './Card.module.scss'
import { Context } from '../../Context';

function Card(props) {
	const {basketProducts, setBasketProducts} = useContext(Context)
	const [product, setProduct] = useState()
	const [modal, setModal] = useState(false);



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
	
	const modalHandler = () =>{
		setModal(!modal)
		console.log(props.id)
	}
	const closeModal = () =>{
		setModal(!modal)
	}

	useEffect(()=>{
		getProduct()
		console.log(props.id)
	},[])
		

	return (
		<div  className={styles.card}>
			<img className={styles.card__img} src={props.img} alt="img" />
			<div className={styles.card__wrap}>
				<h3 className={styles.card__title}>{props.title}</h3>
				<p className={styles.card__text}>{props.text}</p>

				<div  className={styles.contentGroup}>
					<div className={styles.card__group}>
						<span className={styles.card__price}>{props.price}&#8381;</span>
					</div>
					<button onClick={modalHandler} className={styles.card__btn}>Заказать</button>
				</div>

			</div>

					<Modal
						id={props.id}
						onClick={closeModal}
						modal={modal}
						price={props.price}
					/>
			
		</div>
	);
}

export default Card;