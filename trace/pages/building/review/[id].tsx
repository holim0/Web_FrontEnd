import ReviewDetail from "components/Building/ReviewDetail";
import React, { useCallback, useRef } from "react";
import { Container } from "styles/commonStyle";
import styled from "@emotion/styled";

const Container2 = styled(Container)`
    background: ${(props) => props.theme.white};
`;

const index = () => {
    const slider = useRef<any>(null);

    const handleNext = useCallback(() => {
        slider.current.next();
    }, []);

    const handlePrev = useCallback(() => {
        slider.current.prev();
    }, []);

    return (
        <Container2>
            <ReviewDetail
                slider={slider}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
        </Container2>
    );
};

export default index;
