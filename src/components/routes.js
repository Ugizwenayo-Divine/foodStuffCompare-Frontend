import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import AddCategory from './category/category';
import AddLocation from './location/location';
import AddMarket from './market/market';
import HomePage from './home-page/homePage';
import AddProduct from './product/product';
import AllUsers from './display-user/display-user';
import AllProducts from './display-product/display-product';
import AllMarkets from './diplay-market/display-market';
import AllCategories from './display-category/display-category';
import UpdateUser from './update-user/update-user';
import UpdateMarket from './update-market/update-market';
import UpdateProduct from './update-product/update-product';
import ClientPage from './display-client/display-client';
import Order from './createOrder/createOrder';
import ClientOrders from './clientOrders/clientOrders';
import AllOrders from './displayOrders/displayOrders';

const Routes = () => (
  <Switch>
    {/* Auth routes */}
    <Route exact path='/' component={HomePage} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/login' component={Login} />

    {/* Adding Product */}
    <Route exact path='/addcategory' component={AddCategory} />
    <Route exact path='/addlocation' component={AddLocation} />
    <Route exact path='/addmarket' component={AddMarket} />
    <Route exact path='/addproduct' component={AddProduct} />
    <Route exact path='/displayuser' component={AllUsers} />
    <Route exact path='/displayproduct' component={AllProducts} />
    <Route exact path='/displaymarket' component={AllMarkets} />
    <Route exact path='/displaycategory' component={AllCategories} />
    <Route exact path='/updateuser' component={UpdateUser} />    
    <Route exact path='/updatemarket' component={UpdateMarket} />   
    <Route exact path='/updateproduct' component={UpdateProduct} />
    <Route exact path='/displayclient' component={ClientPage} />
    {/* product order */}
    <Route exact path='/order' component={Order} />
    {/* Displaying client orders */}
    <Route exact path='/displayclientorders' component={ClientOrders} />
    {/* all orders */}
    <Route exact path='/displayorder' component={AllOrders} />
  </Switch>
);

export default Routes;
