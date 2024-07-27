import NavBar from '../components/NavBar'
import './Home.scss'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

const Home = () => {

  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = './homePhoto.jpg'
    img.onload = () => {
      setImageLoaded(true)
    }
  }, [])

  return (
    <>

    {imageLoaded && <NavBar />}

    {imageLoaded ?

    <div className='homeContainer'>
      <h1 id='mainName'>Psalms</h1>
    </div> : <Loading />
    }
    </>
  )
}

export default Home

