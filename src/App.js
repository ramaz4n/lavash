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


function App() {


  return (
	<Context.Provider value={
		{

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
