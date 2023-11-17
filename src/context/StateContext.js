import React, { useState, createContext } from 'react'

const stateContext = createContext([{}, () => { }])

const StateProvider = ({ children }) => {
  const [state, setState] = useState({})
  return (
    <stateContext.Provider value={[state, setState]}>
      {children}
    </stateContext.Provider>
  )
}

export { stateContext, StateProvider }
