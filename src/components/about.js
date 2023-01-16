import { Link } from "react-router-dom";
export default function About(){
  return(
    <div className="col-10" style={{backgroundColor:"rgb(0,0,20)",height:"100vh"}}>
      <h2 className="col-2 mx-auto text-light " style={{marginTop: "80px"}}>ABOUT</h2>
      <p className="col-7 mx-auto text-white fs-4" style={{textAlign:"justify",marginTop: "70px"}}> Hello, my name is ismail labyb and i am a full stack developer ,i have 2 years of studying full time student as web developer and am passionate about making new websites with special ideas. My portfolio showcase some of the project i have worked in this two years and my skills in js, sql, php, react...</p>
      <div className="col-2 mx-auto">
        <Link to="/work" className="nav-link">
            <button className="btn btn-lg btn-outline-warning mt-2 ms-3">Work</button>
        </Link>
      </div>
    </div>
  )
}