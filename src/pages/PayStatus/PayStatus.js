import React, { useState } from 'react';
import styles from './PayStatus.module.scss'
import {Link} from "react-router-dom";


function PayStatus(props) {
	const[status, setStatus] = useState(Boolean)
	return (
		<div className={styles.payStatusWrap}>
			{
				status?
				<div className={styles.payStatus}>
					<h1 className={styles.payStatus__success}>Оплата прошла успешно!</h1>
					<div className={styles.payStatus__buttons}>
						<Link className={styles.payStatus__btn} to="/">На главную</Link>

						<Link className={styles.payStatus__btn} to="/account">Отследить заказ</Link>
					</div>
				</div>
				:
				<div className={styles.payStatus}>
					<h1 className={styles.payStatus__failed}>Оплата не прошла!</h1>
					<div className={styles.payStatus__buttons}>
						<Link className={styles.payStatus__btn} to="/">На главную</Link>
						<Link className={styles.payStatus__btn} to="/basket">Назад</Link>
					</div>
				</div>
			}
		</div>
	);
}

export default PayStatus;