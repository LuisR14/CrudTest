import firestore from '@react-native-firebase/firestore';

export const UpdateCar = (IDpupdate,ModeloUpdate) => {
  
    firestore()
      .collection('Cars')
      .doc(IDpupdate)
      .update({
        modelo: ModeloUpdate,
      })
      .then(() => {
        console.log('Car updated!');
      });
      
}
