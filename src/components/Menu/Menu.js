import React, {useState, useEffect, useContext} from 'react';
import styles from './Menu.module.scss'
import { Context } from '../../Context';
import Slider from "react-slick";


function Menu(props) {
	const [menuItems, setMenuItems] = useState([])
	const [activItem, setActivItem] = useState(false)
	const {setProducts} = useContext(Context);


	const requestOptions = {
		method: 'GET',
		redirect: 'follow'
	 };


	const setCategories = (e) =>{
		setActivItem(true)
		async function getCategories (){
			await fetch(`https://lavash.endlessmind.space/api/products?category=${e.target.id}`, requestOptions)
			.then(response => response.json())
			.then(result => {
				setProducts(result)
			})
			.catch(error => console.log('error', error));
		}
	
		getCategories()
	}


	async function getMenuItems (){
		await fetch("https://lavash.endlessmind.space/api/categories", requestOptions)
		.then(response => response.json())
		.then(result => {
			setMenuItems(result)
		})
		.catch(error => console.log('error', error));
	}

	useEffect(() => {
		getMenuItems()
	}, []);



	return (
			<ul className={styles.menu}>
				{
					menuItems.map(elem=>(
						<li 
							id={elem.id} 
							onClick={setCategories} 
							className={styles.menu__item}
						>
							{elem.name}
						</li>
					))
				}
				<li  className={styles.menu__item}>
					fzdgfzcv
				</li>
				<li  className={styles.menu__item}>
					fzdgfzcv
				</li>
				<li  className={styles.menu__item}>
					fzdgfzcv
				</li>
				<li  className={styles.menu__item}>
					fzdgfzcv
				</li>
				<li  className={styles.menu__item}>
					fzdgfzcv
				</li>
        	</ul>
	);
}

export default Menu;