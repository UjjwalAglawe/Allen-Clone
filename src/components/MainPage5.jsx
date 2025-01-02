import React from "react";
import comma from '../assets/comma.svg'
import student1 from "../assets/student1.webp"
import student2 from "../assets/student2.webp"
import student3 from "../assets/student3.webp"
import student4 from "../assets/student4.webp"

function MainPage5() {
    return (
        <div className="pb-8">
            <h2 className="text-2xl font-bold px-[250px] pb-9">ALLEN App Advantage</h2>

            <div className="flex justify-between pl-[200px] pr-[15px]">

                <div className="bg-white flex-1 text-center mx-2 p-3 rounded-2xl py-5">
                    <img src={comma} className="relative left-[20px] top-[-35px] pb-2"/>
                    <span className="pt-1 pb-4 text-center block">I chose ALLEN Online Courses because I wanted to balance my NEET prep with my school schedule.
                        The course structure, from daily homework to post-class handouts, was well-organized.
                    </span>

                    <img src={student1} className=" relative left-[20px] top-[10px] w-[56px] h-[56px] pt-2 rounded-xl"/>
                    <span className="relative left-[10px] top-[-30px] font-bold">SARTH PATIL</span>
                    <br/>
                    <span className="relative left-[35px] top-[-30px] text-gray-600">NEET-UG 2024, Score <br/> 710/720</span>
                </div>

                <div className="bg-white flex-1 text-center mx-2 p-3 rounded-2xl py-5">
                    <img src={comma} className="relative left-[20px] top-[-35px] pb-2"/>
                    <span className="pt-1 pb-4">I took NEET in 2023 but didn’t achieve my desired score, so I reattempted in 2024 with ALLEN Online Courses. 
                        The top-quality faculty, study material, & personalised experience on the ALLEN app helped me improve my score.
                    </span>

                    <img src={student2} className=" relative left-[20px] top-[10px] w-[56px] h-[56px] pt-2 rounded-xl"/>
                    <span className="relative left-[10px] top-[-30px] font-bold">SEKH GALIB RAZA</span>
                    <br/>
                    <span className="relative left-[35px] top-[-30px] text-gray-600">NEET-UG 2024, Score <br/> 690/720</span>
                </div>

                <div className="bg-white flex-1 text-center mx-2 p-3 rounded-2xl py-5">
                    <img src={comma} className="relative left-[20px] top-[-35px] pb-2"/>
                    <span className="pt-1 pb-4 ">I wanted to stay with my family while preparing for JEE, so I chose ALLEN Online Courses. 
                        The faculty was great & the live classes, daily homework & test series helped me secure a great score & rank!
                    </span>

                    <img src={student3} className=" relative left-[20px] top-[10px] w-[56px] h-[56px] pt-2 rounded-xl"/>
                    <span className="relative left-[10px] top-[-30px] font-bold">AVIK DAS</span>
                    <br/>
                    <span className="relative left-[35px] top-[-30px] text-gray-600">JEE Adv. 2024, AIR 69</span>
                </div>

                <div className="bg-white flex-1 text-center mx-2 p-3 rounded-2xl py-5">
                    <img src={comma} className="relative left-[20px] top-[-35px] pb-2"/>
                    <span className="pt-1 pb-4 text-center block">I came to know about ALLEN’s Online Test Series from my senior in school. 
                        The tests are really awesome as these are based mainly on NCERT and cover almost all types of NEET questions. 
                    </span>

                    <img src={student4} className=" relative left-[20px] top-[10px] w-[56px] h-[56px] pt-2 rounded-xl"/>
                    <span className="relative left-[10px] top-[-30px] font-bold">SHIFA FATIMA</span>
                    <br/>
                    <span className="relative left-[35px] top-[-30px] text-gray-600">NEET-UG 2024, Score <br/> 696/720</span>
                </div>
            </div>
        </div>
    )
}

export default MainPage5;