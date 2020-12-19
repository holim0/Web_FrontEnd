import styled from "@emotion/styled";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import { SelectForm } from "./SelectForm";

const Container = styled.main`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
`;

export const SubTitle = styled.div`
    font-size: 18px;
`;

const Address = styled.div`
    display: flex;
    padding: 12px;

    button {
    }
`;

const AddImg = styled.div`
    display: flex;
    justify-content: center;
    div {
        margin: 0 5px;
    }
`;

const ImgBox = styled.div`
    position: relative;
    text-shadow: 1px 1px 1px #333;
    background: #dbdbdb;
    width: 450px;
    height: 350px;
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

const ShowImg = styled.div`
    width: 450px;
    height: 350px;
    border: 1px solid ${(props) => props.theme.border};
    img {
        width: 100%;
        height: 100%;
    }
`;

const Calendar = styled.div`
    display: flex;
    justify-content: center;
    input {
        cursor: pointer;
        margin: 0 6px;
        padding: 6px 12px;
        border: 1px solid ${(props) => props.theme.border};
        text-align: center;
        &:hover {
            background: #dbdbdb;
            outline: none;
            border: 1px solid #ffffff;
        }
    }
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
            <Address>
                <button type="button">상세 주소작성</button>
            </Address>

            <AddImg>
                <ImgBox onClick={handleImg}>
                    <div>+</div>
                </ImgBox>
                <input ref={imgInput} type="file" hidden />
                <ShowImg>
                    <img src="" alt="올린이미지" />
                </ShowImg>
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
            <SelectForm handleFormChange={handleFormChange} />
            <div>다음으로 이동해 작성 완료하기</div>
        </Container>
    );
};

export default WriteForm;
