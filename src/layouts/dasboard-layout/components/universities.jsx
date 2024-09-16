import React from "react";
import { Link } from "react-router-dom";

const universities = [
  { name: "MDCAT", logo: "mdcat-logo-url", link: "/mdcat" },
  { name: "NUST", logo: "nust-logo-url", link: "/nust" },
  { name: "UET", logo: "uet-logo-url", link: "/uet" },
  { name: "GIKI", logo: "giki-logo-url", link: "/giki" },
  { name: "FAST", logo: "fast-logo-url", link: "/fast" },
  { name: "PIEAS", logo: "pieas-logo-url", link: "/pieas" },
  { name: "Bahria", logo: "bahria-logo-url", link: "/bahria" },
  { name: "IIU", logo: "iiu-logo-url", link: "/iiu" },
  { name: "NUML", logo: "numl-logo-url", link: "/numl" },
  { name: "NUMS", logo: "nums-logo-url", link: "/nums" },
  { name: "AIR", logo: "air-logo-url", link: "/air" },
  { name: "COMSATS", logo: "comsats-logo-url", link: "/comsats" },
  { name: "NTS", logo: "nts-logo-url", link: "/nts" },
];

export const UniversityGrid = () => {
  return (
    <div className="bg-blue-50 p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold flex justify-center items-center">
          <span className="mr-2">🎓</span> UNIVERSITIES
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {universities.map((uni, index) => (
          <Link
            key={index}
            to={uni.link}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300"
          >
            <img
              src={uni.logo}
              alt={uni.name}
              className="w-20 h-20 mx-auto mb-4"
            />
            <div className="bg-blue-500 text-white text-center py-2 rounded-b-lg font-semibold">
              {uni.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
