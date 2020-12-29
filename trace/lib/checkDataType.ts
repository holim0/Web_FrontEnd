// key가 images라면 폼데이터에 추가하지 않기 위해 false를 반환
export const checkNotImg = (key: string): boolean => {
    if (key !== "images") {
        return true;
    } else {
        return false;
    }
};

export const checkDate = (key: string): boolean => {
    if (key.includes("Start") || key.includes("End")) {
        return true;
    }
    return false;
};

export const checkHasValue = (value: any): boolean => {
    if (value) {
        return true;
    }
    return false;
};
