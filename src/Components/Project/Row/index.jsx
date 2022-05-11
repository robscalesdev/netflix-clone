import React, { useEffect, useState } from 'react'
import { GenreTitle, MovieImage, MoviesWrapper, MovieTile, MovieTitle, RowContainer, ScrollLeft, ScrollRight } from './RowElements'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../../redux/actions/modalActions'
import moviesAPI from './movieData'
import { selectMovie, setMovies } from '../../../redux/actions/movieActions'
// IoIosArrowBack

const Row = ({ genre, rowNum }) => {

  const movies = useSelector(state => state.moviesState[genre]) || []
  const [activeIndex, setActiveIndex] = useState(0)

  const [tileWidth] = useState(250)
  const [spacing] = useState(0.2)

  const dispatch = useDispatch()

  // const defaultImage = 'https://techcrunch.com/wp-content/uploads/2022/04/Stranger_Things__The_Experience.jpg'

  // console.log('Comedy' in moviesAPI)
  const axiosCall = new Promise((resolve, reject) => {
    resolve({ genre, movies: moviesAPI[genre] })
  })

  useEffect(() => {
    axiosCall
      .then(data => {
        dispatch(setMovies(data))
      })
  // eslint-disable-next-line
  }, [])
  
  const handleExpand = (e, i) => {
    dispatch(openModal({
      top: rowNum,
      left: e.target.offsetLeft,
      isOpen: true
    }))

    dispatch(selectMovie(movies[i]))

  }

  const handleScrollLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1)
    } 
  }

  const handleScrollRight = () => {
    const currScroll = activeIndex * (tileWidth * (1 + spacing))
    const rowWidth = (tileWidth * (1 + spacing)) * movies.length
    // const screenWidth = window.innerWidth

    // if the current tiles scrolled + screen width are greater than the width of the row, start over
    if (currScroll + window.innerWidth < rowWidth) {
      setActiveIndex(prev => prev + 1)
    } else {
      setActiveIndex(prev => prev + 1)
      setTimeout(() => {
        setActiveIndex(prev => prev - 1)
      }, 300);
    }
  }

  return (
    <>
      <RowContainer id={genre}>
        <GenreTitle>{genre}</GenreTitle>
        <ScrollLeft onClick={handleScrollLeft}>
          <IoIosArrowBack />
        </ScrollLeft>
        <MoviesWrapper activeIndex={activeIndex} tileWidth={tileWidth}>
          {movies.map((movie, i) => {
            return <MovieTile 
              onClick={(e) => handleExpand(e, i)} 
              key={i}
              tileWidth={tileWidth}
              spacing={spacing}
              >
                <MovieImage src={movie.image} alt={movie.title}/>
                <MovieTitle>{movie.title}</MovieTitle>
              </MovieTile>
          })}
        </MoviesWrapper>
        <ScrollRight onClick={handleScrollRight}>
          <IoIosArrowForward />
        </ScrollRight>
      </RowContainer>
    </>
  )
}

export default Row