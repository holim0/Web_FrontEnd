import React, { useState, MouseEvent } from "react";
import styled from "@emotion/styled";
import LoginBack from "assets/images/LoginBack.png";
import MainLogo from "assets/images/MainLogo.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";
import SignUp3 from "./SignUp3";
import SignUp4 from "./SignUp4";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "Redux";
import { goPage2, closeModal } from "Redux/ModalPage";
import { loginReq } from "Redux/login";
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
////////////////////////////////////// 스타일과의 구분선 /////////////////////////////////////////////////////

const Login = () => {
    // 회원가입 버튼 눌렀을 때 페이지 이동
    const page1 = useSelector((state: RootState) => state.ModalPage.page1);
    const page2 = useSelector((state: RootState) => state.ModalPage.page2);
    const page3 = useSelector((state: RootState) => state.ModalPage.page3);
    const page4 = useSelector((state: RootState) => state.ModalPage.page4);
    const page5 = useSelector((state: RootState) => state.ModalPage.page5);
    const dispatch = useDispatch();
    // 회원 가입 버튼 눌렀을 때 회원가입 페이지로 이동.
    const handleSingUp = (
        event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ) => {
        event.preventDefault();
        dispatch(goPage2());
    };

    const [userId, setId] = useState("");
    const [password, setPassword] = useState("");
    // 아이디 핸들러

    const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };
    // 비밀번호 핸들러

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    // 로그인 요청

    const goLogin = (
        event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ) => {
        event.preventDefault();
        setId("");
        setPassword("");
        dispatch(loginReq({ userId, password }));
        dispatch(closeModal());
    };

    return (
        <>
            {page1 && (
                <Container>
                    <LogoImg src={MainLogo}></LogoImg>
                    <InputContainer>
                        <TextField
                            id="standard-basic"
                            label="아이디"
                            style={{ marginBottom: "10px" }}
                            value={userId}
                            onChange={handleId}
                        />
                        <TextField
                            id="standard-basic"
                            label="비밀번호"
                            type="password"
                            style={{ marginBottom: "50px" }}
                            value={password}
                            onChange={handlePassword}
                        />
                        <LoginButton
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={goLogin}
                        >
                            로그인
                        </LoginButton>
                        <Button
                            style={{ marginTop: "15px" }}
                            onClick={handleSingUp}
                        >
                            회원가입
                        </Button>
                    </InputContainer>
                </Container>
            )}
            {page2 && <SignUp1 />}
            {page3 && <SignUp2 />}
            {page4 && <SignUp3 />}
            {page5 && <SignUp4 />}
        </>
    );
};

export default Login;
