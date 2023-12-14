import React from 'react'

const PhotoInfo = ({photo}) => {
  return (
    <div>
        <h1 className='text-2xl font-bold text-center mb-6'>{photo.title}</h1>
        <img src={photo.thumbnailUrl} className='h-96 w-96 m-auto'></img>
    </div>
  )
}

export default PhotoInfo