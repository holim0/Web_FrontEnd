import React, { useEffect, useCallback, useState } from "react";
import styled from "@emotion/styled";
import SearchIcon from "@material-ui/icons/Search";
import { Button as Btn } from "@material-ui/core";
import MainLogo from "assets/images/MainLogo.png";
import Link from "next/link";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import Login from "components/layouts/Login";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "Redux/ModalPage";
import { RootState } from "Redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { closeAlert } from "Redux/alertHandle";
import { logoutReq } from "Redux/login";
import { searchReq } from "Redux/Search";

// 알림창 제어 컴포넌트
function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    background-color: ${(props) => props.theme.mainColor};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);

    width: 100%;
`;

const MenuContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    font-size: 20px;
    color: black;
    position: absolute;
    right: 0;
`;

const MenuBtn = styled(Link)`
    text-decoration: none;
`;

const LogoImg = styled.img`
    cursor: pointer;
    width: 250px;
    height: 150px;
    padding: 15px;
`;

const LoginForm = styled(Modal)``;

const SearchForm = styled.form`
    width: 25%;
    display: flex;
`;

const SearchInput = styled.input`
    border-radius: 5px;
    border: 0;
    width: 90%;
    margin-right: 7px;
    &:focus {
        outline: none;
        border: 2px solid dodgerblue;
    }
    padding: 5px;
    font-size: 20px;
`;
///////////////////////////////////////////////////////////////////////////////////////////////////

declare var daum: any;

const Header = () => {
    const dispatch = useDispatch();

    const [searchAddress, setSearchAddress] = useState("");

    //알림창 제어 상태들//
    const AlertVal = useSelector((state: RootState) => state.alertHandle);

    //알림창 닫기
    const closeAlertHandler = useCallback((event: any, reason: string) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(closeAlert());
    }, []);

    // 모달창이 열려있는지 판다.
    const isModalVisible = useSelector(
        (state: RootState) => state.ModalPage.isOpen
    );

    // 로그인 여부 판단.
    const isLoginSuccess = useSelector(
        (state: RootState) => state.login.isLoginSuccess
    );

    // 로그인 모달 열기
    const showModal = useCallback(() => {
        dispatch(openModal());
    }, []);

    // 로그인 모달창 닫기
    const handleCancel = useCallback(() => {
        dispatch(closeModal());
    }, []);

    // 로그아웃 핸들러
    const logOutHandler = useCallback(() => {
        dispatch(logoutReq());
    }, []);

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        let sperateAddress = searchAddress.split(" ");
        sperateAddress[0] = sperateAddress[0] + "특별시";
        const address = sperateAddress
            .slice(0, sperateAddress.length - 1)
            .join(" ");
        const lotNumber = sperateAddress[sperateAddress.length - 1];

        const testValue = {
            address: address,
            lotNumber: lotNumber,
        };
        dispatch(searchReq(testValue));

        setSearchAddress("");
    };

    const handleAddress = () => {
        if (process.browser) {
            new daum.Postcode({
                oncomplete: (data: any) => {
                    if (data.userSelectedType === "R") {
                    }
                    setSearchAddress(data.jibunAddress);
                },
            }).open();
        }
    };

    return (
        <Container>
            <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                open={AlertVal.alertOpen}
                autoHideDuration={2000}
                onClose={closeAlertHandler}
            >
                <div>
                    {AlertVal.isLoginDone && (
                        <Alert severity="success">로그인 성공</Alert>
                    )}
                    {AlertVal.isLoginFail && (
                        <Alert severity="error">로그인 실패</Alert>
                    )}
                    {AlertVal.notMember && (
                        <Alert severity="info">회원가입 가능합니다</Alert>
                    )}
                    {AlertVal.isMember && (
                        <Alert severity="warning">
                            이미 존재하는 회원입니다
                        </Alert>
                    )}
                    {AlertVal.emailSend && (
                        <Alert severity="info">이메일 전송완료</Alert>
                    )}
                    {AlertVal.emailVerifyDone && (
                        <Alert severity="Success">인증 성공</Alert>
                    )}
                    {AlertVal.emailVerifyFail && (
                        <Alert severity="error">인증 실패</Alert>
                    )}
                    {AlertVal.idDouble && (
                        <Alert severity="warning">
                            이미 존재하는 아이디입니다
                        </Alert>
                    )}
                    {AlertVal.idNotDouble && (
                        <Alert severity="Success">
                            사용할 수 있는 아이디입니다
                        </Alert>
                    )}
                    {AlertVal.isSignUpDone && (
                        <Alert severity="Success">회원가입 성공</Alert>
                    )}
                    {AlertVal.isSignUpFail && (
                        <Alert severity="error">회원가입 실패</Alert>
                    )}
                    {AlertVal.LogoutSuccess && (
                        <Alert severity="info">로그아웃됨!</Alert>
                    )}
                    {AlertVal.LogoutFail && (
                        <Alert severity="error">회원가입 실패</Alert>
                    )}
                </div>
            </Snackbar>
            <Link href="/">
                <LogoImg src={MainLogo} />
            </Link>

            <SearchForm onSubmit={handleSearch}>
                <SearchInput
                    placeholder="Search..."
                    value={searchAddress}
                    onClick={handleAddress}
                    readOnly
                ></SearchInput>
                <Btn
                    startIcon={<SearchIcon />}
                    onSubmit={handleSearch}
                    size="large"
                    type="submit"
                ></Btn>
            </SearchForm>

            <MenuContainer>
                <MenuBtn href="/">
                    <a>홈</a>
                </MenuBtn>
                <MenuBtn href="/community">커뮤니티</MenuBtn>
                {isLoginSuccess && <MenuBtn href="/write">글쓰기</MenuBtn>}

                {isLoginSuccess ? (
                    <>
                        <Button type="primary">Mypage</Button>
                        <Button type="primary" onClick={logOutHandler}>
                            로그아웃
                        </Button>
                    </>
                ) : (
                    <Button type="primary" onClick={showModal}>
                        로그인/회원가입
                    </Button>
                )}

                <LoginForm
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    cancelButtonProps={{ style: { display: "none" } }}
                    okButtonProps={{ style: { display: "none" } }}
                    bodyStyle={{ padding: "0" }}
                    footer={null}
                >
                    <Login />
                </LoginForm>
            </MenuContainer>
        </Container>
    );
};

export default Header;
