import { ADD_POINT, SET_INITIAL_POINT } from "./types";

export function addPoint(point) {
  return {
    type: ADD_POINT,
    payload: point
  }
}

export function setInitialPoint(point) {
  return {
    type: SET_INITIAL_POINT,
    payload: point
  }
}