import React from "react";
import styled from "@emotion/styled";
import { Skeleton } from "antd";

const SkeletonBuildingLoading = styled.div`
    max-width: 850px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    height: 350px;
    div {
        margin: 14px;
    }
`;

const BuildingSkeleton = () => {
    return (
        <>
            <SkeletonBuildingLoading>
                <Skeleton.Image />
                <Skeleton.Input style={{ width: 200 }} active size="small" />
                <Skeleton.Input style={{ width: 200 }} active size="small" />
                <Skeleton.Input style={{ width: 200 }} active size="small" />
            </SkeletonBuildingLoading>
        </>
    );
};

export default BuildingSkeleton;
