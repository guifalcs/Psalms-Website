import { useState } from "react";
import { Blurhash } from "react-blurhash";
import "./Contact.scss";
import NavBar from "../components/NavBar";
import {
  CarbonPhoneFilled,
  IcBaselineEmail,
} from "../../public/assets/icons";

const Contact = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const blurHash = "L6A0aZoc0Kj[00WC_2ay~UofE1j[";

  return (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavBar />
      </div>

      <div className="contactContainer">
        {!isImageLoaded && (
          <Blurhash
            hash={blurHash}
            width={window.innerWidth}
            height={window.innerHeight}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}

        <img
          className={`contactImage ${isImageLoaded ? "loaded" : ""}`}
          src="/contactPhoto.jpg"
          alt="Contact"
          onLoad={() => setIsImageLoaded(true)}
        />

        {isImageLoaded && (
          <div className="mainBox">
            <h1 className="title">Contato</h1>

            <div className="textBox">
              <h3 className="subtitle1">
                <IcBaselineEmail />
                <span>Email</span>
              </h3>
              <p className="text">bandapsalms1@gmail.com</p>
              <h3 className="subtitle">
                <CarbonPhoneFilled />
                <span>Telefone</span>
              </h3>
              <p className="text">+55 31 7564-7028</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
