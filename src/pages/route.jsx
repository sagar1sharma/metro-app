import {useLocation} from 'react-router-dom';
import mapImg from "./metroMap.jpeg"
import Background from '../Background.jpg';
import RoutList from "../components/RouteList"

function Route(){
    let data = useLocation().state;
    console.log(data);
    
    
    
    return <>
            <img className = "background" src = {Background} alt = "this" />
            <div id= "container">
                <RoutList data = {data} />
            <img className = "map" src={mapImg} />
                
            </div>
        </>;
}

export default Route;

