import logo from '../images/path6.png';
import DM from '../images/DELHI METRO.png'

function Header(){
    return (
        <div className = 'header'>
            <div className='logoAndName'>
                <img className = "path6" src={logo} alt = "this"></img>
                <img className='delhimetro' src = {DM} alt = "this"></img>
            </div>
            <a href='https://github.com/sagar1sharma/metro-app'><img className='github' src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img></a>
        </div>
    );
}

export default Header;