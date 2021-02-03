import React , {useEffect, useState, ChangeEvent} from "react";
import styled from "@emotion/styled";
import { Container } from "styles/commonStyle";
import Pagination from "@material-ui/lab/Pagination";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Rating from "components/common/Rating";
import BuildingSkeleton from "./BuildingSkeleton";
import noImg from "assets/images/noImg.png"
import {useSelector, useDispatch} from "react-redux";
import { RootState } from "Redux";
import {buildingInfoReqByLocation} from "Redux/building";

const Container2 = styled(Container)`
    max-width: 1200px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.white};
    margin: 8px auto;
    padding: 12px;
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    margin: 0 auto;
    gap: 40px;
    margin-top: 40px;
`;

const Building = styled.div`
    box-shadow: ${(props) => props.theme.boxShadow};
    border-radius: 10px;
    cursor: pointer;
`;

const Info = styled.div`
    padding: 8px;
    max-height: 85px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const Pagi = styled(Pagination)`
    margin: 50px auto;
`;

const ButtonGroup = ({handleOtherLocation} : any)=>{
    return (
    <BtnContainer>
        <Button
            variant="contained"
            onClick={handleOtherLocation}
            data-value="JJOKMOON"
            color="primary"
        >
            쪽문
        </Button>
        <Button
            variant="contained"
            onClick={handleOtherLocation}
            data-value="JUNGMOON"
            color="primary"
        >
            정문/로터리
        </Button>
        <Button
            variant="contained"
            onClick={handleOtherLocation}
            data-value="CHULMOON"
            color="primary"
        >
            철문
        </Button>
        <Button
            variant="contained"
            onClick={handleOtherLocation}
            data-value="DAEMYUNG"
            color="primary"
        >
            대명/대학로
        </Button>
        <Button
            variant="contained"
            onClick={handleOtherLocation}
            data-value="HANSUNGSHIN"
            color="primary"
        >
            한성대/성신
        </Button>
    </BtnContainer>)
}

const BuildingContainer = () => {
    const dispatch = useDispatch();
    const [page, setPage]= useState(1);
   
    const buildingList: Array<any> = useSelector((state: RootState) => (state.building.content));
    const {curLocation, isLoading} = useSelector((state: RootState) =>state.building);

    const handlePageChange = (event: ChangeEvent<unknown>, value: number)=>{
        console.log(value)
        setPage(value)
        const data = {
            locationTarget: curLocation,
            pageNumber : value-1
        }
        console.log(data)
        dispatch(buildingInfoReqByLocation(data));
    } 
    
    const handleOtherLocation = (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        const changeLocation = event.currentTarget.getAttribute('data-value');
        const data = {
            locationTarget: changeLocation,
            pageNumber : 0
        }
        dispatch(buildingInfoReqByLocation(data))
    }
    
    useEffect(()=>{
        console.log(isLoading)
        console.log(curLocation)
        const data = {
            locationTarget: "JJOKMOON",
            pageNumber : page-1
        }
        dispatch(buildingInfoReqByLocation(data));
    },[])
    
    return (
        <Container2>
            <ButtonGroup handleOtherLocation={handleOtherLocation}></ButtonGroup>
            <div style={{fontSize: "40px", fontWeight: "bold"}}>{curLocation ? curLocation : null}</div>
            {isLoading ? (
                <MainContainer>
                    <BuildingSkeleton />
                    <BuildingSkeleton />
                    <BuildingSkeleton />
                    <BuildingSkeleton /> 
                    <BuildingSkeleton />
                    <BuildingSkeleton />
                </MainContainer>
            ) : (
                <MainContainer>
                    {buildingList ? 
                        buildingList.map((building: any)=>{
                            return(
                                <Link href={`/building/${building.id}`} key={building.id}>
                                    <Building >
                                        <div>
                                            <img src={noImg} style={{width: "300px", height:"300px"}} />
                                        </div>
                                        <Info>
                                            <div>{`주소: ${building.address} ${building.lotNumber}`}</div>
                                            <div>{`준공년도: ${building.completionDate ? building.completionDate : "정보없음"}`}</div>
                                            <Rating score={4} size={18} />
                                        </Info>
                                    </Building>
                                </Link>
                        )})
                        : null
                    }
                </MainContainer>
            )}
            <Pagi count={10} page={page} onChange={handlePageChange} color="primary" showFirstButton showLastButton/>
        </Container2>
    );
};

export default BuildingContainer;
