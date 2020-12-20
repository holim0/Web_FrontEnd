import { WriteClick } from "../../../@types/interface";
import React from "react";
import BtnLink from "../../common/write/Btn";
import styled from "@emotion/styled";
import Address from "components/common/write/Address";
import { SubTitle } from "../WriteForm";
import { Container } from "styles/commonStyle";

const Write = styled.div`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    background: #ffffff;
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

interface Props extends WriteClick {
    handleFormChange: (e: React.FormEvent<HTMLFormElement>) => void;
}

const WriteReviewForm = ({
    handleSubmit,
    handlePrev,
    handleFormChange,
}: Props) => {
    return (
        <Container>
            <Write>
                <Address />
                <form onChange={handleFormChange}>
                    <SubTitle>옵션</SubTitle>
                    <TextArea name="option"></TextArea>
                    <SubTitle>주변정보</SubTitle>
                    <TextArea name="info"></TextArea>
                    <SubTitle>마음의 소리</SubTitle>
                    <TextArea name="voice"></TextArea>

                    <div>
                        <label htmlFor="release">방을 내놓을까요?</label>
                        <input
                            type="checkbox"
                            id="release"
                            name="release"></input>
                    </div>
                </form>
                <BtnLink handleSubmit={handleSubmit} handlePrev={handlePrev} />
            </Write>
        </Container>
    );
};

export default WriteReviewForm;
