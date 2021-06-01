import React, { useReducer } from 'react'
import StoreContext from './store-context'
import funcs from './funcs/funcs'

const defaultStoreState = {
  loggedIn: false,
  tasks: ['test'],
}

const storeReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return funcs.login()  
    default:
      return state
  }
}

const StoreProvider = props => {
  const [storeState, dispatchStoreAction] = useReducer(storeReducer, defaultStoreState)

  const login = () => {
    dispatchStoreAction({ type: 'LOGIN' })
  }

  return (
    <StoreContext.Provider value={ {...storeState, login }  } >
      { props.children }
    </StoreContext.Provider>
  )
}

export default StoreProvider