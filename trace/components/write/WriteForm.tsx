import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import { SelectForm } from "./SelectForm";
import BtnLink from "../common/write/Btn";
import { WriteClick } from "../../@types/interface";
import styled from "@emotion/styled";
import Address from "components/common/write/Address";
import { Container } from "styles/commonStyle";

const Write = styled.div`
    max-width: 1000px;
    padding: 12px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    background-color: ${(props) => props.theme.white};
`;

export const SubTitle = styled.div`
    font-size: 18px;
    height: 55px;
    line-height: 55px;
    margin: 24px auto;
    border-bottom: 1px solid ${(props) => props.theme.darkWhite};
    width: fit-content;
    font-weight: 600;
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
    text-shadow: 1px 1px 1px ${(props) => props.theme.black};
    background: ${(props) => props.theme.darkWhite};
    width: 450px;
    height: 350px;
    color: ${(props) => props.theme.white};
    font-size: 140px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.gray};
        color: ${(props) => props.theme.darkWhite};
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
    border: 1px solid ${(props) => props.theme.darkWhite};
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
        border: 1px solid ${(props) => props.theme.darkWhite};
        text-align: center;
        &:hover {
            background: ${(props) => props.theme.darkWhite};
            outline: none;
            border: 1px solid ${(props) => props.theme.white};
        }
    }
`;

interface Props {
    livingStart: Date;
    livingEnd: Date;
    handleStartDate: (data: Date) => void;
    handleFinishDate: (data: Date) => void;
    handleFormChange: (e: React.FormEvent<HTMLFormElement>) => void;
    handleImg: () => void;
    imgInput: React.MutableRefObject<HTMLInputElement>;
}

registerLocale("ko", ko);

const WriteForm = ({
    livingStart,
    livingEnd,
    handleNext,
    handleStartDate,
    handleFinishDate,
    handleFormChange,
    handleImg,
    imgInput,
}: Props & WriteClick) => {
    return (
        <Container>
            <Write>
                <Address />
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
                            selected={livingStart}
                            onChange={handleStartDate}
                            dateFormat="yy/MM/dd"
                            locale="ko"
                        />
                        <DatePicker
                            selected={livingEnd}
                            onChange={handleFinishDate}
                            dateFormat="yy/MM/dd"
                            locale="ko"
                        />
                    </Calendar>
                </div>
                <SelectForm handleFormChange={handleFormChange} />
                <BtnLink handleNext={handleNext} />
            </Write>
        </Container>
    );
};

export default WriteForm;
