import BuildingContainer from "components/Building/BuildingContainer";
import { useEffect, useState } from "react";
import { useFind } from "hook";


const index = () => {
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState("");
    const [dataValue, handleLocation] = useFind();


    useEffect(() => {
        if (dataValue?.value) {
            setLocation(dataValue.value);
        }
    }, [dataValue]);

    
    return (
        <BuildingContainer/>
    );
};

export default index;
