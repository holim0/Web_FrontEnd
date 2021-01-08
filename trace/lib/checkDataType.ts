// key가 images라면 폼데이터에 추가하지 않기 위해 false를 반환
export const checkNotImg = (key: string): boolean => {
    const results = key !== "images" ? true : false;
    return results;
};

// 시작 날짜와 종료 날짜를 보내기 위해 검증합니다. isSell은 방을 내놓은 여부입니다. 방을 내놓으면 duration이 전송됩니다.
export const checkDate = (key: string, isSell: boolean): boolean => {
    if (key === "durationStart" || key === "durationEnd") {
        return isSell;
    }
    return key === "livingStart" || key === "livingEnd" ? true : false;
};

// 값이 있는지 체크합니다. 없으면 보내는 formData에 넣지 않습니다.
export const checkHasValue = (value: any): boolean => {
    const results = value ? true : false;
    return results;
};
