import React from 'react';
import Expert from '../Expert/Expert'
import doctor1 from '../../../images/Consultants/doctor-1.jpg'
import doctor2 from '../../../images/Consultants/doctor-2.jpg'
import doctor3 from '../../../images/Consultants/doctor-3.jpg'
import doctor4 from '../../../images/Consultants/doctor-4.jpg'
import doctor5 from '../../../images/Consultants/doctor-5.jpg'
import doctor6 from '../../../images/Consultants/doctor-6.jpg'

const experts =[
    {
        img: doctor1,
        name:'Doctor-A',
        expertize:'Medicine'
    },
    {
        img: doctor2,
        name:'Doctor-B',
        expertize:'Cardiology'
    },
    {
        img: doctor3,
        name:'Doctor-C',
        expertize:'Internal-Medicine'
    },
    {
        img: doctor4,
        name:'Doctor-D',
        expertize:'Respiratory-Medicine'
    },
    {
        img: doctor5,
        name:'Doctor-E',
        expertize:'Neuro-Medicine'
    },
    {
        img : doctor6,
        name:'Doctor-F',
        expertize:'Pediatrics'
    }
    
]
const Experts = () => {
    return (
        <div id="experts" className="container">
            <h1 className="text-primary mt-3">Our Experts</h1>
        
      <div className="row">
{
    experts.map(expert=><Expert
    key={expert.name}
    expert={expert}
    ></Expert>)
}
      </div>
</div>
    );
};

export default Experts;