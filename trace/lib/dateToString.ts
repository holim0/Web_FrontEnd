// 받은 데이터를 무조건 yyyy-mm-dd 형식으로 리턴하기 위해 만든 함수 파일입니다~~
export const dateToString = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const days = date.getDate();

    const stringDate = `${year}-${month > 9 ? month : `0${month}`}-${
        days > 9 ? days : `0${days}`
    }`;

    return stringDate;
};

// 데이터 타입체크, null이면 오늘날짜로 교체합니다.
export const dateValid = (
    date: Date | null | undefined
): string | null | undefined => {
    if (date === undefined) {
        return;
    }
    if (date === null) {
        const newDate = dateToString(new Date());
        return newDate;
    }
    const newDate = dateToString(date as Date);
    return newDate;
};
