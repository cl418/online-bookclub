import { useState, useEffect } from 'react'
import { firebase } from '../firebase'

export const useRooms = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('rooms')
      .get()
      .then(snapshot => {
        const allRooms = snapshot.docs.map(room => ({
          ...room.data(),
          docId: room.id
        }))

        if (JSON.stringify(allRooms) !== JSON.stringify(rooms)) {
          setRooms(allRooms)
        }
      })
  }, [rooms])

  return { rooms, setRooms }
}
