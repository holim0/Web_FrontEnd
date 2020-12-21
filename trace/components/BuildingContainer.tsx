import React from "react";
import styled from "@emotion/styled";
import { Container } from "styles/commonStyle";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Button from "@material-ui/core/Button";

const Container2 = styled(Container)`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const BtnContainer = styled.div`
    /* background-color: red; */
    display: flex;
    width: 50%;
    margin: 50px auto 0 auto;
    justify-content: space-evenly;
`;

const MainContainer = styled.div`
    /* background-color: dodgerblue; */
    height: 65%;
    width: 65%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    margin: 0 auto;
    column-gap: 40px;
    row-gap: 60px;
    margin-top: 40px;
`;

const Building = styled.div`
    position: relative;
    background-color: grey;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 5px 5px 5px 5px gray;
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 30%;
    bottom: 0;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    opacity: 0.8;
`;

const Pagi = styled(Pagination)`
    margin: 50px auto;
`;

const BuildingContainer = () => {
    return (
        <Container2>
            <BtnContainer>
                <Button variant="contained" color="primary">
                    쪽문
                </Button>
                <Button variant="contained" color="primary">
                    정문/로터리
                </Button>
                <Button variant="contained" color="primary">
                    철문
                </Button>
                <Button variant="contained" color="primary">
                    대명/대학로
                </Button>
                <Button variant="contained" color="primary">
                    한성대/성신
                </Button>
            </BtnContainer>
            <MainContainer>
                <Building>
                    <Info>hihi</Info>
                </Building>
                <Building>
                    <Info>hihi</Info>
                </Building>
                <Building>
                    <Info>hihi</Info>
                </Building>
                <Building>
                    <Info>hihi</Info>
                </Building>
                <Building>
                    <Info>hihi</Info>
                </Building>
                <Building>
                    <Info>hihi</Info>
                </Building>
            </MainContainer>
            <Pagi count={10} color="primary" />
        </Container2>
    );
};

export default BuildingContainer;
