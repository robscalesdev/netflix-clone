import React from 'react'
// import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MovieContainer, MovieElement } from './MovieElements'

const Movie = () => {

  // const {movieName} = useParams()

  const movie = useSelector(state => state.movieState)

  return (
    <MovieContainer>
      <MovieElement                 
        url={movie.video}
        controls={true}
        muted={false}
        width={'100%'}
        height={'100%'} 
        playing={false}></MovieElement>
    </MovieContainer>
  )
}

export default Movie