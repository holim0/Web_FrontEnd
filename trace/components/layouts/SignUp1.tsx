import React, { useState, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import MainLogo from "assets/images/MainLogo.png";
import Button from "@material-ui/core/Button";
import Prefer from "assets/images/Prefer.png";
import { Container, LogoImg } from "./Login";
import Select, { ValueType, OptionTypeBase } from "react-select";
import Login from "./Login";
import SignUp2 from "./SignUp2";
import { preferenceWrite } from "Redux/user";

interface PreferType {
    value: string | never;
    label: string | never;
}

const Comment = styled.div`
    margin-top: 15px;
    color: #707070;
    text-align: center;
    font-size: ${(props) => props.theme.xls};
`;

const SelectContainer = styled(Select)`
    width: 400px;
    margin: 50px auto;
`;

const BtnContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    position: absolute;
    bottom: 100px;
`;

const PreferOptions: PreferType[] = [
    { value: "SUNNY", label: "# 햇살가득" },
    { value: "NO_BUG", label: "# 벌레_없어요" },
    { value: "QUIET", label: "# 거의_독서실" },
    { value: "LARGE", label: "# 내방크기_운동장" },
    { value: "CHEAP", label: "# 저렴해요" },
];

const SignUp1 = () => {
    // 이전, 다음 컨트롤하는 state
    const [nextVal, setNextVal] = useState(false);

    const [preVal, setPreVal] = useState(false);

    //////////////////////////////////////////////////////////////////////////////////////

    // select value 저장

    const [curValue, setCurValue] = useState([]);

    // 취향 선택 핸들러
    const handleValue = (e: {
        map: (arg0: (x: any) => any) => React.SetStateAction<never[]>;
    }) => {
        setCurValue(Array.isArray(e) ? e.map((x) => x.value) : []);
    };

    //////////////////////////////////////////////////////////////////////////////////////////
    const dispatch = useDispatch();

    // 취향 선택 후 다음 버튼을 누르면 디스패치.
    const dispatchSelect = () => {
        dispatch(preferenceWrite(curValue));
        setNextVal(true);
    };

    if (preVal) {
        return <Login />;
    }
    if (nextVal) {
        return <SignUp2 />;
    }

    return (
        <Container>
            <LogoImg src={MainLogo}></LogoImg>
            <img src={Prefer} style={{ width: "170px", margin: "0 auto" }} />
            <Comment>#가장_중요한_2가지_선택하기</Comment>
            <SelectContainer
                isMulti
                options={PreferOptions}
                value={PreferOptions.filter((obj) =>
                    curValue.includes(obj.value)
                )}
                onChange={handleValue}
            ></SelectContainer>
            <BtnContainer>
                <Button
                    style={{ fontSize: "24px" }}
                    onClick={() => setPreVal(true)}
                >
                    이전
                </Button>
                <Button style={{ fontSize: "24px" }} onClick={dispatchSelect}>
                    다음
                </Button>
            </BtnContainer>
        </Container>
    );
};

export default SignUp1;
