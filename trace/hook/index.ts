import { useEffect } from "react";

// 맨 위로 올리는 훅입니다
export const useScrollTop = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
};
