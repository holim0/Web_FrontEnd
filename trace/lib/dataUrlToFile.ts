import { ReviewWrite } from "../@types/interface";
import { dateValid } from "./dateToString";

// 폼데이터에 이미지 넣기
const changeToFile = async (fd: FormData, img: string[], fileName: string) => {
    for (let i = 0; i < img.length; i++) {
        const res: Response = await fetch(img[i]);
        const blob: Blob = await res.blob();
        const file = new File([blob], fileName, { type: "image/png" });
        fd.append("image", file);
    }
};

// 폼데이터에 페이로드 다 넣기
export const dataUrlToFile = async (payload: ReviewWrite, fileName: string) => {
    const { images } = payload;
    const fd = new FormData();
    await changeToFile(fd, images, "image");
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
