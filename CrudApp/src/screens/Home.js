import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CreateData, DeleteAll, DeleteData } from '../redux/actions';
import firestore from '@react-native-firebase/firestore';
import { styles } from '../styles/homestyle';
import { AddCar } from '../functions/AddCar';
import { DeleteCar } from '../functions/DeleteCar';
import { UpdateCar } from '../functions/UpdateCar';

export const Home = () => {

  const dispatch = useDispatch();
  const [Marca, setMarca] = useState(null);
  const [Modelo, setModelo] = useState(null);
  const [ModeloUpdate, setModeloUpdate] = useState(null)
  const [flag, setflag] = useState(false);
  const [IDpupdate, setIDpupdate] = useState(null);
  const [isloading, setisloading] = useState(true);
  const CarList = useSelector((store) => store.Cars);

  useEffect(() => {
    DbFirebase();
    setTimeout(() => {
      setisloading(false)
    }, 1000);
  }, [])


  const DbFirebase = async () => {

    const cars = await firestore().collection('Cars').orderBy('marca', 'asc').get();
    dispatch(DeleteAll());

    cars?.docs.map(item => {

      dispatch(CreateData({ id: item.id, marca: item.data().marca, modelo: item.data().modelo }));
    })

  }

  const ModalCar = (ID) => {
    setflag(true);
    setIDpupdate(ID);
  }


  const renderList = ({ item }) => {

    return (
      <Item id={item.id} marca={item.marca} modelo={item.modelo} />
    )
  }




  const Item = ({ id, marca, modelo }) => (


    <View style={styles.List}>

      <Text style={{ fontWeight: 'bold', color: 'black' }}>Marca:</Text>
      <Text style={styles.textList}>{marca}</Text>

      <Text style={{ fontWeight: 'bold', color: 'black' }}>Modelo:</Text>
      <Text style={styles.textList}>{modelo}</Text>

      <TouchableOpacity
        style={{ marginRight: 20 }}
        onPress={() => ModalCar(id)}
      >
        <Icon name='pencil' size={25} color={'black'} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          DeleteCar(id);
          dispatch(DeleteData(id));
        }}
      >
        <Icon name='trash-o' size={30} color={'red'} />
      </TouchableOpacity>
    </View>

  )



  return (

    <KeyboardAvoidingView
      style={{ flex: 1, alignItems: 'center' }}
    >
      <Text style={styles.title}>Cars List</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40 }}>

        <Text>Marca:</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => setMarca(text)}
          value={Marca}
        />

        <Text>Modelo:</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => setModelo(text)}
          value={Modelo}
        />

        <TouchableOpacity
          onPress={() => {
            if (Marca === null || Modelo === null)
              Alert.alert('Debe completar todos los campos')
            else {
              AddCar(Marca, Modelo)
              DbFirebase();
              setMarca(null);
              setModelo(null);
            }
          }}
        >
          <Icon name='plus-square' size={45} color={'blue'} />
        </TouchableOpacity>

      </View>

      {isloading&&<ActivityIndicator size={40} color={'lightblue'} />}

      {(CarList?.length > 0)?
      <FlatList
        alwaysBounceVertical
        showsVerticalScrollIndicator={false}
        data={CarList}
        keyExtractor={item => item.id}
        renderItem={renderList}
      />
        :
        <View style={{marginTop:60}}>
          <Icon name='database' size={200} color={'lightblue'} /> 

        </View>
      }

      <Modal
        animationType='fade'
        visible={flag}
        transparent
      >

        <View style={styles.modal}>

          <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>

            <Text style={{ fontWeight: 'bold', color: 'black' }}>Modelo:</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={text => setModeloUpdate(text)}
              value={ModeloUpdate}
            />
          </View>

          <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>


            <TouchableOpacity
              style={{ marginRight: 40 }}
              onPress={() => {
                if (ModeloUpdate !== null) {
                  UpdateCar(IDpupdate, ModeloUpdate)
                  DbFirebase();
                  setflag(false);
                }
                else
                  Alert.alert('Debe escribir el nuevo modelo')
              }}
            >
              <Icon name='check-square' size={35} color={'black'} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setflag(false)}
            >
              <Icon name='times-circle' size={40} color={'red'} />
            </TouchableOpacity>
          </View>


        </View>



      </Modal>

    </KeyboardAvoidingView>
  )
}

