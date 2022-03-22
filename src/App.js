import { useState } from 'react';
import './App.css';
import Login from './Components/Login/login';

function App() {
	const  [user, setUser] = useState('')
	const  [password, setPassword] = useState('')
  return (
		<Login user={user} setUser={setUser} password={password} setPassword={setPassword}/>
  );
}

export default App;
