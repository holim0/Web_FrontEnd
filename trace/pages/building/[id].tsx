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
    const { isLoading, content } = useSelector(
        (state: RootState) => state.building
    );

    const { reviewList } = useSelector(
        (state: RootState) => state.buildingReview
    );
    const curid = Number(router.query.id);
    const getCurbuildingInfo = useCallback(() => {
        if (content) {
            const curInfo = content.find(({ id }: any) => id === curid);
            setCurbuilding(curInfo);
        }
    }, [content, curid]);

    useEffect(() => {
        getCurbuildingInfo();
        dispatch(buildingReviewReq(curid));
    }, [getCurbuildingInfo, content, curid]);

    return (
        <Building
            isLoading={isLoading}
            curBuilding={curBuilding}
            review={reviewList}
        />
    );
};
