import { useFormInput } from "@cooksmelon/event";
import { useScrollTop } from "hook";
import { useRouter } from "next/dist/client/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WriteForm from "../../components/write/WriteForm";
import { reviewWrite } from "redux/review";
import { RootState } from "redux";

const index = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const writeState = useSelector((state: RootState) => state.review.write);
    const { isSell } = useSelector((state: RootState) => state.review);
    // img 업로드
    const imgInput = useRef<HTMLInputElement>(null!);

    const handleImg = useCallback(() => {
        const input = imgInput.current;
        input.click();
        input.onchange = (e) => {
            const target = e.target as HTMLInputElement;
            const files = target.files;
            console.log(files);
        };
    }, []);

    // 작성 form data
    const [form, handleFormChange, setForm] = useFormInput();

    // 거주기간 날짜 선택
    const { livingStart, livingEnd } = writeState;

    // 시작 날짜
    const [startDate, setLivingStart] = useState(
        livingStart ? livingStart : new Date()
    );
    const handleStartDate = useCallback(
        (data: Date) => {
            setLivingStart(() => data);
            setForm({ ...form, livingStart: data });
        },
        [form]
    );

    // 끝나는 날짜
    const [endDate, setLivingEnd] = useState(
        livingEnd ? livingEnd : new Date()
    );
    const handleFinishDate = useCallback(
        (data: Date) => {
            setLivingEnd(() => data);
            setForm({ ...form, livingEnd: data });
        },
        [form]
    );

    // form이 변할 때마다 리덕스 데이터에 폼 데이터를 씌움
    // startDate, endDate를 설정한 이유는 초기 값을 설정하기 때문
    useEffect(() => {
        dispatch(
            reviewWrite({
                ...writeState,
                ...form,
                isSell,
                livingStart: startDate,
                livingEnd: endDate,
            })
        );
    }, [form]);

    const handleNext = useCallback(() => {
        router.push("/write/review");
    }, []);

    // 위로 이동
    useScrollTop();

    return (
        <WriteForm
            writeState={writeState}
            imgInput={imgInput}
            livingStart={livingStart}
            livingEnd={livingEnd}
            handleNext={handleNext}
            handleFormChange={handleFormChange}
            handleFinishDate={handleFinishDate}
            handleImg={handleImg}
            handleStartDate={handleStartDate}></WriteForm>
    );
};

export default index;
