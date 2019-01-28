import React, {Component} from 'react';
import {Provider} from 'react-redux';
//import {View, Text} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
//import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';

import Router from './Router';




class App extends Component {

        // IF i decide to use firebase
    /*
    componentDidMount() {
        // Initialize Firebase
        const config = {
            apiKey: {process.env.REACT_APP_API_KEY_FIREBASE},
            authDomain: 'wearther-ps.firebaseapp.com',
            databaseURL: 'https://wearther-ps.firebaseio.com',
            projectId: 'wearther-ps',
            storageBucket: 'wearther-ps.appspot.com',
            messagingSenderId: '1023953546642'
        };
        firebase.initializeApp(config);
    }*/

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router  />
            </Provider>
        );
    }
}

export default App;