import React, { useState, useEffect } from 'react';
import DataYearFilter from './data-year-filter';
import LaunchList from './launch-list';
import { fillFutureYearsToArray } from '../utility/date-utility';
import { getUpcomingLaunches } from '../utility/space-x-service';

const FutureLList = (props) => {

    const [data, setData] = useState([])
    const [displayData, setDisplayData] = useState(data)

    useEffect(()=>{
        getUpcomingLaunches().then(data => {
            setData(data)
            setDisplayData(data)
        })
    },[])

    const handlechange =(e) => {
        setDisplayData(data.filter(x => {return x.launch_year == e.target.value}))
    }

    return(
        <>
        <DataYearFilter handlechange = {handlechange} fillYearsToArray = {fillFutureYearsToArray} />
        <LaunchList data = {displayData}/>
        </>
    )
}

export default FutureLList