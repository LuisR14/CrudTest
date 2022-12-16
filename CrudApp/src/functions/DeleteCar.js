import React from 'react'
import firestore from '@react-native-firebase/firestore';


export const DeleteCar = (ID) => {
  
    firestore()
    .collection('Cars')
    .doc(ID)
    .delete()
    .then(() => {
      console.log('Car deleted!');
    });
    

}
