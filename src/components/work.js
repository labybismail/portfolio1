import Bgcard2 from './img/card2Img.jpeg'
export default function Work(){
    const card1Style = {backgroundImage: `url(${Bgcard2})`};
    const card2Style = {backgroundImage: `url(${Bgcard2})`};
    const card3Style = {backgroundImage: `url(${Bgcard2})`};
    const pStyle={top:"10px",left:"20px", color:"whitesmoke",position:"absolute"}
    return(
        <div className="col-10" style={{backgroundColor:"rgb(0,0,20)",height:"100vh"}}>
            <div className="col-12 d-flex " style={{marginTop: "70px"}}>
                <div className="col-4 offset-1 " style={{height: "30%"}} >
                    <a href="https://imlteamfit.000webhostapp.com" target="_blank">
                        <div className="m-2 cardsStyle " style={card1Style}>
                            <p className="fs-5" style={pStyle}>imlteamfit</p>
                        </div>
                    </a>
                </div>
                <div className="col-4 offset-2 ">
                    <a href="https://imlteamfit.000webhostapp.com" target="_blank">
                        <div className="m-2 cardsStyle" style={card2Style}>
                            <p className="fs-5" style={pStyle}>imlteamfit</p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="col-12">
                <div className="col-4 offset-1 mx-auto " style={{height: "30%",marginTop: "50px"}} >
                    <a href="https://imlteamfit.000webhostapp.com" target="_blank">
                        <div className="m-2 cardsStyle" style={card3Style}>
                            <p className="fs-5" style={pStyle}>portfolio</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}