import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home(){
    const div1HomeStyle={backgroundColor:"rgba(87,36,233,0.88)",height:"100vh"}
    const div2HomeStyle={height:"99vh",display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}
    const pHomeStyle={textAlign:"center",color:"white",marginBottom:'30px',textAlign:'justify'}
    return(
        <div className="col-10" style={div1HomeStyle}>
            <div className="col-12 " style={div2HomeStyle} >
                <p className="col-8 fs-2  " style={pHomeStyle}>My name is Ismail Labyb, and my portfolio is a representaion of all that i've learned  and accomplished as a web developement student</p>
            </div>
        </div>
    )
}