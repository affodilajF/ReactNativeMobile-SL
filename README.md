
### GIMANA CARA BACA INLINE DOCS? GIMANA CARA BACA SYNTAX JS/TSX FOR REACT NATIVE? THIS!!!!

![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/f96b9433-e3ec-4cc8-822e-6ccfe00bfed7)

Ada interface namanya 

![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/692770cc-3769-4b10-917d-ed8ffd73204b)

punya properti onPress?:.  Ini adalah properti opsional, yang artinya Anda dapat memberikannya nilai atau tidak

![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/588670a7-06ac-488d-8f6e-8509d55e5e1a)

properti onPress memiliki parameter arrow function. 
- Arrow function tsb memiliki parameter bernama event yang bertipe data GestureRespondentEvent.
- Arrow function tidak mereturn apapun (void)

cara pakenya : 
- Tanpa parammeter event
  
  ![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/e941ccf0-7625-4ebc-bcec-8db275988d62)

- Degan parameter event
  
  ![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/17aa3ea5-5a02-4450-8666-5a08cc3552a4)

  ![image](https://github.com/affodilajF/ReactNativeMobile-SL/assets/130672181/856829af-a891-46ce-8cbf-b9705c4a2c3f)



Penting untuk dicatat bahwa pada kasus tanpa parameter, fungsi arrow yang dibuat akan menerima parameter secara otomatis jika event terjadi. Meskipun secara eksplisit kita tidak menyertakan parameter, React Native akan tetap menyampaikan objek event sebagai parameter ke fungsi tersebut. Oleh karena itu, kita dapat mengakses objek event tersebut dalam logika fungsi tersebut.





