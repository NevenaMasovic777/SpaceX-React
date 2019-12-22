import React from 'react';
import Launch from './launch';


//has atribute data which uses for display
const LaunchList = (props) => {
    let {data} = props;


    return (
        <div>
          {data.map(x => {
            return <Launch launch={x} key={x.flight_number} />;
          })}
        </div>
    );
}

export default LaunchList