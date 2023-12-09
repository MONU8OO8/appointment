import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

import { links } from '../data/dummy';
 

const Sidebar = () => {
  

 

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-white m-2';

  return (
    <div className="ml-3 h-screen  md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">

      <>

        <div className="mt-10 ">

          {links.map((item) => (
            <div>

              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "white" : '', color: "black",
                  })}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  {link.icon}
                  <span className="capitalize ">{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}

          <div style={{ marginLeft: "2rem", marginTop: "10rem" }}>
            <div className="flex items-center">
              <IoIosSettings />
              <p>Login</p>
            </div>
            <div className="flex items-center">
              <IoIosLogOut />
              <p>SignUP</p>
            </div>
          </div>

        </div>
      </>

    </div>
  );
};

export default Sidebar;
