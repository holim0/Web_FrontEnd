import { Modal } from "antd";
import WriteReviewForm from "components/write/writeReview/WriteReviewForm";
import { useScrollTop, useFormInput, useToggle } from "hook";
import { useRouter } from "next/dist/client/router";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "Redux";
import { reviewWrite, reviewWriteReq, resetState } from "Redux/review";

const Review = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const writeReview = useSelector((state: RootState) => state.review.write);
    const { isSell, isSuccess, isFail } = useSelector(
        (state: RootState) => state.review
    );

    // 폼을 작성합니다.
    const [form, handleFormChange, setForm] = useFormInput();

    // 방을 내놓은 버튼 토글
    const [toggle, handleToggle] = useToggle(isSell);

    // 유지 기간
    const { durationStart, durationEnd } = writeReview;
    const handleStartDate = useCallback(
        (data: Date) => {
            setForm({ ...form, durationStart: data });
        },
        [dispatch]
    );

    const handleFinishDate = useCallback(
        (data: Date) => {
            setForm({ ...form, durationEnd: data });
        },
        [dispatch]
    );

    // 폼을 리덕스에 저장합니다.
    useEffect(() => {
        dispatch(
            reviewWrite({
                ...writeReview,
                ...form,
                isSell: toggle,
            })
        );
    }, [form]);

    // 만약 방을 내놓으면, isSell에 상태를 저장합니다
    useEffect(() => {
        dispatch(
            reviewWrite({
                ...writeReview,
                isSell: toggle,
            })
        );
    }, [toggle]);

    // 폼을 제출합니다.
    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = useCallback(
        (
            e:
                | React.FormEvent<HTMLButtonElement | HTMLFormElement>
                | React.MouseEvent<HTMLElement, MouseEvent>
        ) => {
            e.preventDefault();

            if (openModal) {
                setOpenModal(false);
            }

            dispatch(reviewWriteReq({ writeReview, isSell }));
        },
        [openModal]
    );

    const handleCancel = useCallback(() => {
        setOpenModal(() => false);
    }, []);

    const handleOpenModal = () => {
        setOpenModal(true);
    };
    // 이전 단계로 이동합니다.
    const handlePrev = useCallback(() => {
        router.back();
    }, []);

    // 렌더링 시 맨 위로 이동
    useScrollTop();

    useEffect(() => {
        if (isSuccess) {
            console.log(isSuccess);
            alert("저장 성공!");
            dispatch(resetState());
            router.push("/");
        } else if (isFail) {
            alert("저장에 실패했습니다. 다시 시도해주세요");
        }
    }, [isSuccess, isFail]);

    return (
        <>
            <Modal
                visible={openModal}
                onOk={handleSubmit}
                onCancel={handleCancel}
                okText="예"
                cancelText="아니요"
            >
                <p>저장 하시겠습니까?</p>
            </Modal>
            <WriteReviewForm
                toggle={isSell}
                writeReview={writeReview}
                durationStart={durationStart}
                durationEnd={durationEnd}
                handleFinishDate={handleFinishDate}
                handleStartDate={handleStartDate}
                handleToggle={handleToggle}
                handleFormChange={handleFormChange}
                handleSubmit={handleSubmit}
                handlePrev={handlePrev}
                handleOpenModal={handleOpenModal}
            ></WriteReviewForm>
        </>
    );
};

export default Review;
