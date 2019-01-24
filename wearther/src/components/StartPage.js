import React, {Component} from 'react';
import {Text,View, TextInput,ScrollView, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {GoogleAutoComplete} from 'react-native-google-autocomplete';

import {locationChanged, findLocation} from '../actions';
import {DropdownItem, Button} from './common';
import {API_KEY_GOOG} from '../API';



           /* <Card> 
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
            </Card>*/


class StartPage extends Component {


    onLocationChange({text}) {
        console.log('hi')
        //this.props.locationChanged({text});
        //this.props.findLocation({location});
    }

    onButtonPress() {
      
      this.textInput.clear();
    }

    render () {
        return (
            <View style={styles.containerStyle}> 
                <Text style = {styles.titleStyle}>Wearther</Text>
                <GoogleAutoComplete
                    apiKey={API_KEY_GOOG}
                    queryTypes={'(cities)'}
                    debounce={300}
                    minLength={3}
                >
                    {({handleTextChange,
                     locationResults,
                      fetchDetails,
                       isSearching,
                        inputValue,
                        clearSearchs}) => (
                        <React.Fragment>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    placeholder='Whats new today?'
                                    style={styles.inputStyle}
                                    onChangeText={handleTextChange}
                                    underlineColorAndroid='transparent'
                                    value={inputValue}
                                    ref={input => { this.textInput = input }}
                                />
                                <Button onPress={clearSearchs}>Clear </ Button >
                            </View>
                            
                            {isSearching && <ActivityIndicator size="large"/>}
                            <ScrollView>
                                {locationResults.map(el =>(
                                    <DropdownItem 
                                        {...el}
                                        key={el.id}
                                        fetchDetails={fetchDetails}
                                    />
                                ))}
                            </ScrollView>
                        </React.Fragment>
                    )}

                </GoogleAutoComplete>

            </View> 
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    inputStyle: { 
        fontSize: 18,
        height:40,
        borderWidth:1,
        borderColor: '#000fff',
        flex: 2,
    },

    containerStyle: {
        //height: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        marginTop:50,
    },
    inputWrapper: {
        marginTop: 50,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,

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