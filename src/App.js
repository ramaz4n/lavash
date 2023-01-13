import styles from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import { Routes, Route } from "react-router-dom";
import Main from './pages/Main/Main';
import Contacts from './pages/Contacts/Contacts';
import Basket from './pages/Basket/Basket';
import Delivery from './pages/Delivery/Delivery';
import Auth from './pages/Auth/Auth';
import Registration from './pages/Registration/Registration';
import Account from './pages/Account/Account';
import {Context} from './Context'
import { useEffect, useState } from 'react';


function App() {

	const [products, setProducts] = useState([])
	const [basketProducts, setBasketProducts] = useState([])

	const requestOptions = {
		method: 'GET',
		redirect: 'follow'
	 };
	async function getProducts (){
		await fetch("https://lavash.endlessmind.space/api/products", requestOptions)
		.then(response => response.json())
		.then(result => {
			setProducts(result)
		})
		.catch(error => console.log('error', error));
	}

	useEffect(() => {
		getProducts()
	}, []);

  return (
	<Context.Provider value={
		{
			products,
			setProducts,
			basketProducts,
			setBasketProducts
		}
	}
	
	>
		<div className={styles.App}>
			<Header/>
			<Container>
				<Routes>
					<Route path="/" element={<Main/>} />
					<Route path="delivery" element={<Delivery/>} />	
					<Route path="contacts" element={<Contacts/>} />	
					<Route path="basket" element={<Basket/>} />
					<Route path="auth" element={<Auth/>} />
					<Route path="registration" element={<Registration/>} />
					<Route path="account" element={<Account/>} />
				</Routes>

			</Container>
			<Footer/>
		</div>
	</Context.Provider>
  );
}

export default App;
