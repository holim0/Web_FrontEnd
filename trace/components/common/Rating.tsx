import React from "react";
import styled from "@emotion/styled";
import { BsStarFill } from "react-icons/bs";

const Stars = styled.div`
    display: flex;
    svg {
        cursor: pointer;
        margin-right: 3px;
    }
`;

const Rating = () => {
    return (
        <Stars>
            <BsStarFill size={22} fill="#dbdbdb" />
            <BsStarFill size={22} fill="#dbdbdb" />
            <BsStarFill size={22} fill="#dbdbdb" />
            <BsStarFill size={22} fill="#dbdbdb" />
            <BsStarFill size={22} fill="#dbdbdb" />
        </Stars>
    );
};

export default Rating;
