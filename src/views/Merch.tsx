import './Merch.scss'
import NavBar from '../components/NavBar'
import { useState, useEffect } from 'react'

const Merch = () => {

    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.src = 'src/assets/merchPhoto.jpg'
        img.onload = () => {
          setImageLoaded(true)
        }
      }, [])

  return (
    <> 
        <div className="header">
            <NavBar />
        </div>
    {imageLoaded &&
        <div className="merchContainer">
            <div className="productCard">
                <img src="src/assets/camisaTresDias.jpg" alt="Camisa Três Dias" />
                <div className="line"></div>
                <h3>Camisa Três Dias</h3>
                <span className='price'>R$80</span>
            </div>
            <div className="productCard">
                <img src="src/assets/chaveiroPsalms.jpg" alt="Camisa Três Dias" />
                <div className="line"></div>
                <h3>Chaveiro Psalms</h3>
                <span className='price'>R$20</span>
            </div>
        </div>
}
    </>
  )
}

export default Merch