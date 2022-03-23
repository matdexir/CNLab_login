import { useState } from "react";
import "./App.css";
import Login from "./Components/Login/login";
import MainPage from "./Components/MainPage/mainpage";

function App() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
		console.log(loggedIn);
    return (
        <>
            {loggedIn === false ? (
                <Login
                    user={user}
                    setUser={setUser}
                    password={password}
                    setPassword={setPassword}
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                />
            ) : (
                <MainPage user={user} setLoggedIn={setLoggedIn} />
            )}
        </>
    );
}

export default App;
