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
                <img src="/camisaTresDias.jpg" alt="Camisa Três Dias" />
                <div className="line"></div>
                <h3>Camisa Três Dias</h3>
                <span className='price'>R$79,99</span>
            </div>
            </a>
            
            <a href="https://forms.gle/qZsKUMs8zJZM3xxXA">
            <div className="productCard">
                <img className='noBorder' src="/chaveiro.png" alt="Camisa Três Dias" />
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