import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
        <View style={styles.containerStyle}>
          {props.children}
        </View>
    );

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, //for ios
    shadowRadius: 2,
    elevation: 1, // for android
    marginLeft: 5,
    marginRight:5,
    marginTop: 10,

  }
  
};

export { Card };
