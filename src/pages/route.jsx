import {useLocation} from 'react-router-dom';

function Route(){
    const location = useLocation();

    return (
        <div>
            <h1>Le bhai ise sajale</h1>
            {location.state.path.map((station) => {
               return <p key={station}>{station}</p>
            })}
        </div>
    );
}

export default Route;

