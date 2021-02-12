import { OptionTypeBase, ValueType } from "react-select";
import { Submit } from "./type";
import { OptionType } from "antd/lib/select";

// 리뷰 글쓰기 클릭버튼
export interface WriteClick {
    handleNext?: () => void;
    handlePrev?: () => void;
    handleSubmit?: Submit;
    handleOpenModal?: () => void;
}

// 리뷰 글쓰기 데이터
export interface ReviewWrite {
    roomNumber: string;
    buildingId: number | null;
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

export interface ReviewSubmit {
    isSell: boolean;
    writeReview: ReviewWrite;
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

//알림창 타입

export interface AlertType {
    isLoginDone: boolean;
    isLoginFail: boolean;
    LogoutSuccess: boolean;
    LogoutFail: boolean;
    isSignUpDone: boolean;
    isSignUpFail: boolean;
    isMember: boolean;
    notMember: boolean;
    emailSend: boolean;
    emailVerifyDone: boolean;
    emailVerifyFail: boolean;
    idDouble: boolean;
    idNotDouble: boolean;
    alertOpen: boolean;
}

// 건물 타입
export interface BuildingType {
    id: number | null;
    location: string | null;
    address: string | null;
    lotNumber: string | null;
    oneRoomPrice: number | null;
    completionDate: string | null;
}
