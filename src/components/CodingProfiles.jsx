import React from "react";
import codechefLogo from "../assets/codechef.png";
import leetcodeLogo from "../assets/leetcode.png";
import gfgLogo from "../assets/geeksforgeeks.png";
import codeforcesLogo from "../assets/codeforces.png";

const profiles = [
  {
    name: "LeetCode",
    logo: leetcodeLogo,
    link: "https://leetcode.com/u/anjal_2/"
  },
  {
    name: "CodeChef",
    logo: codechefLogo,
    link: "https://www.codechef.com/users/anjal_05"
  },
  {
    name: "GeeksforGeeks",
    logo: gfgLogo,
    link: "https://www.geeksforgeeks.org/user/anjalkesarwaniinfo/"
  },
  {
    name: "CodeForces",
    logo: codeforcesLogo,
    link: "https://codeforces.com/profile/Satyan_veshi"
  },
];

const CodingProfiles = () => {
  return (
    <section className="text-white py-16" id="profiles">
      <h2 className="text-4xl font-bold text-center mb-12">My Coding Profiles</h2>
      <div className="flex flex-wrap justify-center gap-12 px-4">
        {profiles.map((profile) => (
          <a
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            key={profile.name}
            className="transition duration-500 transform hover:scale-110 group"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-md group-hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.4)] transition-shadow duration-500">
              <img
                src={profile.logo}
                alt={profile.name}
                className="w-full h-full object-cover transition duration-500 group-hover:brightness-110"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
