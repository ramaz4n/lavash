import React from 'react';
import Logo from '../Logo/Logo';
import icon1 from '../../images/icon1.svg'
import icon2 from '../../images/icon2.svg'
import styles from './Header.module.scss'
import Container from '../Container/Container';
import { useState } from 'react';
import {Link} from "react-router-dom";




function Header(props) {

	const [busket, setBusket] = useState(2);

	return (
		<div className={styles.header}>
			<Container>
				<div className={styles.header__wrapper}>
					<div className={styles.header__logoWrap}>
						<Link to="/"><Logo/></Link>
						<div className={styles.header__sity}>
							<span>Выбрать город: </span>
							<select className={styles.header__select}>
								<option value="Москва">Ижевск</option>
								<option value="Казань">Казань</option>
							</select>
						</div>
					</div>

					<nav className={styles.header__nav}>
						<Link to="/delivery">О доставке</Link>
						<Link to="/contacts">Контакты</Link>
						<a className={styles.header__delivery} href="#">Доставка 24/7</a>
						<a className={styles.header__phone} href="tel:906906" type="phone"> 906-906</a>
						<div className={styles.header__navIcon}>
							<img src={icon1} alt="user" />
							<Link to="/basket">
								<div className={styles.header__busket}>
									<img src={icon2} alt="busket" />
									<span className={styles.header__busCount}>{busket}</span>
								</div>
							</Link>
						</div>
					</nav>
				</div>
			</Container>
		</div>
	);
}

export default Header;