import { WriteClick } from "../../../@types/interface";
import React from "react";
import BtnLink from "../../common/write/Btn";
import styled from "@emotion/styled";

const Container = styled.main`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
`;

const WriteReviewForm = ({ handleSubmit, handlePrev }: WriteClick) => {
    return (
        <Container>
            <BtnLink handleSubmit={handleSubmit} handlePrev={handlePrev} />
        </Container>
    );
};

export default WriteReviewForm;
