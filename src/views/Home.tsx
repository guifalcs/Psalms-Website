import NavBar from '../components/NavBar'
import './Home.scss'
import { Blurhash } from 'react-blurhash'
import { useState, useEffect } from 'react'
import { MdiSpotify, MdiYoutube, IlInstagram } from '../../public/assets/icons'


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

    <div className='homeImageContainer'>
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

      <div className="homeContainer">
        <div className="publicity">
          <img className='capa' src="./capaocaminho.png" alt='Capa "O caminho"' loading='lazy' />
          <div id='preSave'><a href="https://onerpm.link/PSALMS-TresDias"><button>Pré-save "Três Dias"</button></a></div>
          <div className="homeIcons">
            <MdiSpotify/>
            <a className='icon' href="http://www.youtube.com/@psalmsband"><MdiYoutube/></a>
            <a className='icon' href="https://www.instagram.com/psalmsband/"><IlInstagram/></a>
            </div>
        </div>
       </div>
    
    </>
  )
}

export default Home

