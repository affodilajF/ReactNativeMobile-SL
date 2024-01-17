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
Library => ReactNative debugger / browser localhost:8081/debugger-ui/
### Class Component
1. Komponen Muncul => Urutannya constructor, render, componentDidMount.
2. Berubah (updating) => Render, componentDidUpdate.
3. Hilang => componentWillUnmount.

* Function yang sering di pakai bergaris tebal/
![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/1eb9d601-5f77-43c6-bc63-58eae5a97a79)

 ![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/b85055b0-6449-4143-9cd9-e0e2ae55c70c)

### Functional Component (Hooks)
Theres no render method.

Semua lifecycle dibungkus didalam satu method. Named useEffect. 

UseEffect can handle :
- Komponen muncul
  
  ![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/49f1986d-6f6a-494e-b2ae-9d4fe3a8fadf)
  
- Kompnen berubah
  didUpdate berdiri jadi useEffect sendiri.

  ![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/cd96fff7-f31c-4ac5-9cab-e41b94955abb)

  diMount dan didUpdate berada di satu useEffect.

  useEffect ( parameter logika didmount return didupdate/willunmount, parameter perubahan berdasarkan apa)
  
  ![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/1c92d826-e826-4ae0-8989-f52ce08f431c)

- Komponen hilang

# Dynamic component with PROPS
Can be use in class comp and function comp. 

![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/85f914b5-f7ec-4691-bb6b-435f64de0eb7)

![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/a4aba2d7-d8dc-4086-8501-a1285d7ebfd0)


# Dynamic component with STATE
Can be use in class comp and function comp. 

![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/82df404f-cb33-4321-970f-d2a4d6f62d5e)




 

   
