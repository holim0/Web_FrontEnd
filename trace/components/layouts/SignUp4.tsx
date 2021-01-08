import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import MainLogo from "assets/images/MainLogo.png";
import Button from "@material-ui/core/Button";
import Id from "assets/images/Id.png";
import { Container, LogoImg } from "./Login";
import { InputContainer } from "./SignUp2";
import TextField from "@material-ui/core/TextField";
import { idDoubleCheckReq } from "Redux/SignUp";
import { setPassWordState } from "Redux/user";
import { signUpReq } from "Redux/SignUp";
import { RootState } from "redux";

const IdContainer = styled.div`
    display: flex;
    align-content: center;
`;
///////////////////////////////////////////////////////////////////////////////////////////////////////

const SignUp4 = () => {
    const dispatch = useDispatch();

    const [id, setId] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    // 유저 정보 가져오기
    const userData = useSelector((state: RootState) => state.user);

    // 비밀번호와 비밀번호 확인 같은지 확인
    const [isSame, setIsSame] = useState(false);

    // 아이디 핸들러
    const handleId = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setId(e.target.value);
        },
        [id]
    );

    // 비밀번호 핸들러

    const handlePassword = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
        },
        [password]
    );

    // 비밀번호 확인 핸들러
    const handleConfirmPassword = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setConfirmPassword(e.target.value);
        },
        [confirmPassword]
    );

    // 아이디 중복 체크 요청

    const goIdCheck = useCallback(() => {
        dispatch(idDoubleCheckReq(id));
    }, []);

    //회원가입 요청
    const SignUpRequest = useCallback(() => {
        // dispatch(setPassWordState(password));
        const { refreshToken, ...realUserData } = userData;
        realUserData.password = password;
        console.log(realUserData);
        dispatch(signUpReq(realUserData));
    }, []);

    useEffect(() => {
        if (password === confirmPassword) {
            setIsSame(true);
        } else {
            setIsSame(false);
        }
    }, [password, confirmPassword]);

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
                        value={id}
                        onChange={handleId}
                    />
                    <Button
                        variant="outlined"
                        style={{
                            height: "30px",
                            width: "100px",
                            marginTop: "15px",
                            marginLeft: "20px",
                        }}
                        onClick={goIdCheck}
                    >
                        중복확인
                    </Button>
                </IdContainer>
                <TextField
                    id="standard-basic"
                    label="비밀번호"
                    style={{ marginBottom: "10px" }}
                    type="password"
                    value={password}
                    onChange={handlePassword}
                />
                <TextField
                    error={isSame ? false : true}
                    id="standard-basic"
                    label="비밀번호 확인"
                    style={{ marginBottom: "50px" }}
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                    helperText={isSame ? null : "다시 확인해주세요"}
                />

                <Button variant="outlined" onClick={SignUpRequest}>
                    회원가입
                </Button>
            </InputContainer>
        </Container>
    );
};

export default SignUp4;
