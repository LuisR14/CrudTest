
const InitialState = {
  Cars: [

  ]
}


export default (state = InitialState, action) => {
  switch (action.type) {
    case 'Create':
      return {
        ...state,
        Cars: [...state.Cars, action.payload]
      }
    case 'Update':
      const index = state.Cars.findIndex(cars => cars.id === action.payload.id);
      const newArray = [...state.Cars];
      newArray[index].modelo = action.payload.modelo;
      return {
        ...state,
        Cars: newArray,
      }
    case 'Delete':
      return {
        ...state,
        Cars: state.Cars.filter(cars => cars.id !== action.payload)
      }
    case 'DeleteAll':
      return InitialState
    default:
      return state
  }
}
