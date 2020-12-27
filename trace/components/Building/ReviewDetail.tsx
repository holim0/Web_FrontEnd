import React from "react";
import styled from "@emotion/styled";
import Rating from "components/common/Rating";
import faker from "faker";
import { Carousel } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ReviewContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 100px;
    padding: 8px;
    min-height: 100vh;
    background-color: ${(props) => props.theme.white};
`;

const RentDesc = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 35px;
`;

const Adderss = styled.div`
    padding: 8px;
    margin-bottom: 25px;
    font-size: ${(props) => props.theme.ss};
    padding-bottom: 10px;
`;

const RentDetail = styled.div`
    display: flex;
    align-items: center;
    letter-spacing: -1px;

    h1 {
        margin: 0 4px;

        &:nth-of-type(2):after {
            content: "/";
        }
    }
    span {
        font-weight: 600;
        margin-top: 12px;
    }
`;

const InfoTitle = styled.h1`
    position: relative;
    width: fit-content;
    margin-bottom: 12px;
    padding-bottom: 10px;
    margin-left: 8px;
    &:after {
        position: absolute;
        bottom: 0;
        right: 0;
        content: "";
        width: 100%;
        height: 2px;
        background-color: ${(props) => props.theme.blue};
    }
`;

const ReviewDetailList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 0;
    li {
        border: 1px solid ${(props) => props.theme.darkWhite};
        padding: 8px;
        display: flex;
        align-items: center;
        p {
            margin: 0;
            margin-right: 12px;
            width: 100px;
            border-right: 2px solid ${(props) => props.theme.darkWhite};
            padding: 8px;
        }
        div {
            margin: 0 auto;
        }
    }
`;

const ReviewImg = styled.div`
    height: 600px;
    width: 600px;
    margin: 0 auto;
    position: relative;
`;

const PrevBtn = styled.div`
    left: -30px;
    top: 0;
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 3;
    cursor: pointer;
    font-size: 30px;

    &:hover {
        background-color: #fafbfc;
    }
`;

const NextBtn = styled.div`
    right: -30px;
    top: 0;
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 3;
    cursor: pointer;
    font-size: 30px;

    &:hover {
        background-color: #fafbfc;
    }
`;

const OptionDetail = styled.div`
    margin-top: 48px;
    & > div {
        margin-bottom: 36px;
    }
    p {
        background-color: #fafbfc;
        min-height: 300px;
        max-width: 850px;
        margin: 0 auto;
        padding: 12px;
    }
`;

const OptionTitle = styled.h2`
    position: relative;
    width: fit-content;
    margin: 0 auto 12px auto;
    padding-bottom: 10px;
    &:after {
        position: absolute;
        bottom: 0;
        left: 50%;
        content: "";
        width: 20px;
        height: 2px;
        background-color: ${(props) => props.theme.black};
    }
`;

const review = {
    rentType: "월세",
    monthlyRent: 1000,
    deposit: 3000,
    area: 56,
    score: 4,
    livingStart: "2020-12.2",
    livingEnd: "2020-123,2",
    remodeled: true,
    waterPressure: "좋아요",
    images: [faker.image.abstract(600, 600), faker.image.abstract(600, 600)],
    lighting: "좋아요",
    frozen: "없어요",
    bug: "가끔나와요",
    noise: "독서실",
    option:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis animi illum quae aperiam et itaque recusandae tempore voluptatem laudantium nihil, accusamus soluta! Aut ab aliquam mollitia eum ipsam fuga.",
    nearBy: "ff",
    trueStory:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, soluta mollitia architecto debitis fugiat minus nostrum tempore voluptatem tenetur sequi laboriosam quis nemo totam ut, ea maxime. Tempora, deserunt voluptatum.",
    contact: "010-2520-2132",
    durationStart: "20-3-12",
    durationEnd: "20.12.12",
};

interface Props {
    slider: any;
    handlePrev: () => void;
    handleNext: () => void;
}

const ReviewDetail = ({ slider, handlePrev, handleNext }: Props) => {
    return (
        <ReviewContainer>
            <RentDesc>
                <RentDetail>
                    <h1>{review.rentType} </h1>
                    <h1>{review.deposit} </h1>
                    <h1>{review.monthlyRent}</h1>
                    <span>만원</span>
                </RentDetail>
                <div>
                    <Rating score={review.score} />
                </div>
            </RentDesc>
            <Adderss>경기도 성남시 분당구 어딘가</Adderss>
            {review.contact && review.durationStart && review.durationEnd && (
                <ReviewDetailList>
                    <li>
                        <p>방있음</p>
                        <div>✔️</div>
                    </li>
                    <li>
                        <p>연락처</p>
                        <div>{review.contact}</div>
                    </li>
                    <li>
                        <p>판매기간</p>
                        <div>
                            {review.durationStart} ~ {review.durationEnd}
                        </div>
                    </li>
                </ReviewDetailList>
            )}
            <InfoTitle>Info</InfoTitle>
            <ReviewDetailList>
                <li>
                    <p>상세주소</p>
                    <div>트레이서 빌딩 302동 1200호</div>
                </li>
                <li>
                    <p>면적</p>
                    <div>{review.area}㎡</div>
                </li>
                <li>
                    <p>거주기간</p>
                    <div>
                        {review.livingStart}~{review.livingEnd}
                    </div>
                </li>
                <li>
                    <p>리모델링🏠</p>
                    <div>{review.remodeled ? "✔️" : "❌"}</div>
                </li>
                <li>
                    <p>동파🥶</p>
                    <div>{review.frozen}</div>
                </li>
                <li>
                    <p>채광🌞</p>
                    <div>{review.lighting}</div>
                </li>
                <li>
                    <p>수압🌊</p>
                    <div>{review.waterPressure}</div>
                </li>
                <li>
                    <p>방음🗣️</p>
                    <div>{review.noise}</div>
                </li>
                <li>
                    <p>벌레🐛</p>
                    <div>{review.bug}</div>
                </li>
            </ReviewDetailList>
            <ReviewImg>
                <PrevBtn onClick={handlePrev}>
                    <IoIosArrowBack />
                </PrevBtn>
                <Carousel
                    autoplay
                    ref={(props: CarouselRef) => (slider.current = props)}>
                    {review.images.map((img) => (
                        <div key={img}>
                            <img src={img} alt="리뷰이미지" />
                        </div>
                    ))}
                </Carousel>
                <NextBtn onClick={handleNext}>
                    <IoIosArrowForward />
                </NextBtn>
            </ReviewImg>
            <OptionDetail>
                <div>
                    <OptionTitle>⚙️옵션</OptionTitle>
                    <p>{review.option}</p>
                </div>
                <div>
                    <OptionTitle>ℹ️주변정보</OptionTitle>
                    <p>{review.nearBy}</p>
                </div>
                <div>
                    <OptionTitle>🔉마음의 소리</OptionTitle>
                    <p>{review.trueStory}</p>
                </div>
            </OptionDetail>
        </ReviewContainer>
    );
};

export default ReviewDetail;
