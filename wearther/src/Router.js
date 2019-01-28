import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import StartPage from './components/StartPage';
import MainPage from './components/MainPage';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="find" component={StartPage} title="Wearther" titleStyle={{textAlign: 'center', flex: 1}} initial/>
                <Scene key="mainpage" component={MainPage} title="Location" titleStyle={{textAlign: 'center', flex: 1}} />
            </Scene>
        </Router>
    );
};

export default RouterComponent;