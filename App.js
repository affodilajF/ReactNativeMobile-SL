/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MacbookCard from './macbookCard';
import {View, ScrollView} from 'react-native';
import FlexBox from './MateriFlexbox';

const App = () => {
  return (
    <View>
      <ScrollView>
        <FlexBox />
      </ScrollView>
    </View>
  );
};

export default App;
