import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {locationChanged, findLocation} from '../actions';
import {Card, CardSection, Input, Button} from './common';


class StartPage extends Component {


    onLocationChange(text) {
        this.props.locationChanged(text);
    }

    onButtonPress() {
        const{location} = this.props;

        this.props.findLocation({location});
    }

    render () {
        return (
            
            <Card>
                <Text style = {styles.textStyle}>Wearther</Text>
                <CardSection>
                    <Input 
                        label="Location"
                        placeholder="What's new today?"
                        onChangeText={this.onLocationChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Find out!
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 100
    }
}

const mapStateToProps = state => {
    return {
        location: state.place.location
    };
};


export default connect(mapStateToProps,
     {locationChanged, findLocation})
     (StartPage);