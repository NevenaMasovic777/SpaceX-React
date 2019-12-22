import React from 'react';


const DataYearFilter = (props) => {

    let {handleChange} = props
    let years = props.fillYearsToArray()
    return (
        <>
        <select id="year-filter" onChange={handleChange}>
          {years.map(x => (
            <option value={x} key={x.flight_number}>
              {x}
            </option>
          ))}
        </select>
        </>
    );
}

export default DataYearFilter