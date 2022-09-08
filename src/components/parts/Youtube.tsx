const Youtube = ({link}: {link: string}) => {
  return (
    <div className='w-full h-full'>
        <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${link}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
  )
}

export default Youtube