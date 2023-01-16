import '../App.css';
import githubIcon from './img/github.svg'
import googleIcon from './img/google.svg'
import linkedinIcon from './img/linkedin.svg'
import phoneIcon from './img/phone-solid.svg'
export default function Contact(){
    const styleImg={width:"50px",height:"50px"}
    const div1Style={right: "5px",top:"220px"}
    const div2Style={top: "310px"}
    const div3Style={top: "400px"}
    const div4Style={top: "480px"}
    return(
        <>
        <div className="col-10  position-relative " style={{backgroundColor:"rgb(0,0,20)",height:"100vh"}}>
            <p class="pStyle fs-5 " style={{top:"235px"}} >labybismail.dev@gmail.com</p>
            <div class="col-2 divsStyle " style={div1Style}>
                <img src={googleIcon} style={styleImg}  alt="mail" />
            </div>
            
            <p class="pStyle fs-5 " style={{top:"324px"}}>https://github.com/labybismail/portfolio1</p>
            <div class="col-2 divsStyle" style={div2Style}>
                <img src={githubIcon}  style={styleImg}  alt="github" />
            </div>
            <p class="pStyle fs-5 " style={{top:"415px"}}>https://www.linkedin.com/in/labybismail</p>
            <div class="col-2 divsStyle" style={div3Style}>
                <img src={linkedinIcon}  style={styleImg}  alt="linkedin" />
            </div>
            <p class="pStyle fs-5 " style={{top:"495px"}}>+212 681 33 23 02</p>
            <div class="col-2 divsStyle" style={div4Style}>
                <img src={phoneIcon}  style={styleImg}  alt="phone" />
            </div>
            <div className="col-7 mx-auto fs-4 text-light float-right mt-5" >
                Get in touch with us to get the ball rolling
            </div>    
        </div>
        </>
    )
}