import { useFormInput } from "@cooksmelon/event";
import { useScrollTop } from "hook";
import { useRouter } from "next/dist/client/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import WriteForm from "../../components/write/WriteForm";
import { reviewWrite } from "redux/review";

const index = () => {
    const router = useRouter();
    const dispatch = useDispatch();
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
    const [form, handleFormChange] = useFormInput();

    useEffect(() => {
        dispatch(reviewWrite(form));
    }, [form]);

    // 거주기간 날짜 선택
    const [livingStart, setLivingStart] = useState(new Date());
    const handleStartDate = useCallback(
        (data: Date) => {
            setLivingStart(() => data);
            dispatch(reviewWrite({ livingStart: data }));
        },
        [dispatch]
    );

    const [livingEnd, setLivingEnd] = useState(new Date());
    const handleFinishDate = useCallback(
        (data: Date) => {
            setLivingEnd(() => data);
            dispatch(reviewWrite({ livingEnd: data }));
        },
        [dispatch]
    );

    const handleNext = useCallback(() => {
        router.push("/write/review");
    }, []);

    // 위로 이동
    useScrollTop();

    return (
        <WriteForm
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
