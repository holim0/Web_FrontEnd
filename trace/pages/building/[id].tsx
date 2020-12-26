import React, { useEffect, useState } from "react";
import Building from "components/Building/BuildingDetail";
import { setTimeout } from "timers";

export default () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(() => false);
        }, 1000);
    }, []);

    return <Building loading={loading} />;
};
