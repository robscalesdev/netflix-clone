import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { 
  BottomWrapper,
  ButtonWrapper,
  ClosePlayer,
  LikeDislike,
  MovieLink,
  MovieTitle,
  TileContainer,
  TileExpanded,
  TileWrapper,
  TopWrapper
} from './ExpandedTileElements'
import ReactPlayer from 'react-player/youtube'
import { 
  BsHandThumbsUpFill as LikeIcon, 
  BsHandThumbsDownFill as DislikeIcon,
  BsFillPlayFill as PlayIcon
} from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

const ExpandedTile = ({ handleClose }) => {

  const pushTop = useSelector(state => state.modalState.top)
  const pushLeft = useSelector(state => state.modalState.left)
  
  // things to get from state
  const [tileWidth] = useState(250)
  const [genreCount] = useState(5)

  const movie = useSelector(state => state.movieState) || {}

  return (
    <>
    <TileContainer onClick={handleClose}>
    </TileContainer>
    <TileWrapper>
      <TileExpanded 
            tileWidth={tileWidth} 
            pushLeft={pushLeft} 
            pushTop={genreCount - pushTop}>
              <TopWrapper>
                <MovieTitle>{movie.title}</MovieTitle>
              </TopWrapper>
              <ClosePlayer onClick={handleClose}>
                <IoMdClose fontSize={'3rem'} />
              </ClosePlayer>
              <ReactPlayer 
                url={movie.video}
                controls={false}
                muted={true}
                width={'100%'}
                height={'70%'} 
                playing={false}
                />
              <BottomWrapper>
                <MovieLink to={`/video/${movie.title.split(' ').join('-')}`}>
                  <PlayIcon /> Play Video
                </MovieLink>
                <ButtonWrapper>
                  <LikeDislike>
                    <LikeIcon />
                  </LikeDislike>
                  <LikeDislike>
                    <DislikeIcon />
                  </LikeDislike>
                </ButtonWrapper>
              </BottomWrapper>
        </TileExpanded>
    </TileWrapper>
    </>
  )
}

export default ExpandedTile