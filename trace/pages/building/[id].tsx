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

    const searchBuilding = useSelector(
        (state: RootState) => state.Search.searchResult
    );

    const { reviewList } = useSelector(
        (state: RootState) => state.buildingReview
    );
    const curid = Number(router.query.id);
    const getCurbuildingInfo = useCallback(() => {
        if (content) {
            console.log("함수 내2");
            const curInfo = content.find(({ id }: any) => id === curid);
            setCurbuilding(curInfo);
        } else {
            if (searchBuilding && searchBuilding.length) {
                console.log("함수 내");
                console.log(searchBuilding);
                setCurbuilding(searchBuilding[0]);
            }
        }
    }, [content, curid, searchBuilding]);

    useEffect(() => {
        getCurbuildingInfo();
    }, [content, searchBuilding, curBuilding]);

    useEffect(() => {
        dispatch(buildingReviewReq(curid));
    }, [curid]);

    useEffect(() => {
        console.log("hi", curBuilding);
    }, [curBuilding]);

    useEffect(() => {
        console.log("이거 뭐냐", content);
    }, [content]);
    return (
        <Building
            isLoading={isLoading}
            curBuilding={curBuilding}
            review={reviewList}
        />
    );
};
