import { useFormInput } from "@cooksmelon/event";
import WriteReviewForm from "components/write/writeReview/WriteReviewForm";
import { useRouter } from "next/dist/client/router";
import React, { useCallback } from "react";

const Review = () => {
    const router = useRouter();

    // 폼을 작성합니다.
    const [form, handleFormChange] = useFormInput();

    console.log(form);
    // 폼을 제출합니다.
    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLButtonElement>) => {
            e.preventDefault();
        },
        []
    );

    // 이전 단계로 이동합니다.
    const handlePrev = useCallback(() => {
        router.back();
    }, []);

    return (
        <WriteReviewForm
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
            handlePrev={handlePrev}></WriteReviewForm>
    );
};

export default Review;
