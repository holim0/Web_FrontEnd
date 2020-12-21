import React from "react";
import styled from "@emotion/styled";
import { Container } from "styles/commonStyle";

const Box = styled.div`
    background-color: white;
    width: 80%;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    box-shadow: 5px 5px 5px 5px gray;
`;

const BuildingSection = styled.div`
    height: 100%;
    width: 50%;
    position: relative;
`;

const BuildingInfo = styled.div`
    position: relative;
    background-color: gray;
    width: 60%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
`;

const BuildingInfoDetail = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    bottom: 0;
    width: 100%;
    height: 30%;
    font-size: ${(props) => props.theme.xls};
    text-align: center;
`;

const RoomListSection = styled.div`
    background-color: dodgerblue;
    height: 100%;
    width: 50%;
`;

const BuildingDetail = () => {
    return (
        <Container>
            <Box>
                <BuildingSection>
                    <BuildingInfo>
                        <BuildingInfoDetail>
                            건물에 대한 정보
                        </BuildingInfoDetail>
                    </BuildingInfo>
                </BuildingSection>
                <RoomListSection>asdhasjk</RoomListSection>
            </Box>
        </Container>
    );
};

export default BuildingDetail;
