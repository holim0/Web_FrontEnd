// 이미지 baseURL들을 File형식으로 바꿔 FORMDATA에 넣기 위해 작업하는 함수들입니다~~

import { ReviewWrite } from "../@types/interface";
import { dateValid } from "./dateToString";

// 이미지 baseURL들을 File형식으로 바꿔 FORMDATA에 넣기 위해 작업하는 함수들입니다~~
const changeToFile = async (fd: FormData, img: string[], fileName: string) => {
    for (let i = 0; i < img.length; i++) {
        const res: Response = await fetch(img[i]);
        const blob: Blob = await res.blob();
        const file = new File([blob], fileName, { type: "image/png" });
        fd.append("image", file);
    }
};

// reviewSaga에서 payload를 받아 폼데이터에 집어넣습니다!
export const dataUrlToFormData = async (
    payload: ReviewWrite,
    fileName: string
) => {
    const { images } = payload;
    const fd = new FormData();
    await changeToFile(fd, images, fileName);
    fd.append(
        "data",
        JSON.stringify({
            ...payload,
            livingStart: dateValid(payload.livingStart),
            livingEnd: dateValid(payload.livingEnd),
            durationStart: dateValid(payload.durationStart),
            durationEnd: dateValid(payload.durationStart),
            images: payload.images?.filter((f) => f === "reset"),
        })
    );

    return fd;
};
