import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../../../redux/actions/modalActions'
import { selectMovie } from '../../../redux/actions/movieActions'
import { 
  BannerContentWrapper,
  BlurLeft,
  BlurBottom,
  AppTitle, 
  AppTitleWrapper, 
  BannerContainer, 
  MovieTitle, 
  Original ,
  MovieTitleWrapper,
  DetailsWrapper,
  MatchPercent,
  Year,
  Seasons,
  Details,
  AboutWrapper,
  DescriptionWrapper,
  Description,
  PlayMovieButton,
  PlayIcon
} from './BannerElements'

const Banner = () => {

  const moviesLength = useSelector(state => state.moviesState['Trending'].length)
  // const movie = useSelector(state => state.moviesState['Trending'][Math.floor(Math.random() * moviesLength)]) || { title: '', image: '', video: '' }
  const movie = useSelector(state => state.moviesState['Trending'][8]) || { title: '', image: '', video: '' }

  const dispatch = useDispatch()

  const handleExpand = () => {
    dispatch(openModal({
      isOpen: true
    }))

    dispatch(selectMovie(movie))
  }

  return (
    <BannerContainer image={movie.image}>
      <BlurLeft></BlurLeft>
      <BlurBottom></BlurBottom>
      <BannerContentWrapper>
        <div>
        <AppTitleWrapper>
          <AppTitle>NETFLIX</AppTitle><Original>ORIGINAL</Original>
        </AppTitleWrapper>
        <MovieTitleWrapper>
          <MovieTitle>{movie.title}</MovieTitle>
        </MovieTitleWrapper>
        </div>
        <DetailsWrapper>
          <MatchPercent>{Math.floor(Math.random() * 4) + 95}% Match</MatchPercent>
          <Year>2017</Year>
          <Seasons>2 Seasons</Seasons>
          <Details>4K Ultra HD</Details>
          <Details>5.1</Details>
        </DetailsWrapper>
        <DescriptionWrapper>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        </DescriptionWrapper>
        <AboutWrapper>
          <PlayMovieButton onClick={handleExpand}><PlayIcon /> Play</PlayMovieButton>
          {/* <button onClick={() => setShowDesc(!showDesc)}>Details</button> */}
        </AboutWrapper>
      </BannerContentWrapper>
    </BannerContainer>
  )
}

export default Banner