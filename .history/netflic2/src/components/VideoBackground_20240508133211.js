import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux'

export const VideoBackground = ({movieId}) => {
  const trailer = useSelector(store => store.movie.trailer)
  useMovieById(movieId)
  return (
    <div className='w-screen'>
        <iframe 
        className='w-screen aspect-video'
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/9zOIUpJLVps?si=0rtIoSejisHXU2Uu&autoplay=1&mute=1" 
        title="YouTube video player" 
        frameborder="0" 
        allowfullscreen='true'></iframe>
    </div>
  )
}
