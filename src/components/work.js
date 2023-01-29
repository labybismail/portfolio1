import card1Img from './img/card1img.png';
import card2Img from './img/card2Img.jpeg';
import card3Img from './img/card3Img.png';
import card4Img from './img/card4Img.png';
import '../App.css';
export default function Work(){
    const card1Style = {backgroundImage: `url(${card1Img})`};
    const card2Style = {backgroundImage: `url(${card2Img})`};
    const card3Style = {backgroundImage: `url(${card3Img})`};
    const card4Style = {backgroundImage: `url(${card4Img})`};
    const pStyle={bottom:"0",right:"5px",position:"absolute",boxShadow:"2px 2px 10px gold",borderRadius:"9px",backgroundColor:"white",color:'black'}
    return(
        <div className="col-xl-10 col-12 workDiv">
            <div className="col-12 d-flex mb-3 ">
                <div className="col-4 mx-auto " >
                    <a href="https://hard-hitting-appeal.000webhostapp.com" >
                        <div className="m-2 cardsStyle " style={card1Style}>
                            <p className="" style={pStyle}>todoList</p>
                        </div>
                    </a>
                </div>
                <div className="col-4 mx-auto ">
                    <a href="https://imlteamfit.000webhostapp.com" >
                        <div className="m-2 cardsStyle" style={card2Style}>
                            <p className="" style={pStyle}>imlteamfit</p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="col-12 d-flex mb-0">
                <div className="col-4 mx-auto "  >
                    <a href="https://labybportfolio.netlify.app" >
                        <div className="m-2 cardsStyle" style={card3Style}>
                            <p className="" style={pStyle}>portfolio</p>
                        </div>
                    </a>
                </div>
                <div className="col-4 mx-auto "  >
                    <a href="https://game1-rock.netlify.app" >
                        <div className="m-2 cardsStyle" style={card4Style}>
                            <p className="" style={pStyle}>rock-paper-scissor</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}