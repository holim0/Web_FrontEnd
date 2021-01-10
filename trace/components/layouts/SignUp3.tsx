import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
import MainLogo from "assets/images/MainLogo.png";
import Button from "@material-ui/core/Button";
import { Container, LogoImg } from "./Login";
import { InputContainer, BtnContainer } from "./SignUp2";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { goPage3, goPage5 } from "Redux/ModalPage";
import { emailVerifyReq } from "Redux/SignUp";
import { RootState } from "redux";
import {
    resetAlert,
    openAlert,
    emailVerifySuccessAlert,
    emailVerifyFailAlert,
} from "Redux/alertHandle";

import emailImg from "assets/images/email.png";

const VeriContainer = styled.div``;

///////////////////////////////////////////////////////////////////////////////////////////////
const SignUp3 = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");

    const [InputVeriNumber, setInputVeriNumber] = useState("");

    // 실제 인증 번호

    const realVerifyNumber = useSelector(
        (state: RootState) => state.SignUp.verifyNum
    );
    const goNext = useCallback(() => {
        dispatch(goPage5());
    }, []);
    //이전 페이지
    const goBack = useCallback(() => {
        dispatch(goPage3());
    }, []);

    // 이메일 텍스트 필드 핸들러

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    // 인증번호 항목 핸들러
    const handleVerifyNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVeriNumber(e.target.value);
    };

    // 인증번호 전송하면 디스패치

    const goVerifyEmail = useCallback(
        (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
            event.preventDefault();
            dispatch(emailVerifyReq(email));
        },
        [email]
    );

    // 사용자가 입력한 인증번호와 실제 인증번호 확인

    const checkVerifyNumber = useCallback(
        (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
            event.preventDefault();
            console.log(InputVeriNumber, realVerifyNumber);
            dispatch(resetAlert());
            dispatch(openAlert());
            if (InputVeriNumber !== "") {
                if (InputVeriNumber === realVerifyNumber) {
                    // 인증완료 되면 다음 페이지 이동.
                    console.log("인증완료!");
                    dispatch(emailVerifySuccessAlert());
                    dispatch(goPage5());
                } else {
                    dispatch(emailVerifyFailAlert());
                    console.log("인증실패ㅜㅜ");
                }
            } else {
                alert("인증번호를 입력해주세요");
            }
        },
        [InputVeriNumber, realVerifyNumber]
    );

    return (
        <Container>
            <LogoImg src={MainLogo}></LogoImg>
            <img src={emailImg} style={{ width: "170px", margin: "0 auto" }} />
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
                        onChange={handleVerifyNumber}
                        value={InputVeriNumber}
                    />
                    <Button
                        variant="outlined"
                        style={{ marginLeft: "25px", marginTop: "10px" }}
                        onClick={checkVerifyNumber}
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
