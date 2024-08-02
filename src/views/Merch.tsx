import './Merch.scss'
import NavBar from '../components/NavBar'

const Merch = () => {

  return (
    <> 
        <div className="header">
            <NavBar />
        </div>
    
        <div className="merchContainer">
            <a href="https://forms.gle/qZsKUMs8zJZM3xxXA">
            <div className="productCard">
                <img fetchPriority='high' className='camisa' src="/camisaTresDias.png" alt="Camisa Três Dias" loading='lazy' />
                <div className="line"></div>
                <h3>Camisa Três Dias</h3>
                <span className='price'>R$79,99</span>
            </div>
            </a>
            
            <a href="https://forms.gle/qZsKUMs8zJZM3xxXA">
            <div className="productCard">
                <img fetchPriority='high' className='chaveiro' src="/chaveiroPsalms.png" alt="Camisa Três Dias" loading='lazy' />
                <div className="line"></div>
                <h3>Chaveiro Psalms</h3>
                <span className='price'>R$19,99</span>
            </div>
            </a>
        </div> 
    </>
  )
}

export default Merch