import BuildingContainer from "components/Building/BuildingContainer";
import { useEffect, useState } from "react";
import Axios from "axios";
import useSWR from "swr";
import { useFind } from "@cooksmelon/event";

const fetcher = (url: string) => {
    return Axios.get(url).then((res) => res.data);
};

const index = () => {
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState("");
    const [dataValue, handleLocation] = useFind();

    ///// 로케이션에 따라(쪽문 등) 건물 조회 요청
    // const { data, error } = useSWR(
    //     `/api/v1/buildings${location && `?location=${location}`}`,
    //     fetcher
    // );

    useEffect(() => {
        if (dataValue?.value) {
            setLocation(dataValue.value);
        }
    }, [dataValue]);
    console.log(location);

    useEffect(() => {
        setTimeout(() => {
            setLoading(() => false);
        }, 1000);
    }, []);
    return (
        <BuildingContainer
            loading={loading}
            handleLocation={handleLocation}></BuildingContainer>
    );
};

export default index;
