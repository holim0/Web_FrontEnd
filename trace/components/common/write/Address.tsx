import React from "react";
import styled from "@emotion/styled";

const AddressForm = styled.div`
    display: flex;
    padding: 12px;

    button {
        all: unset;
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.darkWhite};
        padding: 8px;
        &:hover {
            background-color: ${(props) => props.theme.darkWhite};
        }
    }
`;

const Address = () => {
    return (
        <AddressForm>
            <button type="button">상세 주소작성</button>
        </AddressForm>
    );
};

export default Address;
