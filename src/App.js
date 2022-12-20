import styles from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import { Routes, Route } from "react-router-dom";
import Main from './pages/Main/Main';
import Contacts from './pages/Contacts/Contacts';
import Basket from './pages/Basket/Basket';
import Delivery from './pages/Delivery/Delivery';


function App() {


  return (
    <div className={styles.App}>
      <Header/>
      <Container>
         <Routes>
				<Route path="/" element={<Main/>} />
				<Route path="delivery" element={<Delivery/>} />	
				<Route path="contacts" element={<Contacts/>} />	
				<Route path="basket" element={<Basket/>} />
    		</Routes>

		</Container>
      <Footer/>
    </div>
  );
}

export default App;
