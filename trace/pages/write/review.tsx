import { useFormInput, useToggle } from "@cooksmelon/event";
import WriteReviewForm from "components/write/writeReview/WriteReviewForm";
import { useScrollTop } from "hook";
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
    const handleStartDate = useCallback((data: Date) => {
        setPresistDate(() => data);
    }, []);

    const [finishDate, setFinishDate] = useState(new Date());
    const handleFinishDate = useCallback((data: Date) => {
        setFinishDate(() => data);
    }, []);

    // 이전 단계로 이동합니다.
    const handlePrev = useCallback(() => {
        router.back();
    }, []);

    // 렌더링 시 맨 위로 이동
    useScrollTop();

    return (
        <WriteReviewForm
            toggle={toggle}
            persistDate={persistDate}
            finishDate={finishDate}
            handleFinishDate={handleFinishDate}
            handleStartDate={handleStartDate}
            handleToggle={handleToggle}
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
            handlePrev={handlePrev}></WriteReviewForm>
    );
};

export default Review;
