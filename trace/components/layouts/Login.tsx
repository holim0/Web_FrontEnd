import React, { useState } from "react";
import styled from "@emotion/styled";
import LoginBack from "assets/images/LoginBack.png";
import MainLogo from "assets/images/MainLogo.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SingUp1 from "./SignUp1";

export const Container = styled.div`
    background-image: url(${LoginBack});
    background-size: cover;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
`;

export const LogoImg = styled.img`
    width: 400px;
    height: 250px;
    margin: 20px auto;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 60%;
    margin: 0 auto;
`;

const LoginButton = styled(Button)`
    height: 80px;
`;

const Login = () => {
    // 회원가입 버튼 눌렀을 때 페이지 이동
    const [SingUpBtn, setSignUp] = useState(false);

    // 회원 가입 버튼 눌렀을 때 값 변경
    const handleSingUp = () => {
        setSignUp(true);
    };

    if (SingUpBtn) {
        return <SingUp1 />;
    }

    return (
        <Container>
            <LogoImg src={MainLogo}></LogoImg>
            <InputContainer>
                <TextField
                    id="standard-basic"
                    label="아이디"
                    style={{ marginBottom: "10px" }}
                />
                <TextField
                    id="standard-basic"
                    label="비밀번호"
                    type="password"
                    style={{ marginBottom: "50px" }}
                />
                <LoginButton variant="contained" color="primary" size="large">
                    로그인
                </LoginButton>
                <Button style={{ marginTop: "15px" }} onClick={handleSingUp}>
                    회원가입
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Login;
