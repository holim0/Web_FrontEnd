import { useScrollTop, useFormInput } from "hook";
import { useRouter } from "next/dist/client/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WriteForm from "../../components/write/WriteForm";
import { reviewWrite } from "Redux/review";
import { RootState } from "Redux";
import { message, Space } from "antd";
import Head from "next/head";

declare var daum: any;

const index = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const writeState = useSelector((state: RootState) => state.review.write);
    const { isSell } = useSelector((state: RootState) => state.review);

    // 작성 form data
    const [form, handleFormChange, setForm] = useFormInput();

    // 주소 검색
    const [address, setAddress] = useState("");
    const onAddress = useCallback(() => {
        if (process.browser) {
            new daum.Postcode({
                oncomplete: (data: any) => {
                    if (data.userSelectedType === "R") {
                    }
                    setAddress(data.jibunAddress);
                },
            }).open();
        }
    }, [address]);

    // 리액트 셀렉 값 저장
    const handleSelectForm = useCallback((value, action) => {
        setForm({ ...form, [action.name]: value.value });
    }, []);

    // img 업로드
    const imgInput = useRef<HTMLInputElement>(null!);
    const [saveImg, setSaveImg] = useState<string[]>(writeState.images);

    const handleImg = useCallback(() => {
        const input = imgInput.current;
        input.click();
        input.onchange = (e) => {
            const target = e.target as HTMLInputElement;
            const files = target.files as FileList;
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (progress) => {
                const { result } = progress.target as FileReader;
                setSaveImg([result as string, ...saveImg]);
            };
            reader.readAsDataURL(file);
        };
    }, [dispatch, saveImg]);

    // 올린 이미지 슬라이더
    const [countIdx, setCountIdx] = useState(1);

    const handleNextSlide = useCallback(() => {
        const max = saveImg.length || 1;
        if (max === countIdx) {
            return;
        }
        setCountIdx((prev) => (prev += 1));
    }, [saveImg, countIdx]);

    const handlePrevSlide = useCallback(() => {
        if (1 === countIdx) {
            return;
        }
        setCountIdx((prev) => (prev -= 1));
    }, [saveImg, countIdx]);

    // 이미지 삭제
    const handleDelImg = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            const { link } = e.currentTarget.dataset;
            setSaveImg(() => saveImg.filter((img) => img !== link));
        },
        [saveImg]
    );

    // img File 리덕스에 전송
    useEffect(() => {
        dispatch(
            reviewWrite({
                ...writeState,
                ...form,
                isSell,
                images: saveImg,
            })
        );
    }, [saveImg]);

    // 거주기간 날짜 선택
    const {
        livingStart,
        livingEnd,
        score,
        deposit,
        monthlyRent,
        area,
        rentType,
    } = writeState;

    // 시작 날짜
    const handleStartDate = useCallback(
        (data: Date) => {
            setForm({ ...form, livingStart: data });
        },
        [form]
    );

    // 끝나는 날짜
    const handleFinishDate = useCallback(
        (data: Date) => {
            setForm({ ...form, livingEnd: data });
        },
        [form]
    );

    // 별점 스코어 픽스
    const handleFix = useCallback(
        (e: React.MouseEvent<SVGElement, MouseEvent>) => {
            const { value } = e.currentTarget.dataset;
            setForm({ ...form, score: parseInt(value as string) });
        },
        [dispatch]
    );

    // form이 변할 때마다 리덕스 데이터에 폼 데이터를 씌움
    useEffect(() => {
        dispatch(
            reviewWrite({
                ...writeState,
                ...form,
                isSell,
            })
        );
    }, [form]);

    // validation

    const handleNext = useCallback(() => {
        if (score === 0) {
            return message.error("별점을 눌러주세요");
        }
        if (rentType !== "KEY_MONEY" && !monthlyRent) {
            return message.error("금액을 적어주세요");
        }
        if (!deposit) {
            return message.error("금액을 적어주세요");
        }
        if (!area) {
            return message.error("평수를 적어주세요");
        }
        router.push("/write/review");
    }, [score, message, deposit, monthlyRent, area]);

    // 위로 이동
    useScrollTop();

    return (
        <>
            <Head>
                <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
            </Head>
            <Space></Space>
            <WriteForm
                address={address}
                onAddress={onAddress}
                handleSelectForm={handleSelectForm}
                writeState={writeState}
                handleFix={handleFix}
                imgInput={imgInput}
                livingStart={livingStart}
                livingEnd={livingEnd}
                countIdx={countIdx}
                handleDelImg={handleDelImg}
                handleNext={handleNext}
                handleFormChange={handleFormChange}
                handleFinishDate={handleFinishDate}
                handleImg={handleImg}
                handleNextSlide={handleNextSlide}
                handlePrevSlide={handlePrevSlide}
                handleStartDate={handleStartDate}
            ></WriteForm>
        </>
    );
};

export default index;
