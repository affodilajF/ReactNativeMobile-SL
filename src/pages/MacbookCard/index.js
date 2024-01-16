/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const MacbookCard = () => {
  return (
    <View style={thisIsStyle.View}>
      <Image
        source={{
          uri: 'https://s.yimg.com/ny/api/res/1.2/gjcX3sHP8wuE1cdNwktcpw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU4NztjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-10/c3b1e320-56c3-11ed-b9e9-d81c1d58b788',
        }}
        style={thisIsStyle.Image}
      />
      <Text
        style={{
          paddingTop: 15,
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Macbook Pro M2
      </Text>
      <Text style={{fontSize: 18, paddingTop: 5, color: 'orange'}}>
        {' '}
        Rp. 25000{' '}
      </Text>
      <Text style={{fontSize: 12, paddingTop: 5}}> Jakarta Pusat </Text>
      <View
        style={{
          marginTop: 10,
          width: 200,
          backgroundColor: 'green',
          borderRadius: 10,
          padding: 5,
        }}>
        <Text
          style={{
            padding: 2,
            fontSize: 15,
            textAlign: 'center',
            color: 'white',
          }}>
          Beli
        </Text>
      </View>
    </View>
  );
};

const thisIsStyle = StyleSheet.create({
  View: {
    margin: 10,
    padding: 20,
    backgroundColor: '#F2F2F2',
    width: 250,
  },
  Image: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
});

export default MacbookCard;
