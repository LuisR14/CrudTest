import React from 'react'
import firestore from '@react-native-firebase/firestore';

export const DbFirebase = async() => {
  


const users = await firestore().collection('Cars').get();
console.log('users:',users)

}
