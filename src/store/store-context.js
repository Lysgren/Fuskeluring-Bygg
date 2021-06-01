import React from 'react'

const StoreContext = React.createContext({
  loggedIn: false,
  tasks: [],
  testFunc: () => {},
  loggin: () => {}
})

export default StoreContext