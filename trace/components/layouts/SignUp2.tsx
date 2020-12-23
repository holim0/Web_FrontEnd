import React, { useState } from "react";
import styled from "@emotion/styled";
import MainLogo from "assets/images/MainLogo.png";
import Button from "@material-ui/core/Button";
import SignUpCheck from "assets/images/SignUpCheck.png";
import { Container, LogoImg } from "./Login";
import TextField from "@material-ui/core/TextField";
import SignUp1 from "./SignUp1";

const BtnContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    position: absolute;
    bottom: 100px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 60%;
    margin: 0 auto;
`;

const SignUp2 = () => {
    const [nextVal, setNextVal] = useState(false);

    const [preVal, setPreVal] = useState(false);

    if (preVal) {
        return <SignUp1></SignUp1>;
    }

    if (nextVal) {
        // 추가 필요
    }
    return (
        <Container>
            <LogoImg src={MainLogo}></LogoImg>
            <img
                src={SignUpCheck}
                style={{ width: "170px", margin: "0 auto" }}
            />
            <InputContainer>
                <TextField
                    id="standard-basic"
                    label="이름"
                    style={{ marginBottom: "10px" }}
                />
                <TextField
                    id="standard-basic"
                    label="휴대폰 번호"
                    style={{ marginBottom: "50px" }}
                />
            </InputContainer>
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

export default SignUp2;
