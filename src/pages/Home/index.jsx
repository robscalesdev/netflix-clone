import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../../Components/Project/Banner'
import ExpandedTile from '../../Components/Project/ExpandedTile'
import Row from '../../Components/Project/Row'
import { closeModal } from '../../redux/actions/modalActions'
import { setGenres } from '../../redux/actions/genreActions'
import { HomeContainer,
  MoviesContainer
} from './HomeElements'
import axios from 'axios'

const Home = () => {

  // const [genres] = useState(["row1", "row2", "row3", "row4", "row5", "row6"])
  const isModalOpen = useSelector(state => state.modalState.isOpen)

  const genres = useSelector(state => state.genresState.genres) 

  const dispatch = useDispatch()

  const axiosCall = new Promise((resolve, reject) => {
    resolve({
      genres: [
        "Trending",
        "Comedy",
        "Action",
        "Rom-Com",
        "Suspense"
      ]})
  })

  useEffect(() => {
    // simulated API call to get genres, unique per user
    // genres populated here, each row will make an api call to get its own movies
    axiosCall
      .then(data => {
        dispatch(setGenres(data))
      })
      .catch()

    // axios.get('https://www.googleapis.com/youtube/v3/videoCategories', {
    //   "kind": "youtube#videoCategoryListResponse"
    // })
    //   .then(data => console.log(data))

    // axios.get('https://www.youtube.com/watch?v=mC_6Ny0r4I8.json')
    //   .then(data => {
    //     console.log(data)
    //   })

  // eslint-disable-next-line
  }, [])

  const handleClose = (e) => {
    e.stopPropagation()

    dispatch(closeModal())
  }

  return (
    <>
      <HomeContainer>
        {isModalOpen && <ExpandedTile handleClose={handleClose}></ExpandedTile>}
        <Banner></Banner>
        <MoviesContainer>
          {genres.map((genre, i) => {
            return <Row key={genre} rowNum={i} genre={genre}></Row>
          })}
        </MoviesContainer>
      </HomeContainer>
    </>
  )
}

export default Home