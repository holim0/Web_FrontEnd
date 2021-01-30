import React from "react";
import Map from "assets/images/Map.png";
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { buildingInfoReqByLocation } from "Redux/building";
import { useDispatch } from "react-redux";

const Container = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MapContainer = styled.div`
    position: relative;
    height: 800px;
    width: 1000px;
`;

// 타입 인터페이스를 emotion 에 적용.
const Btn = styled(Button)<{ x: string; y: string }>`
    padding: 0;
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
    margin-top: 30px;
    width: 100%;
    height: 50vh;
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
    height: 50%;
    width: 20%;
    background-color: #efefef;
    border: 2px solid black;
    display: inline-block;
    margin-left: 50px;
    border-radius: 10px;
    font-size: ${(props) => props.theme.xls};
    box-shadow: 5px 5px 5px 5px gray;
`;

const Title = styled.div`
    margin-top: 20px;
    font-size: ${(props) => props.theme.xls};
`;

interface LocationType {
    JJOKMOON: string;
    JUNGMOON: string;
    CHULMOON: string;
    DAEMYUNG: string;
    HANSUNGSHIN: string;
}

const Location: LocationType = {
    JJOKMOON: "JJOKMOON",
    JUNGMOON: "JUNGMOON",
    CHULMOON: "CHULMOON",
    DAEMYUNG: "DAEMYUNG",
    HANSUNGSHIN: "HANSUNGSHIN",
};

const HomeContainer = () => {
    const dispatch = useDispatch();
    // 지역별로 건물 리스트 요청
    const BuildingByLocation = (event: React.MouseEvent<HTMLButtonElement>) => {
        const locationTarget = event.currentTarget.value;

        dispatch(buildingInfoReqByLocation(locationTarget));
    };

    return (
        <>
            <Container>
                <Title>지역을 선택해주세요!</Title>
                <MapContainer>
                    <MapImg src={Map}></MapImg>
                    <Link href="/building">
                        <Btn
                            x="530px"
                            y="320px"
                            type="button"
                            value={Location.JUNGMOON}
                            onClick={BuildingByLocation}
                        >
                            🔵 정문/로터리
                        </Btn>
                    </Link>
                    <Link href="/building">
                        <Btn
                            x="270px"
                            y="590px"
                            value={Location.CHULMOON}
                            onClick={BuildingByLocation}
                        >
                            🔵 철문
                        </Btn>
                    </Link>
                    <Link href="/building">
                        <Btn
                            x="140px"
                            y="180px"
                            value={Location.JJOKMOON}
                            onClick={BuildingByLocation}
                        >
                            🔵 쪽문
                        </Btn>
                    </Link>
                    <Link href="/building">
                        <Btn
                            x="510px"
                            y="190px"
                            value={Location.HANSUNGSHIN}
                            onClick={BuildingByLocation}
                        >
                            🔵 한성대/성신
                        </Btn>
                    </Link>
                    <Link href="/building">
                        <Btn
                            x="300px"
                            y="600px"
                            value={Location.DAEMYUNG}
                            onClick={BuildingByLocation}
                        >
                            🔵 대명/대학로
                        </Btn>
                    </Link>
                </MapContainer>
            </Container>
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
        </>
    );
};

export default HomeContainer;
