import styled from "@emotion/styled";
import { SubTitle } from "./WriteForm";
import Rating from "../common/Rating";

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
}

export const SelectForm = ({ handleFormChange }: Props) => {
    return (
        <form onChange={handleFormChange}>
            <SubTitle>거주비용</SubTitle>
            <label htmlFor="month">월세</label>
            <input type="radio" name="cost" id="month" value="monthlyRent" />
            <label htmlFor="charter">전세</label>
            <input type="radio" name="cost" id="lease" value="lease" />

            <Cost>
                <CostBox>
                    <label htmlFor="deposit">보증금</label>
                    <input type="text" id="deposit" name="deposit" />
                    <span>만원</span>
                </CostBox>
                <CostBox>
                    <label htmlFor="rent">월세</label>
                    <input type="text" id="rent" name="rent" />
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
                        name="remodeling"
                        id="remodeling"
                        value="yes"
                    />
                    <label htmlFor="remodeling">되어있어요</label>
                    <input
                        type="radio"
                        name="remodeling"
                        id="noRemodeling"
                        value="no"
                    />
                    <label htmlFor="noRemodeling">되어있지 않아요</label>
                </div>

                <div>
                    <SubTitle>수압🌊</SubTitle>
                    <input
                        type="radio"
                        name="pressure"
                        id="high"
                        value="high"
                    />
                    <label htmlFor="high">좋아요</label>
                    <input type="radio" name="pressure" id="low" value="low" />
                    <label htmlFor="low">아쉬워요</label>
                </div>

                <div>
                    <SubTitle>동파 경험🥶</SubTitle>
                    <input
                        type="radio"
                        name="freeze"
                        id="noFreeze"
                        value="noFreeze"
                    />
                    <label htmlFor="noFreeze">없어요</label>
                    <input
                        type="radio"
                        name="freeze"
                        id="freeze"
                        value="freeze"
                    />
                    <label htmlFor="freeze">있어요</label>
                </div>

                <div>
                    <SubTitle>채광🌞</SubTitle>
                    <input type="radio" name="sunny" id="good" value="good" />
                    <label htmlFor="good">좋아요</label>
                    <input type="radio" name="sunny" id="bad" value="bad" />
                    <label htmlFor="bad">아쉬워요</label>
                </div>
            </Select>

            <OptionsGrid>
                <Options>
                    <SubTitle>방음🗣️</SubTitle>
                    <select name="silence">
                        <option>독서실</option>
                        <option>옆사람과 동거중</option>
                        <option>종종 들림</option>
                    </select>
                </Options>

                <Options>
                    <SubTitle>벌레여부🐛</SubTitle>
                    <select name="bugs">
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
