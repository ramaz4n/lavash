import React, {useContext, useEffect, useState}from 'react';
import styles from './BasketItem.module.scss'
import editImg from '../../images/edit.svg'
import { Context } from '../../Context';
import BasketModal from '../BasketModal/BasketModal';

function BasketItem(props) {
	const [count, setCount] = useState(props.count);
	const [price, setPrice] = useState(props.price);
	const [modal, setModal] = useState(false);
	const [additions, setAdditions] = useState([]);
	const {basketProducts, setBasketProducts} = useContext(Context)

	const deteteBasketItem = (e) => {
		const newProducts = basketProducts.filter(elem => elem.id !== props.id)
		setBasketProducts(newProducts)
		window.location.reload();
	}


	const additionsHandler = ()=>{
		basketProducts.map(e=>{
			if(e.id == props.id){
				setAdditions(e.additions)
			}
		})	
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
	useEffect(()=>{
		additionsHandler()
	},[])
	

	return (
		<div className={styles.basketItem}>
			<span onClick={deteteBasketItem} className={styles.closeItem}>&#10006;</span>
			<div className={styles.basketItem__Wrap}>
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
				<span  className={styles.basketItem__price}>{price}&#8381;</span>
			</div>
			<ul className={styles.basketItem__additions}>
				{
					additions?
					additions.map(e=>(
						<li>+ {e.name} <span>x{e.quantity}</span></li>
					))	
					:
					null
				}
			</ul>

			<BasketModal
				id={props.id}
				productId = {props.productId}
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