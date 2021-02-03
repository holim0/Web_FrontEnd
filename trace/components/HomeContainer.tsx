import React, { useEffect } from "react";
import Map from "assets/images/Map.png";
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";
import RoomIcon from "@material-ui/icons/Room";
import Link from "next/link";
import { buildingInfoReqByLocation, buildingInfoReq } from "Redux/building";
import { useDispatch, useSelector } from "react-redux";
import noImg from "assets/images/noImg.png";
import Rating from "components/common/Rating";
import { RootState } from "Redux";

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

const Title = styled.div`
    margin-top: 20px;
    font-size: 40px;
    font-weight: 700;
`;

const Building = styled.div`
    display: inline-block;
    box-shadow: 5px 5px 5px 5px gray;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 80px;
    width: 300px;
`;

const Info = styled.div`
    padding: 8px;
    max-height: 85px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
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
    // 지역별로 건물 리스트 요청 : page => 0부터
    const BuildingByLocation = (event: React.MouseEvent<HTMLButtonElement>) => {
        const data = {
            locationTarget: event.currentTarget.value,
            pageNumber: 0,
        };
        dispatch(buildingInfoReqByLocation(data));
    };

    const buildingList = useSelector(
        (state: RootState) => state.building.content
    );

    useEffect(() => {
        dispatch(buildingInfoReq());
    }, [dispatch]);

    return (
        <>
            <Container>
                <Title>지역을 선택해주세요</Title>
                <MapContainer>
                    <MapImg src={Map}></MapImg>
                    <Link href="/building">
                        <Btn
                            x="530px"
                            y="320px"
                            type="button"
                            value={Location.JUNGMOON}
                            onClick={BuildingByLocation}
                            startIcon={<RoomIcon color="primary" />}
                        >
                            정문/로터리
                        </Btn>
                    </Link>
                    <Link href="/building">
                        <Btn
                            x="270px"
                            y="590px"
                            value={Location.CHULMOON}
                            onClick={BuildingByLocation}
                            startIcon={<RoomIcon color="primary" />}
                        >
                            철문
                        </Btn>
                    </Link>
                    <Link href="/building">
                        <Btn
                            x="140px"
                            y="180px"
                            value={Location.JJOKMOON}
                            onClick={BuildingByLocation}
                            startIcon={<RoomIcon color="primary" />}
                        >
                            쪽문
                        </Btn>
                    </Link>
                    <Link href="/building">
                        <Btn
                            x="510px"
                            y="190px"
                            value={Location.HANSUNGSHIN}
                            onClick={BuildingByLocation}
                            startIcon={<RoomIcon color="primary" />}
                        >
                            한성대/성신
                        </Btn>
                    </Link>
                    <Link href="/building">
                        <Btn
                            x="300px"
                            y="600px"
                            value={Location.DAEMYUNG}
                            onClick={BuildingByLocation}
                            startIcon={<RoomIcon color="primary" />}
                        >
                            대명/대학로
                        </Btn>
                    </Link>
                </MapContainer>
            </Container>
            <BuildingContainer>
                {buildingList &&
                    buildingList.map((building: any) => {
                        return (
                            <Link
                                href={`/building/${building.id}`}
                                key={building.id}
                            >
                                <Building>
                                    <div>
                                        <img
                                            src={noImg}
                                            style={{
                                                width: "300px",
                                                height: "300px",
                                            }}
                                        />
                                    </div>
                                    <Info>
                                        <div>{`주소: ${building.address} ${building.lotNumber}`}</div>
                                        <div>{`준공년도: ${
                                            building.completionDate
                                                ? building.completionDate
                                                : "정보없음"
                                        }`}</div>
                                        <Rating score={4} size={18} />
                                    </Info>
                                </Building>
                            </Link>
                        );
                    })}
            </BuildingContainer>
        </>
    );
};

export default HomeContainer;
