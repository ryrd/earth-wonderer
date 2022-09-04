const Map = ({link} : {link: string}) => {
  return (
    <iframe src={`https://www.google.com/maps/embed?pb=${link}`} 
            width='100%'
            height='100%'
            style={{border:0}} 
            loading="lazy"
            className="z-10 cursor-point">
    </iframe>
  )
}

export default Map