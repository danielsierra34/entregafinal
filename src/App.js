import './App.css';
import {Header} from './components/Header/Header'
import {CategoryListContainer} from './components/Category/CategoryListContainer'
import {ProductsListContainer} from './components/Products/ProductsListContainer'
import {DetailContainer} from './components/Detail/DetailContainer'
import {CheckoutContainer} from './components/Checkout/CheckoutContainer'
import {Footer} from './components/Footer/Footer'
import {Home} from './components/Home/Home'
import {CartContainer} from './components/CartContainer/CartContainer'
import {BrowserRouter, Switch, Route,BrowserHistory} from 'react-router-dom'


function App() { 

  return (      
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/categories/">
            <CategoryListContainer/>
          </Route>
          <Route path="/products/:category">
            <ProductsListContainer/>
          </Route>
          <Route path="/detail/:productId">
            <DetailContainer/>
          </Route>
          <Route path="/cart/">
            <CartContainer/> 
          </Route>
          <Route path="/checkout/">
            <CheckoutContainer/> 
          </Route>
        </Switch>
        <Footer />   
      </BrowserRouter>       
    </div>
  );
}
export default App;
