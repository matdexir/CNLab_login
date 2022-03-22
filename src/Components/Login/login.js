import  styled from "styled-components";

const Button = styled.button`
	background: blue;
	size: 2em;
`

const Login = () => {
	return(
		<form>
			<Button>Hello world</Button>
		</form>
	)
}

export default Login;
