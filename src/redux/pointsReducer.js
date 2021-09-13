import { ADD_POINT, SET_INITIAL_POINT } from "./types"

const initialState = {
  points: [
    {id: 0, longitude: 15.16, latitude: 15.16},
    {id: 1, longitude: 15.18, latitude: 15.16},
    {id: 2, longitude: 15.4, latitude: 15.16},
    {id: 3, longitude: 20.21, latitude: -20.21},
    {id: 4, longitude: 10.10, latitude: 10.10},
    {id: 5, longitude: 11.11, latitude: 11.11},
    {id: 6, longitude: 12.12, latitude: 12.12},
    {id: 7, longitude: 13.13, latitude: 13.13},
    {id: 8, longitude: 16.16, latitude: 17.17},
    {id: 9, longitude: 40.15, latitude: -20.21},
  ],
  initialPoint: {id: 0, longitude: 15.16, latitude: 15.16}
}

export const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POINT: 
      return {...state, points: [...state.points, action.payload]}
    case SET_INITIAL_POINT: {
      return {...state, initialPoint: action.payload}
    }
    default: return state
  }
}