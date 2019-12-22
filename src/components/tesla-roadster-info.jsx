import React, { useState, useEffect } from 'react';
import { getRoadsterInfo } from '../utility/space-x-service';


const TeslaRoadsterInfo = (/*props*/) => {

    const [data, setData] = useState([])

    useEffect(()=>{
        getRoadsterInfo().then(data => {
            setData(data)
        })
    },[])

    let {
        name,
        launch_date_unix,
        orbit_type,
        details
    } = data

    return(
        <div>
            <label>{name}</label>
            <br></br>
            <label>{launch_date_unix}</label>
            <br></br>
            <label>{orbit_type}</label>
            <br></br>
            <label>{details}</label>
        </div>
    )
}

export default TeslaRoadsterInfo