import ln from './logoandname.png';

function Card(props){

    const data ={
        from: from, 
        to: to,
    };

    props.onClick(data);

    return(<div>
        <div className="card"></div>
            <img className='ln' src={ln}></img>
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
