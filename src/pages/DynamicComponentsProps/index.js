/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

// FUNCTIONAL COMPONENT
const PropsDynamic = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        style={{width: 80, height: 80, borderRadius: 40}}
        source={{uri: props.urlPhoto}}
      />
      <Text> {props.textJudul} </Text>
    </View>
  );
};

// CLASS COMPONENT
class PropsDynamic2 extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', marginRight: 20}}>
        <Image
          style={{width: 80, height: 80, borderRadius: 40}}
          source={{uri: this.props.urlPhoto}}
        />
        <Text> {this.props.textJudul} </Text>
      </View>
    );
  }
}

const DynamicComponentProps = () => {
  return (
    <ScrollView horizontal>
      <View style={{flexDirection: 'row'}}>
        <PropsDynamic2
          textJudul="Class comp"
          urlPhoto="https://i.pinimg.com/originals/3f/72/a3/3f72a3b8dc662fcaf6e92ea12aa70b7a.jpg"
        />
        <PropsDynamic
          textJudul="Function comp"
          urlPhoto="https://s.yimg.com/ny/api/res/1.2/gjcX3sHP8wuE1cdNwktcpw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU4NztjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-10/c3b1e320-56c3-11ed-b9e9-d81c1d58b788"
        />
        <PropsDynamic
          textJudul="Ha2"
          urlPhoto="https://i.pinimg.com/originals/3f/72/a3/3f72a3b8dc662fcaf6e92ea12aa70b7a.jpg"
        />
        <PropsDynamic
          textJudul="Hayyy3"
          urlPhoto="https://i.pinimg.com/564x/bc/b4/90/bcb4908df2405b33ef5a1177b74b449f.jpg"
        />
        <PropsDynamic
          textJudul="Hayyy3"
          urlPhoto="https://i.pinimg.com/564x/60/66/be/6066be32765d388793b7988e953234f1.jpg"
        />
        <PropsDynamic
          textJudul="Hayyy3"
          urlPhoto="https://s.yimg.com/ny/api/res/1.2/gjcX3sHP8wuE1cdNwktcpw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU4NztjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-10/c3b1e320-56c3-11ed-b9e9-d81c1d58b788"
        />
        <PropsDynamic
          textJudul="Hayyy3"
          urlPhoto="https://s.yimg.com/ny/api/res/1.2/gjcX3sHP8wuE1cdNwktcpw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU4NztjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-10/c3b1e320-56c3-11ed-b9e9-d81c1d58b788"
        />
      </View>
    </ScrollView>
  );
};

export default DynamicComponentProps;
