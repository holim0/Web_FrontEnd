import React from "react";
import styled from "@emotion/styled";
import { WriteClick } from "../../../@types/interface";

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
    min-height: 200px;
    line-height: 200px;
    display: flex;
    justify-content: space-between;
`;

const PrevBtn = styled.div`
    button {
        background: transparent;
        outline: none;
        border: none;
        padding: 0 12px;
        font-size: 14px;
        color: ${(props) => props.theme.black};

        &:hover {
            text-decoration: underline;
        }
    }
`;

const NextBtn = styled.div`
    button {
        background: transparent;
        outline: none;
        border: none;
        padding: 0 12px;
        font-size: 14px;
        color: #0c84cd;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const BtnLink = ({
    handleNext,
    handlePrev,
    handleSubmit,
    handleOpenModal,
}: WriteClick) => {
    return (
        <Container>
            <PrevBtn>
                {handlePrev && (
                    <button type="button" onClick={handlePrev}>
                        이전 단계로 넘어가기
                    </button>
                )}
            </PrevBtn>
            <NextBtn>
                {handleSubmit ? (
                    <button type="button" onClick={handleOpenModal}>
                        완료 및 저장
                    </button>
                ) : (
                    <button type="button" onClick={handleNext}>
                        다음으로 이동해 작성 완료하기
                    </button>
                )}
            </NextBtn>
        </Container>
    );
};

export default BtnLink;
