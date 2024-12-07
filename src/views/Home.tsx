import NavBar from "../components/NavBar";
import "./Home.scss";
import { Blurhash } from "react-blurhash";
import { useState, useEffect } from "react";
import { MdiSpotify, MdiYoutube, IlInstagram } from "../../public/assets/icons";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "./homePhoto.jpg";
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  const blurHash = "L48zohWV57xa_Ms:i_fkIVj[aya{";

  return (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavBar />
      </div>

      <div className="homeImageContainer">
        {!imageLoaded && (
          <div className="loadingContainer">
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
          className={`backgroundImage ${imageLoaded ? "loaded" : "loading"}`}
          onLoad={() => setImageLoaded(true)}
        />

        <h1 id="mainName">Psalms</h1>
      </div>

      <div className="homeContainer">
        <div className="publicity">
          <h1 className="title">Confira as músicas do EP "O Caminho":</h1>

          <div className="single">
            <div className="singleImgContainer">
              <img
                className="singleImg"
                src="./oAmorVenceuthumb.png"
                alt=""
                loading="lazy"
              />
            </div>

            <h2 className="title">O Amor Venceu</h2>

            <div className="singleContentContainer">
              <p>
                "O Amor Venceu" é uma mensagem profunda que celebra a vitória do
                amor divino sobre as adversidades. A canção reflete a crença de
                que, mesmo nas tempestades mais intensas, o amor de Cristo tem o
                poder de curar e trazer paz aos corações.
              </p>
            </div>

            <div className="singleLinks">
              <a href="https://onerpm.link/PSALMS-OAmorVenceu">
                <MdiSpotify />
              </a>
              <a href="https://www.youtube.com/watch?v=FnOGMuY9bDo">
                <MdiYoutube />
              </a>
              <a href="">
                <IlInstagram />
              </a>
            </div>
          </div>
          <div className="single">
            <div className="singleImgContainer">
              <img
                className="singleImg"
                src="./thumbfarol.jpg"
                alt=""
                loading="lazy"
              />
            </div>

            <h2 className="title">Farol</h2>

            <div className="singleContentContainer">
              <p>
                "Farol" retrata a jornada de alguém que, após andar na escuridão
                de seus próprios caminhos, é alcançado pela luz transformadora de Cristo.
                O "farol" simboliza direção e segurança, guiando o protagonista à rendição total ao Salvador. A canção expressa fé
                inabalável, destacando a confiança em Jesus, seja na cura ou na morte.
              </p>
            </div>

            <div className="singleLinks">
              <a href="https://onerpm.link/PSALMS-Farol">
                <MdiSpotify />
              </a>
              <a href="https://www.youtube.com/watch?v=VFqRnZCgAXk&ab_channel=PsalmsOficial">
                <MdiYoutube />
              </a>
              <a href="">
                <IlInstagram />
              </a>
            </div>
          </div>
          <div className="single">
            <div className="singleImgContainer">
              <img
                className="singleImg"
                src="./thumbEmSeuLugar.png"
                alt=""
                loading="lazy"
              />
            </div>

            <h2 className="title">Em Seu Lugar</h2>

            <div className="singleContentContainer">
              <p>
                Em Seu Lugar transmite a segurança do amor incondicional de
                Deus, que acolhe mesmo quando todos nos abandonam. A canção
                exalta o sacrifício de Jesus em nosso lugar e convida à
                busca pela presença divina, comparando esse anseio ao
                desejo da corça pelas águas. É um hino de fé, consolo e
                entrega total ao Senhor que jamais desampara.
              </p>
            </div>

            <div className="singleLinks">
              <a href="https://onerpm.link/PSALMS-EmSeuLugar">
                <MdiSpotify />
              </a>
              <a href="https://www.youtube.com/watch?v=evzF0jAkwXE&ab_channel=PsalmsOficial">
                <MdiYoutube />
              </a>
              <a href="">
                <IlInstagram />
              </a>
            </div>
          </div>
          <div className="single">
            <div className="singleImgContainer">
              <img
                className="singleImg"
                src="./thumbOCaminho.jpg"
                alt=""
                loading="lazy"
              />
            </div>

            <h2 className="title">O Caminho</h2>

            <div className="singleContentContainer">
              <p>

                O Caminho destaca Jesus como a única via para a vida eterna.
                Com versos que ressaltam a dificuldade do caminho estreito,
                a canção reafirma a entrega total a Cristo, o "Caminho, a
                Verdade e a Vida". É um hino de fé e devoção, exaltando Jesus
                como a paz que completa, o amor que liberta e a esperança que
                renova a vida.
              </p>
            </div>

            <div className="singleLinks">
              <a href="https://onerpm.link/PSALMS-OCaminho">
                <MdiSpotify />
              </a>
              <a href="https://www.youtube.com/watch?v=9Upd7K8qn1M&ab_channel=PsalmsOficial">
                <MdiYoutube />
              </a>
              <a href="">
                <IlInstagram />
              </a>
            </div>
          </div>
          <div className="single">
            <div className="singleImgContainer">
              <img
                className="singleImg"
                src="./thumbtresdias.png"
                alt=""
                loading="lazy"
              />
            </div>

            <h2 className="title">Três Dias</h2>

            <div className="singleContentContainer">
              <p>
                Três Dias celebra a vitória de Cristo sobre a morte e o poder de
                Sua ressurreição. Os "três dias" simbolizam a derrota
                da condenação e o chamado para anunciar as boas novas.
                A canção reafirma que, assim como Ele venceu, também
                viveremos e reinaremos com Ele.
              </p>
            </div>

            <div className="singleLinks">
              <a href="https://onerpm.link/PSALMS-TresDias">
                <MdiSpotify />
              </a>
              <a href="https://www.youtube.com/watch?v=6pj8wb1BPmA&ab_channel=PsalmsOficial">
                <MdiYoutube />
              </a>
              <a href="">
                <IlInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;