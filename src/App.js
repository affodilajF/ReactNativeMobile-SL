/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {View, ScrollView} from 'react-native';
import FlexBox from './pages/FlexBox';
import MacbookCard from './pages/MacbookCard';
import PositionComponent from './pages/PositionComponent';
import ComponentMaterials from './pages/ComponentMaterials';
import ComponentLifecycle from './pages/ComponentLifeCycle';

const App = () => {
  return (
    <View>
      <ScrollView>
        <ComponentLifecycle />
        {/* <ComponentMaterials />
        <FlexBox />
        <PositionComponent />
        <MacbookCard />
        <MacbookCard />
        <MacbookCard />
        <MacbookCard /> */}
      </ScrollView>
    </View>
  );
};

export default App;
