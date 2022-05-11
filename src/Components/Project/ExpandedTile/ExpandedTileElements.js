import styled from "styled-components";
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom'

export const TileContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(2, 2, 2, 0.7);
  z-index: 15;
`

export const TileWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  display: flex;
  justify-content: center;
  padding-top: 5%;
  visibility: hidden;
`

export const TileExpanded = styled.div`
  width: min(80vw, ${state => state.tileWidth * 4}px);
  height: max(500px, min(60vh, ${state => state.tileWidth * 2.5}px));
  border: solid;
  background-image: linear-gradient(100deg, #2a2a2a, #393939, #222);
  background-color: #111;
  visibility: visible;
  z-index: 30;
  position: relative;
  border-radius: 5px;
  border-color: #111;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const TopWrapper = styled.div`
  display: flex;
  height: 15%;
`

export const MovieInner = styled(ReactPlayer)`
  /* width: 100%; */
  /* height: 60%; */
`

export const BottomWrapper = styled.div`
  height: 15%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ButtonWrapper = styled.div`
  display: flex;
`

export const LikeDislike = styled.div`
  font-size: 2rem;
  margin-left: 1rem;
  cursor: pointer;
  color: #ddd;
  background-image: linear-gradient(80deg, #454545, #353535);
  padding: 0.5rem;
  border: solid;
  border-width: 1px;
  border-color: #111;
  border-radius: 5px;
`

export const LikeButton = styled(LikeDislike)`
  color: ${state => (state.liked === 1 ? '#aaf' : (state.liked === -1 ? '#444' : '#ddd' ))};
  background-image: ${state => (state.liked === 1 ? 'linear-gradient(80deg, #555, #666)' : (state.liked === -1 ? 'linear-gradient(80deg, #333, #111)' : 'linear-gradient(80deg, #454545, #353535)' ))};
`

export const DislikeButton = styled(LikeDislike)`
    color: ${state => (state.liked === -1 ? '#aaf' : (state.liked === 1 ? '#444' : '#ddd' ))};
  background-image: ${state => (state.liked === -1 ? 'linear-gradient(80deg, #555, #666)' : (state.liked === 1 ? 'linear-gradient(80deg, #333, #111)' : 'linear-gradient(80deg, #454545, #353535)' ))};
`

export const MovieTitle = styled.h1`
  padding-left: 2rem;
`

export const ClosePlayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  color: #ddd;
  /* background-color: #333; */
  background-image: linear-gradient(80deg, #454545, #353535);
  padding: 0.05rem;
  border: solid;
  border-width: 1px;
  border-color: #111;
  border-radius: 5px;
`

export const MovieLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  color: #ddd;
  /* background-color: #333; */
  background-image: linear-gradient(80deg, #454545, #353535);
  padding: 0.5rem;
  border: solid;
  border-width: 1px;
  border-color: #111;
  border-radius: 5px;
`