import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import githubIcon from './img/github.svg';
import googleIcon from './img/google.svg';
import linkedinIcon from './img/linkedin.svg';
import profilPicture from './img/profilPicture1.jpeg';
export default function Layout(){
  return (
    <div className="container-fluid">
      <div className="row" >
          <div className="col-2" id="sidebar" >
              <img src={profilPicture} id="img1"  alt="profilPicture" />
              <span className="position-absolute fs-5 mx-auto " id="spanName" >LABYB ismail</span>
              <ul className="nav nav-pills d-flex flex-column justify-content-center mx-auto fs-5" >
                  <li className="nav-item">
                    <Link to="/"  className="nav-link">home</Link>
                    </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">about</Link>
                    </li>
                  <li className="nav-item">
                    <Link to="/work" className="nav-link">work</Link>
                    </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">contact</Link>
                    </li>
              </ul>
              <span className="d-flex position-absolute" id="spanLink" >
                  <a href="https://github.com/labybismail/portfolio1">
                    <img src={githubIcon} className="m-1" id="githubLink"   alt="github" />
                  </a>
                  <a href="mailto:labybismail.dev@gmail.com">
                    <img src={googleIcon} className="m-1" id="mailLink"   alt="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/labybismail">
                    <img src={linkedinIcon} className="m-1" id="linkedinLink"   alt="linkedin" />
                  </a>
              </span>
          </div>
          <Outlet />
      </div>
    </div>
  )
};
