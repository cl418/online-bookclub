import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { useRooms } from '../hooks'

export const RoomsContext = createContext()
export const RoomsProvider = ({ children }) => {
  const { rooms, setRooms } = useRooms()

  return (
    <RoomsContext.Provider value={{ rooms, setRooms }}>
      {children}
    </RoomsContext.Provider>
  )
};

export const useRoomsValue = () => useContext(RoomsContext)

RoomsProvider.propTypes = {
  children: PropTypes.node.isRequired
}
