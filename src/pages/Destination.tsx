import React from 'react'
import { useParams } from 'react-router-dom'

const Destination = () => {
  const {id} = useParams();
  return (
    <div>{id} test</div>
  )
}

export default Destination