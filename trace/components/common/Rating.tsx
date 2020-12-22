import React, { useCallback, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { BsStarFill } from "react-icons/bs";

const Stars = styled.div`
    display: flex;
    align-items: center;
    svg {
        cursor: pointer;
        margin-right: 3px;
    }
`;

interface Props {
    handleFix: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
    score: number;
}

const Rating = ({ score, handleFix }: Props) => {
    const stars = useRef(null);

    // 만약 스코어가 없을시 마우스 접근 반응.
    const onMouseOver = useCallback(
        (e: React.MouseEvent<SVGElement, MouseEvent>) => {
            if (score > 0) {
                return;
            }
            const { value } = e.currentTarget.dataset;
            const { childNodes }: any = stars.current;
            childNodes.forEach((star: any) =>
                parseInt(star.dataset.value) <= parseInt(value as string)
                    ? (star.attributes.fill.value = "#888888")
                    : (star.attributes.fill.value = "#dbdbdb")
            );
        },
        [score]
    );

    // 스코어가 설정됐을 때
    useEffect(() => {
        const { childNodes }: any = stars.current;
        childNodes.forEach((star: any) =>
            parseInt(star.dataset.value) <= score
                ? (star.attributes.fill.value = "#FBE574")
                : (star.attributes.fill.value = "#dbdbdb")
        );
    }, [score, stars]);

    return (
        <Stars ref={stars}>
            <BsStarFill
                data-value="1"
                onMouseOver={onMouseOver}
                onClick={handleFix}
                size={24}
            />
            <BsStarFill
                data-value="2"
                onMouseOver={onMouseOver}
                onClick={handleFix}
                size={24}
            />
            <BsStarFill
                data-value="3"
                onMouseOver={onMouseOver}
                onClick={handleFix}
                size={24}
            />
            <BsStarFill
                data-value="4"
                onMouseOver={onMouseOver}
                onClick={handleFix}
                size={24}
            />
            <BsStarFill
                data-value="5"
                onMouseOver={onMouseOver}
                onClick={handleFix}
                size={24}
            />
        </Stars>
    );
};

export default Rating;
