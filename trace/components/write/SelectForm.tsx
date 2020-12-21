import styled from "@emotion/styled";
import { SubTitle } from "./WriteForm";
import Rating from "../common/Rating";
import { ReviewWrite } from "../../@types/interface";

const Cost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: 20px auto;
`;

const CostBox = styled.div`
    margin: 8px 6px;
    border: 1px solid ${(props) => props.theme.darkWhite};
    display: flex;
    justify-content: space-between;
    width: 100%;
    label {
        padding: 6px 12px;
        background: #1da1f2;
        flex: 1;
        color: ${(props) => props.theme.white};
    }
    input {
        all: unset;
        text-align: right;
        padding: 6px;
        color: ${(props) => props.theme.black};
    }
    span {
        padding-right: 3px;
        font-size: 12px;
        line-height: 33px;
        color: ${(props) => props.theme.gray};
    }
`;

const TotalRating = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
        font-size: 12px;
        margin-bottom: 6px;
        color: ${(props) => props.theme.gray};
    }
`;

const Select = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 300px);
    gap: 8px;
    justify-content: space-around;

    div {
        width: 100%;
    }

    input[type="radio"] {
        cursor: pointer;
        visibility: hidden;
        z-index: 55;
    }

    label {
        border: 1px solid ${(props) => props.theme.darkWhite};
        cursor: pointer;
        padding: 6px 12px;
        color: ${(props) => props.theme.gray};
    }

    input[type="radio"]:checked + label {
        background-color: #1da1f2;
        border: 1px solid ${(props) => props.theme.darkWhite};
        color: ${(props) => props.theme.white};
    }
`;

const OptionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const Options = styled.div`
    select {
        padding: 6px;
        width: 200px;
        height: 50px;
        text-align: center;
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.darkWhite};
        outline: none;
    }
`;

interface Props {
    handleFormChange: (e: React.FormEvent<HTMLFormElement>) => void;
    writeState: ReviewWrite;
}

export const SelectForm = ({ handleFormChange, writeState }: Props) => {
    const {
        rentType,
        deposit,
        monthlyRent,
        noise,
        bug,
        lighting,
        score,
        waterPressure,
        remodeled,
        frozen,
    } = writeState;
    return (
        <form onChange={handleFormChange}>
            <SubTitle>거주비용</SubTitle>
            <label htmlFor="month">월세</label>
            <input
                type="radio"
                name="rentType"
                id="month"
                value="월세"
                defaultChecked={rentType === "월세"}
            />
            <label htmlFor="charter">전세</label>
            <input
                type="radio"
                name="rentType"
                id="lease"
                value="전세"
                defaultChecked={rentType === "전세"}
            />

            <Cost>
                <CostBox>
                    <label htmlFor="deposit">보증금</label>
                    <input
                        type="number"
                        id="deposit"
                        name="deposit"
                        defaultValue={deposit}
                    />
                    <span>만원</span>
                </CostBox>
                <CostBox>
                    <label htmlFor="rent">월세</label>
                    <input
                        type="number"
                        id="rent"
                        name="monthlyRent"
                        defaultValue={monthlyRent}
                    />
                    <span>만원</span>
                </CostBox>
            </Cost>

            <TotalRating>
                <Rating />
                <div>별로 평가해 주세요!</div>
            </TotalRating>

            <Select>
                <div>
                    <SubTitle>리모델링 여부🏠</SubTitle>
                    <input
                        type="radio"
                        name="remodeled"
                        id="remodeling"
                        value="되어있어요"
                        defaultChecked={remodeled}
                    />
                    <label htmlFor="remodeling">되어있어요</label>
                    <input
                        type="radio"
                        name="remodeled"
                        id="noRemodeling"
                        value=""
                        defaultChecked={!remodeled}
                    />
                    <label htmlFor="noRemodeling">되어있지 않아요</label>
                </div>

                <div>
                    <SubTitle>수압🌊</SubTitle>
                    <input
                        type="radio"
                        name="waterPressure"
                        id="high"
                        value="좋아요"
                        defaultChecked={waterPressure === "좋아요"}
                    />
                    <label htmlFor="high">좋아요</label>
                    <input
                        type="radio"
                        name="waterPressure"
                        id="low"
                        value="아쉬워요"
                        defaultChecked={waterPressure === "아쉬워요"}
                    />
                    <label htmlFor="low">아쉬워요</label>
                </div>

                <div>
                    <SubTitle>동파 경험🥶</SubTitle>
                    <input
                        type="radio"
                        name="frozen"
                        id="nofrozen"
                        value="없어요"
                        defaultChecked={frozen === "없어요"}
                    />
                    <label htmlFor="nofrozen">없어요</label>
                    <input
                        type="radio"
                        name="frozen"
                        id="frozen"
                        value="있어요"
                        defaultChecked={frozen === "있어요"}
                    />
                    <label htmlFor="frozen">있어요</label>
                </div>

                <div>
                    <SubTitle>채광🌞</SubTitle>
                    <input
                        type="radio"
                        name="lighting"
                        id="good"
                        value="좋아요"
                        defaultChecked={lighting === "좋아요"}
                    />
                    <label htmlFor="good">좋아요</label>
                    <input
                        type="radio"
                        name="lighting"
                        id="bad"
                        value="아쉬워요"
                        defaultChecked={lighting === "아쉬워요"}
                    />
                    <label htmlFor="bad">아쉬워요</label>
                </div>
            </Select>

            <OptionsGrid>
                <Options>
                    <SubTitle>방음🗣️</SubTitle>
                    <select name="noise" defaultValue={noise}>
                        <option>독서실</option>
                        <option>옆사람과 동거중</option>
                        <option>종종 들림</option>
                    </select>
                </Options>

                <Options>
                    <SubTitle>벌레여부🐛</SubTitle>
                    <select name="bug" defaultValue={bug}>
                        <option>가끔나와요</option>
                        <option>전혀 안나와요</option>
                        <option>꽤 안나와요</option>
                        <option>항상 같이 살아요</option>
                    </select>
                </Options>
            </OptionsGrid>
        </form>
    );
};
