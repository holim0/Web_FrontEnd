import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import { SelectComponent } from "./SelectComponent";
import BtnLink from "../common/write/Btn";
import { ReviewWrite, WriteClick } from "../../@types/interface";
import styled from "@emotion/styled";
import Address from "components/common/write/Address";
import { Container } from "styles/commonStyle";
import { css } from "@emotion/react";
import { ActionMeta } from "react-select";

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
    height: 400px;
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
    height: 400px;
    border: 1px solid ${(props) => props.theme.darkWhite};
    display: flex;
    position: relative;
    overflow: hidden;
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        object-fit: contain;
        height: 100%;
    }
`;

const Del = styled.button`
    all: unset;
    z-index: 55;
    cursor: pointer;
    padding: 3px 6px;
    border-radius: 12px;
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    position: absolute;
    top: 10px;
    left: 3px;
`;

const Btns = styled.button<Style>`
    all: unset;
    z-index: 55;
    cursor: pointer;
    padding: 3px 6px;
    border-radius: 12px;
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    opacity: 0.8;
    position: absolute;
    bottom: 10px;
    ${(props) =>
        props.next
            ? css`
                  right: 3px;
              `
            : css`
                  left: 3px;
              `}
`;

const Length = styled.div`
    z-index: 55;
    position: absolute;
    top: 10px;
    right: 0;
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    opacity: 0.8;
    padding: 3px 12px;
    border-radius: 12px;
`;

const Calendar = styled.div`
    display: flex;
    justify-content: center;
    .react-datepicker__header {
        background-color: ${(props) => props.theme.white};
    }
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

interface Style {
    next?: boolean;
}

/////////////////////////// 전체 타입 인터페이스 (이벤트) ///////////////////////////////////////////////
interface Props {
    writeState: ReviewWrite;
    livingStart: Date;
    livingEnd: Date;
    countIdx: number;
    address: string;
    onAddress: () => void;
    handleStartDate: (data: Date) => void;
    handleFinishDate: (data: Date) => void;
    // form 핸들 이벤트 //
    handleFormChange: (e: React.FormEvent<HTMLFormElement>) => void;
    handleImg: () => void;
    handleNextSlide: () => void;
    handlePrevSlide: () => void;
    imgInput: React.MutableRefObject<HTMLInputElement>;
    handleFix: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
    // select 핸들 이벤트 //
    handleSelectForm: (value: any, action: ActionMeta<any>) => void;
    handleDelImg: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

registerLocale("ko", ko);

const WriteForm = ({
    address,
    onAddress,
    writeState,
    livingStart,
    livingEnd,
    countIdx,
    handleNext,
    handleStartDate,
    handleFinishDate,
    handleFormChange,
    handleImg,
    handleNextSlide,
    handlePrevSlide,
    imgInput,
    handleFix,
    handleSelectForm,
    handleDelImg,
}: Props & WriteClick) => {
    const { images } = writeState;
    return (
        <Container>
            <Write>
                <Address address={address} onAddress={onAddress} />
                <AddImg>
                    <ImgBox onClick={handleImg}>
                        <div>+</div>
                    </ImgBox>
                    <input ref={imgInput} type="file" accept="image/*" hidden />
                    <ShowImg>
                        {images.length > 0 && (
                            <>
                                <Del
                                    data-link={images[countIdx - 1]}
                                    onClick={handleDelImg}
                                >
                                    삭제
                                </Del>
                                {countIdx !== 1 && (
                                    <Btns
                                        type="button"
                                        onClick={handlePrevSlide}
                                    >
                                        이전
                                    </Btns>
                                )}
                                <div>
                                    <img
                                        src={images[countIdx - 1]}
                                        alt="올린이미지"
                                    />

                                    <Length>
                                        {countIdx}/{images.length}
                                    </Length>
                                </div>
                                {images.length >= 2 &&
                                    countIdx !== images.length && (
                                        <Btns
                                            next={true}
                                            type="button"
                                            onClick={handleNextSlide}
                                        >
                                            다음
                                        </Btns>
                                    )}
                            </>
                        )}
                    </ShowImg>
                </AddImg>

                <div>
                    <SubTitle>거주기간</SubTitle>
                    <Calendar>
                        <DatePicker
                            selected={livingStart || new Date()}
                            onChange={handleStartDate}
                            dateFormat="yy/MM/dd"
                            locale="ko"
                            required
                        />
                        <DatePicker
                            selected={livingEnd || new Date()}
                            onChange={handleFinishDate}
                            dateFormat="yy/MM/dd"
                            locale="ko"
                            required
                        />
                    </Calendar>
                </div>
                <SelectComponent
                    handleFix={handleFix}
                    writeState={writeState}
                    handleFormChange={handleFormChange}
                    handleSelectForm={handleSelectForm}
                />
                <BtnLink handleNext={handleNext} />
            </Write>
        </Container>
    );
};

export default WriteForm;
