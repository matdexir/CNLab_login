import { useState } from "react";
import { Title, Button, Space, CenteredDiv, Input } from "../Styled/styled";
import Register from "./register";

const Login = ({
    user,
    setUser,
    password,
    setPassword,
    loggedIn,
    setLoggedIn
}) => {
    const [toRegister, setToRegister] = useState(false);
    return (
        <CenteredDiv>
            {toRegister === false ? (
                <>
                    <Space>
                        <Title>Logged out from hotspot</Title>
                    </Space>
                    <Space>
                        <Input
                            placeholder="Please enter your username"
                            onChange={(e) => {
                                setUser(e.target.value);
                            }}
                        />
                    </Space>
                    <Space>
                        <Input
                            type="password"
                            placeholder="Please enter your password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </Space>
                    <Space>
                        <Button primary onClick={() => setLoggedIn(true)}>Login</Button>
                    </Space>
                    <Space>
                        <Button onClick={() => setToRegister(true)}>
                            Register
                        </Button>
                    </Space>
                </>
            ) : (
                <Register setUser={setUser} setPassword={setPassword} setToRegister={setToRegister}/>
            )}
        </CenteredDiv>
    );
};

export default Login;
