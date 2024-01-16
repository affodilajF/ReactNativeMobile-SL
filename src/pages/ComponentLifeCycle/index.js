/* eslint-disable no-sequences */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
// CLASS LIFECYCLE
// class ComponentLifecycle extends Component {
//   constructor(props) {
//     super(props);
//     console.log('Ini constructor');
//     this.state = {
//       subscriber: 200,
//     };
//   }

//   componentDidMount() {
//     console.log('ini componentDidMounttt');
//     setTimeout(
//       () =>
//         this.setState({
//           subscriber: 600,
//         }),
//       2000,
//     );
//   }
//   render() {
//     console.log('Ini render');
//     return <Text> Subscribernya adl : {this.state.subscriber} </Text>;
//   }
// }

const ComponentLifecycle = () => {
  const [subs, setSubs] = useState(200);

  useEffect(() => {
    console.log('ini didMount');
    // setTimeout(() => {
    //   setSubs(400), 20000;
    // });
    setTimeout(() => {
      setSubs(400);
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [subs]);

  return <Text> Subscribernya adlaahh : {subs} </Text>;
};

// FUNCTIONAL COMPONENT (hooks)

export default ComponentLifecycle;
