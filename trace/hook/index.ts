import { useCallback, useEffect, useState } from "react";

// 맨 위로 올리는 훅입니다
export const useScrollTop = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
};

export const useFormInput = () => {
    const [form, setForm] = useState({});
    const onChange = useCallback(
        (e: React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
            const { name, value } = e.target as HTMLInputElement;
            setForm({ ...form, [name]: value });
        },
        [form]
    );

    return [form, onChange, setForm] as const;
};

export const useToggle = (boolean: boolean) => {
    const [toggle, setToggle] = useState<boolean>(boolean);

    const onClick = useCallback(() => {
        setToggle((prev: boolean) => !prev);
    }, []);

    return [toggle, onClick] as const;
};

export const useFind = () => {
    const [findData, setFindData] = useState<DOMStringMap>();

    const onClick = useCallback(
        (
            e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
        ) => {
            setFindData(e.currentTarget.dataset);
        },
        []
    );

    return [findData, onClick] as const;
};
