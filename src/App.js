import './App.css';
import {Header} from './components/Header/Header'
import {CategoryListContainer} from './components/CategoryListContainer/CategoryListContainer'
import {ProductsListContainer} from './components/ProductsListContainer/ProductsListContainer'
import {DetailContainer} from './components/DetailContainer/DetailContainer'
import {Footer} from './components/Footer/Footer'
import {Home} from './components/Home/Home'
import {Cart} from './components/Cart/Cart'
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
          <Route path="/cart">
            <Cart/> 
          </Route>
        </Switch>
        <Footer />   
      </BrowserRouter>       
    </div>
  );
}
export default App;
