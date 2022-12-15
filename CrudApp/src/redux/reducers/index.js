
const InitialState = {

  Cars: [
    {
      marca: 'BMW',
      modelo: 'M3',
      id:1
    }

  ]
}


export default (state = InitialState, action) => {
  console.log("action:",action)
  switch (action.type) {
    case 'Create':
      return { 
        ...state,
        Cars: [...state.Cars,action.payload]
      }
      // case 'Update':
      //   const index = state.Cars.findIndex(cars => cars.id ===action.payload.id);                                                                  action.payload); //finding index of the item
      //   const newArray = [...state.Cars];
      //   newArray[index].modelo = action.payload.modelo;
      //   return { 
      //    ...state,
      //    Cars: newArray,
      //   }
      case 'Delete':
        return { 
          ...state, 
          Cars: state.Cars.filter(cars => cars.id !== action.payload) 
        }
    default:
      return state
  }
}
