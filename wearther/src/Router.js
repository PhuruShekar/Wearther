import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import StartPage from './components/StartPage';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="find" component={StartPage} title="Wearther" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;