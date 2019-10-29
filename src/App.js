import React, { Component } from 'react';
import './App.css';
import data from './dataList';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import CartDetails from './components/cartDetails';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Class Component: - Smart/ Container component
class App extends Component {
  state = {
    productList: data,
    cartList: [],
  };

  addItemToCart = (item) => {
    console.log(' added item =', item);
    const { cartList } = this.state;
    const newCartDetails = [...cartList];
    newCartDetails.push(item);
    console.log('New Added Items = ', newCartDetails);
    this.setState({
      cartList: newCartDetails,
    });
  }

  render() {
    const { productList, cartList } = this.state;
    return (
      <div className="App">
        <Header msg="React Shopping Cart!" className="head_container">
          <h5>Amazing shoes here !! </h5>
        </Header>
        <Router>
          <nav>
            <Link to='/'>Products</Link>
            <Link to='/about'>CartDetails</Link>
          </nav>
          <Switch >
            <Route exact path="/" >
              <Products
                allProducts={productList}
                addToCart={this.addItemToCart}
              />
            </Route>
            <Route exact path="/about" ><CartDetails cartItems={cartList} /></Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;