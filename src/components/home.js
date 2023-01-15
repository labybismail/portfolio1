import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="col-12 d-flex justify-content-center align-items-center flex-column" style={{height:"99vh"}} >
            <span className="fs-2">I'M FREELANCER BRINGING YOU</span>
            <span className="fs-1">PROGRAMMING FROM THE FUTURE</span>
            <span className="fs-1">PLEASE CHECK THE PREVIOUS WORKS</span>
            <button className="btn btn-md btn-outline-warning mt-2">
                <Link to="/work" className="nav-link">work</Link>
            </button>
        </div>
    )
}