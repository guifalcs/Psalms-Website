import './Merch.scss'
import NavBar from '../components/NavBar'
import { Blurhash } from 'react-blurhash';
import { useState } from 'react';

const Merch = () => {

    const camisaBlurHash = "TpM@l$j[~qt7j[M{~qj[IU-;j[xu"
    const chaveiroBlurHash = "TAS?Gdoz~p%2ayWC%Mj[IUt8j[s:"

    const [camisaLoaded, setCamisaLoaded] = useState(false);
    const [chaveiroLoaded, setChaveiroLoaded] = useState(false);

    return (
        <>
          <div className="header">
            <NavBar />
          </div>
          <div className="merchContainer">
            <a href="https://forms.gle/qZsKUMs8zJZM3xxXA">
              <div className="productCard">
                {!camisaLoaded && (
                  <Blurhash
                    hash={camisaBlurHash}
                    width={240}
                    height={336}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                    style={{ width: '15em', height: '21em', borderRadius: '10px' }}
                  />
                )}
                <img
                  src="/camisaTresDias.png"
                  alt="Camisa Três Dias"
                  className={`camisa ${camisaLoaded ? 'loaded' : 'loading'}`}
                  onLoad={() => setCamisaLoaded(true)}
                  loading='lazy'
                />
                <div className="line"></div>
                <h3>Camisa Três Dias</h3>
                <span className='price'>R$79,99</span>
              </div>
            </a>
    
            <a href="https://forms.gle/qZsKUMs8zJZM3xxXA">
              <div className="productCard">
                {!chaveiroLoaded && (
                  <Blurhash
                    hash={chaveiroBlurHash}
                    width={240}
                    height={336}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                    style={{ width: '15em', height: '21em', borderRadius: '10px' }}
                  />
                )}
                <img
                  src="/chaveiroPsalms.png"
                  alt="Chaveiro Psalms"
                  className={`chaveiro ${chaveiroLoaded ? 'loaded' : 'loading'}`}
                  onLoad={() => setChaveiroLoaded(true)}
                  loading='lazy'
                />
                <div className="line"></div>
                <h3>Chaveiro Psalms</h3>
                <span className='price'>R$19,99</span>
              </div>
            </a>
          </div>
        </>
      );
    }
    
    export default Merch;