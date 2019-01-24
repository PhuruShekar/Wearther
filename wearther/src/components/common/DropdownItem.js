import React, {PureComponent} from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';

class DropdownItem extends PureComponent {

    handlePress = async() => {
        const res = await this.props.fetchDetails(this.props.place_id)
        console.log('result',res.geometry.location);
        
    }

    render() {
        return (
            <TouchableOpacity style={styles.root} onPress={this.handlePress}>
                <Text>{this.props.description}</Text>
            </TouchableOpacity>
        );
    }
}


const styles = {
    root: {
        height: 38,
        width: 300,
        borderBottomWidth: 1,
        justifyContent: 'center',
    }
}

export {DropdownItem};