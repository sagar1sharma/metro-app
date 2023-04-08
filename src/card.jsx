import ln from './logoandname.png';
import from from './Drop down.png';
import to from './Drop down (1).png';

function Card(props){

    const data ={
        from: from, 
        to: to,
    };

    props.onClick(data);

    return(<div>
        <div className="card"></div>
            <img className='ln' src={ln}></img>
            {/* <img className='from' src={from}></img>
            <img className='to' src={to}></img> */}
            <form>
                <input className="from" type="text" name="from"></input>
                <input className="to" type="text" name="to"></input>
                <input className="btn show" type="submit" value="submit"></input>
            </form>
            {/* <div className='btn show'>Show Route & Fee</div> */}
        </div>
    );
}

export default Card;