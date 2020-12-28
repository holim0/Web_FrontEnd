import { OptionTypeBase, ValueType } from "react-select";
import { Submit } from "./type";
import { OptionType } from "antd/lib/select";

// 리뷰 글쓰기 클릭버튼
export interface WriteClick {
    handleNext?: () => void;
    handlePrev?: () => void;
    handleSubmit?: Submit;
}

// 리뷰 글쓰기 데이터
export interface ReviewWrite {
    roomNumber: string;
    buildingId: number;
    images: string[];
    rentType: string;
    deposit: number;
    area: number;
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

//유저 정보 타입.
export interface UserType {
    userId: string;
    password: string;
    email: string;
    name: string;
    phoneNum: string;
    preferences: string[];
    accessToken: string;
    refreshToken: string;
}

//회원가입 타입
export interface SignUpType {
    isloading: boolean;
    isMember: boolean;
    isDouble: boolean;
    error: any;
    verifyNum: string;
}

// 로그인 타입
export interface LoginType {
    userId: string;
    password: string;
    isloading: boolean;
    error: any;
    isLoginSuccess: boolean;
}
