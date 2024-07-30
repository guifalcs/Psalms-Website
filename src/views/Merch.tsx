import './Merch.scss'
import NavBar from '../components/NavBar'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

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
    {imageLoaded?
        <div className="merchContainer">
            <a href="https://forms.gle/qZsKUMs8zJZM3xxXA">
            <div className="productCard">
                <img src="src/assets/camisaTresDias.jpg" alt="Camisa Três Dias" />
                <div className="line"></div>
                <h3>Camisa Três Dias</h3>
                <span className='price'>R$79,99</span>
            </div>
            </a>
            
            <a href="https://forms.gle/qZsKUMs8zJZM3xxXA">
            <div className="productCard">
                <img className='noBorder' src="src/assets/chaveiro.png" alt="Camisa Três Dias" />
                <div className="line"></div>
                <h3>Chaveiro Psalms</h3>
                <span className='price'>R$19,99</span>
            </div>
            </a>
        </div> :
        <Loading />
}
    </>
  )
}

export default Merch