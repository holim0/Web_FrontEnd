import React, { useState } from "react";
import styled from "@emotion/styled";
import MainLogo from "assets/images/MainLogo.png";
import Button from "@material-ui/core/Button";
import Prefer from "assets/images/Prefer.png";
import { Container, LogoImg } from "./Login";
import Select from "react-select";
import Login from "./Login";
import SignUp2 from "./SignUp2";

const Comment = styled.div`
    margin-top: 15px;
    color: #707070;
    text-align: center;
    font-size: ${(props) => props.theme.xls};
`;

const SelectContainer = styled(Select)`
    width: 400px;
    margin: 50px auto;
`;

const BtnContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    position: absolute;
    bottom: 100px;
`;

const PreferOptions = [
    { value: "#햇살가득", label: "# 햇살가득" },
    { value: "#벌레_없어요", label: "# 벌레_없어요" },
    { value: "#거의_독서실", label: "# 거의_독서실" },
    { value: "#내방크기_운동장", label: "# 내방크기_운동장" },
    { value: "#저렴해요", label: "# 저렴해요" },
];

const SignUp1 = () => {
    const [nextVal, setNextVal] = useState(false);

    const [preVal, setPreVal] = useState(false);

    if (preVal) {
        return <Login />;
        setPreVal(false);
    }
    if (nextVal) {
        return <SignUp2 />;
        setNextVal(false);
    }
    return (
        <Container>
            <LogoImg src={MainLogo}></LogoImg>
            <img src={Prefer} style={{ width: "170px", margin: "0 auto" }} />
            <Comment>#가장_중요한_2가지_선택하기</Comment>
            <SelectContainer isMulti options={PreferOptions}></SelectContainer>
            <BtnContainer>
                <Button
                    style={{ fontSize: "24px" }}
                    onClick={() => setPreVal(true)}
                >
                    이전
                </Button>
                <Button
                    style={{ fontSize: "24px" }}
                    onClick={() => setNextVal(true)}
                >
                    다음
                </Button>
            </BtnContainer>
        </Container>
    );
};

export default SignUp1;
