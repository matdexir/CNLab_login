import { Title, Button, Space, CenteredDiv, Input } from "../Styled/styled";

const Register = ({setPassword, setUser, setToRegister}) => {
    return (
        <>
            <Space>
                <Title>Please register</Title>
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
                <Input
                    type="password"
                    placeholder="Confirm your password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </Space>
            <Space>
                <Button primary>Register</Button>
            </Space>
            <Space>
                <Button onClick={() => setToRegister(false)}>Back</Button>
            </Space>
        </>
    );
};

export default Register;
