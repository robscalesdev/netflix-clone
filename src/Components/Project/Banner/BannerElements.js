import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BsFillPlayFill } from 'react-icons/bs'

export const BannerContainer = styled.div`
  height: max(70vh, 30rem);
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${({image}) => image});
  background-size: cover;
  position: relative;

  @media screen and (max-width: 480px) {
    height: 100vh;
  }
`

export const BlurLeft = styled.div`
  position: absolute;
  background-image: linear-gradient(90deg, rgba(0,0,0,1), rgba(0,0,0,0.7), rgba(0,0,0,0));
  width: 50%;
  height: 100%;
  z-index: 8;
`

export const BlurBottom = styled.div`
  position: absolute;
  background-image: linear-gradient(0deg, rgba(0,0,0,1), rgba(0,0,0,0.7), rgba(0,0,0,0));

  /* background-color: red; */
  width: 100%;
  height: 20%;
  bottom: 0;
  z-index: 8;
`

export const BannerContentWrapper = styled.div`
  width: min(400px, 40%);
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
  z-index: 9;

  @media screen and (max-width: 600px) {
    width: 60%;
  }
`

export const AppTitleWrapper = styled.div`
  display: flex;
  margin: 0;
`

export const AppTitle = styled.h2`
  margin-right: 10px;
  font-weight: 600;
  margin: 0;
`

export const Original = styled.h2`
  font-weight: 300;
  margin: 0;
`

export const MovieTitleWrapper = styled.div`

`

export const MovieTitle = styled.h1`
  width: 100%;
  font-size: 60px;
  margin: 0;
`

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const MatchPercent = styled.h4`
  color: #70FF70;
`

export const Year = styled.h4`

`

export const Seasons = styled.h4``

export const Details = styled.h4`
  border: solid;
  padding: 2px;
  border-width: 2px;
  border-radius: 5px;

  @media screen and (max-width: 750px) {
    display: none;
  }
`

export const DescriptionWrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 700px) {
    display: none;
  }
`

export const PlayMovieButton = styled.div`
  padding: 0.5rem 1rem 0.5rem 2.2rem;
  width: 3rem;
  text-decoration: none;
  color: #050505;
  background: #888;
  font-size: 1.2rem;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
`

export const PlayIcon = styled(BsFillPlayFill)`
  position: absolute;
  top: 0.65rem;
  left: 0.9rem;
`

export const Description = styled.p``

export const AboutWrapper = styled.div``

export const Artists = styled.p``

export const Genre = styled.p``