import React, { useEffect, useCallback } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Image from "next/image";
import MainLogo from "assets/images/MainLogo.png";
import Link from "next/link";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import Login from "components/layouts/Login";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "Redux/ModalPage";
import { RootState } from "redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { closeAlert } from "Redux/alertHandle";
import { logoutReq } from "Redux/login";

// 알림창 제어 컴포넌트
function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// 알림창 스타일
const AlertStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
}));

const useStyles = makeStyles((theme) => ({
    search: {
        display: "flex",
        alignItems: "center",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: "10px",
        width: "100%",
        height: "50%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
            "&:focus": {
                width: "50ch",
            },
        },
    },
}));

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    background-color: ${(props) => props.theme.mainColor};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const SearchCotainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: fade("white", 0.15);
    width: 100%;
    height: 100%;
`;
const Searchicon = styled(SearchIcon)``;

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

const LogoImg = styled(Image)`
    cursor: pointer;
`;

const LoginForm = styled(Modal)``;

///////////////////////////////////////////////////////////////////////////////////////////////////
const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const AlertClass = AlertStyles();

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

    useEffect(() => {
        console.log(isLoginSuccess);
    }, [isLoginSuccess]);

    return (
        <Container>
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
                <LogoImg
                    src={MainLogo}
                    alt="MainLogo"
                    width={250}
                    height={150}
                />
            </Link>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                />
            </div>
            <MenuContainer>
                <MenuBtn href="/">
                    <a>홈</a>
                </MenuBtn>
                <MenuBtn href="/community">커뮤니티</MenuBtn>
                <MenuBtn href="/write">글쓰기</MenuBtn>

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
