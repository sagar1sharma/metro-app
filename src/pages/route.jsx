import {useLocation} from 'react-router-dom';
import mapImg from "../images/metroMap.jpeg"
import Background from '../images/Background.jpg';
import RoutList from "../components/RouteList"
import ErrorMsg from '../components/ErrorMsg';

function Route(){
    let data = useLocation().state;
    
    let status = data.status;
    
    return <>
            <img className = "background" src = {Background} alt = "this" />
            <div id= "container">
                {status === 200 ? <RoutList data = {data} /> : <ErrorMsg statusCode = {status} />}
            <img className = "map" src={mapImg} />
                
            </div>
        </>;
}

export default Route;

