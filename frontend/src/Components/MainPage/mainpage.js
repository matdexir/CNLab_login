import { useState } from "react";
import { Title, Button, Space, CenteredDiv } from "../Styled/styled";
import Timer from "../Timer/timer";
import FlowUsage from "../Plots/flowusage";
import Usage from "../Plots/usage";
import UsageArea from "../Plots/area";

const MainPage = ({ user, setLoggedIn }) => {
    const [timeLimit, setTimeLimit] = useState(1020);
    return (
        <CenteredDiv>
            <Space>
                <Title style={{ fontSize: "2rem" }}> Welcome {user} </Title>
            </Space>
            <Timer timeLimit={timeLimit} setTimeLimit={setTimeLimit} />
            <FlowUsage />
						<Usage />
						<UsageArea />
            <Space>
                <Button primary onClick={() => setLoggedIn(false)}>
                    Log off
                </Button>
            </Space>
        </CenteredDiv>
    );
};
export default MainPage;
