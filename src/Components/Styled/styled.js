import styled, { css } from "styled-components";

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid blue;
    color: blue;
    padding: 0.25em 1em;
    width: 30vw;
		&:hover {
			background-color: blue;
			opacity: 0.9;
		}

    ${(props) =>
        props.primary &&
        css`
            background: blue;
            color: white;
						&:hover {
							opacity: 0.6;
						}
        `}
`;

const CenteredDiv = styled.div`
    background-color: #1f1f1f;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 20vh;
    margin-bottom: 20vh;
    padding: 5vw;
    border: 2px solid blue;
`;

const Input = styled.input`
    width: 30vw;
`;

const Space = styled.div`
    background-color: #1f1f1f;
    margin: 5%;
    text-align: center;
`;

const Title = styled.h1`
    background-color: #1f1f1f;
    font-size: 20px;
    color: black;
    text-align: center;
`;

export { Title, Input, Space, CenteredDiv, Button };
