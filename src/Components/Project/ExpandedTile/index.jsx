import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { 
  BottomWrapper,
  ButtonWrapper,
  ClosePlayer,
  DislikeButton,
  LikeButton,
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

  // -1 disliked, 0 neutral, +1 liked
  const [liked, setLiked] = useState(0)
  console.log(liked)

  const movie = useSelector(state => state.movieState) || {}

  const handleLikeClick = () => {
    if (liked < 1) {
      setLiked(1)
    } else {
      setLiked(0)
    }
  }

  const handleDislikeClick = () => {
    if (liked > -1) {
      setLiked(-1)
    } else {
      setLiked(0)
    }
  }

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
                  <PlayIcon /> Play
                </MovieLink>
                <ButtonWrapper>
                  <LikeButton liked={liked} onClick={handleLikeClick}>
                    <LikeIcon />
                  </LikeButton>
                  <DislikeButton liked={liked} onClick={handleDislikeClick}>
                    <DislikeIcon />
                  </DislikeButton>
                </ButtonWrapper>
              </BottomWrapper>
        </TileExpanded>
    </TileWrapper>
    </>
  )
}

export default ExpandedTile