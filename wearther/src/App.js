import React, {Component} from 'react';
import {Provider} from 'react-redux';
//import {View, Text} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';

import {API_KEY_FIREBASE} from '../src/API';
import StartPage from './components/StartPage';
import Router from './Router';



class App extends Component {

    componentDidMount() {
        // Initialize Firebase
        const config = {
            apiKey: {API_KEY_FIREBASE},
            authDomain: 'wearther-ps.firebaseapp.com',
            databaseURL: 'https://wearther-ps.firebaseio.com',
            projectId: 'wearther-ps',
            storageBucket: 'wearther-ps.appspot.com',
            messagingSenderId: '1023953546642'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <StartPage/>
            </Provider>
        );
    }
}

export default App;