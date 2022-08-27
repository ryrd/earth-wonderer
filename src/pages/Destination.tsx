import {useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Destination = () => {
  const {id} = useParams();

  useEffect(() => {

  }, [])
  
  return (
    <div className=''>{id} test</div>
  )
}

export default Destination