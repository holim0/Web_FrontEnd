import { Skeleton } from "antd";
import React from "react";
import styled from "@emotion/styled";
import { Box } from "./BuildingDetail";
import BuildingSkeleton from "./BuildingSkeleton";

const SkeletonDetailLoading = styled.div`
    max-width: 850px;
    width: 100%;
    margin: 24px auto;
`;

const BuildingDetailSkeleton = () => {
    return (
        <Box>
            <BuildingSkeleton />

            <SkeletonDetailLoading>
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
            </SkeletonDetailLoading>
        </Box>
    );
};

export default BuildingDetailSkeleton;
