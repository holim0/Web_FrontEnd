import React, { useState } from "react";
import styled from "@emotion/styled";
import MainLogo from "assets/images/MainLogo.png";
import Button from "@material-ui/core/Button";
import SignUpCheck from "assets/images/SignUpCheck.png";
import { Container, LogoImg } from "./Login";
import TextField from "@material-ui/core/TextField";
import SignUp1 from "./SignUp1";
import SingUp3 from "./SignUp3";
import { useDispatch } from "react-redux";
import { isMemberCheckReq } from "Redux/SignUp";
import { goPage2, goPage4 } from "redux/ModalPage";

export const BtnContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    position: absolute;
    bottom: 100px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 60%;
    margin: 0 auto;
`;

const SignUp2 = () => {
    const dispatch = useDispatch();

    ///////////////////////////////////////////////////////////

    // 이름 스태이트
    const [name, setName] = useState("");
    // 폰 번호 스태이트
    const [phoneNum, setPhoneNum] = useState("");

    /// 이름 핸들러

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    // 폰 번호 핸들러
    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNum(e.target.value);
    };

    // 리덕스에 디스패치
    const goDispatch = () => {
        dispatch(isMemberCheckReq({ name, phoneNum }));
    };

    //다음 페이지
    const goNext = () => {
        dispatch(goPage4());
    };
    //이전 페이지
    const goBack = () => {
        dispatch(goPage2());
    };

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
                    onChange={handleName}
                    value={name}
                />
                <TextField
                    id="standard-basic"
                    label="휴대폰 번호"
                    style={{ marginBottom: "50px" }}
                    onChange={handlePhone}
                    value={phoneNum}
                />

                <Button onClick={goDispatch}>확인</Button>
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

export default SignUp2;
