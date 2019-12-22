import React from 'react';
import TeslaRoadsterInfo from '../components/tesla-roadster-info';

const Footer = (/*props*/) => { //ne treba mi props zato sto nemam atribute u futeru i ne prosledjujem ih ovde
    //let {data} = props;

    return (
      <div className = 'tesla-info'>
        <TeslaRoadsterInfo /*data={data}*/ />
      </div>
    );
}


export default Footer