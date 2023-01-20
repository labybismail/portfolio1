import card1Img from './img/card2Img.jpeg';
import card3Img from './img/card3Img.png';
export default function Work(){
    const card1Style = {backgroundImage: `url(${card1Img})`};
    const card2Style = {backgroundImage: `url(${card1Img})`};
    const card3Style = {backgroundImage: `url(${card3Img})`};
    const pStyle={bottom:"0",right:"5px",position:"absolute",boxShadow:"2px 2px 10px gold",borderRadius:"9px",backgroundColor:"white",color:'black'}
    return(
        <div className="col-10" style={{backgroundColor:"rgb(0,0,20)",height:"100vh"}}>
            <div className="col-12 d-flex " style={{marginTop: "70px"}}>
                <div className="col-4 offset-1 " style={{height: "30%"}} >
                    <a href="https://imlteamfit.000webhostapp.com" >
                        <div className="m-2 cardsStyle " style={card1Style}>
                            <p className="fs-5" style={pStyle}>imlteamfit</p>
                        </div>
                    </a>
                </div>
                {/* <div className="col-4 offset-2 ">
                    <a href="https://imlteamfit.000webhostapp.com" >
                        <div className="m-2 cardsStyle" style={card2Style}>
                            <p className="fs-5" style={pStyle}>imlteamfit</p>
                    </div>
                    </a>
                </div> */}
            </div>
            <div className="col-12">
                <div className="col-4 offset-7  " style={{height: "30%",marginTop: "50px"}} >
                    <a href="https://labybportfolio.netlify.app" >
                        <div className="m-2 cardsStyle" style={card3Style}>
                            <p className="fs-5" style={pStyle}>portfolio</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}