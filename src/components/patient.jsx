import React, { useState } from "react";
import './style.css';
import data from "./TemplateData.json";

import Calendar from 'moedim';
import { IoIosTimer } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
 


function Patient() {
    const [searchTerm, setSearchTerm] = useState("");
    const [value, setValue] = useState(new Date());

    return (
        <>
            <div className="flex flex-col justify-between w-full">
                <h3 className="font-bold text-2xl ml-4">Book Appointment</h3>
                <div className="flex justify-between w-full">
                    <div className="templateContainer bg-white h-full">

                        <div className="searchInput_Container">
                             
                                <input className="border-1 rounded-lg" id="searchInput" type="text" placeholder="Search patient..." onChange={(event) => {

                                    setSearchTerm(event.target.value);

                                }} />
                         
                        </div>
                        <div className="template_Container flex flex-col">
                            {
                                data
                                    .filter((val) => {
                                        const isTitleMatched = val.title.toLowerCase().includes(searchTerm.toLowerCase());
                                        const isIdOne = val.id === 1;

                                        if (searchTerm === "") {
                                            return isIdOne;
                                        } else {
                                            return isTitleMatched;
                                        }
                                    })
                                    .map((val) => {
                                        return (
                                            <div className="flex text-sm" key={val.id}>
                                                <div className="template" >
                                                    <div className="flex flex-col justify-center items-center pt-8 pb-8 pl-14 pr-14" >

                                                        <img style={{ height: "100px", width: "100px", borderRadius: "2rem" }} src={val.image1} alt="" />
                                                        <h3 className="font-bold">{val.title}</h3>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <div className="flex">
                                                            <p className="font-bold">MR No:</p>
                                                            <p className="price">  {val.MR_No}</p>
                                                        </div>
                                                        <div className="flex">
                                                            <p className="font-bold">OP No:</p>
                                                            <p className="price"> {val.OP_No}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col mt-4">
                                                        <div className="flex">
                                                            <p className="font-bold">Gender:</p>
                                                            <p className="price pl-4">{val.Gender}</p>
                                                        </div>
                                                        <div className="flex">
                                                            <p className="font-bold">Age:</p>
                                                            <p className="price pl-4">{val.Age}</p>
                                                        </div>
                                                        <div className="flex">
                                                            <p className="font-bold">Guadian:</p>
                                                            <p className="price pl-4">{val.Guardian}</p>
                                                        </div>
                                                        <div className="flex">
                                                            <p className="font-bold">Phone:</p>
                                                            <p className="price pl-4">{val.Phone}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col mt-4">
                                                        <p className="font-bold">Last Consultation</p>
                                                        <p>{val.date}</p>
                                                    </div>
                                                    <div className="flex flex-col mt-4">
                                                        <p className="font-bold">Consultant</p>
                                                        <p>{val.consultant}</p>
                                                    </div>

                                                </div>
                                                <div className="template" >
                                                    <h4 className="font-bold text-lg">Doctor</h4>
                                                    <div className="flex items-center justify-between" >

                                                        <img style={{ height: "100px", width: "100px", borderRadius: "2rem" }} src={val.image2} alt="" />
                                                        <div className="ml-1">
                                                            <h6 className="font-bold">{val.doctor}</h6>
                                                            <p className="text-xs">{val.degree}</p>
                                                            <p className="text-xs">{val.DID}</p>

                                                        </div>

                                                    </div>
                                                    <div className="flex mt-4 justify-between">
                                                        <div className="flex items-center">
                                                            <IoIosTimer className="bg-cyan-300 w-4 h-4 rounded-lg" />
                                                            <div className="ml-1">
                                                                <p className="font-bold">Duration</p>
                                                                <p className="price">{val.duration}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <BiRupee className="bg-cyan-300 w-4 h-4 rounded-lg" />
                                                            <div className="ml-1">
                                                                <p className="font-bold">Fee</p>
                                                                <p className="price">{val.fee}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="flex flex-col mt-10 text-xs">
                                                        <div className="flex items-center">
                                                            <RiGraduationCapFill className="bg-cyan-300 w-4 h-4 rounded-lg" />
                                                            <div className="ml-1">
                                                                <h6 className="font-bold">Education</h6>
                                                                <p>psychatric medication</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center">
                                                            <MdLocationOn className="bg-cyan-300 w-4 h-4 rounded-lg" />
                                                            <div className="ml-1 mt-2">
                                                                <h6 className="font-bold">Location</h6>
                                                                <p>Banjara hills Hyderabad</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center">
                                                            <FaUser className="bg-cyan-300 w-4 h-4 rounded-lg" />
                                                            <div className="ml-1 mt-2">
                                                                <h6 className="font-bold">About</h6>
                                                                <p>Dr. is psychatric specialist
                                                                </p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                    </div>

                    <div className="templateContainer2 flex flex-col items-center bg-white w-full">
                        <div className="flex justify-between w-full">
                            <button type="button" class="focus:outline-none text-black border border-black bg-white hover:bg-cyan-200 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2">
                                <div className="flex"><FaUser className="bg-cyan-300 w-4 h-4 rounded-lg" />Regular</div>
                            </button>
                            <button type="button" class="focus:outline-none text-black border border-black bg-white hover:bg-cyan-200 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  "><div className="flex"><FaUser className="bg-cyan-300 w-4 h-4 rounded-lg" />Inperson</div></button>
                            <button type="button" class="focus:outline-none text-black border border-black bg-white hover:bg-cyan-200 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"><div className="flex"><MdLocationOn className="bg-cyan-300 w-4 h-4 rounded-lg" />Banjara hills</div></button>
                        </div>
                        <div className="timercontainer">
                            <div className="flex flex-col">

                                <Calendar className="cal" value={value} onChange={(d) => setValue(d)} />

                                <h3 className="font-bold">choose time</h3>
                                <div>
                                    <p className="text-sm">morning</p>
                                    <div className="flex">
                                        <button type="button" class="focus:outline-none text-black border border-black bg-white hover:bg-cyan-200 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2">10:00 AM</button>
                                        <button type="button" class="focus:outline-none text-black border border-black bg-white hover:bg-cyan-200 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2">10:30 AM</button>
                                        <button type="button" class="focus:outline-none text-black border border-black bg-cyan-200 hover:bg-cyan-200 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2 py-2 mb-2  ">11:00 AM</button>

                                        <button type="button" class="focus:outline-none text-black border border-black bg-white hover:bg-cyan-200 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2 py-2 mb-2  ">11:00 AM</button>

                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm">morning</p>
                                    <div className="flex">
                                        <button type="button" class="focus:outline-none text-black border border-black bg-white hover:bg-cyan-200 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2  ">12:00 PM</button>
                                        <button type="button" class="focus:outline-none text-black border border-black bg-white hover:bg-cyan-200 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2  ">12:30 PM</button>
                                        <button type="button" class="focus:outline-none text-black border border-black bg-white hover:bg-cyan-200 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2 py-2 mb-2  ">3:45 PM</button>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm">morning</p>
                                    <div className="flex">
                                        <button type="button" class="focus:outline-none text-black border border-black bg-white hover:bg-cyan-200 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2  ">4:00 PM</button>
                                        <button type="button" class="focus:outline-none text-black border border-black bg-white hover:bg-cyan-200 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2  ">4:30 PM</button>
                                        <button type="button" class="focus:outline-none text-black border border-black bg-white hover:bg-cyan-200 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2 py-2 mb-2  ">4:45 PM</button>

                                    </div>
                                    <div className="w-14">
                                        <button type="button" class="focus:outline-none text-black border border-black bg-cyan-200 hover:bg-cyan-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-8 py-2 mb-2 mt-8  ">Confirm</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Patient