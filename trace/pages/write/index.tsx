import { useFormInput } from "@cooksmelon/event";
import { useScrollTop } from "hook";
import { useRouter } from "next/dist/client/router";
import React, { useCallback, useRef, useState } from "react";
import WriteForm from "../../components/write/WriteForm";

const index = () => {
    const router = useRouter();

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

    // 거주기간 날짜 선택
    const [startDate, setStartDate] = useState(new Date());
    const handleStartDate = useCallback((data: Date) => {
        setStartDate(() => data);
    }, []);

    const [finishDate, setFinishDate] = useState(new Date());
    const handleFinishDate = useCallback((data: Date) => {
        setFinishDate(() => data);
    }, []);

    // 작성 form data
    const [form, handleFormChange] = useFormInput();

    console.log(form);

    const handleNext = useCallback(() => {
        router.push("/write/review");
    }, []);

    // 위로 이동
    useScrollTop();

    return (
        <WriteForm
            imgInput={imgInput}
            startDate={startDate}
            finishDate={finishDate}
            handleNext={handleNext}
            handleFormChange={handleFormChange}
            handleFinishDate={handleFinishDate}
            handleImg={handleImg}
            handleStartDate={handleStartDate}></WriteForm>
    );
};

export default index;
