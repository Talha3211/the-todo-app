import { useState } from "react";
import Capture13 from "./Capture13.svg";
import Capture16 from "./Capture16.svg";
import SkillBars from "../components/Skillbar";


const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSetIndex = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
      };
    

    return (
      <div className="flex flex-col items-center justify-center mt-5 bg-white px-20">
        <h1 className="font-extrabold text-2xl text-blue-900">ABOUT US</h1>
        <div className="flex items-center justify-between mt-3 mb-7">
        <div className="w-12 h-[1px] bg-black mt-2"></div>
        <div className="w-12 h-[3px] bg-blue-400 mt-2"></div>
        <div className="w-12 h-[1px] bg-black mt-2"></div>
        </div>
        {/*  */}
        <div className="flex justify-between p-8 bg-white">
      {/* Left Section */}
      <div className="w-1/2 pr-8">
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 21l-9-9 1.4-1.4 7.6 7.6 14.6-14.6 1.4 1.4-16 16z" />
            </svg>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 21l-9-9 1.4-1.4 7.6 7.6 14.6-14.6 1.4 1.4-16 16z" />
            </svg>
            Duis aute irure dolor in reprehenderit in voluptate velit.
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 21l-9-9 1.4-1.4 7.6 7.6 14.6-14.6 1.4 1.4-16 16z" />
            </svg>
            Ullamco laboris nisi ut aliquip ex ea commodo.
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="w-1/2 pl-8">
        <p className="text-gray-700 mb-4">
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="mt-4 px-4 py-2 text-blue-500 border border-blue-400 rounded hover:bg-blue-100">
          Read More →
        </button>
      </div>
    </div>
    {/*  accordoan*/}
    {/* ///////////////////////////// */}
        <div className="flex items-center justify-center bg-custom-silver">
        <div className="p-8 bg-gray-100">
      {/* Title and Subtitle */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-900 leading-tight">
          Eum ipsam laborum deleniti <span className="font-light">velit pariatur architecto aut nihil</span>
        </h1>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.
        </p>
      </div>

      {/* Accordion Items */}
      <div className="space-y-4">
        <div
          onClick={() => handleSetIndex(0)}
          className="bg-white shadow-lg rounded-lg p-4 cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-blue-400 font-bold text-lg mr-4">01</span>
              <span className={`text-lg font-semibold ${activeIndex === 0 ? 'text-blue-600' : 'text-blue-900'}`}>
                Non consectetur a erat nam at lectus urna duis?
              </span>
            </div>
            <span className="text-gray-400 text-xl">
              {activeIndex === 0 ? 'v' : '>'}
            </span>
          </div>
          {activeIndex === 0 && (
            <p className="mt-4 text-gray-600">
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
          )}
        </div>

        <div
          onClick={() => handleSetIndex(1)}
          className="bg-white shadow-lg rounded-lg p-4 cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-blue-400 font-bold text-lg mr-4">02</span>
              <span className={`text-lg font-semibold ${activeIndex === 1 ? 'text-blue-600' : 'text-blue-900'}`}>
                Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
              </span>
            </div>
            <span className="text-gray-400 text-xl">
              {activeIndex === 1 ? 'v' : '>'}
            </span>
          </div>
        </div>

        <div
          onClick={() => handleSetIndex(2)}
          className="bg-white shadow-lg rounded-lg p-4 cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-blue-400 font-bold text-lg mr-4">03</span>
              <span className={`text-lg font-semibold ${activeIndex === 2 ? 'text-blue-600' : 'text-blue-900'}`}>
                Dolor sit amet consectetur adipiscing elit pellentesque?
              </span>
            </div>
            <span className="text-gray-400 text-xl">
              {activeIndex === 2 ? 'v' : '>'}
            </span>
          </div>
        </div>
      </div>
    </div>
  
  {/* image */}
  <div className="w-full flex justify-center">
    <img src={Capture13} className="w-3/4 h-auto" alt="Illustration" />
</div>

        </div>
        {/* skills*/}
        <div className="flex justify-between items-center">
    <img src={Capture16} className="w-1/2 h-auto" alt="Illustration" />
    <SkillBars/>
</div>
      </div>
    );
  };
  
  export default About;
  