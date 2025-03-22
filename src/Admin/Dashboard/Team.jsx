import React from "react";
import Navbar from "../Screen/Navbar";
import { IoIosHome } from "react-icons/io";

function Team() {
  return (
    <div className="overflow-hidden bg-gray-100 p-[.5vw]">
      <Navbar />
      {/* Breadcrumb */}
      <div className="mt-[3vw]">
        <div className="flex items-center space-x-2 text-gray-700">
        <IoIosHome className="w-[1.3vw] h-[1.3vw]"/>
          <h6>Dashboard</h6>
          <h6>/</h6>
          <h6 className="text-sm">Team</h6>
        </div>
      </div>

      {/* Team Members */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Member */}
          {[
            {
              name: "Siddharth Kardile",
              role: "Full Stack Developer",
              desc: "I am a Full Stack Developer passionate about building scalable and efficient web applications. With expertise in Spring Boot, React, and MySQL, I create seamless backend and frontend solutions.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKQtr9KpLhx5tt0KgRpSqiz3IC79mwxt-io1IJa2qwxVwJp_Rx49n-pOsMEBiZwRS0fA&usqp=CAU"
            },
            {
              name: "Sakshi Ladkat",
              role: "Backend Developer",
              desc: "I am a Backend Developer focused on building scalable APIs and microservices using Spring Boot. I am pursuing an MSc in Scientific Computing, which enhances my analytical skills. Always eager to learn and adapt.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4b1WaNo11P1XY5KRRfHu1OJSbuVJ0SjK-DrAklnuLEuvZ2BdQ5J74FmifNIftkKhzZbQ&usqp=CAU"
            },
            {
              name: "Atharva Khaladkar",
              role: "Frontend Developer",
              desc: "I specialize in building modern UI/UX experiences using React.js and responsive design techniques. I am pursuing an MSc in Scientific Computing, which enhances my analytical skills.",
              img: "https://content.wepik.com/statics/20247451/preview-page4.jpg"
            }
          ].map((member, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg text-center">
              <img src={member.img} className="w-24 h-24 rounded-full mx-auto mb-3" alt="Profile" />
              <h5 className="text-lg font-bold">{member.name}</h5>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-sm text-gray-700 mt-2">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Helper Team */}
      <div className="container mx-auto p-4 mt-6">
        <h4 className="text-center font-bold text-xl mb-4">Helper Team</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Rahul Sharma", role: "Field Coordinator", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8jHa9C40p1JpTDW4A7vacUzMJbKKkJG0NQ&s" },
            { name: "Priya Joshi", role: "Agriculture Expert", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yeTsAtKrMp8uAdgkEcdpt7zCa5CONrricQ&s" },
            { name: "Vikas Patil", role: "Logistics Manager", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZ8dJ4eHBjO8e_sUP6nVwsQXlmC4k8-fsMQ&s" },
            { name: "Sneha Deshmukh", role: "Customer Support", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Dm5LX900Mttdr3wwhR6GqjZmMn1hsmEXTQ&s" }
          ].map((helper, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg text-center">
              <img src={helper.img} className="w-20 h-20 rounded-full mx-auto mb-2" alt="Profile" />
              <h6 className="font-semibold">{helper.name}</h6>
              <p className="text-gray-500 text-sm">{helper.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;