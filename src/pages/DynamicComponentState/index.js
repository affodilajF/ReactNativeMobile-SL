/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component, useState} from 'react';
import {Button, Text, View} from 'react-native';

// hook
const StateDynamic = () => {
  const [number, setNumber] = useState(2);
  return (
    <View style={{padding: 90}}>
      <Text> Functional Component </Text>
      <Text> Counted number : {number}</Text>
      <Button title="count" onPress={() => setNumber(number + 4)} />
    </View>
  );
};

//  class comp
class StateDynamic2 extends Component {
  state = {
    number: 2,
  };

  render() {
    return (
      <View style={{padding: 90}}>
        <Text> Class Component </Text>
        <Text> Counted number : {this.state.number}</Text>
        <Button
          title="count"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

const DynamicComponentState = () => {
  return (
    <View>
      <StateDynamic />
      <StateDynamic2 />
    </View>
  );
};

export default DynamicComponentState;
