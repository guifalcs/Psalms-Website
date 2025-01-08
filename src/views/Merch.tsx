import './Merch.scss'
import NavBar from '../components/NavBar'
import { Blurhash } from 'react-blurhash';
import { useState } from 'react';

const Merch = () => {

    const camisaBlurHash = "TpM@l$j[~qt7j[M{~qj[IU-;j[xu"
    const chaveiroBlurHash = "TAS?Gdoz~p%2ayWC%Mj[IUt8j[s:"
    const headerBlurhash = "LDA,zkIUj[Rj~qIURjRj~qofM{ay"
    const pulseiraBlurHash ='LYRp8-j[-;j[%Mj[Rjay~qfQIUj['

    const [headerLoaded, setHeaderLoaded] = useState(false);
    const [camisaLoaded, setCamisaLoaded] = useState(false);
    const [chaveiroLoaded, setChaveiroLoaded] = useState(false);
    const [pulseiraLoaded, setPulseiraLoaded] = useState(false);

    return (
        <>
         <div className="header">
            <NavBar />
            {!headerLoaded && (
            <Blurhash
                hash={headerBlurhash}
                width={1600} 
                height={900} 
                resolutionX={32}
                resolutionY={32}
                punch={1}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            )}
            <img
            src="./merchPhoto.jpg"
            alt="Header"
            className="headerImage"
            onLoad={() => setHeaderLoaded(true)}
            loading='lazy'
            />
        </div>


          <div className="merchContainer">
            <a href="https://loja.infinitepay.io/esdrassathler">
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
    
            <a href="https://loja.infinitepay.io/esdrassathler">
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
                <span className='price'>R$14,99</span>
              </div>
            </a>
            <a href="https://loja.infinitepay.io/esdrassathler">
              <div className="productCard">
                {!chaveiroLoaded && (
                  <Blurhash
                    hash={pulseiraBlurHash}
                    width={240}
                    height={336}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                    style={{ width: '15em', height: '21em', borderRadius: '10px' }}
                  />
                )}
                <img
                  src="/pulseira.jpg"
                  alt="Pulseira Psalms"
                  className={`pulseira ${pulseiraLoaded ? 'loaded' : 'loading'}`}
                  onLoad={() => setPulseiraLoaded(true)}
                  loading='lazy'
                />
                <div className="line"></div>
                <h3>Pulseira Psalms</h3>
                <span className='price'>R$9,99</span>
              </div>
            </a>
            <a href="https://loja.infinitepay.io/esdrassathler">
            <div className="productCard">
                {!chaveiroLoaded && (
                  <Blurhash
                    hash={pulseiraBlurHash}
                    width={240}
                    height={336}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                    style={{ width: '15em', height: '21em', borderRadius: '10px' }}
                  />
                )}
                <img
                  src="/oamorvenceushirt.jpg"
                  alt="Camisa O Amor Venceu"
                  className={`pulseira ${pulseiraLoaded ? 'loaded' : 'loading'}`}
                  onLoad={() => setPulseiraLoaded(true)}
                  loading='lazy'
                />
                <div className="line"></div>
                <h3>Camisa O Amor Venceu</h3>
                <span className='price'>R$79,99</span>
              </div>
            </a>
          </div>
        </>
      );
    }
    
    export default Merch;