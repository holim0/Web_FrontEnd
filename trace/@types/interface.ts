import { OptionTypeBase, ValueType } from "react-select";
import { Submit } from "./type";

// 리뷰 글쓰기 클릭버튼
export interface WriteClick {
    handleNext?: () => void;
    handlePrev?: () => void;
    handleSubmit?: Submit;
}

// 리뷰 글쓰기 데이터
export interface ReviewWrite {
    roomNumber: string;
    images: string[];
    rentType: string;
    deposit: number;
    monthlyRent: number;
    score: number;
    livingStart: Date | null | undefined;
    livingEnd: Date | null | undefined;
    remodeled: boolean;
    waterPressure: string;
    lighting: string;
    frozen: string;
    bug: string | ValueType<OptionTypeBase, false>;
    noise: string | ValueType<OptionTypeBase, false>;
    option: string;
    nearBy: string;
    trueStory: string;
    contact: string;
    durationStart: Date | null | undefined;
    durationEnd: Date | null | undefined;
}
