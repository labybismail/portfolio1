import '../App.css';
import githubIcon from './img/github.svg'
import googleIcon from './img/google.svg'
import linkedinIcon from './img/linkedin.svg'
import phoneIcon from './img/phone-solid.svg'
export default function Contact(){
    const styleImg={
        width:"50px",height:"50px"
    }
 
    return(
        <>
         <div className="col-10  position-relative " style={{backgroundColor:"rgb(0,0,20)",height:"100vh"}}>
              


         <p class="position-absolute fs-5 text-light " style={{right: "80px",top:"235px"}}>labybismail.dev@gmail.com</p>
                <div class="col-2 position-absolute d-flex justify-content-center align-items-center" style={{borderRadius:"50%",backgroundColor: "aliceblue",right: "5px",top: "220px",width: "60px",height: "60px"}}>

                    <img src={googleIcon}    width="50px" height="50px"  alt="mail" />
                </div>
                
                <p class="position-absolute fs-5 text-light " style={{right: "80px",top:"324px"}}>https://github.com/labybismail/portfolio1</p>
                <div class="col-2 position-absolute d-flex justify-content-center align-items-center" style={{borderRadius:"50%",backgroundColor: "aliceblue",right: "5px",top: "310px",width: "60px",height: "60px"}}>

                    <img src={githubIcon}  width="50px" height="50px"  alt="github" />
                </div>
                <p class="position-absolute fs-5 text-light " style={{right: "80px",top:"415px"}}>https://www.linkedin.com/in/labybismail</p>
                <div class="col-2 position-absolute d-flex justify-content-center align-items-center" style={{borderRadius:"50%",backgroundColor: "aliceblue",right: "5px",top: "400px",width: "60px",height: "60px"}}>

                    <img src={linkedinIcon}  width="50px" height="50px"  alt="linkedin" />
                </div>
                <p class="position-absolute fs-5 text-light " style={{right: "80px",top:"495px"}}>+212 681 33 23 02</p>
                <div class="col-2 position-absolute d-flex justify-content-center align-items-center" style={{borderRadius:"50%",backgroundColor: "aliceblue",right: "5px",top: "480px",width: "60px",height: "60px"}}>

                    <img src={phoneIcon}  width="50px" height="50px"  alt="phone" />
                </div>
                   

                <div className="col-7 mx-auto fs-4 text-light float-right mt-5" >
                    Get in touch with us to get the ball rolling
                </div>
              
            </div>
        </>
    )
}