import './App.css';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';

function App() {
  
  const clickhandler = (name) => {
    const obj = {from, to};
    console.log(obj);
  }

  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');

  const handleSubmit = (e) => {

  }
  return (
    <div className="App">
      <header className="App-header">
      <div className='logo'><img src='https://www.delhimetrorail.com/static/media/logo-passenger.d3afd408.svg'></img></div>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <div className='text'><TextField value = {from} onChange = {(e) => {setFrom(e.target.value)}} setid="outlined-basic margin-dense" label="From" variant="outlined"/></div>
        <div className='text' ><TextField value = {to} onChange={(e) => {setTo(e.target.value)}} id="filled-basic" label="To" variant="outlined" /></div>
        <Button onClick={ () => {clickhandler('sagar');}} variant="contained">Route</Button>
      </form>
      <p>{to}</p>
      </header>
    </div>
  );
}

export default App;
