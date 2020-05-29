import * as RoomsAPIUtil from '../util/room_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const RECEIVE_ROOM = "RECEIVE_ROOM";
export const RECEIVE_ROOM_ERRORS = 'RECEIVE_ROOM_ERRORS';

export const receiveRooms = rooms => ({
  type: RECEIVE_ROOMS,
  rooms
});

export const receiveRoom = room => ({
  type: RECEIVE_ROOM,
  room
})

export const receiveErrors = errors => ({
  type: RECEIVE_ROOM_ERRORS,
  errors
})

export const fetchRooms = () => (dispatch) => {
  return RoomsAPIUtil.fetchRooms()
    .then(rooms => dispatch(receiveRooms(rooms)),
    err => (dispatch(receiveErrors(err.response.data))))
};

export const fetchRoom = (roomName) => (dispatch) => {
  return RoomsAPIUtil.fetchRoom(roomName)
    .then(room => dispatch(receiveRoom(room.data)),
    err => (dispatch(receiveErrors(err.response.data))))
};

export const createRoom = (room) => (dispatch) => {
  return RoomsAPIUtil.createRoom(room)
    .then(room => dispatch(receiveRoom(room.data)))
}

export const updateRoom = (roomData) => (dispatch) => {
  return RoomsAPIUtil.updateRoom(roomData)
    .then(room => {
      dispatch(receiveRoom(room.data))
    })
    .catch(err => dispatch(receiveErrors(err.response.data)))
}