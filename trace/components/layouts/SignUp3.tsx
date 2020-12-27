import React, { useState } from "react";
import styled from "@emotion/styled";
import MainLogo from "assets/images/MainLogo.png";
import Button from "@material-ui/core/Button";
import email from "assets/images/email.png";
import { Container, LogoImg } from "./Login";
import { InputContainer, BtnContainer } from "./SignUp2";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { goPage3, goPage5 } from "Redux/ModalPage";
import { emailVerifyReq } from "Redux/SignUp";

const VeriContainer = styled.div``;

///////////////////////////////////////////////////////////////////////////////////////////////
const SignUp3 = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");

    //다음 페이지
    const goNext = () => {
        dispatch(goPage5());
    };
    //이전 페이지
    const goBack = () => {
        dispatch(goPage3());
    };

    // 이메일 텍스트 필드 핸들러

    const handleEmail = (e: any) => {
        setEmail(e.target.value);
    };

    // 인증번호 전송하면 디스패치

    const goVerifyEmail = () => {
        dispatch(emailVerifyReq(email));
    };

    return (
        <Container>
            <LogoImg src={MainLogo}></LogoImg>
            <img src={email} style={{ width: "170px", margin: "0 auto" }} />
            <InputContainer>
                <TextField
                    id="standard-basic"
                    label="킹고 이메일"
                    style={{ marginBottom: "10px" }}
                    value={email}
                    onChange={handleEmail}
                />
                <VeriContainer>
                    <TextField
                        id="standard-basic"
                        label="인증번호"
                        style={{ marginBottom: "50px" }}
                    />
                    <Button
                        variant="outlined"
                        style={{ marginLeft: "25px", marginTop: "10px" }}
                    >
                        확인
                    </Button>
                </VeriContainer>

                <Button onClick={goVerifyEmail}>인증번호 전송</Button>
            </InputContainer>
            <BtnContainer>
                <Button style={{ fontSize: "24px" }} onClick={goBack}>
                    이전
                </Button>
                <Button style={{ fontSize: "24px" }} onClick={goNext}>
                    다음
                </Button>
            </BtnContainer>
        </Container>
    );
};

export default SignUp3;
