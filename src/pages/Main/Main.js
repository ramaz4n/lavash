import React from 'react';
import styles from './Main.module.scss'
import Card from '../../components/Card/Card';
import burger from '../../images/burger.png'
import modalBurger from '../../images/modal-burger.png'
import pomidor from '../../images/pomidor.png'
import ogurec from '../../images/ogurec.png'
import potatos from '../../images/potatos.png'

function Main(props) {
	return (
		<div>
			<img className={styles.pomidor} src={pomidor} alt="img" />
      	<img className={styles.ogurec} src={ogurec} alt="img" />

			<ul className={styles.menu}>
         	<li className={styles.menu__item}>
            	<a href="#">Комбо</a>
          	</li>
          	<li className={styles.menu__item}>
            	<a href="#">Шаурма</a>
          	</li>
          	<li className={styles.menu__item}>
            	<a href="#">Бургеры</a>
          	</li>
          	<li className={styles.menu__item}>
            	<a href="#">Первые блюда</a>
          	</li>
          	<li className={styles.menu__item}>
            	<a href="#">Вторые блюда</a>
          	</li>
          	<li className={styles.menu__item}>
            	<a href="#">Салаты</a>
          	</li>
          	<li className={styles.menu__item}>
            	<a href="#">Снеки</a>
          	</li>
          	<li className={styles.menu__item}>
            	<a href="#">Выпечка</a>
          	</li>
          	<li className={styles.menu__item}>
            	<a href="#">Десерты</a>
          	</li>
          	<li className={styles.menu__item}>
            	<a href="#">Напитки</a>
          	</li>
        	</ul>

      	<div className={styles.menuWrapper}>

          	<Card 
            	img={burger} 
            	imgModal={modalBurger}
            	moreImg={potatos}
            	title={"Бургер Мексика"} 
            	moreTitle={"Картофель фри"}
            	text={"Описание ложно сказать, почему непосредственные участники технического прогрессаизации"}
            	price={219}
            	weight="330г"
            	structure={"Описание ложно сказать, почему непосредственные участники технического прогрессаизации"}
          	/>
          	<Card 
            	img={burger} 
            	imgModal={modalBurger}
            	moreImg={potatos}
            	title={"Бургер Мексика"} 
            	moreTitle={"Картофель фри"}
            	text={"Описание ложно сказать, почему непосредственные участники технического прогрессаизации"}
            	price={219}
            	weight="330г"
            	structure={"Описание ложно сказать, почему непосредственные участники технического прогрессаизации"}
          	/>
          	<Card 
            	img={burger} 
            	imgModal={modalBurger}
            	moreImg={potatos}
            	title={"Бургер Мексика"} 
            	moreTitle={"Картофель фри"}
            	text={"Описание ложно сказать, почему непосредственные участники технического прогрессаизации"}
            	price={219}
            	weight="330г"
            	structure={"Описание ложно сказать, почему непосредственные участники технического прогрессаизации"}
          	/>
        	</div>
		</div>
	);
}

export default Main;