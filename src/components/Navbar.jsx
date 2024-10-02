import Capture from "./Capture.svg";
import Captur4 from "./Capture4.svg";
import Captur5 from "./Capture5.svg";
import Captur6 from "./Capture6.svg";
import Captur7 from "./Capture7.svg";
import Captur8 from "./Capture8.svg";
import Captur9 from "./Capture9.svg";
import { PlayIcon } from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <div className="bg-custom-blue">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 md:px-20">
        <div className="text-white font-bold text-2xl md:text-xl">ARSHA</div>
        <div className="flex flex-wrap justify-center md:justify-end items-center space-x-3 md:space-x-6 mt-4 md:mt-0">
          <a href="#home" className="text-blue-300 hover:text-white">Home</a>
          <a href="#about" className="text-white hover:text-blue-300">About</a>
          <a href="#services" className="text-white hover:text-blue-300">Services</a>
          <a href="#portfolio" className="text-white hover:text-blue-300">Portfolio</a>
          <a href="#team" className="text-white hover:text-blue-300">Team</a>
          <a href="#pricing" className="text-white hover:text-blue-300">Pricing</a>
          <a href="#dropdown" className="text-white hover:text-blue-300">Dropdown</a>
          <a href="#contact" className="text-white hover:text-blue-300">Contact</a>
          <button className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-300">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center px-10 lg:px-20 py-10 lg:py-20">
        <div className="mb-10 lg:mb-20 text-center lg:text-left">
          <h1 className="text-white text-3xl lg:text-5xl">Better solution for your business</h1>
          <h2 className="font-bold text-lg mt-3 text-custom-gray">We are a team of talented designers making websites with Bootstrap</h2>
          <div className="flex justify-center lg:justify-start gap-5 mt-5">
            <button className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-300">
              Get Started
            </button>
            <button className="flex items-center space-x-2 text-white px-4 py-2 rounded-full hover:bg-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
              </svg>
              <span>Watch Video</span>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-auto">
          <img src={Capture} alt="Capture" className="w-full lg:w-auto"/>
        </div>
      </div>
      <div className="flex flex-wrap justify-around px-10 lg:px-20 bg-custom-silver py-5 lg:mb-5">
        <img src={Captur4} alt="Capture" className="w-1/2 sm:w-auto"/>
        <img src={Captur5} alt="Capture" className="w-1/2 sm:w-auto"/>
        <img src={Captur6} alt="Capture" className="w-1/2 sm:w-auto"/>
        <img src={Captur7} alt="Capture" className="w-1/2 sm:w-auto"/>
        <img src={Captur8} alt="Capture" className="w-1/2 sm:w-auto"/>
        <img src={Captur9} alt="Capture" className="w-1/2 sm:w-auto"/>
      </div>
    </div>
  );
}

export default Navbar;
