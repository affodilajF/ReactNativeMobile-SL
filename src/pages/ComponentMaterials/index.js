/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const customStyle = {width: 200, height: 200};

//  FUNCTIONAL COMPONENT
const SampleComponent = () => {
  return (
    <View>
      {/* function component */}
      <Text> Hai </Text>
      <Text> Ha2 </Text>
      <AnotherComponent />
      <AnotherCompImg />
      <TextInput style={{borderWidth: 1}} />

      {/* Class component */}
      <BoxGreen />
      <BoxRed />
      <BoxWhite />
    </View>
  );
};

const AnotherComponent = () => {
  return <Text> 'Another Component' </Text>;
};

const AnotherCompImg = () => {
  return (
    <Image
      source={{
        uri: 'https://i.pinimg.com/564x/fe/7b/bc/fe7bbca557b63534d57c0eea4dc947dd.jpg',
      }}
      style={customStyle}
    />
  );
};

// CLASS COMPONENT  --------------------
class BoxGreen extends Component {
  render() {
    return <Text> This is component from class </Text>;
  }
}

class BoxWhite extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log('Ini constructor');
  // }
  render() {
    console.log('HMZ');
    return (
      <View>
        <Text> This is BoxWhite </Text>
        <Image
          source={{
            uri: 'https://i.pinimg.com/564x/fe/7b/bc/fe7bbca557b63534d57c0eea4dc947dd.jpg',
          }}
          style={customStyle}
        />
      </View>
    );
  }
}

class BoxRed extends Component {
  render() {
    return <AnotherCompImg />;
  }
}
export default BoxWhite;
