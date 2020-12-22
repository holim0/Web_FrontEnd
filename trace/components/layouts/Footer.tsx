import React from "react";
import styled from "@emotion/styled";
import logo from "assets/images/MainLogo.png";
import { FaFacebook, FaBlogger } from "react-icons/fa";
import theme from "styles/theme";

const Container = styled.footer`
    width: 100%;
    background-color: ${(props) => props.theme.backMainColor};
`;

const FooterInfo = styled.div`
    max-width: 900px;
    padding: 40px;
    margin: 0 auto;
`;

const Info = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    width: 100%;
    margin: 0 auto;
    padding: 0;

    div {
        width: 60px;
        height: 60px;
        img {
            width: 60px;
            height: 60px;
        }
    }

    li {
        color: ${(props) => props.theme.gray};
        margin: 0 6px;
        cursor: pointer;

        &:hover {
            color: ${(props) => props.theme.darkWhite};
        }
    }
`;

const Desc = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
    padding-left: 20px;
    color: ${(props) => props.theme.gray};
    font-size: ${(props) => props.theme.ss};
`;

const Line = styled.div`
    width: 100%;
    margin-top: 8px;
    border-bottom: 1px solid ${(props) => props.theme.darkWhite};
`;

const Icons = styled.div`
    padding-left: 10px;
    margin-top: 10px;
    svg {
        cursor: pointer;
        margin: 0 6px;
    }
`;

const Footer = () => {
    return (
        <Container>
            <FooterInfo>
                <Info>
                    <div>
                        <img src={logo} alt="로고" />
                    </div>
                    <li>이용약관</li>
                    <li>개인정보 처리방침</li>
                    <li>고객센터</li>
                    <li>어바웃</li>
                </Info>
                <Desc>
                    <div>주소: 서울특별시 강남구 봉은사로</div>
                    <div>Email : cskim132@gmail.com</div>
                    <div>&copy; Trace, Inc.</div>
                </Desc>
                <Line></Line>
                <Icons>
                    <FaFacebook size={30} fill={theme.gray} />
                    <FaBlogger size={30} fill={theme.gray} />
                </Icons>
            </FooterInfo>
        </Container>
    );
};

export default Footer;
