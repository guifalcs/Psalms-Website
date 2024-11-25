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
          <div className="single">
            <div className="singleImgContainer">
              <img
                className="singleImg"
                src="./tbOAV.png"
                alt=""
                loading="lazy"
              />
            </div>

            <h2 className="title">O Amor Venceu</h2>

            <div className="singleContentContainer">
              <p>
                Mais do que uma música, "O Amor Venceu" é um testemunho da
                capacidade do amor divino de superar qualquer desafio e um
                convite para que todos experimentem e compartilhem essa
                esperança transformadora.
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
        </div>
      </div>
    </>
  );
};

export default Home;
