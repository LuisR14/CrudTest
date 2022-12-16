import firestore from '@react-native-firebase/firestore';

export const AddCar = async(Marca,Modelo) => {
  
    firestore()
      .collection('Cars')
      .add({
        marca: Marca,
        modelo: Modelo,
      })
      .then(() => {
        console.log('Car Added!');
      });
}
