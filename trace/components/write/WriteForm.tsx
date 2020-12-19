import styled from "@emotion/styled";
import Rating from "../common/Rating";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import { MutableRefObject, RefObject } from "react";

const Container = styled.main`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`;

const SubTitle = styled.div`
    font-size: 18px;
`;

const Address = styled.div`
    display: flex;
`;

const AddImg = styled.div`
    display: flex;
`;

const ImgBox = styled.div`
    width: 400px;
    height: 300px;
    position: relative;
    text-shadow: 1px 1px 1px #333;
    background: #dbdbdb;
    color: #ffffff;
    font-size: 140px;
    cursor: pointer;

    &:hover {
        background: #afafaf;
        color: #dbdbdb;
    }

    div {
        position: absolute;
        top: calc(50% - 20px);
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Calendar = styled.div`
    display: flex;
    input {
        cursor: pointer;
        margin: 0 6px;
    }
`;

const Cost = styled.div`
    display: flex;
`;

const TotalRating = styled.div`
    display: flex;
`;

interface Props {
    startDate: Date;
    handelSelectDate: (data: Date) => void;
    handleFormChange: (e: React.FormEvent<HTMLFormElement>) => void;
    handleImg: () => void;
    imgInput: React.MutableRefObject<HTMLInputElement>;
}

registerLocale("ko", ko);

const WriteForm = ({
    startDate,
    handelSelectDate,
    handleFormChange,
    handleImg,
    imgInput,
}: Props) => {
    return (
        <Container>
            <SubTitle>리뷰 작성</SubTitle>
            <Address>
                <div>주소작성</div>
                <button type="button">검색</button>
            </Address>

            <AddImg>
                <ImgBox onClick={handleImg}>
                    <div>+</div>
                </ImgBox>
                <input ref={imgInput} type="file" hidden />
                <div>
                    <img src="" alt="올린이미지" />
                </div>
            </AddImg>

            <div>
                <SubTitle>거주기간</SubTitle>
                <Calendar>
                    <DatePicker
                        selected={startDate}
                        onChange={handelSelectDate}
                        dateFormat="yy/MM/dd"
                        locale="ko"
                    />
                    <DatePicker
                        selected={startDate}
                        onChange={handelSelectDate}
                        dateFormat="yy/MM/dd"
                        locale="ko"
                    />
                </Calendar>
            </div>

            <form onChange={handleFormChange}>
                <SubTitle>거주비용</SubTitle>
                <label htmlFor="month">월세</label>
                <input
                    type="radio"
                    name="cost"
                    id="month"
                    value="monthlyRent"
                />
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
                <input
                    type="radio"
                    name="remodeling"
                    id="remodeling"
                    value="yes"
                />
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
                <input
                    type="radio"
                    name="freeze"
                    id="noFreeze"
                    value="noFreeze"
                />
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

            <div>다음으로 이동해 작성 완료하기</div>
        </Container>
    );
};

export default WriteForm;
