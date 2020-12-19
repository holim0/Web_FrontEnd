import styled from "@emotion/styled";
import { SubTitle } from "./WriteForm";
import Rating from "../common/Rating";

const Cost = styled.div`
    display: flex;
`;

const TotalRating = styled.div`
    display: flex;
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
                <div>보증금</div>
                <input type="text" name="deposit" />
            </Cost>
            <Cost>
                <div>월세</div>
                <input type="text" name="rent" />
            </Cost>

            <TotalRating>
                총점 <Rating />
            </TotalRating>

            <SubTitle>리모델링 여부</SubTitle>
            <label htmlFor="remodeling">되어있어요</label>
            <input type="radio" name="remodeling" id="remodeling" value="yes" />
            <label htmlFor="noRemodeling">되어있지 않아요</label>
            <input
                type="radio"
                name="remodeling"
                id="noRemodeling"
                value="no"
            />
            <SubTitle>수압</SubTitle>
            <label htmlFor="high">좋아요</label>
            <input type="radio" name="pressure" id="high" value="high" />
            <label htmlFor="low">아쉬워요</label>
            <input type="radio" name="pressure" id="low" value="low" />
            <SubTitle>동파 경험</SubTitle>
            <label htmlFor="freeze">없어요</label>
            <input type="radio" name="freeze" id="noFreeze" value="noFreeze" />
            <label htmlFor="freeze">있어요</label>
            <input type="radio" name="freeze" id="freeze" value="freeze" />
            <SubTitle>채광</SubTitle>
            <label htmlFor="sunny">좋아요</label>
            <input type="radio" name="sunny" id="month" value="good" />
            <label htmlFor="sunny">아쉬워요</label>
            <input type="radio" name="sunny" id="lease" value="bad" />

            <div>
                <SubTitle>방음</SubTitle>
                <select name="silence">
                    <option>독서실</option>
                    <option>옆사람과 동거중</option>
                    <option>종종 들림</option>
                </select>
            </div>

            <div>
                <SubTitle>벌레여부</SubTitle>
                <select name="bugs">
                    <option>가끔나와요</option>
                    <option>전혀 안나와요</option>
                    <option>꽤 안나와요</option>
                    <option>항상 같이 살아요</option>
                </select>
            </div>
        </form>
    );
};
