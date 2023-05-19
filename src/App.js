import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';

function App() {
  return (
    <BrowserRouter>
    
      <div>

        <Header/>

        <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/coins/:id' element={<CoinPage/>}/>
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
