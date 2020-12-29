import React from "react";
import styled from "@emotion/styled";
import { Container } from "styles/commonStyle";
import Pagination from "@material-ui/lab/Pagination";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import faker from "faker";
import Rating from "components/common/Rating";
import BuildingSkeleton from "./BuildingSkeleton";

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

interface Props {
    loading: boolean;
    handleLocation: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

const BuildingContainer = ({ loading, handleLocation }: Props) => {
    return (
        <Container2>
            <BtnContainer>
                <Button
                    variant="contained"
                    onClick={handleLocation}
                    data-value="JJOKMOON"
                    color="primary">
                    쪽문
                </Button>
                <Button
                    variant="contained"
                    onClick={handleLocation}
                    data-value="JUNGMOON"
                    color="primary">
                    정문/로터리
                </Button>
                <Button
                    variant="contained"
                    onClick={handleLocation}
                    data-value="CHULMOON"
                    color="primary">
                    철문
                </Button>
                <Button
                    variant="contained"
                    onClick={handleLocation}
                    data-value="DAEMYUNG"
                    color="primary">
                    대명/대학로
                </Button>
                <Button
                    variant="contained"
                    onClick={handleLocation}
                    data-value="HANSUNGSHIN"
                    color="primary">
                    한성대/성신
                </Button>
            </BtnContainer>
            {loading ? (
                <MainContainer>
                    <BuildingSkeleton />
                    <BuildingSkeleton /> <BuildingSkeleton />
                    <BuildingSkeleton /> <BuildingSkeleton />
                    <BuildingSkeleton />
                </MainContainer>
            ) : (
                <MainContainer>
                    <Link href="/building/123">
                        <Building>
                            <div>
                                <img src={faker.image.abstract(300, 300)} />
                            </div>
                            <Info>
                                <div>건물이름</div>
                                <div>준공년도</div>
                                <Rating score={4} size={18} />
                            </Info>
                        </Building>
                    </Link>
                    <Link href="/building/123">
                        <Building>
                            <div>
                                <img src={faker.image.abstract(300, 300)} />
                            </div>
                            <Info>
                                <div>건물이름</div>
                                <div>준공년도</div>
                                <Rating score={4} size={18} />
                            </Info>
                        </Building>
                    </Link>
                    <Link href="/building/123">
                        <Building>
                            <div>
                                <img src={faker.image.abstract(300, 300)} />
                            </div>
                            <Info>
                                <div>건물이름</div>
                                <div>준공년도</div>
                                <Rating score={4} size={18} />
                            </Info>
                        </Building>
                    </Link>
                    <Link href="/building/123">
                        <Building>
                            <div>
                                <img src={faker.image.abstract(300, 300)} />
                            </div>
                            <Info>
                                <div>건물이름</div>
                                <div>준공년도</div>
                                <Rating score={4} size={18} />
                            </Info>
                        </Building>
                    </Link>
                    <Link href="/building/123">
                        <Building>
                            <div>
                                <img src={faker.image.abstract(300, 300)} />
                            </div>
                            <Info>
                                <div>건물이름</div>
                                <div>준공년도</div>
                                <Rating score={4} size={18} />
                            </Info>
                        </Building>
                    </Link>
                    <Link href="/building/123">
                        <Building>
                            <div>
                                <img src={faker.image.abstract(300, 300)} />
                            </div>
                            <Info>
                                <div>건물이름</div>
                                <div>준공년도</div>
                                <Rating score={4} size={18} />
                            </Info>
                        </Building>
                    </Link>
                    <Link href="/building/123">
                        <Building>
                            <div>
                                <img src={faker.image.abstract(300, 300)} />
                            </div>
                            <Info>
                                <div>건물이름</div>
                                <div>준공년도</div>
                                <Rating score={4} size={18} />
                            </Info>
                        </Building>
                    </Link>
                </MainContainer>
            )}
            <Pagi count={10} color="primary" />
        </Container2>
    );
};

export default BuildingContainer;
