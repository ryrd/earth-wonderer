import React from 'react'

interface mapEmbed {
    link : string
}

const Map = ({link} : mapEmbed) => {
  return (
    <iframe src={`https://www.google.com/maps/embed?pb=${link}`} width="400" height="300" style={{border:0}} loading="lazy"></iframe>
  )
}

export default Map