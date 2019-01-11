import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {View, Text} from 'react-native';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';

import StartPage from './components/StartPage';




class App extends Component {

    componentDidMount() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyACc5cHJf1muly67n-CnTw3IE9XEJAxDsw',
            authDomain: 'wearther-ps.firebaseapp.com',
            databaseURL: 'https://wearther-ps.firebaseio.com',
            projectId: 'wearther-ps',
            storageBucket: 'wearther-ps.appspot.com',
            messagingSenderId: '1023953546642'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <StartPage/>
            </Provider>
        );
    }
}

export default App;