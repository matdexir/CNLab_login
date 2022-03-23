import  styled from "styled-components";

const Button = styled.button`
	background: transparent;
  border-radius: 3px;
  border: 2px solid blue;
  color: blue;
  margin: 0 1em;
  padding: 0.25em 1em

	
`

const CenteredDiv = styled.div`
	margin-left: 20vw;
	margin-right: 20vw;
	margin-top: 10vh;
	margin-bottom: 10vh;
	padding: 5vw;
	border: 2px solid blue;
`

const Input = styled.input`
	size: 5vw;
`

const Space = styled.div`
	margin: 5%;
	padding: 2%;
`

const Login = ({user, setUser, password, setPassword}) => {
	return(
		<form>
			<CenteredDiv>
				<Space>
				<Input placeholder="Username" onChange={(e)=> setUser(e.value)}/>
			</Space>
					<Space>
				<Input placeholder="Password" onChange={(e)=> setPassword(e.value)}/>
			</Space>
			<Button>Hello world</Button>
		</CenteredDiv>
		</form>
	)
}

export default Login;
