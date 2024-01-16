# COMPONENT 
https://reactnative.dev/docs/components-and-apis

Ada yang diesdiakan oleh react (Img, View dll) dan custom sendiri. 

Component only can return one induk. 

## Functional Component 
```javascript

const App = () => {
      return <Text></Text>
}

function App(){
}
```

![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/c4124800-4db1-4ca8-ae4d-155e5c1f6b4b)


## Class component

```javascript

import {Component} from 'react';

class BoxFreen extends Component {
   render(){
      return <Text> This is component from class </Text>;
   }
}
```
![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/891ef9b6-440d-4fb1-bc1a-a7a99835ad4a)


### Whats the diff between funct/class component? idk 

# BASIC STYLING REACT NATIVE 
yagitudeh

![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/05094567-b2be-443e-82d7-622961f5e3fd) 

Cara pake : 

![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/3a07531d-6295-4dc5-b0f1-3fa3074da824)


# EXPORT IMPORT COMPONENT

component bisa diakses dimana saja => export default namaComponent. 

memanggil export default => import namaComponent.

kalo gapake "default" manggilnya pake {}, but ini partice yg kurang tepat.

![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/bb3201cf-5d4b-4525-b3c1-d3ffb62c1d07)


![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/53a42f26-a187-49ec-895b-a0b1edb818cf)

![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/868b338e-1e6d-47cf-b990-4c4b4777ba21)

# BASIC LAYOUING REACT NATIVE (FLEXBOX)  HEMMMM INTUITIF SAJA DICOBA LANGSUNG
Check file MateriFlexbox.js ajaa. 

#### flex 
Artinya memenihi sisanya. Makin besar nilainya maka makin besar. "Memenuhi" refer ke memenuhi baris horizontal (row). 

#### flexDirection 
Bagaimana komponen dalam satu group berbaris. 
- row => horizontal
- column => vertical (default)

#### align-items : mengacu pada ALIGN komponen didalamnya
flex-direction : row
- center => rata tengah
- flex-start => rata atas
- flex-end => rata bawah

flex-direction : column
- center => rata tengah
- flex-start => rata kiri
- flex-end => rata kanan

#### justifyContent : mengacu pad SPACE yang membungkus komponen
Bagaimana komponen didalam parent komponen berbaris terhadap SPACE yang ada. 
flex-direction : row 
- center =>
- flex-end =>
- space-between => mengisi semua bagian lebar dan memberi jarak
- flex -start =>

flex-direction : column 


# KONSEP POSITION COMPONENT
position : 'absolute' => posisi bebas bergerak di app kita dimanapun.

position : 'relative' => 

# Structuring Great Project 
By default, library by js (react for instance) will be looking for the file named "index".

# Class Cimponent lifecycle 

# Functional Component (hooks) lifecycle 

# Dynamic component with props 

$




 

   
