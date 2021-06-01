const login = (state) => {
  const updatedState = {...state}
  updatedState.loggedIn = !updatedState.loggedIn
  return updatedState
}

module.exports = {
  login
}