import React, { useState, useEffect } from 'react';
import { getCompanyInfo } from '../utility/space-x-service';

const CompanyInfo = (/*props*/) => {


    const [data, setData] = useState([])
    //const [displayData, setDisplayData] = useState(data)

    useEffect(()=>{
        getCompanyInfo().then(data => {
            setData(data)
            //setDisplayData(data)
        })
    },[])

    let {
        name,
        founder,
        founded,
        ceo
    } = data

    return (
      <>
        <label>{`Company name: ${name}`}</label>
        <br></br>
        <label>{`Founer: ${founder}`}</label>
        <br></br>
        <label>{`Founded: ${founded}`}</label>
        <br></br>
        <label>{`Ceo: ${ceo}`}</label>
      </>
    );
}

export default CompanyInfo