import React from 'react';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import styles from './Footer.module.scss'
import vk from '../../images/vk.svg'
import phone from '../../images/phone.svg'


function Footer(props) {
	return (
		<div className={styles.footer}>
			<Container>
				<div className={styles.footer__wrapper}>
					<div className={styles.footer__contWrap}>
						<Logo/>
						<div className={styles.footer__contacts}>
							<a href="#">
								<img src={vk} alt="vk" />
							</a>
							<a href="tel:906-906" className={styles.footer__phoneWrap}>
								<img src={phone} alt="phone" />
								<span className={styles.footer__phoneNum}>906-906</span>
							</a>
						</div>
					</div>
					<div className={styles.footer__info}>
						<a href="#">О доставке</a>
						<a href="#">Контакты</a>
						<a href="#">Франшиза</a>
					</div>
					<div className={styles.footer__docs}>
						<a href="#">Политика конфиденциальности</a>
						<a href="#">Публичная оферта</a>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Footer;