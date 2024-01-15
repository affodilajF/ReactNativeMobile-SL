/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View} from 'react-native';

// class FlexBox extends Component {
//   render() {
//     return (
//       <View style={{flexDirection: 'row'}}>
//         <View style={{backgroundColor: 'purple', height: 50, flex: 1}} />
//         <View style={{backgroundColor: 'pink', height: 60, flex: 2}} />
//         <View style={{backgroundColor: 'orange', height: 80, flex: 3}} />
//         <View style={{backgroundColor: 'green', height: 150, flex: 7}} />
//       </View>
//     );
//   }
// }

class FlexBox extends Component {
  render() {
    return (
      <View
        style={{height: 400, flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{backgroundColor: 'purple', height: 50, width: 50}} />
        <View style={{backgroundColor: 'pink', height: 60, width: 50}} />
        <View style={{backgroundColor: 'orange', height: 80, width: 50}} />
        <View style={{backgroundColor: 'green', height: 150, width: 50}} />
      </View>
    );
  }
}

// class FlexBox extends Component {
//   render() {
//     return (
//       <View
//         style={{
//             height : 900,
//           flexDirection: 'column',
//           justifyContent: 'flex-end',
//           alignItems: 'center',
//         }}>
//         <View style={{backgroundColor: 'purple', height: 50, width: 50}} />
//         <View style={{backgroundColor: 'pink', height: 60, width: 60}} />
//         <View style={{backgroundColor: 'orange', height: 80, width: 90}} />
//         <View style={{backgroundColor: 'green', height: 150, width: 150}} />
//       </View>
//     );
//   }
// }

// class FlexBox extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           height: 700,
//           flexDirection: 'column',
//           justifyContent: 'flex-end',
//           alignItems: 'center',
//         }}>
//         <View style={{backgroundColor: 'purple', height: 50, width: 50}} />
//         <View style={{backgroundColor: 'pink', height: 60, width: 70}} />
//         <View style={{backgroundColor: 'orange', height: 80, width: 90}} />
//         <View style={{backgroundColor: 'green', height: 150, width: 150}} />
//       </View>
//     );
//   }
// }

// class FlexBox extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           height: 400,
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}>
//         <View style={{backgroundColor: 'purple', flex: 1, width: 40}} />
//         <View style={{backgroundColor: 'pink', flex: 1, width: 40}} />
//         <View style={{backgroundColor: 'orange', flex: 2, width: 20}} />
//         <View style={{backgroundColor: 'green', flex: 4, width: 90}} />
//       </View>
//     );
//   }
// }

export default FlexBox;
