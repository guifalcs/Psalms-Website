import NavBar from '../components/NavBar'
import './Home.scss'
import { Blurhash } from 'react-blurhash'
import { useState, useEffect } from 'react'

const Home = () => {

  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = './homePhoto.jpg'
    img.onload = () => {
      setImageLoaded(true)
    }
  }, [])

  const blurHash = 'L48zohWV57xa_Ms:i_fkIVj[aya{'

  return (
    <>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <NavBar />
      </div>

    <div className='homeContainer'>
      {!imageLoaded && (

        <div className='loadingContainer'>
        <Blurhash
          hash={blurHash}
          width={window.innerWidth}
          height={window.innerHeight}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
        </div>
      )}
      <img 
       src="./homePhoto.jpg"
       alt="Psalms"
       className={`backgroundImage ${imageLoaded ? 'loaded' : 'loading'}`}
       onLoad={()=>setImageLoaded(true)}
        />
      
      <h1 id='mainName'>Psalms</h1>
    </div>
    
    </>
  )
}

export default Home

