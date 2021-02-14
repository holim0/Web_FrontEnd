import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { searchReq, resetSearchState } from "Redux/Search";
import { RootState } from "Redux";
import { setBuildingNumber } from "Redux/review";

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
                width: 300px;
                border: none;
            }
            &:nth-of-type(2) {
                font-size: ${(props) => props.theme.ms};
                width: 250px;
                text-align: left;
                padding: 3px;
                margin-left: 21px;
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
    const dispatch = useDispatch();
    const [roomNumber, setRoomNumber] = useState("");
    const [buildingResult, setBuildingResult] = useState<any[]>([]);
    const [check, setCheck] = useState(false);

    const handleRoomNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoomNumber(event.target.value);
    };

    const { searchResult, isSuccess } = useSelector(
        (state: RootState) => state.Search
    );

    useEffect(() => {
        if (searchResult) {
            setBuildingResult(searchResult);
        }
        if (isSuccess && searchResult.length === 0) {
            alert("해당 건물이 등록되어 있지 않습니다.");
        }
        dispatch(resetSearchState());
    }, [searchResult, isSuccess]);

    useEffect(() => {
        if (buildingResult.length > 0) {
            setCheck(true);
        }
    }, [buildingResult]);

    useEffect(() => {
        if (check) {
            const buildingNumber: Number = buildingResult[0].id;
            const addressData = {
                id: buildingNumber,
                roomNumber,
            };
            dispatch(setBuildingNumber(addressData));
        }
    }, [check, roomNumber]);

    const handleCheckAddress = () => {
        if (address) {
            let sperateAddress = address.split(" ");
            sperateAddress[0] = sperateAddress[0] + "특별시";
            const realAddress = sperateAddress
                .slice(0, sperateAddress.length - 1)
                .join(" ");
            const lotNumber = sperateAddress[sperateAddress.length - 1];

            const addressObject = {
                address: realAddress,
                lotNumber: lotNumber,
            };
            dispatch(searchReq(addressObject));
        }
    };

    return (
        <>
            <AddressForm>
                <button type="button" onClick={onAddress}>
                    주소 검색
                </button>
                {address && (
                    <div>
                        <input type="text" value={address} readOnly />
                        <button onClick={handleCheckAddress}>
                            주소확인하기
                        </button>
                        {buildingResult.length ? (
                            <input
                                type="text"
                                placeholder="상세 주소를 입력해 주세요."
                                onChange={handleRoomNumber}
                                value={roomNumber}
                            />
                        ) : null}
                    </div>
                )}
            </AddressForm>
        </>
    );
};

export default Address;
