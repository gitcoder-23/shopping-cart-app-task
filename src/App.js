import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBarmenu from './constants/NavBarmenu';
import Cart from './pages/cart/Cart';
import Categories from './pages/category/Categories';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import Product from './pages/product/Product';
import ViewProduct from './pages/product/ViewProduct';

const App = () => {
  return (
    <div className="App">
      <NavBarmenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Categories} />
        <Route exact path="/products/category/:catData" component={Product} />
        <Route exact path="/viewproduct/:proId" component={ViewProduct} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
