import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Counter from './components/Counter'
import Effect1 from './components/Effect1';
import Effect2 from './components/Effect2';
import Effect3 from './components/15-09/Effect3';
import Effect4 from './components/15-09/Effect4';
import Params from './components/15-09/Params';
import SingleProduct from './components/15-09/SingleProduct';
import Mapping from './components/16-09/Mapping';
import Ternary from './components/16-09/Ternary';

import { useState } from 'react';
import StyledComponents from './components/16-09/StyledComponents';
import Counterse from './components/16-09/Counterse';
import DynamicStyles from './components/20-09/DynamicStyles';
import ChildrenProps from './components/22-09/ChildrenProps';
import RegisterReact from './components/22-09/RegisterReact';
import Timer from './components/29-09/Timer';
import PageNotFound from './components/29-09/PageNotFound';
import { ClassComponent } from './components/29-09/ClassComponent';
import Product from './components/30-09/Product';
import SingleProductNew from './components/01-10/SingleProductNew';
import AddProduct from './components/04-10/AddProduct';
import UseMemo from './components/06-10/UseMemo';
import TestReducer from './components/08-10/TestReducer';
import CustomHook from './components/13-10/CustomHook';
import CustomHookLS from './components/13-10/CustomHookLS';





function App() {

  const [loggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="App">
      <Routes>
   ?
            {/* <h1>Counter : {state.count}</h1> */}
            {/* <button onClick={() => dispatch({type : "Increment"})} >Increment+</button><br/><br/>    */}
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/counter' element={<Counter />} />
        <Route exact path='/effect1' element={<Effect1 />} />
        <Route exact path='/effect2' element={<Effect2 />} />
        <Route exact path='/effect3' element={<Effect3 />} />
        <Route exact path='/effect4' element={<Effect4 />} />
        <Route exact path='/params' element={<Params />} />
        <Route exact path='/singleProduct/:id/' element={<SingleProduct />} />
        <Route exact path='/mapping' element={<Mapping kuchbhi={'Hii'} names={["faez","amaan","awdiz","kohli","virat"]} />} />
        <Route exact path='/ternary' element={<Ternary loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn}  />} />
        <Route exact path='/styled-components' element={<StyledComponents/>}/>
        <Route exact path='/counterse' element={<Counterse />}/>
        <Route exact path='/dynamic-styles' element={<DynamicStyles />}/>
        <Route exact path='childrenprops' element={<ChildrenProps/>} />
        <Route exact path='registerreact' element={<RegisterReact/>} />
        <Route exact path='timer' element={<Timer/>} />
        <Route exact path='pagenotfound' element={<PageNotFound/>} />
        <Route exact path='classcomponent' element={<ClassComponent/>} />
        <Route exact path='product' element={<Product/>} />
        <Route exact path='single-product/:id' element={<SingleProductNew/>} />
        <Route exact path='/add-product' element={<AddProduct/>} />
        <Route exact path='/use-memo' element={<UseMemo/>} />
        <Route exact path='/test-reducer' element={<TestReducer/>} />
        <Route exact path='/customhook' element={<CustomHook />} />
        <Route exact path='/customhookls' element={<CustomHookLS />} />
        

      </Routes>
    </div>
  );
}

export default App;