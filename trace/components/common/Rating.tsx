import React from "react";
import styled from "@emotion/styled";
import { BsStarFill } from "react-icons/bs";

const Stars = styled.div`
    display: flex;
    align-items: center;
    svg {
        cursor: pointer;
        margin-right: 3px;
    }
`;

const Rating = () => {
    return (
        <Stars>
            <BsStarFill size={24} fill="#dbdbdb" />
            <BsStarFill size={24} fill="#dbdbdb" />
            <BsStarFill size={24} fill="#dbdbdb" />
            <BsStarFill size={24} fill="#dbdbdb" />
            <BsStarFill size={24} fill="#dbdbdb" />
        </Stars>
    );
};

export default Rating;
