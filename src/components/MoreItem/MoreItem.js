import React, {useEffect, useState} from 'react';
import styles from './MoreItem.module.scss'


function MoreItem(props) {

	const [count, setCount] = useState(0)
	const [additions, setAdditions] = useState()


	const countUpHandler = (e) =>{
		setCount(count + 1)

		setAdditions({
			"id": props.id,
			"quantity": count + 1,
			"price": props.price,
			"name": props.moreTitle
		})
	}
	const countDownHandler = (e) =>{
		if(count > 0){
			setCount(count - 1);

			setAdditions({
				"id": props.id,
				"quantity": count - 1,
				"price": props.price,
				"name": props.moreTitle
			})
		}
	}
	
	useEffect(e=>{
		props.getAdditions(additions)
		//console.log(additions)
	},[additions])


	return (
		<div className={styles.moreItem}>
			<div  className={styles.addPrice}>+{props.price}&#8381;</div>
			<img src={props.moreImg} alt="img" />
			<span>{props.moreTitle}</span>
			<div>
				<span  onClick={countDownHandler} className={styles.countDown}>-</span>
				<span>{count}</span>
				<span  onClick={countUpHandler} className={styles.countUp}>+</span>
			</div>
		</div>
	);
}

export default MoreItem;