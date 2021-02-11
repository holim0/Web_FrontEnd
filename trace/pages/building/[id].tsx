import React, { useEffect, useState, useCallback } from "react";
import Building from "components/Building/BuildingDetail";
import { useRouter } from "next/dist/client/router";
import { RootState } from "Redux";
import { useSelector, useDispatch } from "react-redux";
import { buildingReviewReq } from "Redux/buildingReview";

export default () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [curBuilding, setCurbuilding] = useState(null);
    const { isLoading, mainContent } = useSelector(
        (state: RootState) => state.building
    );

    const searchBuilding = useSelector(
        (state: RootState) => state.Search.searchResult
    );

    const { reviewList } = useSelector(
        (state: RootState) => state.buildingReview
    );
    const curid = Number(router.query.id);
    const getCurbuildingInfo = useCallback(() => {
        if (mainContent) {
            const curInfo = mainContent.find(({ id }: any) => id === curid);
            setCurbuilding(curInfo);
        } else {
            if (searchBuilding && searchBuilding.length) {
                setCurbuilding(searchBuilding[0]);
            }
        }
    }, [mainContent, curid, searchBuilding]);

    useEffect(() => {
        getCurbuildingInfo();
    }, [mainContent, searchBuilding, curBuilding]);

    useEffect(() => {
        dispatch(buildingReviewReq(curid));
    }, [curid]);

    return (
        <Building
            isLoading={isLoading}
            curBuilding={curBuilding}
            review={reviewList}
        />
    );
};
