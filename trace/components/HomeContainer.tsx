import React from "react";
import Map from "assets/images/Map.png";
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MapContainer = styled.div`
    position: relative;
    height: 800px;
    width: 1000px;
`;

const Btn = styled(Button)`
    position: absolute;
    top: ${(props) => props.y};
    left: ${(props) => props.x};
`;

const MapImg = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
`;

const BuildingContainer = styled.div`
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
    overflow-x: scroll;
    white-space: nowrap;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Buildings = styled.div`
    height: 100%;
    width: 20%;
    background-color: #efefef;
    border: 2px solid black;
    display: inline-block;
    margin-left: 20px;
`;

const Title = styled.div`
    margin-top: 20px;
    font-size: ${(props) => props.theme.xls};
`;

const HomeContainer = () => {
    return (
        <Container>
            <Title>지역을 선택해주세요!</Title>
            <MapContainer>
                <MapImg src={Map}></MapImg>
                <Btn x="530px" y="320px">
                    🔵 정문/로터리
                </Btn>
                <Btn x="270px" y="590px">
                    🔵 철문
                </Btn>
                <Btn x="140px" y="180px">
                    🔵 쪽문
                </Btn>
                <Btn x="510px" y="190px">
                    🔵 한성대/성신
                </Btn>
                <Btn x="300px" y="600px">
                    🔵 대명/대학로
                </Btn>
            </MapContainer>
            <BuildingContainer>
                <Buildings>준비 중입니다...</Buildings>
                <Buildings>준비 중입니다...</Buildings>
                <Buildings>준비 중입니다...</Buildings>
                <Buildings>준비 중입니다...</Buildings>
                <Buildings>준비 중입니다...</Buildings>
                <Buildings>준비 중입니다...</Buildings>
                <Buildings>준비 중입니다...</Buildings>
                <Buildings>준비 중입니다...</Buildings>
                <Buildings>준비 중입니다...</Buildings>
                <Buildings>준비 중입니다...</Buildings>
                <Buildings>준비 중입니다...</Buildings>
            </BuildingContainer>
        </Container>
    );
};

export default HomeContainer;
