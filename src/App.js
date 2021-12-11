import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";


function App() {

    return (
        <div>
            <Header />
            <Switch>
                <Route path={'/'} exact component={HomePage}/>
                <Route path={'/shop'} exact component={ShopPage}/>
                <Route path={'/signIn'} exact component={SignInAndSignUp}/>
            </Switch>
        </div>
    );
}

export default App;