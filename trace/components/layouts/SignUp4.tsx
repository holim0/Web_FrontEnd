import React from "react";
import styled from "@emotion/styled";
import MainLogo from "assets/images/MainLogo.png";
import Button from "@material-ui/core/Button";
import Id from "assets/images/Id.png";
import { Container, LogoImg } from "./Login";
import { InputContainer, BtnContainer } from "./SignUp2";
import SignUp2 from "./SignUp2";
import TextField from "@material-ui/core/TextField";

const IdContainer = styled.div`
    display: flex;
    align-content: center;
`;

const SignUp4 = () => {
    return (
        <Container>
            <LogoImg src={MainLogo}></LogoImg>
            <img src={Id} style={{ width: "170px", margin: "0 auto" }} />
            <InputContainer>
                <IdContainer>
                    <TextField
                        id="standard-basic"
                        label="아이디"
                        style={{ marginBottom: "10px" }}
                    />
                    <Button
                        variant="outlined"
                        style={{
                            height: "30px",
                            width: "100px",
                            marginTop: "15px",
                            marginLeft: "20px",
                        }}
                    >
                        중복확인
                    </Button>
                </IdContainer>
                <TextField
                    id="standard-basic"
                    label="비밀번호"
                    style={{ marginBottom: "10px" }}
                    type="password"
                />
                <TextField
                    id="standard-basic"
                    label="비밀번호 확인"
                    style={{ marginBottom: "50px" }}
                    type="password"
                />

                <Button variant="outlined">회원가입</Button>
            </InputContainer>
        </Container>
    );
};

export default SignUp4;
