import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
const Layout = () => {
  
  return (
    
    <div className="container-fluid">
    <div className="row" >
        <div className="col-2  d-flex justify-content-center flex-column position-relative" id="sidebar" >
            <img src="https://img.icons8.com/ios-glyphs/512/linkedin-circled.png" id="img1"  alt="" />
            <span className="position-absolute fs-5 mx-auto" id="spanName" >LABYB ismail</span>
            <ul className="nav nav-pills d-flex flex-column justify-content-center mx-auto fs-5" >
                <li className="nav-item"><Link to="/"  className="nav-link">home</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link">about</Link></li>
                <li className="nav-item"><Link to="/work" className="nav-link">work</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link">contact</Link></li>
            </ul>
            <span className="d-flex position-absolute" id="spanLink" >
                <a href="" target="_blank">
                    <img src="https://img.icons8.com/fluency/512/github.png" className="m-1" id="githubLink"   alt="" />
                </a>
                <a href="" target="_blank">
                    <img src="https://img.icons8.com/fluency/512/google-logo.png" className="m-1" id="mailLink"   alt="" />
                </a>
                <a href="" target="_blank">
                    <img src="https://img.icons8.com/ios-glyphs/512/linkedin-circled.png" className="m-1" id="linkedinLink"   alt="" />
                </a>
            </span>
        </div>
        <div className="col-10" style={{backgroundColor:"rgba(87,36,233,0.88)",height:"100vh"}}>
          <Outlet />
        </div>
    </div>

</div>

  )
};

export default Layout;