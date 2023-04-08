import logo from './path6.png';
import DM from './DELHI METRO.png'

function Header(){
    return (
        <div className = 'header'>
            <div className='logoAndName'>
                <img className = "path6" src={logo} alt = "this"></img>
                <img className='delhimetro' src = {DM} alt = "this"></img>
            </div>
        </div>
    );
}

export default Header;