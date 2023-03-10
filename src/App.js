import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import Main from './pages/Main/Main';
import Contacts from './pages/Contacts/Contacts';
import Basket from './pages/Basket/Basket';
import Delivery from './pages/Delivery/Delivery';
import Auth from './pages/Auth/Auth';
import Registration from './pages/Registration/Registration';
import Account from './pages/Account/Account';
import {Context} from './Context'
import PayStatus from './pages/PayStatus/PayStatus';
import styles from './App.module.scss';


function App() {
	const [orderStatus, setOrderStatus] = useState(Boolean)
	const [basketCount, setBasketCount] = useState(0)
	const [products, setProducts] = useState([])
	const [basketProducts, setBasketProducts] = useState(JSON.parse(localStorage.getItem('basketProducts'))? JSON.parse(localStorage.getItem('basketProducts')):[])



	const requestOptions = {
		method: 'GET',
		redirect: 'follow'
	 };
	async function getProducts (){
		await fetch("https://lavash.endlessmind.space/api/products", requestOptions)
		.then(response => response.json())
		.then(result => {
			let arr=[]
			for(let i = 1; i < 15; i++){
				result.map(e=>{
					if(e.category == i){
						arr.push(e)
					}
				})
			}
			setProducts(arr)
		})
		.catch(error => console.log('error', error));
	}
	const sendToLocalStorage = () =>{
		localStorage.setItem('basketProducts', JSON.stringify(basketProducts))
	}




	useEffect(() => {
		getProducts()
	}, []);

	useEffect(() => {
		sendToLocalStorage()
	}, [basketProducts]);

  return (
	<Context.Provider value={
		{
			products,
			setProducts,
			basketProducts,
			setBasketProducts,
			basketCount,
			setBasketCount,
			orderStatus,
			setOrderStatus
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
						<Route path="payStatus" element={<PayStatus/>} />
					</Routes>

				</Container>
			<Footer/>
		</div>
	</Context.Provider>
  );
}

export default App;
