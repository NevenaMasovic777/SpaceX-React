import React from 'react';
import getSerbianDate from '../utility/date-utility';

//hvatam podatke za api
const Launch = (props) => {
    let {launch} = props;
    let {
        mission_name:m_name,
        launch_date_utc:l_date,
        rocket:{rocket_name:r_name},
        links: {mission_patch:m_patch}

    } = launch; // izvlacimo iz launch podatke sa leve str

    let date = new Date(l_date) //od broja milisekundi kreira datum

    return (
      <div className="launch">
        <label>{m_name}</label>
        <br></br>
        <label>{getSerbianDate(date)}</label>
        <br></br>
        <label>{r_name}</label>
        <div className = 'image'>
          <img src={m_patch == null ?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbRYCgTMRGPFjkoNOZy6eluNSVyd42o_y80Q8BmL03b5N2bOiAA&s':m_patch} className={"mission_logo"} />
        </div>
      </div>
    );
}

export default Launch