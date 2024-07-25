import './Contact.scss'
import NavBar from '../components/NavBar'
import { InstagramIcon, LogosYoutubeIcon, CarbonPhoneFilled, IcBaselineEmail } from '../assets/icons'


const Contact = () => {
  
  return (
    <>
    
        <NavBar />

        <div className="contactContainer">

            <div className='mainBox'>

                <h1 className='title'>Contato</h1>

               <div className="textBox">
                    <h3 className='subtitle1'><IcBaselineEmail/><span>Email</span></h3>
                    <p className='text'>bandapsalms1@gmail.com</p>
                    <h3 className='subtitle'> <CarbonPhoneFilled/><span>Telefone</span></h3>
                    <p className='text'>+55 31 7564-7028</p>
                    
                  <div className="iconsBelow">
                    <a className='instaIcon' href="https://www.instagram.com/psalmsband/"><InstagramIcon /></a>
                    <a className='ytIcon' href="http://www.youtube.com/@psalmsband"><LogosYoutubeIcon /></a>
                  </div>
               </div>
                

            </div>

        </div>
    
    </>
  )
}

export default Contact