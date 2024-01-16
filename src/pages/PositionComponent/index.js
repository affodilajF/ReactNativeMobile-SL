/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import cart from '../../asset/icons/cart.png';

export default function PositionComponent() {
  return (
    <View style={styles.viewWrapper}>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.image} />
        <Text style={styles.notifText}> 10 </Text>
      </View>
      <Text> Your cart </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notifText: {
    backgroundColor: 'green',
    color: 'white',
    padding: 3,
    borderRadius: 15,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  viewWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  cartWrapper: {
    height: 93,
    width: 93,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 93 / 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {width: 50, height: 50},
});

// cartWrapper position relative digunakan agar notifText tidak keluar dari wrappernya
// but idk how its going
