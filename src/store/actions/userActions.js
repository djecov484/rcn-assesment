export const selectUser = () => (dispatch) => {
  try {
    dispatch({
      type: 'SELECT_USER',
    })
  } catch (error) {
    console.log(error)
  }
}
