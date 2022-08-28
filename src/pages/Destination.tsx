import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetailHeading from '../components/parts/DetailHeading';
import DATA from '../Data';

const Destination = () => {
  const {id} = useParams();
  const data = DATA.find(data => data.id === id) || 'not found';

  if (data === 'not found') return <p>data does not exist</p>;
  
  return (
    <div>
      <DetailHeading name={data.name} img={data.mainPhoto} location={data.location}/>
    </div>
  )
}

export default Destination