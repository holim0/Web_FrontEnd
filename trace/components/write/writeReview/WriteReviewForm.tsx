import { ReviewWrite, WriteClick } from "../../../@types/interface";
import React from "react";
import BtnLink from "../../common/write/Btn";
import styled from "@emotion/styled";
import { SubTitle } from "../WriteForm";
import { Container } from "styles/commonStyle";
import { css, keyframes } from "@emotion/react";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import { Submit } from "../../../@types/type";

const Write = styled.div`
    max-width: 1000px;
    padding: 12px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    background: ${(props) => props.theme.white};
`;

const TextArea = styled.textarea`
    width: 500px;
    min-height: 300px;
    padding: 8px;
    resize: none;
    outline: none;
    color: ${(props) => props.theme.gray};
    border-radius: 10px;
    border: ${(props) => props.theme.darkWhite};
    background-color: rgba(150, 204, 251, 0.2);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Release = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input {
        all: unset;
        margin: 12px 0;
        border: 1px solid ${(props) => props.theme.darkWhite};
        padding: 6px 12px;
        font-size: 12px;
        text-align: left;
    }
`;

const ToggleBtn = styled.button<styled>`
    all: unset;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 12px;
    padding: 6px 12px;
    border: 1px solid #dbdbdb;
    color: ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.white};

    ${(props) =>
        props.toggle &&
        css`
            color: #ffffff;
            background-color: #1da1f2;
        `}
`;

const bounce = keyframes`
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
`;

const ToRelease = styled.div`
    display: flex;
    flex-direction: column;
    animation: ${bounce} 500ms forwards;
`;

const Calendar = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
    input {
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

// 스타일 인터페이스
interface styled {
    toggle: boolean;
}

interface Props extends WriteClick {
    handleFormChange: (e: React.FormEvent<HTMLFormElement>) => void;
    handleToggle: () => void;
    handleStartDate: (date: Date) => void;
    handleFinishDate: (date: Date) => void;
    handleSubmit: Submit;
    toggle: boolean;
    durationStart: Date;
    durationEnd: Date;
    writeReview: ReviewWrite;
    handleOpenModal: any;
}

registerLocale("ko", ko);

const WriteReviewForm = ({
    handleSubmit,
    handlePrev,
    handleFormChange,
    writeReview,
    toggle,
    handleToggle,
    durationStart,
    durationEnd,
    handleFinishDate,
    handleStartDate,
    handleOpenModal,
}: Props) => {
    const { option, nearBy, trueStory, contact } = writeReview;
    return (
        <Container>
            <Write>
                <form onSubmit={handleSubmit} onChange={handleFormChange}>
                    <SubTitle>⚙️옵션</SubTitle>
                    <TextArea
                        name="option"
                        defaultValue={option}
                        placeholder="냉장고, 책상 등 방에 포함된 옵션을 작성해 주세요."
                    ></TextArea>
                    <SubTitle>ℹ️주변정보</SubTitle>
                    <TextArea
                        placeholder="교통, 편의시설, 외부소음, 음식점, 술집, 학교와의 거리 등을 입력해 주세요."
                        defaultValue={nearBy}
                        name="nearBy"
                    ></TextArea>
                    <SubTitle>🔉마음의 소리</SubTitle>
                    <TextArea
                        name="trueStory"
                        defaultValue={trueStory}
                        placeholder="솔직한 후기를 가감없이 말해주세요."
                    ></TextArea>

                    <Release>
                        <ToggleBtn
                            type="button"
                            onClick={handleToggle}
                            toggle={toggle}
                        >
                            방을 내놓을까요? {toggle ? "❌" : "✔️"}
                        </ToggleBtn>
                        {toggle && (
                            <ToRelease>
                                <input
                                    type="text"
                                    name="contact"
                                    defaultValue={contact}
                                    required={toggle}
                                    placeholder="연락가능한 수단을 입력해 주세요 (번호, 카톡 아이디 등)"
                                />
                                <SubTitle>유지기간</SubTitle>
                                <Calendar>
                                    <DatePicker
                                        selected={durationStart || new Date()}
                                        onChange={handleStartDate}
                                        dateFormat="yy/MM/dd"
                                        locale="ko"
                                        required={toggle}
                                    />
                                    <DatePicker
                                        selected={durationEnd || new Date()}
                                        onChange={handleFinishDate}
                                        dateFormat="yy/MM/dd"
                                        locale="ko"
                                        required={toggle}
                                    />
                                </Calendar>
                            </ToRelease>
                        )}
                    </Release>
                    <BtnLink
                        handleSubmit={handleSubmit}
                        handlePrev={handlePrev}
                        handleOpenModal={handleOpenModal}
                    />
                </form>
            </Write>
        </Container>
    );
};

export default WriteReviewForm;
