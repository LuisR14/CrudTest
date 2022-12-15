import React from 'react'
import { Home } from './src/screens/Home';
import { Provider} from 'react-redux';
import configStore from './src/redux/index'


const App = () => {
  
  let store = configStore();

  return (
    <Provider store={store}>

      <Home/>

    </Provider>
  )
}



export default App;
