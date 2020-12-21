import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Image from "next/image";
import MainLogo from "assets/images/MainLogo.png";
import Link from "next/link";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";

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
            width: "30ch",
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
    width: 90%;
    font-size: 20px;
    color: black;
`;

const MenuBtn = styled(Link)`
    text-decoration: none;
`;

const LogoImg = styled(Image)`
    cursor: pointer;
`;

const Header = () => {
    const classes = useStyles();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Container>
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
                <Button type="primary" onClick={showModal}>
                    로그인/회원가입
                </Button>
                <Modal
                    title="로그인/회원가입 모달"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    로그인/회원가입 모달
                </Modal>
            </MenuContainer>
        </Container>
    );
};

export default Header;
