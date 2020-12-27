import BuildingContainer from "components/Building/BuildingContainer";
import { useEffect, useState } from "react";

const index = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(() => false);
        }, 1000);
    }, []);
    return <BuildingContainer loading={loading}></BuildingContainer>;
};

export default index;
