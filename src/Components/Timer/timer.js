import React, { useState, useEffect } from "react";
import { Title, Button, Space } from "../Styled/styled";

const Timer = ({timeLimit, setTimeLimit}) => {
    const [seconds, setSeconds] = useState(timeLimit);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
				// FIXME: May result in unwanted behavior
				setTimeLimit(seconds);
    }

    function reset() {
        setSeconds(timeLimit);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <>
						<Title style={{ fontSize: "30px"}}>
                {Math.floor(seconds / 60)}:{seconds % 60}s
						</Title>
						<Space>
                <Button primary onClick={toggle} style={{ width: "20vw", marginRight: "5vw" }}>
                    {isActive ? "Pause" : "Start"}
                </Button>
                <Button onClick={reset} style={{ width: "20vw"}}>Reset</Button>
						</Space>
        </>
    );
};

export default Timer;
