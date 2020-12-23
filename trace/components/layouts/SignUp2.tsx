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
    const [nextVal, setNextVal] = useState(false);

    const [preVal, setPreVal] = useState(false);

    const dispatch = useDispatch();

    ///////////////////////////////////////////////////////////

    // 이름 스태이트
    const [name, setName] = useState(null);
    // 폰 번호 스태이트
    const [phoneNum, setPhoneNum] = useState(null);

    /// 이름 핸들러

    const handleName = (e: any) => {
        setName(e.target.value);
    };
    // 폰 번호 핸들러
    const handlePhone = (e: any) => {
        setPhoneNum(e.target.value);
    };

    // 리덕스에 디스패치

    const goDispatch = () => {
        dispatch(isMemberCheckReq({ name, phoneNum }));
    };

    if (preVal) {
        return <SignUp1></SignUp1>;
    }

    if (nextVal) {
        return <SingUp3 />;
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
