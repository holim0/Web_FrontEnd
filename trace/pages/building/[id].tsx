import React, { useEffect, useState, useCallback } from "react";
import Building from "components/Building/BuildingDetail";
import { useRouter } from "next/dist/client/router";
import { RootState } from "Redux";
import { useSelector } from "react-redux";

export default () => {
    const router = useRouter();
    const [curBuilding, setCurbuilding] = useState(null);
    const { isLoading, content } = useSelector(
        (state: RootState) => state.building
    );

    const getCurbuildingInfo = useCallback(() => {
        const curid = Number(router.query.id);
        console.log(typeof curid);
        if (content) {
            const curInfo = content.find(({ id }: any) => id === curid);
            setCurbuilding(curInfo);
        }
    }, [content]);

    useEffect(() => {
        getCurbuildingInfo();
    }, [getCurbuildingInfo, content]);

    return <Building isLoading={isLoading} curBuilding={curBuilding} />;
};
