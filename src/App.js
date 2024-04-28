
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Menu from './Components/Menu';
import { Provider } from 'react-redux';
import appStore from './RKT/appStore';
import Cart from './Components/Cart';





function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/menu/:resId' element={<Menu />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>

      </div>
    </Provider>
  )
}

export default App;
