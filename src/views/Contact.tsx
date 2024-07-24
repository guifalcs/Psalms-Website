import './Contact.scss'
import NavBar from '../components/NavBar'

const Contact = () => {
  return (
    <>
    
        <NavBar />

        <div className="contactContainer">

            <div className='leftBox'>

                <h1 className='title'>Contato</h1>

               <div className="textBox">

                    <h3 className='subtitle1'>Email</h3>
                    <p className='text'>bandapsalms1@gmail.com</p>
                    <h3 className='subtitle'>Telefone</h3>
                    <p className='text'>+55 31 7564-7028</p>

               </div>
                

            </div>

        </div>
    
    </>
  )
}

export default Contact