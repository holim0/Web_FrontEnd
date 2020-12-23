import React, { useState } from "react";
import styled from "@emotion/styled";
import MainLogo from "assets/images/MainLogo.png";
import Button from "@material-ui/core/Button";
import email from "assets/images/email.png";
import { Container, LogoImg } from "./Login";
import { InputContainer, BtnContainer } from "./SignUp2";
import SignUp2 from "./SignUp2";
import SignUp4 from "./SignUp4";
import TextField from "@material-ui/core/TextField";

const SignUp3 = () => {
    const [nextVal, setNextVal] = useState(false);

    const [preVal, setPreVal] = useState(false);

    if (preVal) {
        return <SignUp2></SignUp2>;
    }

    if (nextVal) {
        return <SignUp4 />;
    }
    return (
        <Container>
            <LogoImg src={MainLogo}></LogoImg>
            <img src={email} style={{ width: "170px", margin: "0 auto" }} />
            <InputContainer>
                <TextField
                    id="standard-basic"
                    label="킹고 이메일"
                    style={{ marginBottom: "10px" }}
                />
                <TextField
                    id="standard-basic"
                    label="인증번호"
                    style={{ marginBottom: "50px" }}
                />
                <Button>인증번호 전송</Button>
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

export default SignUp3;
