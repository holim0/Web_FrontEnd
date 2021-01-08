import { ReviewSubmit, ReviewWrite } from "../@types/interface";
import { checkNotImg, checkDate, checkHasValue } from "./checkDataType";
import { dateValid } from "./dateToString";

// 이미지 baseURL들을 File형식으로 바꿔 FORMDATA에 넣기 위해 작업하는 함수들입니다~~
const changeToFile = async (
    postToServer: FormData,
    img: string[],
    fileName: string
) => {
    for (let i = 0; i < img.length; i++) {
        const res: Response = await fetch(img[i]);
        const blob: Blob = await res.blob();
        const file = new File([blob], fileName, { type: "image/png" });
        postToServer.append("images", file);
    }
};

// reviewSaga에서 payload를 받아 폼데이터에 집어넣습니다!
export const dataUrlToFormData = async (
    payload: ReviewSubmit,
    fileName: string
) => {
    const postToServer = new FormData();
    const { images } = payload.writeReview;
    const appendFormData: any = payload.writeReview;

    if (images) {
        await changeToFile(postToServer, images, fileName);
    }

    for (const i in appendFormData) {
        // images라면 폼데이터에 담지 않음.
        if (checkNotImg(i)) {
            checkDate(i, payload.isSell) // 방을 내놓으면 durationStart,End를 보내고 그게 아니라면 보내지 않습니다.
                ? // Date 형식을 string 형식으로 변환해 담음
                  postToServer.append(i, dateValid(appendFormData[i]) as string)
                : // 그 외에, 값이 존재해야 폼데이터에 담음
                  checkHasValue(appendFormData[i]) &&
                  postToServer.append(i, appendFormData[i]);
        }
    }

    return postToServer;
};
