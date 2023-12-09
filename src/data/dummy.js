import React from 'react';
 
import { FaUserDoctor } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { PiUsersFill } from "react-icons/pi";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { AiOutlineProfile } from "react-icons/ai";
 

export const links = [
  {
     
    links: [
      {
        name: 'Dashboard',
        icon: <FaUserDoctor />,
      },
      {
        name: 'Appointment',
        icon: <SlCalender />
      },
      {
        name: 'Patient',
        icon: <PiUsersFill />
      },
      {
        name: 'Messaging',
        icon: <BiSolidMessageRoundedDots />
      },
      {
        name: 'Profile',
        icon: <AiOutlineProfile />
      }
    ],
  },
   
];

 

 

 

 

 
