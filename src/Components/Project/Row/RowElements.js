import styled from 'styled-components'
// import Link from 'react-scroll/modules/components/Link'

export const RowContainer = styled.div`
  position: relative;
  /* overflow: hidden; */
  height: ${state => (state.tileWidth / 2) + 50}px;
`

export const GenreTitle = styled.h2`
  height: 30px;
  padding-left: 1rem;
`

export const MoviesWrapper = styled.div`
  display: flex;
  overflow-x: visible;
  transform: translateX(${({activeIndex, tileWidth}) => (-activeIndex * (tileWidth * 1.2))}px);
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
`

export const MovieTile = styled.div`
  flex-shrink: 0;
  height: ${state => (state.tileWidth / 2)}px;
  width: ${state => state.tileWidth}px;
  margin-left: ${state => state.tileWidth * state.spacing}px;
  position: relative;

  &:hover {
    outline: 4px solid #fff; 
  }
`

export const MovieImage = styled.img`
  height: 100%;
  width: 100%;
`

export const MovieTitle = styled.h2`
  position: absolute;
  bottom: 0;
  left: 20px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  `

export const ScrollLeft = styled.div`
  background-color: rgba(2, 2, 2, 0.7);
  height: 131px;
  width: 60px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  z-index: 2;

  &:hover {
    background-color: rgba(50, 50, 50, 0.7);
  }

  &:active {
    background-color: rgba(35, 35, 35, 0.7);
  }
`

export const ScrollRight = styled.div`
  background-color: rgba(2, 2, 2, 0.7);
  height: 131px;
  width: 60px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  z-index: 2;

  &:hover {
    background-color: rgba(50, 50, 50, 0.7);
  }

  &:active {
    background-color: rgba(35, 35, 35, 0.7);
  }
`