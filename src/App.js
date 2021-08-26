import logo from './logo.svg';
import './App.css';
import Profil from './profile/profil';
import myPicture from './profile/Mypicture.jpg'

function App() {
  var Fullname="ahmed ben kahla"

  // var Bio
  return (
    <div className="App">
    <Profil name={Fullname} ben kahla bio={"Hello! I'am   a student in GOMY CODE school  "} age={16}> <img src={myPicture} alt="" style={{width:"500px",height:"500px"}}></img></Profil>
    </div>
  );
}

export default App;


