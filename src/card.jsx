import ln from './logoandname.png';
import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Card(props){

    const navigate = useNavigate();

    const fromRef = useRef();
    const toRef = useRef();

    function handleClick(event){
        event.preventDefault();
    
        const source = fromRef.current.value;
        const destination = toRef.current.value;

        axios.get('https://corsproxy.io/?https://us-central1-delhimetroapi.cloudfunctions.net/route-get?from='+source+'&to='+destination)
        .then(res => navigate(
            "/route", {state: res.data}
        ))
        .catch(err => console.log(err))

        
    
  }

    return(<div>
        <div className="card"></div>
            <img className='ln' src={ln}></img>
            <form>
                <input className="from" type="text" name="from" ref={fromRef}></input>
                <input className="to" type="text" name="to" ref={toRef}></input>
                <input className="btn show" onClick={handleClick} type="submit" value="submit"></input>
            </form>
        </div>
    );
}

export default Card;