import { useFormInput, useToggle } from "@cooksmelon/event";
import WriteReviewForm from "components/write/writeReview/WriteReviewForm";
import { useRouter } from "next/dist/client/router";
import React, { useCallback, useState } from "react";

const Review = () => {
    const router = useRouter();

    // 폼을 작성합니다.
    const [form, handleFormChange] = useFormInput();

    // 폼을 제출합니다.
    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLButtonElement>) => {
            e.preventDefault();
        },
        []
    );

    // 방을 내놓은 버튼 토글
    const [toggle, handleToggle] = useToggle(false);

    // 유지 기간
    const [persistDate, setPresistDate] = useState(new Date());

    const handelSelectDate = useCallback((data: Date) => {
        setPresistDate(() => data);
    }, []);

    // 이전 단계로 이동합니다.
    const handlePrev = useCallback(() => {
        router.back();
    }, []);

    return (
        <WriteReviewForm
            toggle={toggle}
            persistDate={persistDate}
            handelSelectDate={handelSelectDate}
            handleToggle={handleToggle}
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
            handlePrev={handlePrev}></WriteReviewForm>
    );
};

export default Review;
