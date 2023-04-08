import './App.css';
import Background from './Background.jpg';
import Header from './Header';
import weather from './Temprature.png';
import Card from './card.jsx';
import logo from './path6.png';
import line from './Line 1.png';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  let from="", to="";
  function setthis(data){
    from = data.from;
    to = data.to;
  }

  useEffect(() => {
    axios.get('https://corsproxy.io/?https://us-central1-delhimetroapi.cloudfunctions.net/route-get?from=Naraina%20Vihar&to=Rithala')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
     <img className = "background" src = {Background} alt = "this"></img>
     <div className='dateAndTime'>March 26/2023  12:59 PM</div>
     <img className = 'weather' src = {weather}></img>
     <Card onClick = {setthis}/>
     <img className='slogo' src={logo}></img>
     <img className='line1' src={line}></img>
     <img className='line2' src={line}></img>
     <img className='line3' src={line}></img>
     <img className='line4' src={line}></img>
     
     <Header />
    </div>
  );
}

export default App;
