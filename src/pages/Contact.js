import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const clicked = () => {
    toast.dark("Téléphone copié", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
  };
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-market-alt"></i>
              <span>Mandroseza - Tana 101</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0344847065">
                <span
                  data-tip="Cliquer pour copié"
                  className="clickInput"
                  onClick={clicked}
                >
                  034 48 470 65
                </span>
              </CopyToClipboard>
              <ToastContainer />
              <ReactTooltip place="left" type="dark" effect="solid" />
            </li>

            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="falmelopros@gmail.com">
                <span
                  data-tip="Cliquer pour copié"
                  className="clickInput"
                  onClick={() => {
                    toast.dark("Email copié", {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: false,
                    });
                  }}
                >
                  falmelopros@gmail.com
                </span>
              </CopyToClipboard>
              <ToastContainer />
              <ReactTooltip place="left" type="dark" effect="solid" />
            </li>
          </ul>
        </div>

        <div className="socialNetwork">
          <ul>
            <a
              href="https://github.com/melloDev251"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/melloDev251"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>twitter</h4>
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="https://web.facebook.com/falmelo.pros"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Facebook</h4>
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/falmelo-pros-4b8196214/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
