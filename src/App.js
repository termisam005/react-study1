//import './App.css';
import './App.scss';
//import styles from './App.module.css';
import Button from './components/Button';
import NationBar from './components/NationBar';

import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event) => {
    //alert('submitted');
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />

        <div className="btn_div">
          <button type="submit" className="btn_pink on">Login</button>
        </div>
        <div className={"btn_div"}>
          <button type="submit" className={"btn_pink"}>Login</button>
        </div>
        <Button>버튼</Button>
      </form>

      <NationBar />
    </div>
  );
}

export default App;
