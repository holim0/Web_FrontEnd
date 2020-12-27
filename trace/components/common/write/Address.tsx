import React from "react";
import styled from "@emotion/styled";
const AddressForm = styled.div`
    display: flex;
    padding: 12px;
    align-items: center;
    div {
        display: flex;
        input {
            all: unset;
            border: 1px solid ${(props) => props.theme.darkWhite};
            &:nth-of-type(1) {
                font-size: ${(props) => props.theme.ls};
                width: 400px;
                border: none;
            }
            &:nth-of-type(2) {
                font-size: ${(props) => props.theme.ms};
                width: 250px;
                text-align: left;
                padding: 3px;
                margin-left: 6px;
            }
        }
    }

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

interface Props {
    address?: string;
    onAddress?: () => void;
}

const Address = ({ address, onAddress }: Props) => {
    return (
        <>
            <AddressForm>
                <button type="button" onClick={onAddress}>
                    주소 검색
                </button>
                {address && (
                    <div>
                        <input type="text" value={address} readOnly />
                        <input
                            type="text"
                            placeholder="상세 주소를 입력해 주세요."
                        />
                    </div>
                )}
            </AddressForm>
        </>
    );
};

export default Address;
