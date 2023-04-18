import Background from '../images/Background.jpg';
import Header from '../components/Header';
import Card from '../components/card.jsx';
import logo from '../images/path6.png';
import line from '../images/Line 1.png';
import axios from 'axios';
import "../App.css";
import {useState} from 'react';
import Footer from '../components/Footer';

function Home(){
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    const [weather, setWeather] = useState("");
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=28.64&longitude=77.22&hourly=temperature_2m&current_weather=true')
    .then(res => setWeather(res.data.current_weather.temperature))
    .catch(err => console.log(err));

    return(
        <div className="App">
            <Header />
            <img className = "background" src = {Background} alt = "this"></img>
            <div className='dateAndTime'>{day[date.getDay()]} {date.getDate()}/{date.getMonth()}/{date.getFullYear()}  {date.getHours()}:{date.getMinutes()}</div>
            <div className = 'weather dateAndTime'>{weather} °C <br></br> New Delhi</div>
            <Card />
            <img className='slogo' src={logo}></img>
            <img className='line1' src={line}></img>
            <img className='line2' src={line}></img>
            <img className='line3' src={line}></img>
            <img className='line4' src={line}></img>
            <Footer />
        </div>
    );
}

export default Home;