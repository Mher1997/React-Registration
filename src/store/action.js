export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

export const addUser = data => ({
    type : ADD_USER,
    payload : data
})

export const deleteUser = data => ({
    type : DELETE_USER,
    payload : data
})