import React, { useContext, useEffect } from 'react';
import styles from './Main.module.scss'
import Card from '../../components/Card/Card';
import burger from '../../images/burger.png'
import modalBurger from '../../images/modal-burger.png'
import pomidor from '../../images/pomidor.png'
import ogurec from '../../images/ogurec.png'
import potatos from '../../images/potatos.png'
import Menu from '../../components/Menu/Menu';
import { Context } from '../../Context';

function Main(props) {
	const {products} = useContext(Context)

	return (
		<div>
			<img className={styles.pomidor} src={pomidor} alt="img" />
      	<img className={styles.ogurec} src={ogurec} alt="img" />

			<Menu/>

      	<div className={styles.menuWrapper}>

				{
					products.map(elem=>(
						<Card 
							id = {elem.id}
							img={burger} 
							//img={elem.photo_id} 
							imgModal={modalBurger}
							moreImg={potatos}
							title={elem.name} 
							moreTitle={"Картофель фри"}
							text={elem.desc}
							price={elem.price}
							weight="330г"
							structure={"Описание ложно сказать, почему непосредственные участники технического прогрессаизации"}
						/>
					))
				}
          	
        	</div>
		</div>
	);
}

export default Main;