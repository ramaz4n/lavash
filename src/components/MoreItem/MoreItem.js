import React, {useState} from 'react';
import styles from './MoreItem.module.scss'


function MoreItem(props) {

	const [count, setCount] = useState(0)
	
	const countUpHandler = () =>{
		setCount(count + 1)
	}
	const countDownHandler = () =>{
		if(count > 0){
			setCount(count - 1);
		}
	}

	return (
		<div className={styles.moreItem}>
			<div  className={styles.addPrice}>+{props.addPrice}&#8381;</div>
			<img src={props.moreImg} alt="img" />
			<span>{props.moreTitle}</span>
			<div>
				<span onClick={countDownHandler} className={styles.countDown}>-</span>
				<span>{count}</span>
				<span onClick={countUpHandler} className={styles.countUp}>+</span>
			</div>
		</div>
	);
}

export default MoreItem;