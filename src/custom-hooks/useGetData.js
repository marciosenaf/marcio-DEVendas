import React, { useState } from 'react'
import {db} from '../firebase.config'
import { collection, collection, collection, getDocs } from 'firebase/firestore'

const useGetData = (collectionName) => {
    const [data, setData] = useState([])
    const collection = collection(db, collectionName)
  return (
    <div>useGetData</div>
  )
}

export default useGetData