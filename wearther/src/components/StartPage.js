import React, {Component} from 'react';
import {Text} from 'react-native';
import {Connect} from 'react-redux';
import {locationChanged} from '../actions';
import {Card, CardSection, Input, Button} from './common';


class StartPage extends Component {


    onLocationChange(text) {
        this.props.locationChanged(text);
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
                    <Button>
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

export default connect(null, {locationChanged})(StartPage);