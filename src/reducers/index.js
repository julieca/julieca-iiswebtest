import {
  combineReducers
} from 'redux'
import {
  GET_DATA,
  // PURCHASE,
  // FAVORITE
} from '../enums/mutations'

// function histories(state = [], action) {
//   const {
//     type,
//     payload
//   } = action
//   switch (type) {
//     case PURCHASE:
//       return [...state, payload];
//     default:
//       return state
//   }
// }
function data(state = {}, action) {
  const {
    type,
    payload
  } = action
  switch (type) {
    case GET_DATA:
      state = { tabledata: payload }
      return state;
    // case FAVORITE:
    //   const i = state.productPromo.findIndex(x => x.id == payload);
    //   state.productPromo[i].loved = state.productPromo[i].loved == 1 ? 0 : 1;
    //   return { ...state };
    default:
      return state
  }
}
const rootReducer = combineReducers({
  data
  // histories
})
export default rootReducer
