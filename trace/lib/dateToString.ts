// 받은 데이터를 무조건 yyyy-mm-dd 형식으로 리턴
export const dateToString = (date?: Date): string => {
    const filter = date
        ? date.toLocaleDateString().replace(/\. /g, "-")
        : new Date().toLocaleDateString().replace(/\. /g, "-");

    // yyyy-MM-dd 형식을 위해
    const fixDate = filter.split("-");
    for (let i = 0; i < fixDate.length; i++) {
        fixDate[i].length < 2 && `0${fixDate[i]}`;
    }
    const stringDate = filter.substr(0, filter.length - 1);
    return stringDate;
};

// 데이터 타입체크
export const dateValid = (date: Date | null | undefined): string => {
    if (typeof date === null || typeof date === undefined) {
        const newDate = dateToString();
        return newDate;
    }
    const newDate = dateToString(date as Date);
    return newDate;
};
