import React from 'react'
import { Text, View } from 'react-native'
import { useSelector,useDispatch } from 'react-redux';
import { CreateData } from '../redux/actions';

export const Home = () => {



  const count = useSelector((store) => store.Cars);
  console.log("Cars:",count)
  

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>HOMESCREEN</Text>
    </View>
  )
}
