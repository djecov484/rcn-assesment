export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_USER':
      return { selectedUser: action.payload }

    default:
      return state
  }
}
