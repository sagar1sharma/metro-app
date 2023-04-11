import Background from '../Background.jpg';
import Header from '../Header';
import weather from '../Temprature.png';
import Card from '../card.jsx';
import logo from '../path6.png';
import line from '../Line 1.png';
import "../App.css";

function Home(){
    return(
        <div className="App">
     <img className = "background" src = {Background} alt = "this"></img>
     <div className='dateAndTime'>March 26/2023  12:59 PM</div>
     <img className = 'weather' src = {weather}></img>
     <Card />
     <img className='slogo' src={logo}></img>
     <img className='line1' src={line}></img>
     <img className='line2' src={line}></img>
     <img className='line3' src={line}></img>
     <img className='line4' src={line}></img>
     
     <Header />
    </div>
    );
}

export default Home;