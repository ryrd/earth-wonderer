import React from 'react'

interface ytLink {
    link: string
}

const Youtube = ({link}: ytLink) => {
  return (
    <div className="video-responsive">
        <iframe
            width="853"
            height="480"
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