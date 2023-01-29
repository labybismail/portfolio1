import '../App.css';
import githubIcon from './img/github.svg'
import googleIcon from './img/google.svg'
import linkedinIcon from './img/linkedin.svg'
import phoneIcon from './img/phone-solid.svg'
export default function Contact(){
    const imgStyle ={borderRadius:'50%',backgroundColor:'white',padding:'5px'}

    return(
        
        <div className="col-12 col-xl-10 d-flex align-items-center justify-content-center flex-column div1Contact">
            <div className="col-12 d-flex justify-content-center text-light ">
                <img src={googleIcon} style={imgStyle} width="50px" height="50px" alt="mail" />
                <p className="m-3" >labybismail.dev@gmail.com</p>
            </div>
            
             
            <div className="col-12 d-flex justify-content-center text-light" >
                <img src={githubIcon}  width="50px" height="50px" style={imgStyle}  alt="github" />
                <p className="m-3" >https://github.com/labybismail/portfolio1</p>
            </div>
            
            <div className="col-12 d-flex justify-content-center text-light" >
                <img src={linkedinIcon}  style={imgStyle}  width="50px" height="50px"  alt="linkedin" />
                <p className="m-3" >https://www.linkedin.com/in/labybismail</p>
            </div>
            
            <div className="col-12 d-flex justify-content-center text-light" >
                <img src={phoneIcon}  style={imgStyle}  width="50px" height="50px"  alt="phone" />
                <p className="m-3">+212 681 33 23 02</p>
            </div> 
            
        </div>
        
    )
}