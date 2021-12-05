import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from "./pages/homepage/homepage.component";


const HatsPage = () => {
    return(
        <div>
            <h1><a href="/hats-details">HatsPageDetails</a></h1>
            <h1><a href="/">Home</a></h1>
        </div>
    )
}

const HatsPageDetails = () => {
    return(
        <div>
            <h1><a href="/">Home</a></h1>
            <h1><a href="/hats">HatsPage</a></h1>
        </div>
    )
}

function App() {

    return (
        <div>
            <Switch>
                <Route path={'/'} exact component={HomePage}/>
                <Route path={'/hats'} exact component={HatsPage}/>
                <Route path={'/hats-details/:id'} exact component={HatsPageDetails}/>
            </Switch>
        </div>
    );
}

export default App;